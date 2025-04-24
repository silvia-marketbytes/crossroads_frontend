import React, { Suspense, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Banner from "../../components/Banner";
import ContactSection from "../Home/UiComponents/ContactSection";
import NewsCard from "../../components/UiComponents/NewsCard";
import bannerImg from "../../assets/News/banner.webp";

import news1 from '/src/assets/News/News1_result.webp';
import news2 from '/src/assets/News/News2_result.webp';
import news3 from '/src/assets/News/News3_result.webp';
import news4 from '/src/assets/News/News4_result.webp';
import news5 from '/src/assets/News/News5.webp';
import news6 from '/src/assets/News/News6.webp'; 
import news7 from '/src/assets/News/News7.webp'; 
import news8 from '/src/assets/News/News4.png';

import pastEvent1 from '/src/assets/News/News3.png'; 
import pastEvent2 from '/src/assets/News/News4.png';
import pastEvent3 from '/src/assets/News/News3.png';
import pastEvent4 from '/src/assets/News/News4.png';
import pastEvent5 from '/src/assets/News/News3.png';
import pastEvent6 from '/src/assets/News/News4.png';

// Export newsData and pastEventsData
export const newsData = [
  {
    imageSrc: news1,
    title: 'UK Admission Day - Kochi', // Updated title to match News1
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/News-And-Events-1"
  },
  {
    imageSrc: news2,
    title: 'Positions such as medical officers',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/News-And-Events-2"
  },
  {
    imageSrc: news3,
    title: 'Additionally, MBBS graduates',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news4,
    title: 'Positions such as medical officers',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news5,
    title: 'Medical colleges abroad are renowned',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news6,
    title: 'New Dummy News 6',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news7,
    title: 'New Dummy News 7',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    imageSrc: news8,
    title: 'New Dummy News 8',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const pastEventsData = [
  {
    imageSrc: pastEvent1,
    title: 'Past Event 1 Title',
    description: 'Description of the first past event.',
  },
  {
    imageSrc: pastEvent2,
    title: 'Past Event 2 Title',
    description: 'Description of the second past event.',
  },
  {
    imageSrc: pastEvent3,
    title: 'Past Event 3 Title',
    description: 'Description of the third past event.',
  },
  {
    imageSrc: pastEvent4,
    title: 'Past Event 4 Title',
    description: 'Description of the fourth past event.',
  },
  {
    imageSrc: pastEvent5,
    title: 'Past Event 5 Title',
    description: 'Description of the fifth past event.',
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
  },
];

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const showMoreCards = () => {
    setShowAll(true);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "News And Events",
    className: "px-1 relative",
    classNameTitle: "relative center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
    subtitle: "Stay updated with our latest news and events.",
  };

  const renderCards = (data) => {
    const visibleData = showAll ? data : data.slice(0, 6);
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleData.map((item, index) => (
            <NewsCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        {!showAll && data.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreCards}
              className="inline-flex items-center text-white px-4 py-2 rounded-full"
              style={{ backgroundColor: '#F9920A' }}
            >
              Read More
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative">
          <Banner {...bannerProps} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
        </div>
      </Suspense>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8 gap-4 sm:gap-8">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>

          <div className="relative">
            {activeTab === "upcoming" && renderCards(newsData)}
            {activeTab === "past" && renderCards(pastEventsData)}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default NewsAndEvents;