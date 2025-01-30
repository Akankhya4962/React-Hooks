import {useState} from 'react'

const useCounter = (initailCount, value) => {
   const [count, setCount] = useState(initailCount);
  
    const increment = () => {
      setCount((prevCount) => prevCount + value);
    };
    const decrement = () => {
      setCount((prevCount) => prevCount - value);
    };
    const reset = () => {
      setCount(initailCount);
    };
    return [count, increment, decrement, reset]
}

export default useCounter
