import React from 'react'
import user from '../../assets/Icons for Navbar/user.svg'
import list from '../../assets/Icons for Navbar/list.svg'
import cart from '../../assets/Icons for Navbar/cart.svg'
import heart from '../../assets/Icons for Navbar/heart.svg'
import Button from '../Button/Button'
import stumbleupon from '../../assets/Icons for Navbar/stumbleupon.svg'
// import CSS from './Navbar.css'
import { Link } from 'react-router-dom'; // Import Link


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-3xl font-bold">
          <img src={stumbleupon} alt="Logo" className="h-10 w-10 cursor-pointer" />
        </span>

        {/* Nav Links */}
        <ul className="flex space-x-4">
          <Link to="/"><span className="hover:text-gray-200 cursor-pointer">Home</span></Link>
          <Link to="/category"><span className="hover:text-gray-200 cursor-pointer">Category</span></Link>
          <Link to="/collection"><span className="hover:text-gray-200 cursor-pointer">Collections</span></Link>
          <Link to="/contact"><span className="hover:text-gray-200 cursor-pointer">Contact Us</span></Link>
        </ul>

        {/* Login Button */}
        <Link to='/login'><Button title='Login' /></Link>
      </div>
    </nav>
  );
}

export default Navbar
