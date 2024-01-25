import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';

const SellProduct = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()

  function sellItem() {

  }

  return (
    <div className='bg-blue-50 h-screen'>
      <Navbar />
      <div className="max-w-md mx-auto my-20 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Sell Your Product</h2>

        {/* Product Form */}
        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm font-semibold mb-1 text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline-blue"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Description */}
          <div>
            <label htmlFor="productDescription" className="block text-sm font-semibold mb-1 text-gray-700">
              Product Description
            </label>
            <textarea
              id="productDescription"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline-blue"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Product Price */}
          <div>
            <label htmlFor="productPrice" className="block text-sm font-semibold mb-1 text-gray-700">
              Product Price
            </label>
            <input
              type="text"
              id="productPrice"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline-blue"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
            />
          </div>

          {/* Product Image */}
          <div>
            <label htmlFor="productImage" className="block text-sm font-semibold mb-1 text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              onChange={(e) => setImage(e.target.file[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline-blue"
            />
          </div>

          {/* Sell Button */}
          <button
            type="button"
            onClick={sellItem}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
          >
            Sell Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default SellProduct
