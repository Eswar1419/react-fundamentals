import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev)=>prev+1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
export default App