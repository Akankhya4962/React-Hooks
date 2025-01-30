import React, { useEffect, useRef, useState } from "react";

const RefHookegTwo = () => {
  const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>useRef Hook Example (Timer)</u>
      </h2>
      Hook Timer = {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  );
};

export default RefHookegTwo;
