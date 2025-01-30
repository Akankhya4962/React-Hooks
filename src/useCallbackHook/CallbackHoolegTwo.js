import React, { useState, useCallback } from "react";
import List from "./List";


const CallbackHoolegTwo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <h2 style={{ color: "purple" }}>
        <u>useCallback Hook Example Two</u>
      </h2>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          {" "}Change Theme{" "}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};

export default CallbackHoolegTwo;
