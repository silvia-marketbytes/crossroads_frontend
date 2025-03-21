import React from 'react';

const CourseCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)]">
      {/* Image Container */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      {/* Text Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-950">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          More Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;