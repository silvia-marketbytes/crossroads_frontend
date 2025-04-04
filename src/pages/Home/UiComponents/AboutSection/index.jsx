import React from 'react';
import { Link } from 'react-router';

const AboutSection = () => {
  return (
    <section className="py-10 sm:py-13">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8'>
          <div className='absolute w-full h-6 bg-white -top-2'>

          </div>
          <h2 className="text-3xl font-bold text-end mb-2">About Us</h2>
          <p className="text-end mb-8">
            At Crossroads, we tailor our guidance to meet your unique needs and aspirations.
          </p>
          <div className='absolute w-full h-6 bg-white -bottom-2'>

          </div>
        </div>
        <div className='w-1/2 grid items-center justify-start text-start px-8'>
          <p>
            We are committed to providing personalized support and resources to help you navigate your educational journey. Our team of experts is dedicated to understanding your goals and challenges, ensuring that you receive the guidance you need to succeed.
          </p>
          <Link to="">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;