import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-8">Welcome to Quiz Master</h1>
      <div className="bg-white rounded-xl p-8 shadow-2xl w-fit">
        <h2 className="text-2xl text-purple-700 mb-4">Question 1</h2>
        <p className="text-gray-700 mb-5 text-2xl">What is the capital of France?</p>
        <div className="grid grid-cols-1 gap-4">
          <li className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 cursor-pointer">Paris</li>
          <li className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 cursor-pointer">London</li>
          <li className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 cursor-pointer">Berlin</li>
          <li className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 cursor-pointer">Madrid</li>
        </div>
        <div className='m-2 mx-auto w-full'>
          <button className="bg-purple-500 w-full text-white py-2 px-4 rounded-lg mt-6 hover:bg-purple-600">Next</button>
        </div>
      </div>

    </div>
  );
};

export default Quiz