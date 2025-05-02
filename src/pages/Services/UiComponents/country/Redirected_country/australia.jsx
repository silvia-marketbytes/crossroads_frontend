import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/Contrydetailpagebanners/Australia_result.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../../../assets/country/germany-education.webp";
import CoursesOffered from "../../../../../components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";
import { AnimatePresence } from "framer-motion";
import Modal from "../../../../../components/modal";
 
const Australia = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in Australia",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
    onButtonClick: openModal, // Changed to trigger modal
  };
 
  const countryDescription = `
    Australia, officially known as the Commonwealth of Australia, is a country in the Southern Hemisphere
    comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.
    Its capital, Canberra, is known for its planned design, while cities like Sydney and Melbourne are famous
    for their vibrant culture, iconic landmarks such as the Sydney Opera House, and world-class education systems.
  `;
 
  const countryDetails = [
    { label: "Capital", value: "Canberra" },
    { label: "Population", value: "26 Million" },
    { label: "Language", value: "English" },
    { label: "International Students", value: "343,400" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$2.9 Trillion" },
    { label: "Universities", value: "250+" },
    { label: "Scholarships Upto", value: "$2000/Month" },
  ];
 
  const dropdownSections = [
    {
      title: "Prestigious education system",
      content: "Australia is home to world-renowned universities offering high-quality education.",
    },
    {
      title: "One of the world's leading economies",
      content: "A strong economy provides excellent career opportunities for graduates.",
    },
    {
      title: "Extensive range of academic programs",
      content: "Choose from a wide range of programs in various fields of study.",
    },
    {
      title: "Affordable tuition fees",
      content: "Competitive tuition fees compared to other English-speaking countries.",
    },
    {
      title: "Quality higher education",
      content: "Enjoy high living standards and a multicultural environment.",
    },
    {
      title: "Research and development opportunities",
      content: "Australia is a leader in innovation and research-driven education.",
    },
  ];
 
  const intakes = [
    "February/March",
    "July/August",
    "Some institutions offer additional intakes in November.",
  ];
 
  const courses = [
    {
      image: "https://via.placeholder.com/150",
      title: "Nursing",
      description: "Prepare for a rewarding career in healthcare with world-class training.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Business",
      description: "Gain skills in management, finance, and entrepreneurship.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Bachelor's",
      description: "Pursue undergraduate degrees in diverse fields.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Masters",
      description: "Advance your career with postgraduate qualifications.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Engineering",
      description: "Study cutting-edge engineering programs with practical focus.",
    },
  ];
 
  return (
    <div>
      <Banner {...bannerProps} />
      <CountryDetails details={countryDetails} description={countryDescription} />
      <WhyChooseSection
        image={germanyImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="Australia"
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
 
export default Australia;