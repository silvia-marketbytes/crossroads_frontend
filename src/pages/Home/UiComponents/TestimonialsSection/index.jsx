import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "/src/components/uicomponents/TestimonialCards/index";


import student1 from "/src/assets/Students/Student1.png";
import student2 from "/src/assets/Students/Student2.png";
import video1 from "/src/assets/Students/Videos/Video1.mp4";
import video2 from "/src/assets/Students/Videos/Video2.mp4";


import flag1 from "/src/assets/Flags/austria.png"; 
import flag2 from "/src/assets/Flags/germany.png"; 
import flag3 from "/src/assets/Flags/italy.png";

const testimonialsData = [
  {
    imageSrc: student1,
    name: "Anjali Krishnan",
    flag: flag1,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
    type: "image",
  },
  {
    imageSrc: student2,
    name: "Harikumar",
    flag: flag2,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
    type: "image",
  },
];

const videosData = [
  {
    videoSrc: video1,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
    type: "video",
  },
  {
    videoSrc: video2,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.",
    type: "video",
  },
];

const TestimonialsSection = () => {
  const testimonialSliderRef = useRef(null);
  const videoSliderRef = useRef(null);

  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const videoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    testimonialSliderRef.current?.slickPrev();
    videoSliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    testimonialSliderRef.current?.slickNext();
    videoSliderRef.current?.slickNext();
  };

  return (
    <section className="py-6 sm:py-10 px-4 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8 sm:mb-16">
          <div className="bg-white p-4 sm:p-8 text-center md:text-end rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-950">
              What Our <span className="text-orange-500">Students Say</span>
            </h2>
          </div>
          <div className="bg-white p-4 sm:p-8 rounded-lg w-full">
            <p className="text-gray-500 text-sm sm:text-lg text-center md:text-left">
              We are a team of seasoned professionals who provide comprehensive
              educational support, from selecting the right study programs to
              assisting with job placements.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start">
          {/* Testimonials Carousel */}
          <div className="w-full lg:w-2/3">
            {testimonialsData.length > 0 ? (
              <Slider ref={testimonialSliderRef} {...testimonialSliderSettings}>
                {testimonialsData.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </Slider>
            ) : (
              <div className="text-center text-red-500">
                No testimonials available.
              </div>
            )}
          </div>

          {/* Video Carousel */}
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            {videosData.length > 0 ? (
              <Slider ref={videoSliderRef} {...videoSliderSettings}>
                {videosData.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </Slider>
            ) : (
              <div className="text-center text-red-500">
                No videos available.
              </div>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            onClick={goToPrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            onClick={goToNext}
            aria-label="Next Slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;