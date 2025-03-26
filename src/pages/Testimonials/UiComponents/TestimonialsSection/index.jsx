import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import the reusable Card component
import Card from "/src/components/uicomponents/TestimonialCards/index";

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
    description: "Lorem ipsum is simply dummy text of the printing and Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
    type: "image",
  },
  {
    imageSrc: student2,
    name: "Harikumar",
    flag: flag2,
    rating: 5,
    description: "Lorem ipsum is simply dummy text of the printing and Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’sLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’sLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
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
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’sLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
    type: "video",
  },
  {
    videoSrc: video2,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s",
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
        breakpoint: 768,
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
  };

  const goToPrev = () => {
    if (testimonialSliderRef.current && videoSliderRef.current) {
      testimonialSliderRef.current.slickNext();
      videoSliderRef.current.slickNext();
    }
  };

  const goToNext = () => {
    if (testimonialSliderRef.current && videoSliderRef.current) {
      testimonialSliderRef.current.slickPrev();
      videoSliderRef.current.slickPrev();
    }
  };

  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
          <div className="bg-white p-8 text-end rounded-lg shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-950">
              What Our <span className="text-orange-500">Students Say</span>
            </h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0.1)] w-full md:w-1/2">
            <p className="text-gray-500 text-lg">
              We are a team of seasoned professionals who provide comprehensive
              educational support, from selecting the right study programs to
              assisting with job placements, both in India and internationally.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side: Testimonials Carousel */}
          <div className="md:w-2/3">
            <div className="bottom-arrows">
              {testimonialsData.length > 0 ? (
                <Slider
                  ref={testimonialSliderRef}
                  {...testimonialSliderSettings}
                >
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
          </div>

          {/* Right Side: Video Carousel */}
          <div className="md:w-1/3">
            <div className="video-carousel">
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
        </div>

        <div className="custom-arrows flex justify-center mt-4 space-x-4">
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