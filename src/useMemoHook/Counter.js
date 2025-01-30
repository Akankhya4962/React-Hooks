import React, { useState, useMemo } from "react";

const Counter = () => {
  const [CounterOne, setCounterOne] = useState(0);
  const [CounterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(CounterOne + 1);
  };

  const IncrementTwo = () => {
    setCounterTwo(CounterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0
    while(i < 2000000000) i++
    return CounterOne % 2 === 0
  }, [CounterOne] )

  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>useMemo Hook Example</u>
      </h2>
      <div>
        <button onClick={IncrementOne}>Counter One = {CounterOne}</button>
        <span>{isEven  ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={IncrementTwo}>Counter Two = {CounterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
