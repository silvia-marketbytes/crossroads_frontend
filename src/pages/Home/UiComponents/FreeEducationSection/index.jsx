import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountryCard from "../../../../components/UiComponents/CountryCard";
import worldMapBg from "../../../../assets/world-map-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flagSrcOne from "/src/assets/flags/austria.png";
import flagSrcTwo from "/src/assets/flags/germany.png";
import flagSrcThree from "/src/assets/flags/slovakia.png";
import flagSrcFour from "/src/assets/flags/slovenia.png";
import flagSrcFive from "/src/assets/flags/italy.png";
 
const FreeEducationSection = () => {
  const sliderRef = useRef(null);
 
  const countries = [
    {
      name: "Austria",
      flagSrc: flagSrcOne,
      borderOrientation: "to bottom",
      path: "/Freeeducation/Austria",
    },
    {
      name: "Germany",
      flagSrc: flagSrcTwo,
      borderOrientation: "to right",
      path: "/Freeeducation/Germany",
    },
    {
      name: "Slovakia",
      flagSrc: flagSrcThree,
      borderOrientation: "to top",
      path: "/Freeeducation/Slovakia",
    },
    {
      name: "Slovenia",
      flagSrc: flagSrcFour,
      borderOrientation: "45deg",
      path: "/Freeeducation/Slovania",
    },
    {
      name: "Italy",
      flagSrc: flagSrcFive,
      borderOrientation: "135deg",
      path: "/Freeeducation/Italy",
    },
  ];
 
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();
 
  return (
    <section className="pt-20 bg-cover bg-center relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        {/* Text Content Section */}
        <section className="pt-0 sm:pt-0 lg:pt-0 pb-10 sm:pb-10 lg:pb-20">
          <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-1/2 grid justify-end text-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-8">
              <div className="absolute w-full h-6 bg-white -top-2"></div>
              <h3 className="grid text-[40px] font-normal text-end mb-2">
                <span style={{ color: "#00334D" }}>
                  Free <span className="font-semibold text-[#F9920A]">Education</span>
                </span>
              </h3>
              <div className="absolute w-full h-6 bg-white -bottom-2"></div>
            </div>
            <div className="w-1/2 grid items-center justify-start text-start px-8">
              <p className="text-lg text-gray-600">
                We are a team of seasoned professionals who provide comprehensive
                educational support, from selecting the right study programs to
                assisting with job placements, both in India and internationally.
              </p>
            </div>
          </div>
 
          <div className="grid lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
            <div className="w-full flex flex-col items-center justify-center px-8">
              <h3 className="text-[20px] font-normal text-center text-[#00334D] pb-4">
                Free <span className="font-semibold text-[#F9920A]">Education</span>
              </h3>
              <p className="text-lg text-gray-600 text-center">
                We are a team of seasoned professionals who provide comprehensive
                educational support, from selecting the right study programs to
                assisting with job placements, both in India and internationally.
              </p>
            </div>
          </div>
        </section>
 
        {/* Country Cards Section */}
        <div
          className="relative"
          style={{ backgroundImage: `url(${worldMapBg})`, width: "100%", position: "relative" }}
        >
          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8 justify-items-center">
            {countries.map((country, index) => (
              <Link to={country.path} key={index}>
                <CountryCard
                  name={country.name}
                  flagSrc={country.flagSrc}
                  borderOrientation={country.borderOrientation}
                />
              </Link>
            ))}
          </div>
 
          {/* Mobile: Slick Slider */}
          <div className="relative block lg:hidden py-4">
            <Slider ref={sliderRef} {...sliderSettings}>
              {countries.map((country, index) => (
                <div key={index} className="px-2">
                  <Link to={country.path}>
                    <CountryCard
                      name={country.name}
                      flagSrc={country.flagSrc}
                      borderOrientation={country.borderOrientation}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
            <div className="w-full flex justify-center items-center mt-8 gap-4">
              <div>
                <button
                  onClick={goToPrev}
                  aria-label="Previous Slide"
                  className="p-2"
                >
                  <FaChevronLeft className="w-6 h-6 text-gray-400 hover:text-[#00334D] transition-all duration-300" />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next Slide"
                  className="p-2"
                >
                  <FaChevronRight className="w-6 h-6 text-gray-400 hover:text-[#00334D] transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default FreeEducationSection;