import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, description, imageSrc, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-xl hover:shadow-gray-300 transition-all duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200')}
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
          onClick={handleClick}
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