import React, { useEffect, useRef, useState } from 'react';
import Papa from 'papaparse'; // Import papaparse for CSV parsing

//needs some tweaking and additional code in App.jsx for dealing with multiple floors, but theoretically this should work for drawing the path on top of the map and then return it in html.

const NodeCanvas = ({ 
  src = '/nodes.json', 
  csvSrc = '/coordinates.csv', 
  backgroundImage = '/background.jpg',
  endId = 6  // Accept the end node ID as a prop
}) => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [path, setPath] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fetch the JSON data containing node connections
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${src}`);
        return res.json();
      })
      .then((json) => {
        setConnections(json.connections);
      })
      .catch((err) => {
        console.error('Error loading node connections:', err);
      });

    // Fetch and parse the CSV data containing node coordinates
    Papa.parse(csvSrc, {
      download: true,
      complete: (result) => {
        const parsedNodes = result.data.map((row) => ({
          id: parseInt(row.id),  // Ensure `id` is a number
          x: parseFloat(row.x),  // Ensure `x` is a number
          y: parseFloat(row.y),  // Ensure `y` is a number
        }));
        setNodes(parsedNodes);
      },
      error: (err) => {
        console.error('Error parsing CSV file:', err);
      }
    });
  }, [src, csvSrc]);

  // Function to find the path to the end node using BFS
  const findPath = (endId) => {
    let visited = new Set();
    let queue = [[1]]; // Start from node 1, change as needed
    let path = [];

    while (queue.length > 0) {
      let currentPath = queue.shift();
      let lastNodeId = currentPath[currentPath.length - 1];

      if (lastNodeId === endId) {
        path = currentPath;
        break;
      }

      if (!visited.has(lastNodeId)) {
        visited.add(lastNodeId);

        // Get all connections for the current node
        let nextNodes = connections.filter(
          ([start, end]) => start === lastNodeId || end === lastNodeId
        );

        nextNodes.forEach(([start, end]) => {
          let nextNodeId = start === lastNodeId ? end : start;
          if (!visited.has(nextNodeId)) {
            queue.push([...currentPath, nextNodeId]);
          }
        });
      }
    }
    setPath(path);
  };

  useEffect(() => {
    if (endId) {
      findPath(endId);
    }
  }, [endId, connections]);

  // Function to draw nodes and connections on the canvas
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const background = new Image();
    background.src = backgroundImage;

    // Draw the background image after it has loaded
    background.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before redrawing
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      // Draw connections for the nodes that are part of the path
      for (let i = 0; i < path.length - 1; i++) {
        const startNode = nodes.find((node) => node.id === path[i]);
        const endNode = nodes.find((node) => node.id === path[i + 1]);

        if (startNode && endNode) {
          ctx.beginPath();
          ctx.moveTo(startNode.x, startNode.y);
          ctx.lineTo(endNode.x, endNode.y);
          ctx.strokeStyle = '#ff0000'; // Red lines for the connections
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Draw nodes that are part of the path
      path.forEach((nodeId) => {
        const node = nodes.find((n) => n.id === nodeId);
        if (node) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI);
          ctx.fillStyle = 'blue'; // Node color
          ctx.fill();
          ctx.stroke();
        }
      });
    };
  };

  useEffect(() => {
    if (path.length > 0) {
      drawCanvas();
    }
  }, [path, nodes, connections]);

  return (
    <div>
      <h1>Node Network to End Node {endId}</h1>
      <canvas
        ref={canvasRef}
        width={800}  // Set the canvas size to match your background image size
        height={600}
        style={{ border: '1px solid black' }}
      />
    </div>
  );
};

export default NodeCanvas;