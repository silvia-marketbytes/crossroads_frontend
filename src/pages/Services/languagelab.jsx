// src/pages/Services/languagelab.jsx
import React, { Suspense, lazy } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/Services/languagelabbanner.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
const Language = lazy(() => import("./UiComponents/languagelab"));

const Languagelab = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Language Lab",
    className: "px-10 relative bg-gradient-to-r from-black/70 via-black/50 to-transparent",
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
            style={{ textAlign: 'justify' }}
          >
            Languages are the foundation of human communication, bridging cultures and fostering understanding across diverse communities. Mastery of multiple languages opens doors to global opportunities, enhances cognitive abilities, and deepens cultural appreciation. In an increasingly interconnected world, knowing different languages is essential for personal and professional growth, enabling individuals to connect with others, access a broader range of knowledge, and participate more fully in the global economy.  Crossroads provides opportunities for an interactive learning environment designed to enhance language acquisition through technology-driven tools and resources. Learners can practice pronunciation, listening, speaking, and comprehension skills in a structured and engaging manner.
          </p>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Language />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Languagelab;
