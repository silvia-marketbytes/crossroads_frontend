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
  const [showAll, setShowAll] = useState(false);
  const COURSES_PER_PAGE = 6;
 
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
    {
      title: 'Advanced Nursing',
      description:
        'Specialized nursing programs for advanced healthcare roles.',
      imageSrc: nursingImg,
      category: 'Professional',
    },
  ];
 
  const filteredCourses = () => {
    if (activeTab === 'All Courses') {
      return courses;
    } else if (activeTab === 'Professional') {
      return courses.filter((course) =>
        ['Professional', "Bachelor's", "Master's"].includes(course.category)
      );
    } else {
      return courses.filter((course) => course.category === activeTab);
    }
  };
 
  const displayedCourses = showAll
    ? filteredCourses()
    : filteredCourses().slice(0, COURSES_PER_PAGE);
 
  const handleViewMore = () => {
    setShowAll(true);
  };
 
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p
            className="text-xl font-semibold uppercase mb-2"
            style={{ color: '#00334D' }}
          >
            Popular Courses
          </p>
          <h2 className="text-4xl font-bold">
            <span style={{ color: '#00334D' }}>Academic </span>
            <span style={{ color: '#F9920A' }}>Courses</span>
          </h2>
        </div>
 
        {/* Tabs */}
        <div className="flex flex-wrap gap-y-4 justify-center space-x-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab ? 'text-white' : 'text-[#F9920A] border border-[#F9920A]'
              }`}
              style={{
                backgroundColor: activeTab === tab ? '#F9920A' : 'transparent',
              }}
              onMouseEnter={(e) =>
                activeTab !== tab &&
                ((e.target.style.backgroundColor = '#F9920A'),
                (e.target.style.color = 'white'))
              }
              onMouseLeave={(e) =>
                activeTab !== tab &&
                ((e.target.style.backgroundColor = 'transparent'),
                (e.target.style.color = '#F9920A'))
              }
            >
              {tab}
            </button>
          ))}
        </div>
 
        {/* Course Cards or No Data Message */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course, index) => (
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
 
        {/* View More Button */}
        {filteredCourses().length > COURSES_PER_PAGE && !showAll && (
          <div className="flex justify-center mt-25">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 rounded-full font-semibold transition border border-[#F9920A] text-[#F9920A]"
              onMouseEnter={(e) => (
                (e.target.style.backgroundColor = '#F9920A'),
                (e.target.style.color = 'white')
              )}
              onMouseLeave={(e) => (
                (e.target.style.backgroundColor = 'transparent'),
                (e.target.style.color = '#F9920A')
              )}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
 
export default CourseSection;