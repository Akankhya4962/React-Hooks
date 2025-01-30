import React from "react";
import useCounter from "../Hooks/useCounter";


const CustomHookTwo = () => {
 const [count, increment, decrement, reset] = useCounter(0 , 1)

  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>Custom Hook Example (useCounter) file 1</u>
      </h2>
      <h3>Counter = {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

export default CustomHookTwo;
