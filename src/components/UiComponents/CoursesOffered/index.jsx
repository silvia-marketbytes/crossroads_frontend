import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import course1 from "../../../assets/Courses/ausbilung.webp";
import course2 from "../../../assets/courses/Bachelors.webp";
import course3 from "../../../assets/courses/Masters.webp";
import course4 from "../../../assets/courses/Nursing.webp";
import course5 from "../../../assets/courses/mbbs.png";

const CoursesOffered = ({ title }) => {
  const sliderRef = useRef(null);

  const courses = [
    {
      image: course1,
      title: "Ausbildung",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: course2,
      title: "Bachelor's",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: course3,
      title: "Masters",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: course4,
      title: "Nursing",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: course5,
      title: "Health Programs",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="w-full pb-2 mt-12 bg-white text-center">
      <div className="w-full">
        <h2 className="text-l sm:text-3xl mb-8 ">
          <span className="text-[#F9920A]">Courses</span>{" "}
          <span className="text-[#00334D]">offered</span>
        </h2>
        <div className="relative w-full">
          {courses.length > 0 ? (
            <>
              <Slider ref={sliderRef} {...sliderSettings} className="w-full">
                {courses.map((course, index) => (
                  <div key={index} className="px-2 w-full">
                    <div className="h-80 rounded-lg shadow-gray-800 flex flex-col items-center justify-start text-center p-0 overflow-hidden">
                      <div className="relative w-full h-48">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                      </div>
                      <div className="w-full bg-gray-100 flex-grow flex flex-col justify-center p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500">{course.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="mt-10 mb-10 flex justify-center space-x-4">
                <button
                  onClick={goToPrev}
                  className="text-2xl text-[#00334D] cursor-pointer hover:text-[#F9920A] transition-colors"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={goToNext}
                  className="text-2xl text-[#00334D] cursor-pointer hover:text-[#F9920A] transition-colors"
                  aria-label="Next slide"
                >
                  <FaChevronRight />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-red-500">
              No courses available for the carousel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
