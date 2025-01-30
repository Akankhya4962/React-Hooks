import React from 'react'

const Count = ({text, Value}) => {
    console.log(`Rendering ${text}`);
    
  return (
    <div>
      {text} - {Value}
    </div>
  )
}

export default React.memo(Count)
