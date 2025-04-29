import { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/Contrydetailpagebanners/USA_result.webp"; 
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import usaImage from "../../../../../assets/country/Germany-education.webp"; 
import CoursesOffered from "../../../../../components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import IntakeSection from "../../../../../components/CountryListing/IntakeSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../../../components/modal";

const USA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in the USA",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
    onButtonClick: openModal,
  };

  const countryDescription = `
    The United States of America, commonly known as the USA, is a country in North America renowned for its 
    world-leading education system, diverse culture, and economic opportunities. Its capital, Washington, D.C., 
    is a hub for politics and history, while cities like New York, Boston, and San Francisco are famous for their 
    prestigious universities and vibrant innovation ecosystems.
  `;

  const countryDetails = [
    { label: "Capital", value: "Washington, D.C." },
    { label: "Population", value: "331 Million" },
    { label: "Language", value: "English" },
    { label: "International Students", value: "343,400" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$2.9 Trillion" },
    { label: "Universities", value: "250+" },
    { label: "Scholarships Upto", value: "$2000/Month" },
  ];

  const dropdownSections = [
    {
      title: "World-class education system",
      content: "The USA is home to top-ranked universities like Harvard and MIT.",
    },
    {
      title: "Global career opportunities",
      content: "A US degree opens doors to international job markets.",
    },
    {
      title: "Diverse academic programs",
      content: "Choose from thousands of programs across various disciplines.",
    },
    {
      title: "Innovation and entrepreneurship",
      content: "Study in a hub for technology and startup culture.",
    },
    {
      title: "High quality of life",
      content: "Enjoy dynamic cities, diverse communities, and modern amenities.",
    },
    {
      title: "Research and development hub",
      content: "Access cutting-edge research opportunities in leading institutions.",
    },
  ];

  const intakes = [
    "August/September (Fall)",
    "January/February (Spring)",
    "Some universities offer Summer intakes in May/June.",
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
        image={usaImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="USA"
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

export default USA;