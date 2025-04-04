import React from 'react';

const CourseCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-xl hover:shadow-gray-300 transition-all duration-300">
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
        <h3 
          className="text-xl font-semibold"
          style={{ color: '#00334D' }} // Blue for title
        >
          {title}
        </h3>
        <p className="mt-2 text-gray-500">{description}</p>
        <button 
          className="mt-4 px-4 py-2 text-white rounded-full transition"
          style={{ backgroundColor: '#F9920A' }} // Orange for button
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#E08200')} // Darker orange on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#F9920A')} // Back to orange
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;