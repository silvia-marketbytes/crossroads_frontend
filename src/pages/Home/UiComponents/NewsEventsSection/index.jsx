import React, { Suspense, useState } from "react";
import { useNavigate } from 'react-router-dom';
import NewsCard from '../../../../components/UiComponents/NewsCard';
 
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
        link: "/news/News-And-Events-1"
  },
  {
    imageSrc: news2,
    title: 'Positions such as medical officers',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      link: "/news/News-And-Events-2"
  },
  {
    imageSrc: news3,
    title: 'Additionally, MBBS graduates',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      link: "/news/News-And-Events-3"
  },
  {
    imageSrc: news4,
    title: 'Positions such as medical officers',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      link: "/news/News-And-Events-4"
  },
  {
    imageSrc: news5,
    title: 'Medical colleges abroad are renowned',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      link: "/news/News-And-Events-5"
  },
];
 
const NewsEventsSection = () => {
  const navigate = useNavigate();
 
  const showMoreCards = () => {
    navigate('/news');
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
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(0, 4).map((item, index) => (
          <NewsCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            link={item.link}
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
    </section>
  );
};
 
export default NewsEventsSection;