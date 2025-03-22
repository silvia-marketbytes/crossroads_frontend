import React, { Suspense, lazy } from 'react';

// Lazy load the MBBSSection component
const MBBSSection = lazy(() => import('./UiComponents/MBBSSection'));

const MBBS = () => {
  return (
    <div>
      {/* MBBS Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <MBBSSection />
      </Suspense>

      {/* Optional: Add more sections if needed */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-950">
            More About MBBS
          </h2>
          <p className="text-center mt-4 text-gray-500">
            This is a placeholder for additional content on the MBBS page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MBBS;