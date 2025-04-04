import React from 'react';

const CountryCard = ({ name, flagSrc, borderOrientation = 'to bottom' }) => {
  return (
    <>
      {/* Inline CSS for the animation */}
      <style>
        {`
          @keyframes borderRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-border-rotate {
            animation: borderRotate 9s linear infinite;
          }
        `}
      </style>

      <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
        <div className="relative overflow-hidden w-50 h-50">
          {/* Container for the image and the custom border */}
          <div className="relative">
            <img
              src={flagSrc}
              alt={`${name} flag`}
              className="w-50 h-50 rounded-full border-3 border-transparent transition-transform duration-200 hover:scale-105 p-1.5"
            />
            {/* Pseudo-element for the half-orange, half-blue border with animation */}
            <div
              className="absolute inset-0 rounded-full animate-border-rotate"
              style={{
                background: `linear-gradient(${borderOrientation}, #F9920A 50%, #00334D 50%)`, // Orange and Blue border
                padding: '2px', // Reduced border width
                WebkitMask:
                  'radial-gradient(circle at center, transparent 60%, black 60%)',
                mask: 'radial-gradient(circle at center, transparent 60%, black 60%)',
              }}
            />
          </div>
        </div>
        <p 
          className="mt-3 font-semibold text-lg"
          style={{ color: '#00334D' }} // Blue for country name
        >
          {name}
        </p>
      </div>
    </>
  );
};

export default CountryCard;