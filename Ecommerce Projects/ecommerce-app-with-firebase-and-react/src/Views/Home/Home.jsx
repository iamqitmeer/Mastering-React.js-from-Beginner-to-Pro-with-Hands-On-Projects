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

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Cart from '../../Components/Cart/Cart'
import { getData } from '../../Config/Firebase/firebase'
import { useEffect, useState } from 'react'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const ads = await getData()
    console.log('ads in component', ads)
    setProducts(ads)
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-wrap p-12'>
        {products.map(item => {
          return <Cart/>
        })}
      </div>
      <Footer />
    </>
  )
}

export default Home
