import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Framer Motion variants for mobile animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="pt-0 sm:pt-10 lg:pt-0 pb-16 sm:pb-16 lg:pb-20">
      {/* Desktop View */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8">
          <div className="absolute w-full h-6 bg-white -top-2"></div>
          <h3 className="text-xl font-normal text-[#00334D] uppercase mb-2">About Us</h3>
          <h3 className="grid text-[40px] font-normal text-end mb-2">
            <span style={{ color: '#00334D' }}>
              At <span className="font-semibold text-[#F9920A]">Crossroads</span>
            </span>
            <span style={{ color: '#00334D' }}>we tailor our guidance</span>
          </h3>
          <div className="absolute w-full h-6 bg-white -bottom-2"></div>
        </div>
        <div className="w-1/2 grid items-center justify-start text-start px-8">
          <p className="text-lg text-gray-600 mb-6">
            We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our experts are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers.
          </p>
          <Link to="/about-us" className="text-[#00334D] hover:text-[#F9920A] transition-all duration-300 text-md">
            Read More →
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <motion.div
        className="grid lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-full flex flex-col items-center justify-center px-8">
          <motion.h3
            className="text-base font-normal text-[#00334D] uppercase mb-1 text-center"
            variants={itemVariants}
          >
            About Us
          </motion.h3>
          <motion.h3
            className="text-2xl font-normal text-center text-[#00334D] mb-2"
            variants={itemVariants}
          >
            At <span className="font-semibold text-[#F9920A]">Crossroads</span> we tailor our guidance
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 mb-3 text-center"
            variants={itemVariants}
          >
            We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our experts are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/about-us"
              className="text-[#00334D] hover:text-[#F9920A] transition-all duration-300 text-sm"
            >
              Read More →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;