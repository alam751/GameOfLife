import React, { createContext, useReducer } from "react";
import "./App.css";
import ContextApp from "./components/ContextApp";
import { fillEachCell, nextGenerationArr } from "./utils";

import { reducer } from "./components/reducer";

export const AppContext = createContext();

const initialState = {
  arr: fillEachCell(),
  nextArr: nextGenerationArr(),
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const runSimulation = () => {
    return dispatch({ type: "RANDOM" });
  };

  return (
    <>
      <AppContext.Provider value={{ ...state, runSimulation }}>
        <ContextApp />
      </AppContext.Provider>
    </>
  );
}

export default App;
