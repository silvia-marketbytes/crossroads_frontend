import React, { Suspense } from "react";
import { useLocation } from 'react-router-dom';
import Banner from "../../../../components/Banner";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import NewsCard from "../../../../components/UiComponents/NewsCard";
import bannerImg from "../../../../assets/News/news1_result.webp";
import EventDetailsSection from "../../EventDetailedSection";
import { newsData } from "../../../../pages/NewsAndEvents/index";

const News1 = () => {
  const { state } = useLocation();
  const event = state?.event || newsData.find(e => e.title === "UK Admission Day - Kochi");
  const eventType = state?.eventType || 'upcoming';

  const bannerProps = {
    backgroundImage: bannerImg,
    title: event.title,
    className: "px-1 relative",
    classNameTitle: "relative center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
    subtitle: "Stay updated with our latest news and events.",
  };

  const handleJoinEvent = () => {
    alert("Event registration submitted!");
  };

  const otherEvents = newsData.filter(
    (e) => e.title !== event.title
  );

  const displayedEvents = otherEvents.slice(0, 4);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative">
          <Banner {...bannerProps} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
        </div>
      </Suspense>

      <EventDetailsSection
        imageSrc={event.imageSrc}
        title={event.title}
        description={event.description}
        date={event.date}
        time={event.time}
        location={event.location}
        category={event.category}
        lat={event.lat}
        lng={event.lng}
        onJoinEvent={handleJoinEvent}
        eventType={eventType}
      />

      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00334D] mb-8">Other Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedEvents.map((event, index) => (
              <NewsCard
                key={index}
                imageSrc={event.imageSrc}
                title={event.title}
                description={event.description}
                link={event.link}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default News1;