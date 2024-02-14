import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPLKJMNHBGVFCDSXZAasdfghjklpoiuytrewqzxcvbnm"

    if (numAllowed) str += "123456890"
    if (charAllowed) str += "!@#$%^&*()_~+={}><?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='flex items-center justify-center flex-col h-16 m-20'>
        <h1 className='text-white text-5xl m-5'>Password Generator</h1>
        <div>
          <input type="text" readOnly placeholder='password' value={password} />
          <button className='bg-slate-300 p-2 px-4 rounded-lg'>Copy</button>
        </div>
        <div>
          <input type="range" min={6} max={50} value={length} onChange={(e) => setLength(e.target.value)} />
          <label className='text-white'> lenght : {length}</label>

          <div>
            <label className='text-white' htmlFor="no">Number Allowed</label>
            <input id="no" type="checkbox" onChange={(prev) => {
              setNumberAllowed((prev) => !prev)
            }} />
          </div>
          <div>
            <label className='text-white' htmlFor="char">Characters Allowed</label>
            <input id="char" type="checkbox" onChange={(prev) => {
              setCharAllowed((prev) => !prev)
            }} />
          </div>

        </div>

      </div>
    </>
  )
}

export default App
