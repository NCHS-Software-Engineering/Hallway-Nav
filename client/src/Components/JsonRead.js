import React, { useEffect, useRef, useState, useCallback } from 'react';
import Papa from 'papaparse';

const NodeCanvas = ({ 
  src = '\\finalFilter.json', 
  csvSrc = '/p1.csv', 
  backgroundImage = '/firstFloor.png',
  endId = 6  
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
          ID: parseInt(row.ID), 
          X: parseFloat(row.X), 
          Y: parseFloat(row.Y),
        }));
        setNodes(parsedNodes);
      },
      error: (err) => {
        console.error('Error parsing CSV file:', err);
      }
    });
  }, [src, csvSrc]);

  const findPath = useCallback((endId) => {
    let visited = new Set();
    let queue = [[1]]; 
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
  }, [connections]);

  useEffect(() => {
    if (endId) {
      findPath(endId);
    }
  }, [endId, connections, findPath]);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not available');
      return;
    }

    const ctx = canvas.getContext('2d');
    const background = new Image();
    background.src = backgroundImage;

    background.onload = () => {
      console.log('Background image loaded');
      canvas.height = background.height;
      canvas.width = background.width;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      for (let i = 0; i < path.length - 1; i++) {
        const startNode = nodes.find((node) => node.ID === path[i]);
        const endNode = nodes.find((node) => node.ID === path[i + 1]);

        if (startNode && endNode) {
          ctx.beginPath();
          ctx.moveTo(startNode.X, startNode.Y);
          ctx.lineTo(endNode.X, endNode.Y);
          ctx.strokeStyle = '#ff0000';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      path.forEach((nodeId) => {
        const node = nodes.find((n) => n.ID === nodeId);
        if (node) {
          ctx.beginPath();
          ctx.arc(node.X, node.Y, 10, 0, 2 * Math.PI);
          ctx.fillStyle = 'blue';
          ctx.fill();
          ctx.stroke();
        }
      });
    };

    background.onerror = () => {
      console.error('Failed to load background image');
    };
  }, [backgroundImage, path, nodes]);

  useEffect(() => {
    if (path.length > 0 && nodes.length > 0) {
      drawCanvas();
    }
  }, [path, nodes, connections, drawCanvas]);

  return (
    <div>
      <h1>Node Network to End Node {endId}</h1>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />
    </div>
  );
};

export default NodeCanvas;