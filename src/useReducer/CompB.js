import React from 'react'
import CompD from './CompD'

const CompB = () => {
  return (
    <div style={{backgroundColor: 'lightgreen', marginBottom: '20px', padding: '5px' }}>
        This is component B.
      <CompD/>
    </div>
  )
}

export default CompB
