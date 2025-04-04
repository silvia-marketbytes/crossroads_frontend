import React, { useState, Suspense, lazy } from 'react';
import Hero from './UiComponents/Hero';
import ServicesSection from './UiComponents/SevicesSection';
import AboutSection from './UiComponents/AboutSection';
import CourseSection from './UiComponents/CourseSection';
import FreeEducationSection from './UiComponents/FreeEducationSection';
import MBBSSection from './UiComponents/MBBSSection';
import NewsEventsSection from './UiComponents/NewsEventsSection';
import TestimonialsSection from './UiComponents/TestimonialsSection';
import ContactSection from './UiComponents/ContactSection';

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero slides={slides} setSlides={setSlides} setError={setError} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FreeEducationSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MBBSSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsEventsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Home;
