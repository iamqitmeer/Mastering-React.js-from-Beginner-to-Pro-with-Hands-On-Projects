import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(true)
  const [name, setName] = useState()

  const myName = () => {
    setCount(!count)
  }

  return (
    <>
      {/* <h1>{!count && 'Qitmeer Raza'}</h1>
     */}
      {
        count ? <h1>Qitmeer Raza</h1> : <h1></h1>
      }
      {
        count === true ? <button onClick={myName}>Hide Name</button> : <button onClick={myName}>Show Name</button>
      }
    </>
  )
}

export default App
