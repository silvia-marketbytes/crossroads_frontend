import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images and videos (replace with actual paths)
import student1 from "/src/assets/Students/Student1.png";
import student2 from "/src/assets/Students/Student2.png";
import video1 from "/src/assets/Students/Videos/Video1.mp4";
import video2 from "/src/assets/Students/Videos/Video2.mp4";

// Import flag images (replace with actual paths)
import flag1 from "/src/assets/Flags/austria.png"; // Austria
import flag2 from "/src/assets/Flags/germany.png"; // Germany
import flag3 from "/src/assets/Flags/italy.png"; // Italy (for the video card)

const testimonialsData = [
  {
    imageSrc: student1,
    name: "Anjali Krishnan",
    flag: flag1,
    rating: 5,
    description: "Lorem ipsum is simply dummy text of the printing and",
  },
  {
    imageSrc: student2,
    name: "Harikumar",
    flag: flag2,
    rating: 5,
    description: "Lorem ipsum is simply dummy text of the printing and",
  },
];

const videosData = [
  {
    videoSrc: video1,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
  },
  {
    videoSrc: video2,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
  },
];

const TestimonialsSection = () => {
  const testimonialSliderRef = useRef(null);
  const videoSliderRef = useRef(null);

  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 testimonials at a time on the left
    slidesToScroll: 1, // Scroll 1 testimonial at a time
    arrows: false,// Use custom arrows 
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

  const videoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 video at a time on the right
    slidesToScroll: 1, // Scroll 1 video at a time
    arrows: false, // Use custom arrows
  };

  // Functions to handle both carousels simultaneously
  const goToPrev = () => {
    if (testimonialSliderRef.current && videoSliderRef.current) {
      testimonialSliderRef.current.slickPrev();
      videoSliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (testimonialSliderRef.current && videoSliderRef.current) {
      testimonialSliderRef.current.slickNext();
      videoSliderRef.current.slickNext();
    }
  };

  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      {/* Header Section with Card Layout */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
          {/* Card 1: Heading */}
          <div className="bg-white p-8 text-end rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-950">
              What Our <span className="text-orange-500">Students Say</span>
            </h2>
          </div>
          {/* Card 2: Description */}
          <div className="bg-white p-8 rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <p className="text-gray-500 text-lg">
              We are a team of seasoned professionals who provide comprehensive
              educational support, from selecting the right study programs to
              assisting with job placements, both in India and internationally.
            </p>
          </div>
        </div>

        {/* Main Content: Testimonials (Left) and Video (Right) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Testimonials Carousel */}
          <div className="md:w-2/3">
            <div className="bottom-arrows">
              {testimonialsData.length > 0 ? (
                <Slider
                  ref={testimonialSliderRef}
                  {...testimonialSliderSettings}
                >
                  {testimonialsData.map((item, index) => (
                    <div key={index} className="px-2">
                      <div className="testimonial-card bg-white rounded-lg  overflow-hidden">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="w-full h-90 object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/300x200?text=Image+Not+Found";
                            console.error(
                              `Failed to load image: ${item.imageSrc}`
                            );
                          }}
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-semibold text-blue-950 mb-2">
                            {item.name}
                          </h4>
                          <div className="flex items-center mb-2">
                            <img
                              src={item.flag}
                              alt="Flag"
                              className="w-3 h-3 mr-2"
                            />
                            <div className="flex items-center">
                              {[...Array(item.rating)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-3 h-3 text-yellow-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="text-center text-red-500">
                  No testimonials available.
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Video Carousel */}
          <div className="md:w-1/3 flex flex-col justify-between h-90">
            <div className="video-carousel">
              {videosData.length > 0 ? (
                <Slider ref={videoSliderRef} {...videoSliderSettings}>
                  {videosData.map((item, index) => (
                    <div key={index}>
                      <div className="video-container bg-white rounded-lg  overflow-hidden">
                        <video
                          controls
                          className="w-full h-105 object-cover"
                          src={item.videoSrc}
                          onError={(e) => {
                            console.error(
                              `Failed to load video: ${item.videoSrc}`
                            );
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-semibold text-blue-950">
                              {item.name}
                            </h4>
                            <div className="flex items-center">
                              <img
                                src={item.flag}
                                alt="Flag"
                                className="w-3 h-3 mr-2"
                              />
                              <div className="flex items-center">
                                {[...Array(item.rating)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className="w-3 h-3 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="text-center text-red-500">
                  No videos available.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Single Set of Custom Arrows for Both Carousels */}
        <div className="custom-arrows flex justify-center mt-4">
          <button
            className="custom-prev text-blue-950 hover:text-orange-500 transition-all duration-300"
            onClick={goToPrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={28} />
          </button>
          <button
            className="custom-next text-blue-950 hover:text-orange-500 transition-all duration-300"
            onClick={goToNext}
            aria-label="Next Slide"
          >
            <FaChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
