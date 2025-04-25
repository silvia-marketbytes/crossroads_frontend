import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../../../components/UiComponents/CountryCard';
import worldMapBg from '../../../../assets/world-map-bg.png';
 
const FreeEducationSection = () => {
  const countries = [
    { name: 'Austria', flagSrc: '/src/assets/flags/austria.png', borderOrientation: 'to bottom', path: '/Freeeducation/Austria' },
    { name: 'Germany', flagSrc: '/src/assets/flags/germany.png', borderOrientation: 'to right', path: '/Freeeducation/Germany' },
    { name: 'Slovakia', flagSrc: '/src/assets/flags/slovakia.png', borderOrientation: 'to top', path: '/Freeeducation/Slovakia' },
    { name: 'Slovenia', flagSrc: '/src/assets/flags/slovenia.png', borderOrientation: '45deg', path: '/Freeeducation/Slovania' },
    { name: 'Italy', flagSrc: '/src/assets/flags/italy.png', borderOrientation: '135deg', path: '/Freeeducation/Italy' },
  ];
 
  return (
    <section className="pt-20 bg-cover bg-center relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        {/* Two Cards for Text Content */}
        <section className="pt-0 sm:pt-0 lg:pt-0 pb-10 sm:pb-10 lg:pb-20">
          <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8'>
              <div className='absolute w-full h-6 bg-white -top-2'></div>
              <h3 className="grid text-[40px] font-normal text-end mb-2">
                <span style={{ color: '#00334D' }}>Free <span className='font-semibold text-[#F9920A]'>Education</span></span>
              </h3>
              <div className='absolute w-full h-6 bg-white -bottom-2'></div>
            </div>
            <div className='w-1/2 grid items-center justify-start text-start px-8'>
              <p className="text-lg text-gray-600">
                We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.
              </p>
            </div>
          </div>
 
          <div className="grid lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
            <div className="w-full flex flex-col items-center justify-center px-8">
              <h3 className="text-[20px] font-normal text-center text-[#00334D] pb-4">
                Free <span className="font-semibold text-[#F9920A]">Education</span>
              </h3>
              <p className="text-lg text-gray-600 text-center">
                We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.
              </p>
            </div>
          </div>
        </section>
 
        {/* Country Flags Below with Increased Gap */}
        <div
          className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-10 flex-wrap py-4 sm:py-4 lg:py-8"
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