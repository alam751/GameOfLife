import React, { useState, useEffect } from "react";
import "../App.css";
import { fillEachCell, make2DGrid, resetGrid } from "../utils";
import GameRules from "./GameRules";

const AppContent = () => {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(() => fillEachCell());
  const [dealayTime, setDelayTime] = useState(500);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setArr((arr) => nextGenerationGrid(arr));
        setCount((count) => count + 1);
      }, dealayTime);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [running]);

  const nextGeneration = () => {
    setRunning(false);
    setCount((count) => count + 1);
    setArr((arr) => nextGenerationGrid(arr));
  };
  const refreshGrid = () => {
    setRunning(false);
    setCount(0);
    setArr(() => fillEachCell());
  };

  const clearGrid = () => {
    setRunning(false);
    setCount(0);
    setArr(() => resetGrid());
  };
  const rows = 20;
  const columns = 30;

  function nextGenerationGrid(arr1) {
    let updateArray = make2DGrid();

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        // count live neighbours
        let state1 = arr1[i][j];

        let neighbours = countNeighbours(arr1, i, j);

        if (state1 === 0 && neighbours === 3) {
          updateArray[i][j] = 1;
        } else if (state1 === 1 && (neighbours < 2 || neighbours > 3)) {
          updateArray[i][j] = 0;
        } else {
          updateArray[i][j] = state1;
        }
      }
    }
    let next = updateArray;

    return next;
  }
  function countNeighbours(array, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let row = (x + i + rows) % rows;
        let col = (y + j + columns) % columns;
        if (row === x && col === y) {
          continue;
        }

        sum += array[row][col];
      }
    }
    return sum;
  }
  const toggleCell = (a, b) => {
    return arr.map((rows, rowsIndex) => {
      return rows.map((columns, columnsIndex) => {
        if (rowsIndex === a && columnsIndex === b) {
          return arr[rowsIndex][columnsIndex] ? 0 : 1;
        }
        return arr[rowsIndex][columnsIndex];
      });
    });
  };
  const sliderValue = (e) => {
    setDelayTime(e);
    setRunning(false);
  };

  return (
    <>
      <h1 className="heading">Conway's Game of Life</h1>
      <GameRules />
      <div className="btnContainer">
        <button className="btn" onClick={() => setRunning(true)}>
          Start
        </button>
        <button className="btn" onClick={() => setRunning(false)}>
          Stop
        </button>
        <button className="btn" onClick={nextGeneration}>
          Next
        </button>
        <button className="btn" onClick={refreshGrid}>
          Refresh
        </button>
        <button className="btn" onClick={clearGrid}>
          Clear
        </button>
      </div>
      <div className="slidecontainer">
        <span className="delayTime">Delay Time</span>
        <input
          type="range"
          min="100"
          max="1500"
          value={dealayTime}
          className="slider"
          onInput={(e) => sliderValue(e.target.value)}
        />
        <span className="delayTime">{dealayTime}ms</span>
      </div>

      <h2 className="generationCount">Generation: {count}</h2>
      <div className="container">
        <div className="box">
          {arr.map((rows, rowsIndex) => {
            return rows.map((columns, columnsIndex) => {
              return (
                <div
                  className="cell"
                  key={`${rowsIndex} - ${columnsIndex}`}
                  id={`${rowsIndex}-${columnsIndex}`}
                  onClick={() =>
                    setArr(() => toggleCell(rowsIndex, columnsIndex))
                  }
                  style={{
                    background: arr[rowsIndex][columnsIndex] ? "blue" : "white",
                  }}
                ></div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

export default AppContent;
