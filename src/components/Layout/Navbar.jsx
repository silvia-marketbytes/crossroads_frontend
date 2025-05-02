import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Call, Mail, MenuDots } from "../Icons";
import Button from "../Button";
import logo from "/src/assets/logo.png";
import Modal from "../modal";

const hoverTransition = {
  transition: "all 0.3s ease",
};

const navLinkStyles = ({ isActive, isHovered }) => ({
  color: isActive ? "#F9920A" : isHovered ? "#F9920A" : "#fcfcfc",
  fontSize: "14px",
  fontWeight: "normal",
  textDecoration: "none",
  ...hoverTransition,
});

const navLinkDropdownStyles = ({ isActive, isHovered }) => ({
  color: isActive ? "#F9920A" : isHovered ? "#F9920A" : "#00334D",
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
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isEducationButtonHovered, setIsEducationButtonHovered] = useState(false);

  const location = useLocation();

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

  const isAdminLoginActive = location.pathname === "/admin-login";
  const isCandidateLoginActive = location.pathname === "/candidate-login";

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md shadow-gray-800/40">
        <nav className="hidden md:flex lg:flex xl:flex items-center justify-between p-1 text-black w-full bg-white">
          <div className="flex items-center space-x-2 sm:space-x-2 lg:space-x-4 mr-4 sm:mr-4 lg:ml-48">
            <Button
              label="Admin Login"
              className="text-[#fcfcfc] text-xs px-4 py-2.5 font-normal bg-[#00334D] hover:bg-[#F9920A] hover:scale-105 transition-all duration-300 rounded-full"
              onClick={() => window.open("https://crossroadsapp.in/", "_blank")}
            />
            <Button
              label="Candidate Login"
              className="text-[#fcfcfc] text-xs px-4 py-2.5 font-normal bg-[#00334D] hover:bg-[#F9920A] hover:scale-105 transition-all duration-300 rounded-full"
              onClick={() => window.open("https://crossroadsapp.in/candidate-login/", "_blank")}
            />
          </div>
          <div className="flex sm:flex-row items-center sm:space-y-0 space-x-2 sm:space-x-2 lg:space-x-8 mr-1 sm:mr-10 lg:mr-24">
            <div className="flex items-center space-x-2">
              <Mail className="bg-[#00334D] p-[4px] rounded-full" />
              <div>
                <span className="block font-bold text-xs" style={{ color: "#00334D" }}>
                  Email
                </span>
                <a
                  href="mailto:info@crossroadsge.com"
                  className="text-[#00334D] text-xs hover:text-[#F9920A] transition-all duration-300"
                >
                  info@crossroadsge.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Call className="bg-[#00334D] p-[4px] rounded-full" />
              <div>
                <span className="block font-bold text-xs" style={{ color: "#00334D" }}>
                  Call
                </span>
                <a
                  href="tel:+919539688800"
                  className="text-[#00334D] text-xs hover:text-[#F9920A] transition-all duration-300"
                >
                  +91 95396 88800
                </a>
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
        <nav className="flex items-center w-full py-5" style={{ backgroundColor: "#00334D" }}>
          <div className="flex w-full items-center justify-between px-4 sm:px-6 md:px-10 py-1">
            {/* Left Navigation Links */}
            <div className="hidden md:flex w-1/2 items-center justify-end space-x-4 lg:space-x-[100px]">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  navLinkStyles({ isActive, isHovered: hoveredLink === "home" })
                }
                className="text-[#fcfcfc] hover:text-[#F9920A] transform transition-all duration-300"
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                style={({ isActive }) =>
                  navLinkStyles({ isActive, isHovered: hoveredLink === "about" })
                }
                className="text-[#fcfcfc] hover:text-[#F9920A] transform transition-all duration-300"
                onMouseEnter={() => setHoveredLink("about")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About Us
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative">
                <motion.button
                  onMouseEnter={() => {
                    setIsServicesOpen(true);
                    setIsServicesHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setIsServicesHovered(false);
                  }}
                  className="text-sm font-normal flex items-center text-[#fcfcfc] hover:text-[#F9920A] transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: isServicesHovered ? "#F9920A" : "#fcfcfc",
                    ...hoverTransition,
                  }}
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
                        onMouseEnter={() => {
                          setIsEducationHover(true);
                          setIsEducationButtonHovered(true);
                        }}
                        onMouseLeave={() => {
                          setIsEducationHover(false);
                          setIsEducationButtonHovered(false);
                        }}
                        className="block px-4 py-2 text-sm text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 w-full text-left transition-all duration-300"
                        style={{
                          color: isEducationButtonHovered ? "#F9920A" : "#00334D",
                          ...hoverTransition,
                        }}
                      >
                        EDUCATION
                      </button>
                      <NavLink
                        to="/services/documentation-assistance"
                        style={({ isActive }) =>
                          navLinkDropdownStyles({
                            isActive,
                            isHovered: hoveredLink === "documentation",
                          })
                        }
                        className="block px-4 py-2 text-sm text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                        onMouseEnter={() => setHoveredLink("documentation")}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        DOCUMENTATION ASSISTANCE
                      </NavLink>
                      <NavLink
                        to="/services/language-lab"
                        style={({ isActive }) =>
                          navLinkDropdownStyles({
                            isActive,
                            isHovered: hoveredLink === "language",
                          })
                        }
                        className="block px-4 py-2 text-sm text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                        onMouseEnter={() => setHoveredLink("language")}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        LANGUAGE LAB
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
                            style={({ isActive }) =>
                              navLinkDropdownStyles({
                                isActive,
                                isHovered: hoveredLink === "country",
                              })
                            }
                            className="block px-4 py-2 text-sm text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                            onMouseEnter={() => setHoveredLink("country")}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            COUNTRY
                          </NavLink>
                          <NavLink
                            to="/services/education/course"
                            style={({ isActive }) =>
                              navLinkDropdownStyles({
                                isActive,
                                isHovered: hoveredLink === "course",
                              })
                            }
                            className="block px-4 py-2 text-sm text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                            onMouseEnter={() => setHoveredLink("course")}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            COURSE
                          </NavLink>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Logo */}
            <Link to="/" className="relative w-1/3 flex justify-center">
              <img
                src={logo}
                alt="Crossroads Logo"
                className="relative sm:relative lg:absolute min-w-auto sm:min-w-auto md:min-w-auto lg:min-w-[280px] h-14 sm:h-14 md:h-16 lg:h-20 bottom-0 sm:bottom-0 md:bottom-8 lg:-bottom-2 py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0"
              />
            </Link>

            {/* Right Navigation Links */}
            <div className="hidden md:flex w-1/2 items-center justify-start space-x-4 lg:space-x-22">
              <NavLink
                to="/testimonials"
                style={({ isActive }) =>
                  navLinkStyles({
                    isActive,
                    isHovered: hoveredLink === "testimonials",
                  })
                }
                className="text-[#fcfcfc] hover:text-[#F9920A] transform transition-all duration-300"
                onMouseEnter={() => setHoveredLink("testimonials")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Testimonials
              </NavLink>
              <NavLink
                to="/blogs"
                style={({ isActive }) =>
                  navLinkStyles({ isActive, isHovered: hoveredLink === "blogs" })
                }
                className="text-[#fcfcfc] hover:text-[#F9920A] transform transition-all duration-300"
                onMouseEnter={() => setHoveredLink("blogs")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/services/education/course"
                style={({ isActive }) =>
                  navLinkStyles({ isActive, isHovered: hoveredLink === "/services/education/course" })
                }
                className="text-[#fcfcfc] hover:text-[#F9920A] transform transition-all duration-300"
                onMouseEnter={() => setHoveredLink("/services/education/course")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Find a Course
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden z-50">
              <button
                onClick={toggleMenu}
                className="text-[#fcfcfc] hover:text-[#F9920A] transition-all duration-300 focus:outline-none"
                onMouseEnter={() => setHoveredLink("menudots")}
                onMouseLeave={() => setHoveredLink(null)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <MenuDots
                  className="w-8 h-8"
                  style={{
                    color: hoveredLink === "menudots" ? "#F9920A" : "#fcfcfc",
                    ...hoverTransition,
                  }}
                />
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
            className="fixed top-12 left-0 right-0 grid items-center justify-start space-y-4 p-4 text-gray-100 w-full md:hidden z-40"
            style={{ backgroundColor: "#00334D" }}
            onMouseLeave={() => {
              setIsMenuOpen(false);
              setIsServicesOpen(false);
            }}
          >
            <NavLink
              to="/"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive,
                  isHovered: hoveredLink === "mobile-home",
                })
              }
              className="pt-16 px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-home")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive,
                  isHovered: hoveredLink === "mobile-about",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-about")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <div className="w-full">
              <button
                onClick={toggleServices}
                className="px-4 py-2 text-left text-sm flex items-center justify-center text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
                style={{
                  color: isServicesHovered ? "#F9920A" : "#fcfcfc",
                  ...hoverTransition,
                }}
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
                      onMouseEnter={() => {
                        setIsEducationHover(true);
                        setIsEducationButtonHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsEducationHover(false);
                        setIsEducationButtonHovered(false);
                      }}
                      className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300 w-full text-left"
                      style={{
                        color: isEducationButtonHovered ? "#F9920A" : "#00334D",
                        ...hoverTransition,
                      }}
                    >
                      Education
                    </button>
                    <NavLink
                      to="/services/documentation-assistance"
                      style={({ isActive }) =>
                        navLinkDropdownStyles({
                          isActive,
                          isHovered: hoveredLink === "mobile-documentation",
                        })
                      }
                      className="block px-4 py-2 text-[#00334D] text-sm hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                      onMouseEnter={() => setHoveredLink("mobile-documentation")}
                      onMouseLeave={() => setHoveredLink(null)}
                      onClick={toggleMenu}
                    >
                      Documentation Assistance
                    </NavLink>
                    <NavLink
                      to="/services/language-lab"
                      style={({ isActive }) =>
                        navLinkDropdownStyles({
                          isActive,
                          isHovered: hoveredLink === "mobile-language",
                        })
                      }
                      className="block px-4 py-2 text-[#00334D] text-sm hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
                      onMouseEnter={() => setHoveredLink("mobile-language")}
                      onMouseLeave={() => setHoveredLink(null)}
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
                        className="ml-10 mt-2 w-[200px] bg-[#e5e5e5] shadow-md"
                      >
                        <NavLink
                          to="/services/education/country"
                          style={({ isActive }) =>
                            navLinkDropdownStyles({
                              isActive,
                              isHovered: hoveredLink === "mobile-country",
                            })
                          }
                          className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 text-sm transition-all duration-300"
                          onMouseEnter={() => setHoveredLink("mobile-country")}
                          onMouseLeave={() => setHoveredLink(null)}
                          onClick={toggleMenu}
                        >
                          Country
                        </NavLink>
                        <NavLink
                          to="/services/education/course"
                          style={({ isActive }) =>
                            navLinkDropdownStyles({
                              isActive,
                              isHovered: hoveredLink === "mobile-course",
                            })
                          }
                          className="block px-4 py-2 text-[#00334D] hover:text-[#F9920A] hover:bg-[#F9920A]/10 text-sm transition-all duration-300"
                          onMouseEnter={() => setHoveredLink("mobile-course")}
                          onMouseLeave={() => setHoveredLink(null)}
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
              to="/testimonials"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive,
                  isHovered: hoveredLink === "mobile-testimonials",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-testimonials")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/blogs"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive,
                  isHovered: hoveredLink === "mobile-blogs",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-blogs")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/services/education/course"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive,
                  isHovered: hoveredLink === "mobile-find-a-course",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-find-a-course")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={toggleMenu}
            >
              Find a Course
            </NavLink>
            <NavLink
              to="/admin-login"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive: isAdminLoginActive,
                  isHovered: hoveredLink === "mobile-admin-login",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-admin-login")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => {
                window.open("https://crossroadsapp.in/", "_blank");
                toggleMenu();
              }}
            >
              Admin Login
            </NavLink>
            <NavLink
              to="/candidate-login"
              style={({ isActive }) =>
                navLinkStyles({
                  isActive: isCandidateLoginActive,
                  isHovered: hoveredLink === "mobile-candidate-login",
                })
              }
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-candidate-login")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => {
                window.open("https://crossroadsapp.in/candidate-login/", "_blank");
                toggleMenu();
              }}
            >
              Candidate Login
            </NavLink>
            <button
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-contact-us")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => {
                openModal();
                toggleMenu();
              }}
            >
              Contact Us
            </button>
            <button
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-email")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => {
                window.location.href = "mailto:info@crossroadsge.com";
                toggleMenu();
              }}
            >
              Email: info@crossroadsge.com
            </button>
            <button
              className="px-4 py-2 w-full text-left text-sm text-[#fcfcfc] hover:text-[#F9920A] hover:bg-[#F9920A]/10 transition-all duration-300"
              onMouseEnter={() => setHoveredLink("mobile-call")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => {
                window.location.href = "tel:+919539688800";
                toggleMenu();
              }}
            >
              Call: +91 95396 88800
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        label="Get in Touch"
        className="gradient-button text-sm text-[#fcfcfc] -rotate-90 shadow-lg z-50 fixed top-1/2 py-3 px-8 -right-13.5 transform -translate-y-1/2"
        onClick={openModal}
      />

      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;