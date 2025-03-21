//src->pages->Home->index.jsx
import React, { Suspense, lazy } from 'react';
import ServicesSection from '../Services/UiComponents/SevicesSection';

const AboutSection = lazy(() => import('../AboutUs/UiComponents/AboutSection'));
const CourseSection = lazy(() => import('../Courses/UiComponents/CourseSection'));
const FreeEducationSection = lazy(() => import('../FreeEducation/UiComponents/FreeEducationSection'));
const Hero = lazy(() => import('./UiComponents/Hero'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Hero />
      </Suspense>
       {/* Service Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ServicesSection />
      </Suspense>
      {/* About Us Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutSection />
      </Suspense>
      {/* Course Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <CourseSection />
      </Suspense>
      {/* Free Education Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <FreeEducationSection />
      </Suspense>
      
    </div>
  );
};

export default Home;