import React from "react";

const Title = () => {
  console.log("Rendering Title");

  return (
    <h2 style={{ color: "purple" }}>
      <u>useCallback Hook Example Two</u>
    </h2>
  );
};

export default React.memo(Title);
