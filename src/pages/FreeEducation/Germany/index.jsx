import React, { Suspense } from "react";
import Banner from "../../../components/Banner";
import bannerImg from "../../../assets/FreeEducation/BANNER_result.webp";
import ContactSection from "../../../pages/Home/UiComponents/ContactSection";
import WhyChooseSection from "../../../components/CountryListing/WhyChooseSection";
import germanyImage from "../../../assets/FreeEducation/BANNER PNG_result.webp";

const FreeEducationGermany = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Free Education : Germany",
    className: "px-1 relative",
    classNameTitle: "relative -top-center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
  };

  const intakes = [
    "Winter-Sept/Oct",
    "Summer-March/April",
    "Additional intakes (Feb/May/June) at some private universities.",
  ];

  const dropdownSections = [
    {
      title: "Academic Requirements",
      content:
        "Students must satisfy the academic prerequisites for their chosen program.",
    },
    {
      title: "Language Proficiency",
      content:
        "Proficiency in German or English is essential for most programs.",
    },
    {
      title: "Financial Requirements",
      content:
        "Students need to demonstrate sufficient financial resources to cover living expenses such as housing, food, and transportation, which can vary depending on the city and region.",
    },
    {
      title: "Student-Centric Approach",
      content:
        "Germany offers a student-centric educational approach, focusing on individual development and research opportunities.",
    },
    {
      title: "Residence Requirements",
      content:
        "International students must obtain a student visa and residence permit.",
    },
    {
      title: "Application Process",
      content:
        "The application process involves submitting academic transcripts, language proficiency test scores, a motivation letter, and sometimes letters of recommendation.",
    },
  ];

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <WhyChooseSection
        image={germanyImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="Germany"
      />

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default FreeEducationGermany;
