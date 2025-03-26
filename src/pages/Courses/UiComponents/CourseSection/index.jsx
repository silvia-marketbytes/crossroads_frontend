import React, { useState } from 'react';
import CourseCard from '../../../../components/UiComponents/CourseCard/index';

// Placeholder images (replace with actual paths)
import mbbsImg from '../../../../assets/Courses/mbbs.png';
import ausbildungImg from '../../../../assets/Courses/ausbildung.png';
import nursingImg from '../../../../assets/Courses/nursing.png';
import bachelorImg from '../../../../assets/Courses/bachelors.png';
import masterImg from '../../../../assets/Courses/masters.png';
import healthcareImg from '../../../../assets/Courses/healthcare.png';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const tabs = ['All Courses', 'Professional', "Bachelor's", 'PhD', "Master's"];

  const courses = [
    {
      title: 'MBBS',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: mbbsImg,
      category: 'Professional',
    },
    {
      title: 'Ausbildung',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: ausbildungImg,
      category: 'Professional',
    },
    {
      title: 'Nursing',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: nursingImg,
      category: 'Professional',
    },
    {
      title: "Bachelor's",
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: bachelorImg,
      category: "Bachelor's",
    },
    {
      title: "Master's",
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: masterImg,
      category: "Master's",
    },
    {
      title: 'HealthCare Programs',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: healthcareImg,
      category: 'Professional',
    },
  ];

  // Filtering logic
  const filteredCourses = () => {
    if (activeTab === 'All Courses') {
      return courses; // Show all courses
    } else if (activeTab === 'Professional') {
      // Show professional courses, including Bachelor's and Master's as subcategories
      return courses.filter((course) =>
        ['Professional', "Bachelor's", "Master's"].includes(course.category)
      );
    } else {
      // Filter by specific category (e.g., Bachelor's, Master's, PhD)
      return courses.filter((course) => course.category === activeTab);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xl font-semibold text-blue-950 uppercase mb-2">
            Popular Courses
          </p>
          <h2 className="text-4xl font-bold text-blue-950">
            Academic <span className="text-orange-500">Courses</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-y-4 justify-center space-x-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? 'bg-orange-500 text-white'
                  : 'border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards or No Data Message */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {filteredCourses().length > 0 ? (
            filteredCourses().map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              <p className="text-lg font-semibold">No courses available</p>
              <p className="mt-2">Check back later for updates!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;