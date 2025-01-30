import React from "react";
import useInput from "../Hooks/useInput";

const CustomHookFour = () => {

  const [firstname, bindFirstname, resetFirstname] = useInput('')
  const [lastname, bindLastname, resetLastname] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstname()
    resetLastname()
  };

  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>Custom Hook Example (useInput)</u>
      </h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            {...bindFirstname}
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            {...bindLastname}
            type="text"
          />
        </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default CustomHookFour;
