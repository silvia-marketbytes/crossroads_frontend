import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import Modal from '../../../../components/modal';
import heroBg from '/src/assets/hero-bg.png';
import useWindowSize from '/src/Hooks/useWindowSize';
import { AnimatePresence } from 'framer-motion';
 
const Hero = () => {
  const { width } = useWindowSize();
  const heroHeight = width < 768 ? '60vh' : '80vh';
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})`, height: heroHeight }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-8 md:px-42 ml-6 text-white w-full">
        <div className="text-left">
          <h1 className="text-3xl md:text-[56px] font-light leading-tight">
            Let your <span style={{ color: '#F9920A' }} className="font-bold text-7xl">MBBS</span>{' '}
            <span className="block">Dreams Take Wings</span>
            <span className="block">Beyond Borders</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
          </p>
          <div className="mt-6 block lg:flex items-center justify-start space-x-4 w-full">
            <Button
              label="Apply Now"
              variant="primary"
              className="px-6 py-2 rounded-full text-white text-sm bg-[#00334D] hover:bg-[#00334D]/80 transition-all duration-300"
              onClick={openModal}
            />
            <Link to="/Contact-Us">
              <Button
                label="Contact Us"
                variant="secondary"
                className="px-6 py-2 rounded-full text-white text-sm bg-[#F9920A] hover:bg-[#F9920A]/80 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
 
      <style jsx>{`
        .px-6.py-3.rounded-full.text-white.bg-\\[#00334D\\]:hover {
          background-color: #00283A;
        }
        .px-6.py-3.rounded-full.text-white.bg-\\[#F9920A\\]:hover {
          background-color: #E08200;
        }
 
        @media (max-width: 767px) {
          .relative.z-10 {
            padding-left: 1rem;
            padding-right: 1rem;
            margin-left: 0;
          }
          .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .text-7xl {
            font-size: 2.5rem;
          }
          .mt-4.text-lg {
            font-size: 1rem;
            max-width: 100%;
          }
          .mt-6.flex {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
          }
          .px-6.py-3 {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .relative.z-10 {
            padding-left: 2rem;
            padding-right: 2rem;
            margin-left: 1rem;
          }
          .text-3xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .text-7xl {
            font-size: 3rem;
          }
          .mt-4.text-lg {
            font-size: 1.125rem;
          }
          .mt-6.flex {
            flex-direction: row;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
 
export default Hero;