import React, { useState } from "react";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const CustomHookOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count)
  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>Custom Hook Example (useDocumentTitle)</u>
      </h2>
      <button onClick={() => setCount(count + 1)}>Counter ={count} </button>
    </div>
  );
};

export default CustomHookOne;
