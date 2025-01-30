import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { userContext, ChannelContext } from '../App'


const ComponentE = () => {
  
  const user = useContext(userContext)
  const channel = useContext(ChannelContext)

  return (
    <div style={{backgroundColor:'lightcyan'}}>
       This is component E {user}, {channel}
       <ComponentF/>
    </div>
  )
}

export default ComponentE
