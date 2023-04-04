import React, { useState, useEffect, useRef } from 'react';

function FrezoEditor() {
  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(Array(11).fill().map(() => Array(7).fill(false)));
  const [eraseMode, setEraseMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cellSize = Math.floor(Math.min(width / 11, height / 7));

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw the grid lines
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    for (let x = 0; x <= 11; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cellSize, 0);
      ctx.lineTo(x * cellSize, height);
      ctx.stroke();
    }
    for (let y = 0; y <= 7; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cellSize);
      ctx.lineTo(width, y * cellSize);
      ctx.stroke();
    }

    // Fill in the colored cells
    for (let x = 0; x < 11; x++) {
      for (let y = 0; y < 7; y++) {
        if (grid[x][y]) {
          ctx.fillStyle = '#000'; // black
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }
  }, [grid]);

  const mouseDownRef = useRef(false);

  function handleMouseDown(event) {
    mouseDownRef.current = true;
    handleDraw(event);
  }

  function handleMouseUp() {
    mouseDownRef.current = false;
  }

  function handleMouseMove(event) {
    if (mouseDownRef.current) {
      handleDraw(event);
    }
  }

  function handleDraw(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / (canvas.width / 11));
    const y = Math.floor((event.clientY - rect.top) / (canvas.height / 7));
    if (eraseMode) {
      if (grid[x][y]) {
        const newGrid = [...grid];
        newGrid[x][y] = false;
        setGrid(newGrid);
      }
    } else {
      if (!grid[x][y]) {
        const newGrid = [...grid];
        newGrid[x][y] = true;
        setGrid(newGrid);
      }
    }
  }

  function handleReset() {
    setGrid(Array(11).fill().map(() => Array(7).fill(false)));
  }

  function handleErase() {
    setEraseMode(!eraseMode);
  }

  function handleSave() {
    const columns = [];
    for (let x = 0; x < 11; x++) {
      const column = [];
      for (let y = 0; y < 7; y++) {
        column.push(grid[x][y] ? 1 : 0);
      }
      columns.push(column);
    }
    console.log(columns); // TODO: replace with actual save function
  }

return (
<div>
<canvas
     ref={canvasRef}
     width={550}
     height={350}
     onMouseDown={handleMouseDown}
     onMouseUp={handleMouseUp}
     onMouseMove={handleMouseMove}
   />
<button type="radio" onClick={handleReset}>Reset</button>
<button onClick={handleErase}>Erase</button>
<button onClick={handleSave}>Save</button>
</div>
);
}

export default FrezoEditor;