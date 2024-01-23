import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-opacity-30 bg-blur-md bg-white backdrop-filter backdrop-blur-md py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-800 mb-4">Connect with Us</div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-4 text-gray-600">
          &copy; 2024 Your Ecommerce App. All rights reserved.
        </div>
      </div>
    </footer>
);
}

export default Footer
