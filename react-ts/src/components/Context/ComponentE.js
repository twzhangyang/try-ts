import React, {useContext} from 'react'
import ComponentF from "./ComponentF";
import {UserContext, ChannelContext} from "../../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);



  return (
    <div>
      <h1>ComponentE</h1>
      <p>Use context</p>
      <p>{user} - {channel}</p>
      <ComponentF/>
    </div>
  )
}

export default ComponentE;
