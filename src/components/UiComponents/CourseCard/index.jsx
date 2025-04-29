import React from 'react';
 
const CourseCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-xl hover:shadow-gray-300 transition-all duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-semibold"
          style={{ color: '#00334D' }}
        >
          {title}
        </h3>
        <p className="mt-2 text-gray-500">{description}</p>
        <button
          className="mt-4 px-4 py-2 text-sm text-white rounded-full transition"
          style={{ backgroundColor: '#F9920A' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00334D')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#F9920A')}
        >
          More Details
        </button>
      </div>
    </div>
  );
};
 
export default CourseCard;