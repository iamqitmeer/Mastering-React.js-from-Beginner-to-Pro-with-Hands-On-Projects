// import React from 'react'

// const Collection = () => {
//   return (
//     <div>
//       <h1>Collection</h1>
//     </div>
//   )
// }

// export default Collection

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Collection = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/category')}>Category</button>
      <button onClick={() => navigate('/collection')}>Collections</button>
      <button onClick={() => navigate('/contact')}>Contact Us</button>
    </div>
  )
}

export default Collection
