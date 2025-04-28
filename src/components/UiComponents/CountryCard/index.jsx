import React from 'react';
 
const CountryCard = ({ name, flagSrc, borderOrientation = 'to bottom' }) => {
  return (
    <>
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
            animation: borderRotate 40s linear infinite;
          }
        `}
      </style>
 
      <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
        <div className="relative overflow-hidden w-50 h-50">
          <div className="relative">
            <img
              src={flagSrc}
              alt={`${name} flag`}
              className="w-50 h-50 rounded-full border-3 border-transparent transition-transform duration-200 hover:scale-105 p-1.5"
            />
            <div
              className="absolute inset-0 rounded-full animate-border-rotate"
              style={{
                background: `linear-gradient(${borderOrientation}, #F9920A 50%, #00334D 50%)`,
                padding: '2px',
                WebkitMask:
                  'radial-gradient(circle at center, transparent 60%, black 60%)',
                mask: 'radial-gradient(circle at center, transparent 60%, black 60%)',
              }}
            />
          </div>
        </div>
        <p
          className="mt-3 font-semibold text-lg"
          style={{ color: '#00334D' }}
        >
          {name}
        </p>
      </div>
    </>
  );
};
 
export default CountryCard;