import React, {useState, useEffect} from 'react'

const EffectExampleOne = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating the document title');
        document.title = `You clicked ${count} times`
    }, [count])

  return (
    <div>
        <h2 style={{color: 'purple'}}><u>useEffect Hook example ( after render and conditionally run useEffect )</u></h2>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}> click {count} times</button>
    </div>
  )
}

export default EffectExampleOne
