import React, { Suspense } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";


const Aboutus = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "About Us",
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
    backgroundPosition:"center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: true, // Enable the counter overlay
    counterPosition: "overlay", // Position the counter as overlay
  };

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      {/* Other content */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>

      
    </div>
  );
};

export default Aboutus;