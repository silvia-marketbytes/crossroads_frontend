import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Using FaArrowRight for the -> arrow

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
        {/* Orange Cutout Effect with Single Right Arrow */}
        <div className="absolute bottom-0 left-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {/* Outer Orange Circle */}
          <div className="bg-orange-400 w-48 h-48 rounded-full absolute z-10 opacity-85"></div>
          {/* Single Right Arrow Inside the Cutout */}
          <div className="relative -top-10 left-10 flex items-center justify-center z-30">
            <FaArrowRight className="text-white" size={24} />
          </div>
        </div>
        {/* Single Right Arrow on Hover (Without Orange Cutout) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center">
            <FaArrowRight className="text-white" size={24} />
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