import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  //This without specifying deps
  //
  // const tick = () => {
  //   setCount(prevCount => prevCount + 1)
  // }

  // useEffect(() => {
  //   const interval = setInterval(tick, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  //OR this with the deps (look at setCount and deps list)
  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      {count}    
    </div>
  )
}

export default IntervalHookCounter
