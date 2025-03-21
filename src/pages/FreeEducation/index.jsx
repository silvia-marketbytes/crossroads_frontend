import React, { Suspense, lazy } from 'react';

// Lazy load the FreeEducationSection component
const FreeEducationSection = lazy(() => import('./UiComponents/FreeEducationSection'));

const FreeEducation = () => {
  return (
    <div>
      {/* Free Education Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <FreeEducationSection />
      </Suspense>

      {/* Optional: Add more sections if needed */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-950">
            More About Free Education
          </h2>
          <p className="text-center mt-4 text-gray-500">
            This is a placeholder for additional content on the Free Education page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FreeEducation;