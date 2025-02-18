import React, {useState, useMemo} from 'react'

const DoubleNumber = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    // const doubleNumber = slowFunction(number)
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
    <>
    <h2 style={{ color: "purple" }}>
        <u>useMemo Hook Example Two</u>
      </h2>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme </button>
      <div style={themeStyles}> {doubleNumber} </div>
    </>
  )
}

function slowFunction(num) {
    console.log('Calling slow function');
    for(let i=0; i<= 1000000000; i++){}
    return num * 2
}
export default DoubleNumber
