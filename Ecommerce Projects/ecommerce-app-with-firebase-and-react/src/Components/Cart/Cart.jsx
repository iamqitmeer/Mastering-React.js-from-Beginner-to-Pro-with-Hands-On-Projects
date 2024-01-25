import React from 'react'

const Cart = (props) => {
  const {title, description, price, image} = props
  return (
    <div className="max-w-sm m-3 mx-auto bg-blue-500 shadow-lg rounded-lg overflow-hidden text-white">
      {/* Product Image */}
      <img
        className="w-full h-56 object-cover object-center"
        src={image}
        alt="Product Image"
      />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="font-extrabold text-3xl text-white">{title}</h2>
        <p className="mt-2 text-white">
          {description}
        </p>
      </div>

      {/* Price and Add to Cart Button */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <span className="text-lg font-bold text-gray-700">${price}</span>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Cart
