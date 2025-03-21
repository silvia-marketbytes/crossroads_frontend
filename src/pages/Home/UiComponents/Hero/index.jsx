import React from 'react';
import Button from '../../../../components/Button';
import heroBg from '/src/assets/hero-bg.png';
import useWindowSize from '/src/Hooks/useWindowSize';

const Hero = () => {
  const { width } = useWindowSize();
  const heroHeight = width < 768 ? '60vh' : '80vh';

  return (
    <div
      className="relative bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})`, height: heroHeight }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-20 ml-6 text-white w-full">
        <div className="text-left">
          <h1 className="text-3xl md:text-[56px] font-l leading-tight">
            Let your <span className="text-orange-400 font-bold text-7xl">MBBS</span>{' '}
            <span className="block">Dreams Take Wings</span>
            <span className="block">Beyond Borders</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
          </p>
          <div className="mt-6 flex space-x-4">
            <Button
              label="Apply Now"
              variant="primary"
              className="px-6 py-3 rounded-full bg-blue-950 text-white hover:bg-blue-800"
            />
            <Button
              label="Contact Us"
              variant="secondary"
              className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            />
          </div>
        </div>
      </div>

      {/* Get in Touch Button (Vertical) */}
      <Button
        label="Get in Touch"
        variant="secondary"
        className="fixed hidden md:block -right-14 top-1/2 transform -translate-y-1/4 text-white px-6 py-3 rounded-none rotate-270 bg-orange-500"
      />
    </div>
  );
};

export default Hero;