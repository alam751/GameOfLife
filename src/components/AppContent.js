import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import "../App.css";

const columns1 = 30;

const AppContent = () => {
  const { arr, runSimulation, toggleCell } = useContext(AppContext);

  const [running, setRunning] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        runSimulation();
        setCount((count) => count + 1);
      }, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const nextGeneration = () => {
    setRunning(false);
    setCount((count) => count + 1);
    runSimulation();
  };

  return (
    <>
      <h1 className="heading">Game of Life</h1>
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
      </div>

      <h2 className="generationCount">Generation: {count}</h2>
      <div className="container">
        <div
          className="box"
          style={{ gridTemplateColumns: `repeat(${columns1} , 20px)` }}
        >
          {arr.map((rows, rowsIndex) => {
            return rows.map((columns, columnsIndex) => {
              return (
                <div
                  className="cell"
                  key={`${rowsIndex} - ${columnsIndex}`}
                  id={`${rowsIndex}-${columnsIndex}`}
                  onClick={(e) => toggleCell(e.target.id)}
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
