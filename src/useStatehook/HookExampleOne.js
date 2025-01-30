import React from "react";
import { useState } from "react";



const HookExampleOne = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <form>
        <h2 style={{color: 'purple'}}><u>useState Hook example with object</u></h2>
        <input
            type="text"
            value={name.firstName}
            onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
            type="text"
            value={name.lastName}
            onChange={e => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
	</form>
  );
};

export default HookExampleOne;
