import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const ReducerHookegThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer ( reducer, initialState);
  
    return (
      <div>
        
        <h2 style={{color: 'purple'}}><u>Multiple useReducer Hook example </u></h2>
        <div> Count = {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')} >Decrement</button>
        <button onClick={() => dispatch('reset')} >Reset</button>
        
        <div> Count = {countTwo}</div>
        <button onClick={() => dispatchTwo('increment')}>Increment</button>
        <button onClick={() => dispatchTwo('decrement')} >Decrement</button>
        <button onClick={() => dispatchTwo('reset')} >Reset</button>
      
      </div>
    )
}

export default ReducerHookegThree
