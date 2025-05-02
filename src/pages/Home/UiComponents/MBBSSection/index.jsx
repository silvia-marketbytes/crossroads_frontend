import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import medicalStudentsImg from "../../../../assets/medical-students.png";
import placeholderImg from "../../../../assets/medical-students.png";
 
const MBBSSection = () => {
  const sliderRef = useRef(null);
 
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };
 
  const cardsData = [
    {
      imageSrc: medicalStudentsImg,
      title: "MBBS Abroad",
      description:
        "Medical colleges abroad are renowned for their high-quality education, advanced technology, and cutting-edge infrastructure. These institutions provide students with hands-on experience and a solid foundation in practical knowledge, which can greatly enhance their medical expertise. Additionally, MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector.",
      linkText: "Read More",
      link: "/services/education/course/mbbs",
    },
    {
      imageSrc: placeholderImg,
      title: "Ausbildung",
      description:
        "MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions like medical officers and health inspectors await.",
      linkText: "Learn More",
      link: "/services/education/course/ausbildung",
    },
  ];
 
  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };
 
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };
 
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white min-h-[auto] md:min-h-[600px] w-full overflow-hidden">
      {/* Full width slider container */}
      <div className="w-full">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index}>
              {/* Full width card */}
              <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[500px] lg:h-[600px] bg-white">
                {/* Image half - full height */}
                <div className="w-full md:w-1/2 h-[300px] md:h-full">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/600x800")
                    }
                  />
                </div>
 
                {/* Text half - full height */}
                <div
                  className="relative w-full md:w-1/2 text-white p-6 sm:p-8 md:p-22 flex flex-col justify-between"
                  style={{ backgroundColor: '#00334D' }}
                >
                  {/* Top Border: Left to Center */}
                  <div
                    className="absolute top-0 left-0 w-1/2 h-6 sm:h-8 md:h-12"
                    style={{ backgroundColor: '#F9920A' }}
                  />
                  {/* Bottom Border: Right to Center */}
                  <div
                    className="absolute bottom-0 right-0 w-1/2 h-6 sm:h-8 md:h-12"
                    style={{ backgroundColor: '#F9920A' }}
                  />
 
                  <div className="flex flex-col flex-1">
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 py-4 sm:py-6 md:py-10"
                      style={{ color: '#F9920A' }}
                    >
                      {card.title}
                    </h2>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mb-4 overflow-y-auto">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    to={card.link}
                    className="font-semibold flex items-center text-xs sm:text-sm md:text-base lg:text-sm"
                    style={{ color: '#F9920A' }}
                    onMouseEnter={(e) => (e.target.style.color = '#E08200')}
                    onMouseLeave={(e) => (e.target.style.color = '#F9920A')}
                  >
                    {card.linkText}
                    <svg
                      className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 ml-2"
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-8 sm:mt-8 gap-4 sm:gap-6 px-4">
          <button
            onClick={goToPrev}
            className="transition-all duration-300"
            style={{ color: '#d1d1cf' }}
            onMouseEnter={(e) => (e.target.style.color = '#d1d1cf')}
            onMouseLeave={(e) => (e.target.style.color = '#00334D')}
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={goToNext}
            className="transition-all duration-300"
            style={{ color: '#d1d1cf' }}
            onMouseEnter={(e) => (e.target.style.color = '#d1d1cf')}
            onMouseLeave={(e) => (e.target.style.color = '#00334D')}
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