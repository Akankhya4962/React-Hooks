import React, { useReducer } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";


const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const countContext = React.createContext();

const ReducerHookegFour = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h2 style={{ color: "purple" }}>
        <u>useReducer + useContext Hook example </u>
      </h2>
      <div> Count = {count}</div>
      <countContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <CompA />
        <CompB />
        <CompC />
      </countContext.Provider>
    </div>
  );
};

export default ReducerHookegFour;
