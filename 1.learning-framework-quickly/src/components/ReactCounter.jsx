import React from "react"

export default function () {
  const [count, setCount] = React.useState(0)

  function increaseCount () {
    setCount(count => count + 1)
  }
  
  return <>
    <button onClick={increaseCount}>+1</button>
    <div>{count}</div>
  </>
}