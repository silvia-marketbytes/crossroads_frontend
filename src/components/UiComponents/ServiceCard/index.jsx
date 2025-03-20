import React from 'react';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="relative ">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h- object-cover rounded-lg"
        />
        {/* Orange Arrow Overlay */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
      {/* Text Content */}
      <h3 className="mt-4 text-xl font-semibold text-blue-950">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;