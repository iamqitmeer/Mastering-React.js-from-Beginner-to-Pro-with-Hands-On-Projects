import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const DeccreamentCount = () => {
    setCount(count - 1)
    if (count < 1) {
      alert('Ap Neeche Nhi Jaskte!')
      setCount(0)
    }
  }

  const increamentCount = () => {
    setCount(count + 1)
    if (count > 29) {
      alert('Ap 30 se Uper Nhi Jaskte!')
      setCount(30)
    }
  }

  return (
    <>

      <div className="card">
        <h1>Count Value is {count}</h1>
        <button onClick={increamentCount}>
          Increament
        </button>
        <button onClick={DeccreamentCount}>
          Decreament
        </button>
      </div>
    </>
  )
}

export default App
