import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Placeholder images
import medicalStudentsImg from '../../../../assets/medical-students.png';
import placeholderImg from '../../../../assets/medical-students.png';

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
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          adaptiveHeight: true, // Allow height to adjust on mobile
        },
      },
    ],
  };

  // Data for the carousel cards
  const cardsData = [
    {
      imageSrc: medicalStudentsImg,
      title: 'MBBS Abroad',
      description:
        'Medical colleges abroad are renowned for their high-quality education, advanced technology, and cutting-edge infrastructure. These institutions provide students with hands-on experience and a solid foundation in practical knowledge, which can greatly enhance their medical expertise. Additionally, MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions such as medical officers, health inspectors, and disease control officers are just a few examples of the avenues open to those with an MBBS degree.',
      linkText: 'Read More',
    },
    {
      imageSrc: placeholderImg,
      title: 'Ausbildung',
      description:
        'MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions like medical officers and health inspectors await.',
      linkText: 'Learn More',
    },
  ];

  // Functions to control the carousel
  const goToPrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <section className="py-16 bg-white h-auto flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Carousel */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col md:flex-row items-stretch h-[400px] sm:h-[500px] md:h-[600px] bg-white rounded-lg overflow-hidden mx-auto max-w-[90rem]">
                {/* Left Side: Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src = 'https://via.placeholder.com/600x800')
                    }
                  />
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-blue-950 text-white pt-7 pb-7 sm:p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                      {card.title}
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 overflow-y-auto">
                      {card.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 font-semibold flex items-center hover:underline text-sm sm:text-base md:text-lg"
                  >
                    {card.linkText}
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2"
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
        <div className="flex justify-center mt-6 gap-5 sm:gap-6 pt-3">
          <button
            onClick={goToPrev}
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={12} className="sm:w-7 sm:h-7 " />
          </button>
          <button
            onClick={goToNext}
            className="text-blue-950 hover:text-orange-500 transition-all duration-300"
            aria-label="Next Slide"
          >
            <FaChevronRight size={12} className="sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MBBSSection;
