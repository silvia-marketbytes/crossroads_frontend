import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Call, Hamburger, Mail } from '../Icons';
import Button from '../Button';
import logo from '/src/assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinkDropdownStyles = ({ isActive }) => ({
    color: isActive ? '#F9920A' : '#00334D',
    fontSize: '14px',
    fontWeight: 'normal',
    textDecoration: 'none',
  });

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#F9920A' : '#fcfcfc',
    fontSize: '14px',
    fontWeight: 'normal',
    textDecoration: 'none',
  });

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <nav className="flex items-center justify-end p-1 text-black w-full">
        <div className="flex sm:flex-row items-center sm:space-y-0 space-x-3 sm:space-x-3 mr-1 sm:mr-10">
          <div className="flex items-center space-x-2">
            <Mail className="bg-[#00334D] p-[4px] rounded-full" />
            <div>
              <span className="block font-bold text-xs" style={{ color: '#00334D' }}>Email</span>
              <span className="text-[#00334D] text-xs">info@crossroadsge.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Call className="bg-[#00334D] p-[4px] rounded-full" />
            <div>
              <span className="block font-bold text-xs" style={{ color: '#00334D' }}>Call</span>
              <span className="text-[#00334D] text-xs">+91 9539888001</span>
            </div>
          </div>
          <Button
            label="Contact Us"
            className="text-[#fcfcfc] text-xs font-normal bg-[#00334D] hover:bg-[#00334D] rounded-full"
          />
        </div>
      </nav>

      <nav className="flex items-center w-full" style={{ backgroundColor: '#00334D' }}>
        <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-10">
          {/* Left Side Navigation */}
          <div className="hidden md:flex w-1/2 items-center justify-end space-x-4 lg:space-x-24">
            <NavLink to="/" style={navLinkStyles} className="hover:text-[#F9920A]">
              Home
            </NavLink>
            <NavLink to="/about" style={navLinkStyles} className="hover:text-[#F9920A]">
              About Us
            </NavLink>
            <div className="relative">
              <motion.button
                onClick={toggleServices}
                className="text-[#fcfcfc] text-sm font-normal flex items-center hover:text-[#F9920A]"
                whileTap={{ scale: 0.95 }}
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 mt-2 rounded shadow-md min-w-[200px] z-10 bg-[#fcfcfc]"
                  >
                    <NavLink
                      to="/services/documentation-assistance"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                    >
                    Documentation Assistance
                    </NavLink>
                    <NavLink
                      to="/services/DedicatedPage/index"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                    >
                      Service 2
                    </NavLink>
                    <NavLink
                      to="/services/3"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                    >
                      Service 3
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Logo */}
          <div className="w-1/3 flex justify-center">
            <img
              src={logo}
              alt="Crossroads Logo"
              className="min-w-auto h-14 sm:h-14 md:h-16 lg:h-20 relative bottom-0 sm:bottom-0 md:bottom-8 lg:bottom-10 py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0"
            />
          </div>

          {/* Right Side Navigation */}
          <div className="hidden md:flex w-1/2 items-center justify-start space-x-4 lg:space-x-22">
            <NavLink to="/testimonials" style={navLinkStyles} className="hover:text-[#F9920A]">
              Testimonials
            </NavLink>
            <NavLink to="/blogs" style={navLinkStyles} className="hover:text-[#F9920A]"> {/* Fixed duplicate testimonials link */}
              Blogs
            </NavLink>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1.5 rounded-full border border-[#fcfcfc] focus:outline-none text-[#fcfcfc] placeholder-[#fcfcfc] placeholder:px-2 placeholder:text-sm text-sm sm:text-base"
                style={{ backgroundColor: '#00334D' }}
              />
              <button className="text-[#fcfcfc] px-2 py-4 rounded-full relative right-12 hover:text-[#F9920A]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <Hamburger />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid items-center justify-start space-y-4 p-4 text-gray-100 w-full md:hidden"
            style={{ backgroundColor: '#00334D' }}
          >
            <NavLink
              to="/"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <div className="w-full">
              <button
                onClick={toggleServices}
                className="w-full text-left text-md flex items-center justify-center text-[#fcfcfc] hover:text-[#F9920A]"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full ml-10 mt-2 rounded shadow-md bg-[#fcfcfc]"
                  >
                    <NavLink
                      to="/services/1"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                      onClick={toggleMenu}
                    >
                      Service 1
                    </NavLink>
                    <NavLink
                      to="/services/2"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                      onClick={toggleMenu}
                    >
                      Service 2
                    </NavLink>
                    <NavLink
                      to="/services/3"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                      onClick={toggleMenu}
                    >
                      Service 3
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink
              to="/testimonials"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/blogs"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        label="Get in Touch"
        className="z-50 fixed top-1/2 -right-12 transform -translate-y-1/2 text-[#fcfcfc] text-md font-normal bg-[#F9920A] hover:bg-[#F9920D] px-6 py-4 rotate-270 shadow-lg"
      />
    </>
  );
};

export default Navbar;