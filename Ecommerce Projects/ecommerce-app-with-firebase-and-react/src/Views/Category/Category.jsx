// import React from 'react'

// const Category = () => {
//   return (
//     <div>
//       <h1>Category</h1>
//     </div>
//   )
// }

// export default Category

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/category')}>Category</button>
      <button onClick={() => navigate('/collection')}>Collections</button>
      <button onClick={() => navigate('/contact')}>Contact Us</button>
    </div>
  )
}

export default Category