import React, {useState} from 'react'

const HookExampleTwo = () => {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()* 10) + 1
    }])
  }
  const resetItems = () => {
    setItems([])
  }
  return (
    <div>
      <h2 style={{color: 'purple'}}><u>useState Hook example with array</u></h2>
      <button onClick={addItem}>Add a number</button>
      <button onClick={resetItems}>Reset Array</button>
      <ul>
        {items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default HookExampleTwo
