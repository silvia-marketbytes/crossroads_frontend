import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

const Card = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const shouldShowButton = item.description.length > 50;

  return (
    <div className="px-2">
      <div className="card bg-white rounded-lg overflow-hidden w-full max-w-[380px] mx-auto flex flex-col h-auto min-h-[350px] sm:min-h-[400px]">
        {item.type === "image" ? (
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-2xl"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/350x250?text=Image+Not+Found";
              console.error(`Failed to load image: ${item.imageSrc}`);
            }}
          />
        ) : (
          <video
            controls
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-2xl"
            src={item.videoSrc}
            onError={(e) => {
              console.error(`Failed to load video: ${item.videoSrc}`);
            }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        <div className="p-3 sm:p-4 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4
              className="text-base sm:text-lg font-semibold"
              style={{ color: "#00334D" }}
            >
              {item.name}
            </h4>
            <div className="flex items-center">
              <img src={item.flag} alt="Flag" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p
              className={`text-gray-600 text-xs sm:text-sm text-justify md:text-left ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {item.description}
            </p>
            {shouldShowButton && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-950 hover:text-orange-500 text-xs sm:text-sm mt-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          padsToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
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
    <section className="py-6 sm:py-10 bg-white mt-10 w-full">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-0 sm:pt-0 lg:pt-0 pb-10 sm:pb-10 lg:pb-20">
          <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8">
              <div className="absolute w-full h-6 bg-white -top-2"></div>
              <h3 className="grid text-[40px] font-normal text-end mb-2">
                <span style={{ color: "#00334D" }}>
                  What Our <span className="font-semibold text-[#F9920A]">Students Say</span>
                </span>
              </h3>
              <div className="absolute w-full h-6 bg-white -bottom-2"></div>
            </div>
            <div className="w-1/2 grid items-center justify-start text-start px-8">
              <p className="text-lg text-gray-600">
                We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements.
              </p>
            </div>
          </div>

          <div className="grid lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
            <div className="w-full flex flex-col items-center justify-center px-2">
              <h3 className="text-[20px] font-normal text-center text-[#00334D] pb-4">
                What Our <span className="font-semibold text-[#F9920A]"> Students Says</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 text-center">
                We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-start w-full">
          <div className="w-full lg:w-2/3">
            {testimonialsData.length > 0 ? (
              <Slider ref={testimonialSliderRef} {...testimonialSliderSettings} className="w-full">
                {testimonialsData.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </Slider>
            ) : (
              <div className="text-center text-red-500">No testimonials available.</div>
            )}
          </div>
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            {videosData.length > 0 ? (
              <Slider ref={videoSliderRef} {...videoSliderSettings} className="w-full min-h-[350px] sm:min-h-[400px]">
                {videosData.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </Slider>
            ) : (
              <div className="text-center text-red-500">No videos available.</div>
            )}
          </div>
        </div>

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