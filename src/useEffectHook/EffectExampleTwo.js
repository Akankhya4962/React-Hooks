import React,  {useState, useEffect} from 'react'

const EffectExampleTwo = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseposition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)        
    }

    useEffect(() => {
        console.log('useEffect is called');
        window.addEventListener('mousemove', logMouseposition)
        return () => {
            console.log('useEffect clean up');
            window.addEventListener('mousemove', logMouseposition)
        }
    }, [])

  return (
    <div>
        <h2 style={{color: 'purple'}}><u>useEffect Hook example ( run effect only once )</u></h2>
        Hooks X = {x}, Y ={y}
    </div>
  )
}

export default EffectExampleTwo
