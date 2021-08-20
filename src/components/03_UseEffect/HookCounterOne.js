import React, {useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click {count} times</button>    
      <button onClick={() => setCount(0)}>Reset</button>    
    </div>
  )
}

export default HookCounterOne
