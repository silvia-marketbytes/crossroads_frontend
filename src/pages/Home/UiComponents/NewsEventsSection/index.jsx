import React, { useRef } from 'react';
import Slider from 'react-slick';
import NewsCard from '../../../../components/UiComponents/NewsCard';


import news1 from '/src/assets/News/News1.png';
import news2 from '/src/assets/News/News2.png';
import news3 from '/src/assets/News/News3.png';
import news4 from '/src/assets/News/News4.png';
import news5 from '/src/assets/News/News3.png';


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
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span style={{ color: '#00334D' }}>NEWS & </span> 
          <span style={{ color: '#F9920A' }}>EVENTS</span> 
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We are a team of seasoned professionals who provide comprehensive
          educational support, from selecting the right study programs to
          assisting with job placements, both in India and internationally.
        </p>
      </div>

      
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
            
            <div className="custom-arrows flex justify-center mt-4">
              <button
                className="custom-prev transition-all duration-300"
                style={{ color: '#00334D' }} 
                onClick={goToPrev}
                aria-label="Previous Slide"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                className="custom-next transition-all duration-300"
                style={{ color: '#00334D' }} 
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