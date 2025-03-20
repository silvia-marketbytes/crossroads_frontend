import React, { Suspense, lazy } from 'react';
import ServicesSection from '../Services/UiComponents/SevicesSection';
const Hero = lazy(() => import('./UiComponents/Hero'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ServicesSection />
      </Suspense>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Welcome to Crossroads</h2>
          <p className="text-center mt-4">
            This is a placeholder for additional sections like testimonials, blogs, or services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;