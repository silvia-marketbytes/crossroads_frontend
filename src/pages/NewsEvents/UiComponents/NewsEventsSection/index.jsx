// src/pages/NewsEvents/UiComponents/NewsEventsSection/index.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import NewsCard from '../../../../components/UiComponents/NewsCard';

// Import images from src/assets/News using relative paths
import news1 from '/src/assets/News/News1.png';
import news2 from '/src/assets/News/News2.png';
import news3 from '/src/assets/News/News3.png';
import news4 from '/src/assets/News/News4.png';
import news5 from '/src/assets/News/News3.png';

// Import icons for custom arrows (you can use any icons, e.g., from react-icons)
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const newsData = [
  {
    imageSrc: news1,
    title: 'Medical colleges abroad are renowned',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news2,
    title: 'Positions such as medical officers',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news3,
    title: 'Additionally, MBBS graduates',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news4,
    title: 'Positions such as medical officers',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news5,
    title: 'Medical colleges abroad are renowned',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const NewsEventsSection = () => {
  const sliderRef = useRef(null); // Create a ref to control the slider

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false, // Disable default arrows
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

  // Functions to handle custom arrow clicks
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
    <section className="py-10 px-4 md:px-20 bg-white">
      {/* Header (Centered) */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-950">
          NEWS & <span className="text-orange-500">EVENTS</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We are a team of seasoned professionals who provide comprehensive
          educational support, from selecting the right study programs to
          assisting with job placements, both in India and internationally.
        </p>
      </div>

      {/* Slider (with custom arrows) */}
      <div className="bottom-arrows">
        {newsData.length > 0 ? (
          <>
            <Slider ref={sliderRef} {...sliderSettings}>
              {newsData.map((item, index) => (
                <div key={index}>
                  <NewsCard
                    imageSrc={item.imageSrc}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </Slider>
            {/* Custom Arrows */}
            <div className="custom-arrows flex justify-center mt-4">
              <button
                className="custom-prev text-blue-950 hover:text-orange-500 transition-all duration-300"
                onClick={goToPrev}
                aria-label="Previous Slide"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                className="custom-next text-blue-950 hover:text-orange-500 transition-all duration-300"
                onClick={goToNext}
                aria-label="Next Slide"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-red-500">
            No data available for the carousel.
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;