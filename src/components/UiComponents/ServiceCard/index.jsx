import React from 'react';
import { Link } from 'react-router-dom'; // Correct import

const ServiceCard = ({ title, description, imageSrc, navigateTo }) => {
  return (
    <Link to={navigateTo} className="flex flex-col max-w-full lg:max-w-[280px] mx-auto relative group">
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-[10px_10px_15px_rgba(0,0,0,0.2)]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full object-cover transition-all duration-300 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black-200 opacity-0 group-hover:opacity-30 group-hover:bg-[#00334D]/60 transition-opacity duration-300"></div>
        <div className="absolute -bottom-4 -left-4 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-orange-400 w-44 h-44 rounded-full absolute z-10 opacity-60"></div>
          <div className="relative -top-10 left-9 flex items-center justify-center z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.967"
              height="23.249"
              viewBox="0 0 31.967 23.249"
              opacity="0.5"
            >
              <path
                id="next"
                d="M32.541,14.6,22.37,4.426A1.453,1.453,0,1,0,20.315,6.48l7.691,7.691H2.453a1.453,1.453,0,1,0,0,2.906H28.006l-7.691,7.691a1.453,1.453,0,1,0,2.055,2.055L32.541,16.652a1.453,1.453,0,0,0,0-2.055Z"
                transform="translate(-1 -4)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.967"
              height="23.249"
              viewBox="0 0 31.967 23.249"
            >
              <path
                id="next"
                d="M32.541,14.6,22.37,4.426A1.453,1.453,0,1,0,20.315,6.48l7.691,7.691H2.453a1.453,1.453,0,1,0,0,2.906H28.006l-7.691,7.691a1.453,1.453,0,1,0,2.055,2.055L32.541,16.652a1.453,1.453,0,0,0,0-2.055Z"
                transform="translate(-1 -4)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="mt-4 text-lg font-medium text-[#00334D]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="mt-2 text-md font-normal text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Link>
  );
};

export default ServiceCard;