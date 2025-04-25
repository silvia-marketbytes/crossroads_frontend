import React, { Suspense } from "react";
import Banner from "../../../../components/Banner";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import NewsCard from "../../../../components/UiComponents/NewsCard";
import bannerImg from "../../../../assets/News/news2_result.webp";
import eventImage2 from "../../../../assets/News/news3_result.webp";
import EventDetailsSection from "../../EventDetailedSection";
import { newsData } from "../../../../pages/NewsAndEvents/index";

const News6 = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Italy Admission Day -Kochi",
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
    (event) => event.title !== "International Education Fair - Delhi"
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
        imageSrc={eventImage2}
        title="International Education Fair - Delhi"
        description="Explore opportunities with top universities. Join us for an exciting event!"
        date="Nov 15, 2024"
        time="09:00 Am - 12:00 Pm"
        location="India Habitat Centre, Lodhi Road, New Delhi, Delhi 110003"
        category="Education Fair"
        lat={28.5880}
        lng={77.2192}
        onJoinEvent={handleJoinEvent}
      />

      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00334D] mb-8">Other Events</h2>
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

export default News6;
