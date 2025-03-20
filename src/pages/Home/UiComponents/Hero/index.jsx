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
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let your <span className="text-orange-400">MBBS</span> Dreams Take Wings Beyond Borders
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>
        <div className="mt-6 flex space-x-4">
          <Button
            label="Apply Now"
            variant="primary"
            className="px-6 py-3 rounded-full" // Additional styling
          />
          <Button
            label="Contact Us"
            variant="secondary"
            className="px-6 py-3 rounded-full" // Additional styling
          />
        </div>
      </div>

      {/* Get in Touch Button (Vertical) */}
      <Button
        label="Get in Touch"
        variant="secondary" // Using the orange style
        className="fixed hidden md:block -right-14 top-1/2 transform -translate-y-1/4 text-white px-6 py-3 rounded-none rotate-270"
      />
    </div>
  );
};

export default Hero;