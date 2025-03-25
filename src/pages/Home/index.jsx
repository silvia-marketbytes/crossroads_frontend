//src->pages->Home->index.jsx
import React, { Suspense, lazy } from 'react';
import ServicesSection from '../Services/UiComponents/SevicesSection';
import TestimonialsSection from '../Testimonials/UiComponents/TestimonialsSection';
const Hero = lazy(() => import('./UiComponents/Hero'));
const AboutSection = lazy(() => import('../AboutUs/UiComponents/AboutSection'));
const CourseSection = lazy(() => import('../Courses/UiComponents/CourseSection'));
const FreeEducationSection = lazy(() => import('../FreeEducation/UiComponents/FreeEducationSection'));
const MBBSSection = lazy(() => import('../MBBS/UiComponents/MBBSSection'));
const NewsEvents = lazy(() => import('../NewsEvents'));
const ContactSection = lazy(() => import('../Contact/UiComponents/ContactSection'));



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
      {/* MBBS Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <MBBSSection />
      </Suspense>
      {/* News & Events Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <NewsEvents />
      </Suspense>
       {/* Testimonials Section */}
       <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <TestimonialsSection />
      </Suspense>
      {/* Contact Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ContactSection />
      </Suspense>
      {/* Footer Section
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Footer />
      </Suspense> */}
      
    </div>
  );
};

export default Home;