import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Total Number in Count is - ', { count })
    if (count > 18) {
      setCount(0)
      alert('Only Under 18 Allowed 😒😊')
    }
  }, [count])

  return (
    <>
      <h1>{count} Bar Apne Click Krdiya He.</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  )
}

export default App
