import './App.css'

function App() {

  let firstText = 'Welcome to The World Of'
  let endText = 'Using Mern Stack'
  let btn = 'Click Here'

  let abc = false

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <h3>{firstText}</h3>
        <h1 className='font-extrabold'>Modern Web Development</h1>
        <h1 className='text-3xl font-semibold'>{endText}</h1>
        <button className='{abc ? bag : big} text-white m-2 w-36 rounded-1xl'> {abc ? "Yes" : "No"} {btn}</button>
      </div>
    </>
  )
}

export default App
