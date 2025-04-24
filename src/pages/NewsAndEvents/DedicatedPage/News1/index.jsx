import React, { Suspense } from "react";
import Banner from "../../../../components/Banner";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import NewsCard from "../../../../components/UiComponents/NewsCard";
import bannerImg from "../../../../assets/News/news1_result.webp";
import eventImage from "../../../../assets/News/news1_result.webp";
import EventDetailsSection from "../../EventDetailedSection";

// Adjust the import path based on your file structure
import { newsData } from "../../../../pages/NewsAndEvents/index"; // Verify this path

const News1 = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "UK Admission Day - Kochi",
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

  // Filter out the current event (News1: "UK Admission Day - Kochi")
  const otherEvents = newsData.filter(
    (event) => event.title !== "UK Admission Day - Kochi"
  );

  // Limit to 4 events for display
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
        imageSrc={eventImage}
        title="UK Admission Day - Kochi"
        description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry."
        date="Oct 24, 2024"
        time="10:00 Am - 01:00 Pm"
        location="Crossroads Edapally, Kochi, Kerala 682024"
        category="Events"
        lat={10.0159}
        lng={76.3095}
        onJoinEvent={handleJoinEvent}
      />

      {/* Other Events Section */}
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