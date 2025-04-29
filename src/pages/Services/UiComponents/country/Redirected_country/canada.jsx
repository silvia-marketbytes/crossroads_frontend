import { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/Contrydetailpagebanners/Australia_result.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import canadaImage from "../../../../../assets/country/Germany-education.webp";
import CoursesOffered from "../../../../../components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import IntakeSection from "../../../../../components/CountryListing/IntakeSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../../../components/modal";

const Canada = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in Canada",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
    onButtonClick: openModal,
  };

  const countryDescription = `
    Canada is a country in North America known for its stunning natural landscapes, 
    multicultural cities, and high-quality education system. Its capital, Ottawa, is a hub for 
    government and culture, while cities like Toronto, Vancouver, and Montreal are renowned for 
    their diversity and world-class universities.
  `;

  const countryDetails = [
    { label: "Capital", value: "Ottawa" },
    { label: "Population", value: "40 Million" },
    { label: "Language", value: "English, French" },
    { label: "International Students", value: "343,400" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$2.9 Trillion" },
    { label: "Universities", value: "250+" },
    { label: "Scholarships Upto", value: "$2000/Month" },
  ];

  const dropdownSections = [
    {
      title: "World-class education system",
      content: "Canada is home to top-ranked universities offering diverse programs.",
    },
    {
      title: "Multicultural and inclusive society",
      content: "Experience a welcoming environment for international students.",
    },
    {
      title: "Post-graduation work opportunities",
      content: "Benefit from post-graduation work permits to gain experience.",
    },
    {
      title: "Affordable tuition and living costs",
      content: "Competitive costs compared to other English-speaking countries.",
    },
    {
      title: "High quality of life",
      content: "Enjoy safe cities, excellent healthcare, and vibrant culture.",
    },
    {
      title: "Research and innovation hub",
      content: "Access cutting-edge research opportunities in various fields.",
    },
  ];

  const intakes = [
    "September (Fall)",
    "January (Winter)",
    "May (Summer, limited programs)",
  ];

  const courses = [
    {
      image: "https://via.placeholder.com/150",
      title: "Nursing",
      description: "Train for a rewarding career in healthcare with practical focus.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Computer Science",
      description: "Study cutting-edge technology and software development.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Bachelor's",
      description: "Pursue undergraduate degrees in diverse disciplines.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Masters",
      description: "Advance your career with postgraduate qualifications.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Business Administration",
      description: "Develop skills in management, finance, and leadership.",
    },
  ];

  return (
    <div>
      <Banner {...bannerProps} />
      <CountryDetails details={countryDetails} description={countryDescription} />
      <WhyChooseSection
        image={canadaImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="Canada"
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

export default Canada;