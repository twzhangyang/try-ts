import React, {useState} from 'react'

const HookCounterTwo =() =>{
  const initialCount = 0
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i< 5; i++){
      // setCount(count + 1)
      setCount(prevState => prevState + 1);
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <button onClick={()=> setCount(count + 1)}>Increment 1</button>
      <button onClick={()=> setCount(count - 1)}>Decrement 1</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo;
