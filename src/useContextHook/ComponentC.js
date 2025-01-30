import React from 'react'
import ComponentE from './ComponentE'

const ComponentC = () => {
  return (
    <div style={{backgroundColor: 'lightblue' }}>
      <h2 style={{color: 'purple'}}><u>useContext Hook example </u></h2>
      This is component C
      <ComponentE/>
    </div>
  )
}

export default ComponentC
