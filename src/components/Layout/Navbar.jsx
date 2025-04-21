import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Call, Hamburger, Mail } from "../Icons";
import Button from "../Button";
import logo from "/src/assets/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEducationHover, setIsEducationHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Modal opening"); // Debugging
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

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

  const navLinkDropdownStyles = ({ isActive }) => ({
    color: isActive ? "#F9920A" : "#00334D",
    fontSize: "14px",
    fontWeight: "normal",
    textDecoration: "none",
  });

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#F9920A" : "#fcfcfc",
    fontSize: "14px",
    fontWeight: "normal",
    textDecoration: "none",
  });

  return (
    <>
      {/* Top Contact Bar */}
      <nav className="flex items-center justify-end p-1 text-black w-full">
        <div className="flex sm:flex-row items-center sm:space-y-0 space-x-3 sm:space-x-3 mr-1 sm:mr-10">
          <div className="flex items-center space-x-2">
            <Mail className="bg-[#00334D] p-[4px] rounded-full" />
            <div>
              <span className="block font-bold text-xs" style={{ color: "#00334D" }}>
                Email
              </span>
              <span className="text-[#00334D] text-xs">info@crossroadsge.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Call className="bg-[#00334D] p-[4px] rounded-full" />
            <div>
              <span className="block font-bold text-xs" style={{ color: "#00334D" }}>
                Call
              </span>
              <span className="text-[#00334D] text-xs">+91 9539888001</span>
            </div>
          </div>
          <Button
            label="Contact Us"
            className="text-[#fcfcfc] text-xs font-normal bg-[#00334D] hover:bg-[#00334D] rounded-full"
            onClick={openModal}
          />
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="flex items-center w-full" style={{ backgroundColor: "#00334D" }}>
        <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-10">
          {/* Left Navigation Links */}
          <div className="hidden md:flex w-1/2 items-center justify-end space-x-4 lg:space-x-24">
            <NavLink to="/" style={navLinkStyles} className="hover:text-[#F9920A]">
              Home
            </NavLink>
            <NavLink to="/Aboutus" style={navLinkStyles} className="hover:text-[#F9920A]">
              About Us
            </NavLink>
            
            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-[#fcfcfc] text-sm font-normal flex items-center hover:text-[#F9920A]"
                whileTap={{ scale: 0.95 }}
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
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
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 mt-2 shadow-md w-[200px] z-10 bg-[#fcfcfc]"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onMouseEnter={() => setIsEducationHover(true)}
                      onMouseLeave={() => setIsEducationHover(false)}
                      className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] w-full text-left"
                    >
                      Education
                    </button>
                    <NavLink
                      to="/services/documentation-assistance"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                    >
                      Documentation Assistance
                    </NavLink>
                    <NavLink
                      to="/services/language-lab"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                    >
                      Language Lab
                    </NavLink>
                    {isEducationHover && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute left-full top-0 mt-0 w-[200px] bg-[#fcfcfc] shadow-md"
                        onMouseEnter={() => setIsEducationHover(true)}
                        onMouseLeave={() => setIsEducationHover(false)}
                      >
                        <NavLink
                          to="/services/education/country"
                          style={navLinkDropdownStyles}
                          className="block px-4 py-2 hover:text-[#F9920A]"
                        >
                          Country
                        </NavLink>
                        <NavLink
                          to="/services/education/course"
                          style={navLinkDropdownStyles}
                          className="block px-4 py-2 hover:text-[#F9920A]"
                        >
                          Course
                        </NavLink>
                      </motion.div>
                    )}
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

          {/* Right Navigation Links */}
          <div className="hidden md:flex w-1/2 items-center justify-start space-x-4 lg:space-x-22">
            <NavLink to="/testimonials" style={navLinkStyles} className="hover:text-[#F9920A]">
              Testimonials
            </NavLink>
            <NavLink to="/Blogs" style={navLinkStyles} className="hover:text-[#F9920A]">
              Blogs
            </NavLink>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1.5 rounded-full border border-[#fcfcfc] focus:outline-none text-[#fcfcfc] placeholder-[#fcfcfc] placeholder:px-2 placeholder:text-sm text-sm sm:text-base"
                style={{ backgroundColor: "#00334D" }}
              />
              <button className="text-[#fcfcfc] px-2 py-4 rounded-full relative right-12 hover:text-[#F9920A]">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="grid items-center justify-start space-y-4 p-4 text-gray-100 w-full md:hidden"
            style={{ backgroundColor: "#00334D" }}
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
              to="/Aboutus"
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
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
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
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full ml-10 mt-2 shadow-md bg-[#fcfcfc]"
                  >
                    <button
                      onClick={() => setIsEducationHover(!isEducationHover)}
                      className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] w-full text-left"
                    >
                      Education
                    </button>
                    <NavLink
                      to="/services/documentation-assistance"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                      onClick={toggleMenu}
                    >
                      Documentation Assistance
                    </NavLink>
                    <NavLink
                      to="/services/language-lab"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A]"
                      onClick={toggleMenu}
                    >
                      Language Lab
                    </NavLink>
                    {isEducationHover && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="ml-10 mt-2 w-[200px] bg-[#fcfcfc] shadow-md"
                      >
                        <NavLink
                          to="/services/education/country"
                          style={navLinkDropdownStyles}
                          className="block px-4 py-2 hover:text-[#F9920A]"
                          onClick={toggleMenu}
                        >
                          Country
                        </NavLink>
                        <NavLink
                          to="/services/education/course"
                          style={navLinkDropdownStyles}
                          className="block px-4 py-2 hover:text-[#F9920A]"
                          onClick={toggleMenu}
                        >
                          Course
                        </NavLink>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink
              to="/Testimonials"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/Blogs"
              style={navLinkStyles}
              className="block px-10 py-2 w-full text-left text-md hover:text-[#F9920A]"
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Get in Touch Button */}
      <Button
        label="Get in Touch"
        className="fixed top-1/2 -right-12 transform -translate-y-1/2 text-white text-md font-medium bg-amber-500 hover:bg-amber-500/80 transition-colors duration-300 -rotate-90 px-6 py-4 shadow-lg z-50"
        onClick={openModal}
      />

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;