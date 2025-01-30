import React, {useState, useEffect} from 'react'

const EffectExampleFour = () => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count+1) //setCount(prevcount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div>
        <h2 style={{color: 'purple'}}><u>useEffect Hook example (interval counter) </u></h2>
        {count}
    </div>
  )
}

export default EffectExampleFour
