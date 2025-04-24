import React, { Suspense } from "react";
import Banner from "../../../../components/Banner";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import bannerImg from "../../../../assets/News/news1_result.webp";
import eventImage from "../../../../assets/News/news1_result.webp"; 
import EventDetailsSection from "../../EventDetailedSection";

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
  
        <ContactSection />
      </div>
    );
  };
  
  export default News1;