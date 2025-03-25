// components/UiComponents/ServiceCard/index.jsx
import React from 'react';

const ServiceCard = ({ title, description, imageSrc, isCenter }) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      {/* Image Container */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-80 object-cover rounded-lg transition-all duration-300 ${
            isCenter ? 'opacity-100' : 'opacity-80'
          }`}
        />
      </div>
      {/* Text Content */}
      <h3 className="mt-4 text-2xl font-semibold text-blue-950">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;