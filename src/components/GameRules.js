import React, { useState } from "react";
import "../App.css";

const GameRules = () => {
  const [display, setDisplay] = useState("none");
  const heading = {
    display: display,
  };

  return (
    <>
      <div className="gamesRule" style={heading}>
        <div>
          <button
            type="button"
            className="rulesCloseBtn"
            onClick={() => setDisplay(() => "none")}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <h2 className="rulesHeading">Rules of Game</h2>
        <div className="paragraph">
          <p> live-cell: blue-color</p>
          <p> Dead-cell: white-color</p>
          <p>Delay Time is time between two consecutive turn.</p>
        </div>

        <h3>At each step in time (tick), the following transitions occur:</h3>
        <div>
          <ol>
            <li>
              Any live cell with fewer than two live neighbors dies, as if by
              loneliness.
            </li>

            <li>
              Any live cell with more than three live neighbors dies, as if by
              overcrowding.
            </li>

            <li>
              Any live cell with two or three live neighbors lives, unchanged,
              to the next generation.
            </li>

            <li>
              Any dead cell with exactly three live neighbors comes to life
            </li>
          </ol>
        </div>
      </div>
      <div className="rulesBtnContainer">
        <button className="rulesBtn" onClick={() => setDisplay(() => "block")}>
          Game Rules
        </button>
      </div>
    </>
  );
};
export default GameRules;
