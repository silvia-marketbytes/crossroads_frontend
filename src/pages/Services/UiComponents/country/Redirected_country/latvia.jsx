import React, { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/country/Germany-Banner.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../../../assets/country/germany-education.webp";
import CoursesOffered from "../../../../../../src/components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";

const Latvia = () => {
  const bannerProps = {
    backgroundImage: bannerImg, 
    title: "Study in Latvia",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
  };

  const countryDescription = `
    France, officially known as the French Republic, is a country predominantly situated in Western Europe.
    Its capital, Paris, is famous for its high-end fashion, iconic landmarks such as the Eiffel Tower,
  `;

  const countryDetails = [
    { label: "Capital", value: "Paris" },
    { label: "Population", value: "67 Million" },
    { label: "Language", value: "French" },
    { label: "International Students", value: "343,400" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$2.9 Trillion" },
    { label: "Universities", value: "250+" },
    { label: "Scholarships Upto", value: "$2000/Month" },
  ];

  const dropdownSections = [
    {
      title: "Prestigious education system",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "One of the world’s leading economies",
      content:
        "Choose from a wide range of programs in various fields of study.",
    },
    {
      title: "Extensive range of academic programs",
      content:
        "Many public universities offer scholarships to international students.",
    },
    {
      title: "Affordable tuition fees",
      content:
        "France offers affordable education with a high standard of living.",
    },
    {
      title: "Quality higher education",
      content:
        "Enjoy high living standards and excellent career opportunities.",
    },
    {
      title: "Research and development opportunities",
      content: "Benefit from excellent healthcare and working conditions.",
    },
  ];

  const intakes = [
    "Winter-Sept/Oct",
    "Summer-March/April",
    "Additional intakes (Feb/May/June) at some private universities.",
  ];

  const courses = [
    {
      image: "https://via.placeholder.com/150",
      title: "Nursing",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Ausbildung",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Bachelor's",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Masters",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Health Programs",
      description: "Lorem ipsum is simply dummy text of the printing.",
    },
  ];

  return (
    <div className="">
      <Banner {...bannerProps} />
      <CountryDetails details={countryDetails} description={countryDescription} />
      <WhyChooseSection
        image={germanyImage} 
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="Latvia"
      />
      <VirtualAssistance />
      <CoursesOffered title="Courses offered" courses={courses} />
      <ContactSection />
    </div>
  );
};

export default Latvia;