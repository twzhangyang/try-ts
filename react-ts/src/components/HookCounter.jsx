import React, {useState} from 'react';

const HookCounter1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={ () => setCount(count + 1)}> Count { count }</button>
    </div>
  )
}

function HookCounter() {
  const [count, setCount] =  useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count { count }</button>
    </div>
  )
}

export default HookCounter1;
