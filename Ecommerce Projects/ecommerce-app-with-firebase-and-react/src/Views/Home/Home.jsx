// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <button onClick={() => navigate('/category')}>Category</button>
//       <button onClick={() => navigate('/collection')}>Collections</button>
//       <button onClick={() => navigate('/contact')}>Contact Us</button>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default Home
