import React, { Suspense } from "react";
import Banner from "../../../../components/Banner";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import bannerImg from "../../../../assets/News/news2_result.webp";
import eventImage2 from "../../../../assets/News/news3_result.webp"; 
import EventDetailsSection from "../../EventDetailedSection";


const News2 = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "International Education Fair - Delhi",
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
        lat={28.5880} // Latitude for India Habitat Centre
        lng={77.2192} // Longitude for India Habitat Centre
        onJoinEvent={handleJoinEvent}
      />

      <ContactSection />
    </div>
  );
};

export default News2;