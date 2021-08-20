import React, { createContext, useReducer } from "react";
import "./App.css";
import AppContent from "./components/AppContent";
import { fillEachCell, nextGenerationGrid } from "./utils";
import GameRules from "./components/GameRules";

import { reducer } from "./components/reducer";

export const AppContext = createContext();

const initialState = {
  arr: fillEachCell(),
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const runSimulation = () => {
    return dispatch({ type: "RANDOM", payload: nextGenerationGrid() });
  };

  const toggleCell = (id) => {
    return dispatch({ type: "TOGGLE", payload: id });
  };

  return (
    <>
      <AppContext.Provider value={{ ...state, runSimulation, toggleCell }}>
        <AppContent />
      </AppContext.Provider>
      <GameRules />
    </>
  );
}

export default App;
