import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Call, Hamburger, Mail } from "../Icons";
import Button from "../Button";
import logo from "/src/assets/logo.png";
import Modal from "../modal";

// Define common hover transition
const hoverTransition = {
  transition: "all 0.3s ease",
};

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#F9920A" : "#fcfcfc", // Active: orange, default: white
  fontSize: "14px",
  fontWeight: "normal",
  textDecoration: "none",
  ...hoverTransition,
});

const navLinkDropdownStyles = ({ isActive }) => ({
  color: isActive ? "#F9920A" : "#00334D", // Active: orange, default: dark blue
  fontSize: "14px",
  fontWeight: "normal",
  textDecoration: "none",
  ...hoverTransition,
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEducationHover, setIsEducationHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="flex items-center justify-end p-1 text-black w-full bg-white">
          <div className="flex sm:flex-row items-center sm:space-y-0 space-x-2 sm:space-x-2 lg:space-x-14 mr-1 sm:mr-10 lg:mr-28">
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
              className="text-[#fcfcfc] text-xs px-4 py-2.5 font-normal bg-[#00334D] hover:bg-[#F9920A] hover:scale-105 transition-all duration-300 rounded-full"
              onClick={openModal}
            />
          </div>
        </nav>

        {/* Main Navigation Bar */}
        <nav className="flex items-center w-full" style={{ backgroundColor: "#00334D" }}>
          <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-10 py-1">
            {/* Left Navigation Links */}
            <div className="hidden md:flex w-1/2 items-center justify-end space-x-4 lg:space-x-24">
              <NavLink
                to="/"
                style={navLinkStyles}
                className="hover:text-[#F9920A] hover:scale-110 transform transition-all duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/Aboutus"
                style={navLinkStyles}
                className="hover:text-[#F9920A] hover:scale-110 transform transition-all duration-300"
              >
                About Us
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative">
                <motion.button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="text-[#fcfcfc] text-sm font-normal flex items-center hover:text-[#F9920A] hover:scale-110 transition-all duration-300"
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
                      className="absolute left-0 mt-2 shadow-md w-[250px] z-10 bg-[#fcfcfc] rounded-lg"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onMouseEnter={() => setIsEducationHover(true)}
                        onMouseLeave={() => setIsEducationHover(false)}
                        className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 w-full text-left transition-all duration-300"
                      >
                        Education
                      </button>
                      <NavLink
                        to="/services/documentation-assistance"
                        style={navLinkDropdownStyles}
                        className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                      >
                        Documentation Assistance
                      </NavLink>
                      <NavLink
                        to="/services/language-lab"
                        style={navLinkDropdownStyles}
                        className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                      >
                        Language Lab
                      </NavLink>
                      {isEducationHover && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute left-full ml-1 top-0 mt-0 w-[200px] bg-[#fcfcfc] shadow-md rounded-lg"
                          onMouseEnter={() => setIsEducationHover(true)}
                          onMouseLeave={() => setIsEducationHover(false)}
                        >
                          <NavLink
                            to="/services/education/country"
                            style={navLinkDropdownStyles}
                            className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                          >
                            Country
                          </NavLink>
                          <NavLink
                            to="/services/education/course"
                            style={navLinkDropdownStyles}
                            className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
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
                className="min-w-auto h-14 sm:h-14 md:h-16 lg:h-16 relative bottom-0 sm:bottom-0 md:bottom-8 lg:bottom-10 py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0"
              />
            </div>

            {/* Right Navigation Links */}
            <div className="hidden md:flex w-1/2 items-center justify-start space-x-4 lg:space-x-22">
              <NavLink
                to="/testimonials"
                style={navLinkStyles}
                className="hover:text-[#F9920A] hover:scale-110 transform transition-all duration-300"
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/Blogs"
                style={navLinkStyles}
                className="hover:text-[#F9920A] hover:scale-110 transform transition-all duration-300"
              >
                Blogs
              </NavLink>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 py-1.5 rounded-full border border-[#fcfcfc] focus:outline-none text-[#fcfcfc] placeholder-[#fcfcfc] placeholder:px-3 placeholder:text-sm text-sm sm:text-base"
                  style={{ backgroundColor: "#00334D" }}
                />
                <button className="text-[#fcfcfc] px-2 py-4 rounded-full relative right-12 hover:text-[#F9920A] hover:scale-110 transition-all duration-300">
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
              <button onClick={toggleMenu} className="text-[#fcfcfc] hover:text-[#F9920A] hover:scale-110 transition-all duration-300">
                <Hamburger />
              </button>
            </div>
          </div>
        </nav>
      </div>

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
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/Aboutus"
              style={navLinkStyles}
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <div className="w-full">
              <button
                onClick={toggleServices}
                className="w-full text-left text-md flex items-center justify-center text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
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
                      className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 w-full text-left transition-all duration-300"
                    >
                      Education
                    </button>
                    <NavLink
                      to="/services/documentation-assistance"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Documentation Assistance
                    </NavLink>
                    <NavLink
                      to="/services/language-lab"
                      style={navLinkDropdownStyles}
                      className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
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
                          className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                          onClick={toggleMenu}
                        >
                          Country
                        </NavLink>
                        <NavLink
                          to="/services/education/course"
                          style={navLinkDropdownStyles}
                          className="block px-4 py-2 hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
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
              className="px-10 py-2 w-full text-left text-md hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/Blogs"
              style={navLinkStyles}
              className="block px-10 py-2 w-full text-left text-md hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        label="Get in Touch"
        className="fixed top-1/2 -right-12 transform -translate-y-1/2 text-white text-md font-medium bg-amber-500 hover:bg-[#F9920A] hover:scale-105 transition-all duration-300 -rotate-90 px-6 py-4 shadow-lg z-50"
        onClick={openModal}
      />

      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
