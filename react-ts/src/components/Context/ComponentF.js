import React from 'react'
import {UserContext} from "../../App";

const ComponentF = () => {

  return (
    <div>
      <h1>ComponentF</h1>
      <UserContext.Consumer>
        {
          user => {
            return <div>User context value {user}</div>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF;
