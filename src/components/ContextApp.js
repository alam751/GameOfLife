import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import "../App.css";

const columns1 = 30;

const ContextApp = () => {
  const { arr, runSimulation } = useContext(AppContext);
  const [running, setRunning] = useState(false);
  console.log(arr);

  return (
    <>
      <div>
        <button onClick={(() => setRunning(!running), runSimulation)}>
          {running ? "stop" : "start"}
        </button>
      </div>

      {arr ? (
        <div
          className="box"
          style={{ gridTemplateColumns: `repeat(${columns1} , 20px)` }}
        >
          {console.log(arr)}
          {arr.map((rows, rowsIndex) => {
            return rows.map((columns, columnsIndex) => {
              return (
                <div
                  className="cell"
                  id={(rowsIndex, columnsIndex)}
                  key={`${rowsIndex} - ${columnsIndex}`}
                  onClick={(id) => console.log(id)}
                  style={{
                    background: arr[rowsIndex][columnsIndex]
                      ? "pink"
                      : undefined,
                  }}
                ></div>
              );
            });
          })}
        </div>
      ) : (
        <p>no array</p>
      )}
    </>
  );
};

export default ContextApp;
