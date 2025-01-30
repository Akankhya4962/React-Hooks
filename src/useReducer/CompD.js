import React, { useContext } from "react";
import { countContext } from "./ReducerHookegFour";

const CompD = () => {
  const CountContext = useContext(countContext);

  return (
    <div style={{ backgroundColor: "lightgrey", padding: "5px" }}>
      This is component D.
      count - {CountContext.countState}
      <button onClick={() => CountContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => CountContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default CompD;
