import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerHookegTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>useReducer Hook example (complex state and action) </u>
      </h2>
      <div> Count = {count.firstCounter}</div>
      <div> Second Count = {count.secondCounter}</div>

      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement by 5
        </button>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
          Increment Second Counter
        </button>
        <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
          Decrement Second Counter
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default ReducerHookegTwo;
