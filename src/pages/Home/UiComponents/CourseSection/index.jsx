import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
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
  const COURSES_PER_PAGE = 6;
  const navigate = useNavigate();

  const tabs = ['All Courses', 'Professional', "Bachelor's", "Master's"];

  const courses = [
    {
      title: 'MBBS',
      description: 'Comprehensive educational support for medical studies.',
      imageSrc: mbbsImg,
      category: 'Professional',
    },
    {
      title: 'Ausbildung',
      description: 'Vocational training programs with expert guidance.',
      imageSrc: ausbildungImg,
      category: 'Professional',
    },
    {
      title: 'Nursing',
      description: 'Training for nursing professionals with job placement support.',
      imageSrc: nursingImg,
      category: 'Professional',
    },
    {
      title: "Bachelor's",
      description: 'Undergraduate programs tailored to your career goals.',
      imageSrc: bachelorImg,
      category: "Bachelor's",
    },
    {
      title: "Master's",
      description: 'Advanced degrees with comprehensive support.',
      imageSrc: masterImg,
      category: "Master's",
    },
    {
      title: 'HealthCare Programs',
      description: 'Specialized healthcare training programs.',
      imageSrc: healthcareImg,
      category: 'Professional',
    },
    {
      title: 'Advanced Nursing',
      description: 'Specialized nursing programs for advanced healthcare roles.',
      imageSrc: nursingImg,
      category: 'Professional',
    },
  ];

  const filteredCourses = () => {
    if (activeTab === 'All Courses') {
      return courses;
    }
    return courses.filter((course) => course.category === activeTab);
  };

  const displayedCourses = filteredCourses().slice(0, COURSES_PER_PAGE);

  const handleViewMore = () => {
    navigate('/services/education/course'); // Redirect to the course page
  };

  return (
    <section className="py-14 sm:py-14 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xl font-semibold uppercase mb-2" style={{ color: '#00334D' }}>
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
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#F9920A] text-white'
                  : 'bg-transparent text-[#00334D] border border-[#F9920A] hover:bg-[#F9920A] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Cards or No Data Message */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
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

        {/* View More Button (Redirect to Course Page) */}
        {filteredCourses().length > COURSES_PER_PAGE && (
          <div className="flex justify-center mt-12 sm:mt-12">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-transparent border border-[#F9920A] text-sm text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
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