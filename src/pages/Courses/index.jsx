import React, { Suspense, lazy } from 'react';

// Lazy load the CourseSection component
const CourseSection = lazy(() => import('./UiComponents/CourseSection'));

const Courses = () => {
  return (
    <div>
      {/* Main Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text.
          </p>
        </div>
      </section>

      {/* Course Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <CourseSection />
      </Suspense>

      {/* Placeholder for additional sections */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-950">
            More About Our Courses
          </h2>
          <p className="text-center mt-4 text-gray-600">
            This is a placeholder for additional content related to courses.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Courses;