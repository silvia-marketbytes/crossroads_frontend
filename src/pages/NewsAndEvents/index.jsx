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
    title: 'UK Admission Day - Kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/uk-admission-day-kochi",
    date: "Oct 24, 2024",
    time: "10:00 AM - 01:00 PM",
    location: "Oberon Mall Parking, NH Bye Pass, Padivattom, Edappally, Ernakulam, Kerala 682024",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: news2,
    title: 'International Educational Fair Delhi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-delhi",
    date: "Nov 10, 2024",
    time: "09:00 AM - 02:00 PM",
    location: "Delhi Exhibition Center",
    category: "Events",
    lat: 28.7041,
    lng: 77.1025
  },
  {
    imageSrc: news3,
    title: 'International Education Fair Trivandrum',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-trivandrum",
    date: "Nov 15, 2024",
    time: "11:00 AM - 03:00 PM",
    location: "Trivandrum Convention Center",
    category: "Events",
    lat: 8.5241,
    lng: 76.9366
  },
  {
    imageSrc: news4,
    title: 'Austria Admission Day Kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/austria-admission-day-kochi",
    date: "Dec 01, 2024",
    time: "10:00 AM - 01:00 PM",
    location: "Kochi Event Hall",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: news5,
    title: 'International Education Fair Mumbai',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-mumbai",
    date: "Dec 05, 2024",
    time: "10:00 AM - 04:00 PM",
    location: "Mumbai Exhibition Center",
    category: "Events",
    lat: 19.0760,
    lng: 72.8777
  },
  {
    imageSrc: news6,
    title: 'Italy Admission Day Kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/italy-admission-day-kochi",
    date: "Dec 10, 2024",
    time: "09:00 AM - 12:00 PM",
    location: "Kochi Cultural Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: news7,
    title: 'International Education Fair Kerala',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/international-education-fair-kerala",
    date: "Dec 15, 2024",
    time: "10:00 AM - 03:00 PM",
    location: "Kerala State Fairgrounds",
    category: "Events",
    lat: 10.8505,
    lng: 76.2711
  },
  {
    imageSrc: news8,
    title: 'France Admission Day Kochi',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    link: "/news/france-admission-day-kochi",
    date: "Dec 20, 2024",
    time: "11:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
];
 
export const pastEventsData = [
  {
    imageSrc: pastEvent1,
    title: 'Past Event 1 Title',
    description: 'Description of the first past event.',
    link: "/news/past-event-1",
    date: "Jan 15, 2024",
    time: "10:00 AM - 01:00 PM",
    location: "Kochi Event Hall",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent2,
    title: 'Past Event 2 Title',
    description: 'Description of the second past event.',
    link: "/news/past-event-2",
    date: "Feb 20, 2024",
    time: "09:00 AM - 12:00 PM",
    location: "Delhi Convention Center",
    category: "Events",
    lat: 28.7041,
    lng: 77.1025
  },
  {
    imageSrc: pastEvent3,
    title: 'Past Event 3 Title',
    description: 'Description of the third past event.',
    link: "/news/past-event-3",
    date: "Mar 10, 2024",
    time: "11:00 AM - 02:00 PM",
    location: "Mumbai Event Center",
    category: "Events",
    lat: 19.0760,
    lng: 72.8777
  },
  {
    imageSrc: pastEvent4,
    title: 'Past Event 4 Title',
    description: 'Description of the fourth past event.',
    link: "/news/past-event-4",
    date: "Apr 05, 2024",
    time: "10:00 AM - 03:00 PM",
    location: "Trivandrum Exhibition Hall",
    category: "Events",
    lat: 8.5241,
    lng: 76.9366
  },
  {
    imageSrc: pastEvent5,
    title: 'Past Event 5 Title',
    description: 'Description of the fifth past event.',
    link: "/news/past-event-5",
    date: "May 12, 2024",
    time: "09:00 AM - 01:00 PM",
    location: "Kerala Cultural Center",
    category: "Events",
    lat: 10.8505,
    lng: 76.2711
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
  {
    imageSrc: pastEvent6,
    title: 'Past Event 6 Title',
    description: 'Description of the sixth past event.',
    link: "/news/past-event-6",
    date: "Jun 18, 2024",
    time: "10:00 AM - 02:00 PM",
    location: "Kochi International Center",
    category: "Events",
    lat: 9.9907,
    lng: 76.3169
  },
];
 
const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
 
  const itemsPerPage = 12; // 4 cards per row, 3 rows
  const totalPages = Math.ceil(pastEventsData.length / itemsPerPage);
 
  const showMoreCards = () => {
    setShowAll(true);
  };
 
  const handleCardClick = (event, eventType) => {
    navigate(event.link, { state: { event, eventType } });
  };
 
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
 
  const renderCards = (data, eventType) => {
    const visibleData = showAll ? data : data.slice(0, 6);
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item, eventType)}
              className="cursor-pointer"
            >
              <NewsCard
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
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
 
  const renderEventRecap = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = pastEventsData.slice(startIndex, endIndex);
 
    return (
      <section className="py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg sm:text-3xl mb-8 ">
          <span className="text-[#F9920A]">Event</span>{" "}
          <span className="text-[#00334D]">Recap</span>
        </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedData.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-4 border-gray-200"
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === index + 1
                      ? 'bg-[#F9920A] text-white'
                      : 'bg-gray-200 text-[#00334D] hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
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
            {activeTab === "upcoming" && renderCards(newsData, "upcoming")}
            {activeTab === "past" && renderCards(pastEventsData, "past")}
          </div>
        </div>
      </section>
 
      {activeTab === "past" && renderEventRecap()}
 
      <ContactSection />
    </div>
  );
};
 
export default NewsAndEvents;
 