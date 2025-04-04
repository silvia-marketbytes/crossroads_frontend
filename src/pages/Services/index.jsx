import React, { Suspense, lazy } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/Services/banner png.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";

const Cards = lazy(() => import("./UiComponents/cards"));

const Services = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Documentation and Travel Assistance",
    className: "px-10",
    classNameTitle: "text-services-title",
    showDateTime: false,
    showSocialMedia: false,
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
      <section className="py-6 sm:py-8 lg:py-12 px-10 sm:px-12 lg:px-16 flex justify-center">
        <div className="w-full">
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            style={{ textAlign: 'justify' }} // Inline CSS for text justification
          >
            We provide comprehensive Travel & Documentation Assistance to ensure a smooth and hassle-free experience. From certificate attestation and visa document preparation to certified translations and appointment scheduling, our expert team handles every detail with efficiency and accuracy. Additionally, we offer reliable travel support, including transportation, accommodation, and essential guidance, ensuring a safe and stress-free journey. With our dedicated services, students and professionals can confidently navigate their travel and documentation needs with ease.
          </p>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Services;
