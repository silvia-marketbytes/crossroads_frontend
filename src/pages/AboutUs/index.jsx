import React, { Suspense, lazy } from 'react';
import AboutUsSection from './UiComponents'; // Import the AboutUsSection component

const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutUsSection />
      </Suspense>

      {/* Optional: Add more sections if needed */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">More About Us</h2>
          <p className="text-center mt-4">
            This is a placeholder for additional content on the About Us page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;