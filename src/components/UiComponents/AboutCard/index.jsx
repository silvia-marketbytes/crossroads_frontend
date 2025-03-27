import React from 'react';

const AboutCard = ({
  hasShadow = false,
  subheading,
  heading,
  description,
  linkText,
  linkHref = '#',
}) => {
  // Split the heading into two parts: "At Crossroads" and the rest
  const splitHeading = heading ? heading.split(' ') : [];
  const firstPart = splitHeading.slice(0, 2).join(' '); // "At Crossroads"
  const secondPart = splitHeading.slice(2).join(' '); // "we tailor our guidance"

  // Check if this is the heading card (first card) or description card (second card)
  const isHeadingCard = heading && !description;

  return (
    <div
      className={`bg-white p-6 sm:p-8 rounded-lg ${
        hasShadow ? 'shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)]' : ''
      } flex items-start`}
    >
      {isHeadingCard && <div className="flex-grow"></div>}
      
      <div
        className={`${
          isHeadingCard ? 'text-left md:text-end space-y-4 sm:space-y-6' : 'text-justify'
        } w-full`}
      >
        {subheading && (
          <p
            className={`font-semibold text-blue-950 uppercase mb-2 font-poppins ${
              isHeadingCard ? 'text-sm sm:text-base' : 'text-sm'
            }`}
          >
            {subheading}
          </p>
        )}
        {heading && (
          <h2
            className={`font-bold font-poppins ${
              isHeadingCard ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-3xl'
            }`}
          >
            <span className={isHeadingCard ? 'inline-block mb-2 sm:mb-4' : ''}>
              {firstPart.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={
                    word === 'Crossroads' ? 'text-orange-500' : 'text-blue-950'
                  }
                >
                  {word}{' '}
                </span>
              ))}
            </span>
            {secondPart && (
              <>
                <br />
                <span className="text-blue-950">{secondPart}</span>
              </>
            )}
          </h2>
        )}
        {description && (
          <>
            <p className="text-gray-500 mt-4 font-poppins text-start">
              {description}
            </p>
            {linkText && (
              <a
                href={linkHref}
                className="mt-4 inline-flex items-center text-blue-950 font-semibold hover:text-orange-500 font-poppins"
              >
                {linkText}
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AboutCard;