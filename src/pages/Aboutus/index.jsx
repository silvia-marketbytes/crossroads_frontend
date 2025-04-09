import React, { Suspense } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
import CoursesOffered from "../../components/UiComponents/CoursesOffered"
import NewsEventsSection from "../Home/UiComponents/NewsEventsSection"
import TestimonialsSection from "../Home/UiComponents/TestimonialsSection"

const Aboutus = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "About Us",
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
    backgroundPosition:"center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: true,
    counterPosition: "overlay", 
  };

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CoursesOffered/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsEventsSection/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsSection/>
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
      

      
    </div>
  );
};

export default Aboutus;