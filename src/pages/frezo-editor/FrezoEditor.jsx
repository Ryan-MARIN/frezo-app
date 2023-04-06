import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";

function FrezoEditor() {
  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(
    Array(11)
      .fill()
      .map(() => Array(7).fill(false))
  );
  const [eraseMode, setEraseMode] = useState(false);
  const [fileName, setFileName] = useState("");
  const location = useLocation();

  useEffect(() => {
    document.title = `Frézo Editor`;
  }, [location]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const cellSize = Math.floor(Math.min(width / 11, height / 7));

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw the grid lines
    ctx.strokeStyle = "#000";
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
          ctx.fillStyle = "#000"; // black
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
    setGrid(
      Array(11)
        .fill()
        .map(() => Array(7).fill(false))
    );
  }

  function handleErase() {
    setEraseMode(!eraseMode);
  }

  function handleFileNameChange(event) {
    setFileName(event.target.value);
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

    // Remove leading and trailing columns with only zeros
    let start = 0;
    let end = columns.length - 1;

    while (start < end && columns[start].every((value) => value === 0)) {
      start++;
    }

    while (end > start && columns[end].every((value) => value === 0)) {
      end--;
    }

    const filteredColumns = columns.slice(start, end + 1);

    // Convert filteredColumns to JSON
    const jsonData = JSON.stringify(filteredColumns);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a download link element
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName + ".json"; // Modification
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    // Trigger the download link
    downloadLink.click();

    // Clean up the download link element
    document.body.removeChild(downloadLink);
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = event.target.result;
      const data = JSON.parse(jsonData);
      const newGrid = Array(11)
        .fill()
        .map(() => Array(7).fill(false));
      for (let x = 0; x < data.length && x < 11; x++) {
        for (let y = 0; y < data[x].length && y < 7; y++) {
          newGrid[x][y] = data[x][y] === 1;
        }
      }
      setGrid(newGrid);
    };
    reader.readAsText(file);
    setFileName(file.name);
  }

  return (
    <>
      <h1>
        Frézo Editor<div>Créez vos propres lettres frézo !</div>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <canvas
          ref={canvasRef}
          width={550}
          height={350}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{backgroundColor:"white"}}
        />
        <Stack spacing={1} alignItems={"center"} sx={{ p: 2 }}>
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained" type="radio" onClick={handleReset}>
              Tout effacer
            </Button>
            <Button variant="contained" onClick={handleErase}>
              {eraseMode ? "Dessiner" : "Gommer"}
            </Button>
          </Stack>
          <div />
          <div />
          Sauvegarder :
          <Stack direction={"row"}>
            <input
              type="text"
              placeholder="Nom du fichier.json"
              value={fileName}
              onChange={handleFileNameChange}
            />
            <Button variant="contained" color="success" onClick={handleSave}>
              Enregistrer
            </Button>
          </Stack>
          <div />
          <div />
          Importer :
          <Stack spacing={1} alignItems={"center"}>
            <input style={{backgroundColor:"white"}} type="file" accept=".json" onChange={handleFileSelect} />
            <div>
              {fileName ? `Selected file: ${fileName}` : "No file selected"}
            </div>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default FrezoEditor;
