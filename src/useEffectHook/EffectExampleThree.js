import React, {useState} from 'react'
import EffectExampleTwo from './EffectExampleTwo'

const EffectExampleThree = () => {

    const [display, setDisplay]= useState(true)

    return (
        <div>
                    <h2 style={{color: 'purple'}}><u>useEffect Hook example (effect clean up) </u></h2>
            <button onClick ={() => setDisplay(!display)} >Toogle Display</button>
            {display && <EffectExampleTwo/>}
        </div>
    )
}

export default EffectExampleThree
