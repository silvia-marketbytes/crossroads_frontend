// src/pages/UiComponents/ServiceSection/index.jsx
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import educationImg from '../../../../assets/Services/education.png';
import jobAssistanceImg from '../../../../assets/Services/job-assistance.jpeg';
import migrationImg from '../../../../assets/Services/migration.png';
import ServiceCard from '../../../../components/UiComponents/ServiceCard';

const ServicesSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Start with the second slide as the center

  const services = [
    {
      title: 'Education',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: educationImg,
    },
    {
      title: 'Job Assistance',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: jobAssistanceImg,
    },
    {
      title: 'Migration',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: migrationImg,
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Enable center mode to visually center the active slide
    centerPadding: '0px', // No extra padding
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 2 seconds
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide before sliding
    afterChange: (index) => setCurrentSlide(index), // Ensure state is updated after sliding
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3, // Keep 3 slides for consistency
          slidesToScroll: 1,
          centerMode: true, // Keep center mode on tablets
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Keep center mode on mobile
          centerPadding: '0px',
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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">
          Our Services
        </h2>
        {services.length > 0 ? (
          <>
            <Slider ref={sliderRef} {...sliderSettings} className="px-8">
              {services.map((service, index) => {
                // Determine if this slide is the center one
                const isCenter = index === currentSlide;
                return (
                  <div key={index} className="px-2">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      imageSrc={service.imageSrc}
                      isCenter={isCenter}
                    />
                  </div>
                );
              })}
            </Slider>
            {/* Custom Arrows */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 text-blue-950 hover:text-orange-500 transition-all duration-300"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <FaChevronLeft size={40} />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 text-blue-950 hover:text-orange-500 transition-all duration-300"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <FaChevronRight size={40} />
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg font-semibold">No services available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;