import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-wrap h-screen">
      <section className="relative mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              <a className="hover:text-gray-200" href="#">
                <img src={stumbleupon} alt="User Icon" className="h-10 w-10" />
              </a>
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a className="hover:text-gray-200" href="#">Home</a></li>
              <li><a className="hover:text-gray-200" href="#">Category</a></li>
              <li><a className="hover:text-gray-200" href="#">Collections</a></li>
              <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
            </ul>
            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <a className="hover:text-gray-200" href="#">
                <img src={user} alt="User Icon" className="h-6 w-6" />
              </a>
              <a className="flex items-center hover:text-gray-200" href="#">
                <img src={cart} alt="Cart Icon" className="h-6 w-6 relative" />
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </a>
              {/* Sign In / Register */}
              <a className="flex items-center hover:text-gray-200" href="#">
                <img src={heart} alt="Heart Icon" className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Responsive navbar */}
          <a className="xl:hidden flex mr-6 items-center" href="#">
            {/* Add your SVG or icon for this link */}
            <a className="flex items-center hover:text-gray-200" href="#">
              <img src={list} alt="Heart Icon" className="h-6 w-6" />
            </a>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <a className="flex items-center hover:text-gray-200" href="#">
              <img src={cart} alt="Cart Icon" className="h-6 w-6 relative" />
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </a>
          </a>
        </nav>
      </section>
    </div>
  );

}

export default Navbar
