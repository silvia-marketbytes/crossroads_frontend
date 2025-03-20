import React, { useState } from 'react';
import { Call, HamBurger, Mail } from '../Icons';
import Button from '../Button';
import logo from '/src/assets/logo.png'; // Corrected the import path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false); // Close the services dropdown when opening the main menu
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      {/* Top Section with Contact Info */}
      <nav className="flex items-center justify-end p-4 bg-white text-black w-full">
        <div className="flex items-center space-x-6 mr-10">
          <div className="flex items-center space-x-2">
            <Mail />
            <div>
              <span className="block font-bold text-sm">Email</span>
              <span className="text-sm">info@crossroadsge.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Call />
            <div>
              <span className="block font-bold text-sm">Call</span>
              <span className="text-sm">+91 9539888001</span>
            </div>
          </div>
          <Button
            label="Contact Us"
            className="text-white text-sm font-medium bg-gray-800 hover:bg-gray-900 transition-colors duration-300 px-4 py-1 rounded-full"
          />
        </div>
      </nav>

      {/* Bottom Section with Navigation Links */}
      <nav className="flex items-center p-4 bg-blue-950 text-white w-full">
        <div className="flex items-center justify-between w-full px-10">
          {/* Left Side Navigation */}
          <div className="hidden md:flex items-center space-x-30">
            <a href="#" className="hover:text-gray-300 text-lg">Home</a>
            <a href="#" className="hover:text-gray-300 text-lg">About Us</a>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="hover:text-gray-300 focus:outline-none text-lg flex items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    isServicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black py-2 rounded shadow-md min-w-[150px] z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">Service 3</a>
                </div>
              )}
            </div>
          </div>

          {/* Logo in Center */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Crossroads Logo"
              className="h-12 sm:h-16 md:h-20 relative bottom-6 sm:bottom-8 md:bottom-10"
            />
          </div>

          {/* Right Side Navigation */}
          <div className="hidden md:flex items-center space-x-15">
            <a href="#" className="hover:text-gray-300 text-lg">Testimonials</a>
            <a href="#" className="hover:text-gray-300 text-lg">Blogs</a>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded-full border border-white focus:outline-none text-white"
              />
              <button className=" text-white px-2 py-1 rounded-full relative right-10">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              <HamBurger />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col items-center space-y-4 p-4 bg-gray-800 text-white w-full md:hidden`}
      >
        <a href="#" className="hover:text-gray-300 w-full text-center text-lg">Home</a>
        <a href="#" className="hover:text-gray-300 w-full text-center text-lg">About Us</a>
        <button
          onClick={toggleServices}
          className="hover:text-gray-300 focus:outline-none w-full text-center text-lg flex items-center justify-center"
        >
          Services
          <svg
            className={`w-4 h-4 ml-1 transform transition-transform ${
              isServicesOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isServicesOpen && (
          <div className="flex flex-col space-y-2 pl-4">
            <a href="#" className="hover:text-gray-300">Service 1</a>
            <a href="#" className="hover:text-gray-300">Service 2</a>
            <a href="#" className="hover:text-gray-300">Service 3</a>
          </div>
        )}
        <a href="#" className="hover:text-gray-300 w-full text-center text-lg">Testimonials</a>
        <a href="#" className="hover:text-gray-300 w-full text-center text-lg">Blogs</a>
      </div>
    </>
  );
};

export default Navbar;