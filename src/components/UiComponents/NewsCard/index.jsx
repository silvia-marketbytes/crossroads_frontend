import React from 'react';
import { Link } from 'react-router-dom';
 
const NewsCard = ({ imageSrc, title, description, link, openModal }) => {
  return (
    <div className="news-card overflow-hidden">
      <div className="relative mx-3 mt-4">
        <img
          src={imageSrc}
          alt={title}
          className="grayscale rounded-xl w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            console.error(`Failed to load image: ${imageSrc}`);
          }}
        />
        <button
          className="register-btn absolute top-4 left-4 text-white px-4 py-2 rounded-full"
          style={{ backgroundColor: '#F9920A' }}
          onClick={() => openModal(title)}
        >
          Register Now
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold" style={{ color: '#00334D' }}>
          {title}
        </h3>
        <p className="mt-2 text-gray-600 flex-grow">{description}</p>
        <Link
          to={link}
          className="read-more mt-2 inline-flex items-center"
          style={{ color: '#00334D' }}
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
 
export default NewsCard;
 