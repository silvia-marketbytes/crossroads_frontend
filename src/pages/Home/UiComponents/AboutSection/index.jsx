import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-10 sm:py-13">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8'>
          <div className='absolute w-full h-6 bg-white -top-2'></div>
          <h3 className="text-2xl font-semibold text-[#00334D] uppercase mb-2">About Us</h3>
          <h3 className="text-3xl font-bold text-end mb-2">
            <span style={{ color: '#00334D' }}>At </span>
            <span style={{ color: '#F9920A' }}>Crossroads</span>
            <span style={{ color: '#00334D' }}> we tailor our guidance</span>
          </h3>
          <div className='absolute w-full h-6 bg-white -bottom-2'></div>
        </div>
        <div className='w-1/2 grid items-center justify-start text-start px-8'>
          <p className="text-lg text-gray-600 mb-6">
            We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our experts are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers.
          </p>
          <Link to="/Aboutus" className="text-[#F9920A] text-lg hover:underline">Read More →</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;