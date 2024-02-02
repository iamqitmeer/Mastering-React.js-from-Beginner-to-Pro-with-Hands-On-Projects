import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <div className="text-white font-bold text-xl">Your Logo</div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
