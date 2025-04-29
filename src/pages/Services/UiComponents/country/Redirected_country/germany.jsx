import { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/Contrydetailpagebanners/Germany_result.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../../../assets/country/germany-education.webp";
import CoursesOffered from "../../../../../components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import IntakeSection from "../../../../../components/CountryListing/IntakeSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../../../components/modal";

const Germany = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in Germany",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
    onButtonClick: openModal, // Added to trigger modal
  };

  const countryDetails = [
    { label: "Capital", value: "Berlin" },
    { label: "Population", value: "83 Million" },
    { label: "Language", value: "German" },
    { label: "International Students", value: "458210" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$ 4.5 Trillion" },
    { label: "Universities", value: "400+" },
    { label: "Scholarships Upto", value: "$2000/Month" },
  ];

  const dropdownSections = [
    {
      title: "Germany Excels with Top Universities",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Diverse Study Programs",
      content:
        "Choose from a wide range of programs in various fields of study.",
    },
    {
      title: "Public University Scholarships",
      content:
        "Many public universities offer scholarships to international students.",
    },
    {
      title: "Research and Innovation",
      content:
        "Germany is a global leader in research and technological innovation.",
    },
    {
      title: "Prosperity, Quality of life, Career advancement",
      content:
        "Enjoy high living standards and excellent career opportunities.",
    },
    {
      title: "Healthcare, Competitive pay, Ideal conditions",
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
      <CountryDetails details={countryDetails} />
      <WhyChooseSection
        image={germanyImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="Germany"
      />
      <VirtualAssistance />
      <CoursesOffered title="Courses offered" courses={courses} />
      <ContactSection />
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Germany;