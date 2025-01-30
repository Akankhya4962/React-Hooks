import React, { useState } from 'react'

function HookCounterTwo() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<>
            <h2 style={{color: 'purple'}}><u>useState Hook anf prev state example</u></h2>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	)
}

export default HookCounterTwo