import React, { useEffect, useRef, useState, useCallback } from 'react';
import Papa from 'papaparse';

const NodeCanvas = ({
  src = '/finalFilter.json',
  csvSrc = '/p1.csv',
  backgroundImage = '/firstFloor.png',
  endId = 6
}) => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [path, setPath] = useState([]);
  const canvasRef = useRef(null);

  // Load connections and node coordinates
  useEffect(() => {
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

    Papa.parse(csvSrc, {
      download: true,
      header: true,
      complete: (result) => {
        const parsedNodes = result.data.map((row) => ({
          ID: parseInt(row.ID),
          X: parseFloat(row.X),
          Y: parseFloat(row.Y),
        })).filter((n) => !isNaN(n.ID) && !isNaN(n.X) && !isNaN(n.Y));
        setNodes(parsedNodes);
      },
      error: (err) => {
        console.error('Error parsing CSV file:', err);
      },
    });
  }, [src, csvSrc]);

  // Pathfinding
  const findPath = useCallback((endId) => {
    let visited = new Set();
    let queue = [[1]];
    let resultPath = [];

    while (queue.length > 0) {
      const currentPath = queue.shift();
      const last = currentPath[currentPath.length - 1];

      if (last === endId) {
        resultPath = currentPath;
        break;
      }

      if (!visited.has(last)) {
        visited.add(last);

        const neighbors = connections.filter(
          ([start, end]) => start === last || end === last
        );

        neighbors.forEach(([start, end]) => {
          const neighbor = start === last ? end : start;
          if (!visited.has(neighbor)) {
            queue.push([...currentPath, neighbor]);
          }
        });
      }
    }

    setPath(resultPath);
  }, [connections]);

  useEffect(() => {
    if (connections.length > 0) {
      findPath(endId);
    }
  }, [endId, connections, findPath]);

  // Draw canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not available');
      return;
    }

    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = backgroundImage;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);

      // Draw lines
      for (let i = 0; i < path.length - 1; i++) {
        const startNode = nodes.find(n => n.ID === path[i]);
        const endNode = nodes.find(n => n.ID === path[i + 1]);
        if (startNode && endNode) {
          ctx.beginPath();
          ctx.moveTo(startNode.X, startNode.Y);
          ctx.lineTo(endNode.X, endNode.Y);
          ctx.strokeStyle = 'red';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Draw nodes
      path.forEach((nodeId) => {
        const node = nodes.find((n) => n.ID === nodeId);
        if (node) {
          ctx.beginPath();
          ctx.arc(node.X, node.Y, 8, 0, 2 * Math.PI);
          ctx.fillStyle = 'blue';
          ctx.fill();
          ctx.stroke();
        }
      });
    };

    image.onerror = () => {
      console.error('Failed to load background image:', backgroundImage);
    };
  }, [backgroundImage, path, nodes]);

  useEffect(() => {
    if (nodes.length && path.length) {
      drawCanvas();
    }
  }, [nodes, path, backgroundImage, drawCanvas]);

  return (
    <div>
      <h1>Node Network to End Node {endId}</h1>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />
    </div>
  );
};

export default NodeCanvas;