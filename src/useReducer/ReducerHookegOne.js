import React, {useReducer} from 'react'


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


const ReducerHookegOne = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h2 style={{color: 'purple'}}><u>useReducer Hook example (simple state and action) </u></h2>
      <div> Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')} >Decrement</button>
      <button onClick={() => dispatch('reset')} >Reset</button>
    
    </div>
  )
}

export default ReducerHookegOne
