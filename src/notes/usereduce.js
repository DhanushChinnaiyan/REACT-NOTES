import "./styles.css";
import React, { createContext, useContext, useReducer, useState } from "react";
// creation of context
export const OTTContext = createContext(null);

const initailStore = { netflix: "", amazon: "", hotstar: "" };

const reducer = (state, action) => {
  //switch by action types
  switch (action.type) {
    case "phone":
      return { ...state, netflix: action.payload };
    case "tv":
      return { ...state, netflix: action.payload };
    case "pc":
      return { ...state, netflix: action.payload };
    default:
      return state;
  }
};

export default function App() {
  // stage 1 -> creating a contex

  // contents for users
  //const [netflix,setNetflix ] = useState("");
  const [state, dispatch] = useReducer(reducer, initailStore);
  const [amazon, setAmazon] = useState("");
  const [hotstar, setHotstar] = useState("");

  return (
    <div className="App">
      <OTTContext.Provider
        value={{
          state,
          dispatch,
          amazon,
          setAmazon,
          hotstar,
          setHotstar
        }}
      >
        <Phone />
        <Tv />
        <Pc />
      </OTTContext.Provider>
    </div>
  );
}

function Phone() {
  const {
    state,
    dispatch,
    amazon,
    setAmazon,
    hotstar,
    setHotstar
  } = useContext(OTTContext);

  return (
    <div>
      <h1>Phone</h1>
      <div>Watched Netflix: {state.netflix}</div>
      <div>Watched Amazon : {amazon}</div>
      <div>Watched Hotstar : {hotstar}</div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "phone", payload: "wednesday epi 3" })
          }
        >
          Netflix
        </button>
        <button onClick={() => setAmazon("watched Boys epi 1")}>Amazon</button>
        <button onClick={() => setHotstar("watched gameOfThrones epi 8")}>
          Hotstar
        </button>
      </div>
    </div>
  );
}

function Tv() {
  const {
    state,
    dispatch,
    amazon,
    setAmazon,
    hotstar,
    setHotstar
  } = useContext(OTTContext);
  return (
    <div>
      <h1>TV</h1>
      <div>Watched Netflix: {state.netflix}</div>
      <div>Watched Amazon : {amazon}</div>
      <div>Watched Hotstar : {hotstar}</div>
      <div>
        <button
          onClick={() => dispatch({ type: "tv", payload: "wednesday epi 6" })}
        >
          Netflix
        </button>
        <button onClick={() => setAmazon("watched Boys epi 3")}>Amazon</button>
        <button onClick={() => setHotstar("watched gameOfThrones epi 2")}>
          Hotstar
        </button>
      </div>
    </div>
  );
}

function Pc() {
  const {
    state,
    dispatch,
    amazon,
    setAmazon,
    hotstar,
    setHotstar
  } = useContext(OTTContext);

  return (
    <div>
      <h1>PC</h1>
      <div>Watched Netflix: {state.netflix}</div>
      <div>Watched Amazon : {amazon}</div>
      <div>Watched Hotstar : {hotstar}</div>
      <div>
        <button
          onClick={() => dispatch({ type: "pc", payload: "wednesday epi 8" })}
        >
          Netflix
        </button>
        <button onClick={() => setAmazon("watched Boys epi 7")}>Amazon</button>
        <button onClick={() => setHotstar("watched gameOfThrones epi 6")}>
          Hotstar
        </button>
      </div>
    </div>
  );
}

// 1 create a context
// 2 crete a provider with values
// use useContext and use the values
