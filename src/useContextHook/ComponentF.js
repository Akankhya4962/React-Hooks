import React from 'react'
import { ChannelContext, userContext } from '../App'


const ComponentF = () => {
  return (
    <div style={{backgroundColor: 'lightgreen'}}>
      <userContext.Consumer>
        {
          user => {
            return (
              <ChannelContext>
                {
                  channel => {
                    return <p> user context value in F comp {user}, channel context value in F comp {channel}</p>
                  }
                }
              </ChannelContext>
            )
          }
        }
      </userContext.Consumer>
       This is component F
    </div>
  )
}

export default ComponentF
