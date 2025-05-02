import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';


// Slick CSS for slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Placeholder images (replace with actual imports or URLs)
import mbbsImg from '../../../../assets/Courses/mbbs.png';
import ausbildungImg from '../../../../assets/Courses/ausbildung.png';
import nursingImg from '../../../../assets/Courses/nursing.png';
import bachelorImg from '../../../../assets/Courses/bachelors.png';
import masterImg from '../../../../assets/Courses/masters.png';
import healthcareImg from '../../../../assets/Courses/healthcare.png';
import CourseCard from '../../../../components/UiComponents/CourseCard';

const CourseSection = ({ showViewMore = false, onViewMore, showPagination = false }) => {
  const [activeTab, setActiveTab] = useState('All Courses');
  const [currentPage, setCurrentPage] = useState(1);
  const COURSES_PER_PAGE = 6;
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const tabs = ['All Courses', 'Professional', "Bachelor's", "Master's"];

  const courses = [
    {
      title: 'MBBS',
      description: 'Comprehensive educational support for medical studies.',
      imageSrc: mbbsImg,
      category: 'Professional',
      navigateTo: '/services/education/course/mbbs',
    },
    {
      title: 'Ausbildung',
      description: 'Vocational training programs with expert guidance.',
      imageSrc: ausbildungImg,
      category: 'Professional',
      navigateTo: '/services/education/course',
    },
    {
      title: 'Nursing',
      description: 'Training for nursing professionals with job placement support.',
      imageSrc: nursingImg,
      category: 'Professional',
      navigateTo: '/services/education/course',
    },
    {
      title: "Bachelor's",
      description: 'Undergraduate programs tailored to your career goals.',
      imageSrc: bachelorImg,
      category: "Bachelor's",
      navigateTo: '/services/education/course',
    },
    {
      title: "Master's",
      description: 'Advanced degrees with comprehensive support.',
      imageSrc: masterImg,
      category: "Master's",
      navigateTo: '/services/education/course',
    },
    {
      title: 'HealthCare Programs',
      description: 'Specialized healthcare training programs.',
      imageSrc: healthcareImg,
      category: 'Professional',
      navigateTo: '/services/education/course',
    },
    {
      title: 'Advanced Nursing',
      description: 'Specialized nursing programs for advanced healthcare roles.',
      imageSrc: nursingImg,
      category: 'Professional',
      navigateTo: '/services/education/course',
    },
  ];

  const filteredCourses = () => {
    if (activeTab === 'All Courses') {
      return courses;
    }
    return courses.filter((course) => course.category === activeTab);
  };

  const totalCourses = filteredCourses().length;
  const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);

  const indexOfLastCourse = currentPage * COURSES_PER_PAGE;
  const indexOfFirstCourse = indexOfLastCourse - COURSES_PER_PAGE;
  const displayedCourses = filteredCourses().slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewMoreClick = () => {
    if (onViewMore) {
      onViewMore();
    } else {
      navigate('/services/education/course');
    }
  };

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: displayedCourses.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
  };

  return (
    <section ref={sectionRef} className="py-14 sm:py-14 lg:py-20 bg-gray-100">
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
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-4 sm:gap-y-4 justify-center sm:space-x-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
                if (sectionRef.current) {
                  sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 w-full sm:w-auto ${
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
        <div className="mt-14">
          {displayedCourses.length > 0 ? (
            <>
              {/* Mobile Slider View */}
              <div className="block sm:hidden">
                <Slider {...sliderSettings}>
                  {displayedCourses.map((course, index) => (
                    <div key={index} className="px-2">
                      <CourseCard
                        title={course.title}
                        description={course.description}
                        imageSrc={course.imageSrc}
                        navigateTo={course.navigateTo}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Desktop Grid View */}
              <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                {displayedCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    imageSrc={course.imageSrc}
                    navigateTo={course.navigateTo}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              <p className="text-lg font-semibold">No courses available</p>
              <p className="mt-2">Check back later for updates!</p>
            </div>
          )}
        </div>

        {/* Pagination or View More Button */}
        {showPagination && totalPages > 1 ? (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#F9920A] hover:text-[#e07a00]'
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === number
                    ? 'bg-[#F9920A] text-white'
                    : 'text-[#F9920A] hover:text-[#e07a00]'
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#F9920A] hover:text-[#e07a00]'
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        ) : showViewMore && filteredCourses().length > COURSES_PER_PAGE ? (
          <div className="flex justify-center mt-12 sm:mt-12">
            <button
              onClick={handleViewMoreClick}
              className="px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-transparent border border-[#F9920A] text-sm text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
            >
              View More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CourseSection;