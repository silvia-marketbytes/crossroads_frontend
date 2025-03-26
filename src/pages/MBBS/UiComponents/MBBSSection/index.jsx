import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Placeholder images
import medicalStudentsImg from "../../../../assets/medical-students.png";
import placeholderImg from "../../../../assets/medical-students.png";

const MBBSSection = () => {
  const sliderRef = useRef(null);

  // Carousel settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true, // Allow height to adjust dynamically
    autoplay: true,
    autoplaySpeed: 3000, // Changed to 3 seconds for better readability
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  // Data for the carousel cards
  const cardsData = [
    {
      imageSrc: medicalStudentsImg,
      title: "MBBS Abroad",
      description:
        "Medical colleges abroad are renowned for their high-quality education, advanced technology, and cutting-edge infrastructure. These institutions provide students with hands-on experience and a solid foundation in practical knowledge, which can greatly enhance their medical expertise. Additionally, MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector.",
      linkText: "Read More",
    },
    {
      imageSrc: placeholderImg,
      title: "Ausbildung",
      description:
        "MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions like medical officers and health inspectors await.",
      linkText: "Learn More",
    },
  ];

  // Functions to control the carousel
  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white flex items-center min-h-[auto] md:min-h-[600px]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Carousel */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[500px] lg:h-[600px] bg-white rounded-lg overflow-hidden mx-auto max-w-[90rem]">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-full">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/600x800")
                    }
                  />
                </div>

                {/* Right Side: Text Content with Partial Borders */}
                <div className="relative w-full md:w-1/2 bg-blue-950 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                  {/* Top Border: Left to Center */}
                  <div className="absolute top-0 left-0 w-1/2 h-6 sm:h-8 md:h-12 bg-orange-500" />
                  {/* Bottom Border: Right to Center */}
                  <div className="absolute bottom-0 right-0 w-1/2 h-6 sm:h-8 md:h-12 bg-orange-500" />

                  <div className="flex flex-col flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-4 py-4 sm:py-6 md:py-10">
                      {card.title}
                    </h2>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mb-4 overflow-y-auto">
                      {card.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 font-semibold flex items-center hover:underline text-xs sm:text-sm md:text-base lg:text-lg"
                  >
                    {card.linkText}
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-4 sm:gap-6">
          <button
            onClick={goToPrev}
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={goToNext}
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            aria-label="Next Slide"
          >
            <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MBBSSection;