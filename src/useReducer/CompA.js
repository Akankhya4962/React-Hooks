import React, {useContext} from "react";
import { countContext } from "./ReducerHookegFour";

const CompA = () => {
  const CountContext = useContext(countContext);
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        marginBottom: "20px",
        padding: "5px",
      }}
    >
      This is component A.
      count - {CountContext.countState}
      <button onClick={() => CountContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => CountContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => CountContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default CompA;
