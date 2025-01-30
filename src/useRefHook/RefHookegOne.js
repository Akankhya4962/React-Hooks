import React, {useEffect, useRef} from 'react'

const RefHookegOne = () => {

    const inputRef = useRef(null)
    useEffect(() => {
        //focus the input element
        inputRef.current.focus()
    }, [])
    console.log('inputRef', inputRef);
    
  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>useRef Hook Example (Focus Input)</u>
      </h2>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default RefHookegOne
