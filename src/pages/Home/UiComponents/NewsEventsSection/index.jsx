import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { AnimatePresence } from 'framer-motion';
import NewsCard from '../../../../components/UiComponents/NewsCard';
import Modal from '../../../../components/modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import news1 from '/src/assets/News/News1.png';
import news2 from '/src/assets/News/News2.png';
import news3 from '/src/assets/News/News3.png';
import news4 from '/src/assets/News/News4.png';
import news5 from '/src/assets/News/News3.png';
 
const newsData = [
  {
    imageSrc: news1,
    title: 'UK Admission Day - Kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/uk-admission-day-kochi"
  },
  {
    imageSrc: news2,
    title: 'international education fair delhi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-delhi"
  },
  {
    imageSrc: news3,
    title: 'international education fair trivandrum',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-trivandrum"
  },
  {
    imageSrc: news4,
    title: 'austria admission day kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/austria-admission-day-kochi"
  },
  {
    imageSrc: news5,
    title: 'Medical colleges abroad are renowned',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/News-And-Events-5"
  },
];
 
const NewsEventsSection = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
 
  const openModal = (title) => {
    console.log('Opening modal for:', title);
    setSelectedEventTitle(title);
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    console.log('Closing modal for:', selectedEventTitle);
    setIsModalOpen(false);
    setSelectedEventTitle('');
  };
 
  const showMoreCards = () => {
    navigate('/news');
  };
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    appendDots: dots => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-500 transition-colors duration-300" />
    ),
  };
 
  return (
    <section className="py-1 px-4 md:px-12 bg-white">
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
 
      <div className="block lg:hidden">
        <Slider {...sliderSettings}>
          {newsData.slice(0, 4).map((item, index) => (
            <div key={index} className="px-2">
              <NewsCard
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                link={item.link}
                openModal={openModal}
              />
            </div>
          ))}
        </Slider>
      </div>
 
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(0, 4).map((item, index) => (
          <NewsCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            link={item.link}
            openModal={openModal}
          />
        ))}
      </div>
 
      <div className="text-center mt-8">
        <button
          onClick={showMoreCards}
          className="inline-flex items-center text-white px-4 py-2 rounded-full"
          style={{ backgroundColor: '#F9920A' }}
        >
          Show More
        </button>
      </div>
 
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            isNewsEvents={true}
            eventTitle={selectedEventTitle}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
 
export default NewsEventsSection;