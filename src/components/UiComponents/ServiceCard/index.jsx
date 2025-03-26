import React from 'react';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto relative group">
      {/* Image Container with Cutout, Hover Effect, and Shadow */}
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-[10px_10px_15px_rgba(0,0,0,0.2)]">
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-85 object-cover transition-all duration-300 opacity-80 group-hover:opacity-100"
        />
        {/* Light Blue Shade on Hover */}
        <div className="absolute inset-0 bg-black-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        {/* Orange Cutout Effect with Custom Right Arrow */}
        <div className="absolute bottom-0 left-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {/* Outer Orange Circle */}
          <div className="bg-orange-400 w-48 h-48 rounded-full absolute z-10 opacity-85"></div>
          {/* Custom Right Arrow Inside the Cutout */}
          <div className="relative -top-10 left-10 flex items-center justify-center z-30">
            <svg
              width="50" // Increased from 48 to 72
              height="36" // Increased from 24 to 36
              viewBox="0 0 72 36" // Adjusted to match new dimensions
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18H60M60 18L48 6M60 18L48 30" // Adjusted coordinates for larger size
                stroke="white"
                strokeWidth="3" // Increased stroke width for better visibility
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Custom Right Arrow on Hover (Without Orange Cutout) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center">
            <svg
              width="55" // Increased from 48 to 72
              height="36" // Increased from 24 to 36
              viewBox="0 0 72 36" // Adjusted to match new dimensions
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18H60M60 18L48 6M60 18L48 30" // Adjusted coordinates for larger size
                stroke="white"
                strokeWidth="3" // Increased stroke width for better visibility
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Text Content */}
      <h3 className="mt-4 text-xl font-semibold text-blue-950">{title}</h3>
      <p className="mt-2 text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;