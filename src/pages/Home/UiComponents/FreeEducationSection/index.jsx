import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../../../components/UiComponents/CountryCard';

// Placeholder for the world map background image
import worldMapBg from '../../../../assets/world-map-bg.png';

const FreeEducationSection = () => {
  const countries = [
    { name: 'Austria', flagSrc: '/src/assets/flags/austria.png', borderOrientation: 'to bottom', path: '/services/education/country/australia' },
    { name: 'Germany', flagSrc: '/src/assets/flags/germany.png', borderOrientation: 'to right', path: '/services/education/country/germany' },
    { name: 'Slovakia', flagSrc: '/src/assets/flags/slovakia.png', borderOrientation: 'to top', path: '/services/education/country/slovakia' }, 
    { name: 'Slovenia', flagSrc: '/src/assets/flags/slovenia.png', borderOrientation: '45deg', path: '/services/education/country/slovakia' }, 
    { name: 'Italy', flagSrc: '/src/assets/flags/italy.png', borderOrientation: '135deg', path: '/services/education/country/italy' }, 
  ];

  return (
    <section className="py-16 bg-cover bg-center relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        {/* Two Cards for Text Content */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
          {/* Card 1: Heading */}
          <div className="bg-white p-8 text-end rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <h2 className="text-4xl font-bold">
              <span style={{ color: '#00334D' }}>Free </span> {/* Blue for "Free" */}
              <span style={{ color: '#F9920A' }}>Education</span> {/* Orange for "Education" */}
            </h2>
          </div>
          {/* Card 2: Description */}
          <div className="bg-white p-8 rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <p className="text-gray-500 text-lg">
              We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.
            </p>
          </div>
        </div>

        {/* Country Flags Below with Increased Gap */}
        <div
          className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-10 flex-wrap py-8"
          style={{ backgroundImage: `url(${worldMapBg})`, width: '100%' }}
        >
          {countries.map((country, index) => (
            <Link to={country.path} key={index}>
              <CountryCard
                name={country.name}
                flagSrc={country.flagSrc}
                borderOrientation={country.borderOrientation}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeEducationSection;
