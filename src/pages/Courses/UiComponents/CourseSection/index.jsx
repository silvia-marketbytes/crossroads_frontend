import React, { useState } from 'react';
import CourseCard from '../../../../components/UiComponents/CourseCard/index';

// Placeholder images (replace with actual paths)
import mbbsImg from '../../../../assets/Courses/mbbs.png';
import ausbildungImg from '../../../../assets/Courses/ausbildung.png';
import nursingImg from '../../../../assets/Courses/nursing.png';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const tabs = ['All Courses', 'Professional', "Bachelor's", 'PhD', "Master's"];

  const courses = [
    {
      title: 'MBBS',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: mbbsImg,
      category: 'All Courses',
    },
    {
      title: 'Ausbildung',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: ausbildungImg,
      category: 'All Courses',
    },
    {
      title: 'Nursing',
      description:
        'We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs.',
      imageSrc: nursingImg,
      category: 'All Courses',
    },
  ];

  const filteredCourses =
    activeTab === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-950 uppercase mb-2">
            Popular Courses
          </p>
          <h2 className="text-3xl font-bold text-blue-950">
            Academic <span className="text-orange-500">Courses</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mt-6">
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

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              imageSrc={course.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;