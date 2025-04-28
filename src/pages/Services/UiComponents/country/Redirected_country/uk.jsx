import { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/country/Germany-Banner.webp"; 
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import ukImage from "../../../../../assets/country/Germany-education.webp";
import CoursesOffered from "../../../../../components/UiComponents/CoursesOffered";
import CountryDetails from "../../../../../components/CountryListing/CountryDetails";
import WhyChooseSection from "../../../../../components/CountryListing/WhyChooseSection";
import IntakeSection from "../../../../../components/CountryListing/IntakeSection";
import VirtualAssistance from "../../../../../components/CountryListing/VirtualAssistance";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../../../components/modal";

const Uk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in the UK",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
    onButtonClick: openModal,
  };

  const countryDescription = `
    The United Kingdom, officially known as the United Kingdom of Great Britain and Northern Ireland, 
    is a country in Western Europe known for its rich history, cultural diversity, and world-renowned 
    education system. Its capital, London, is a global hub for finance, culture, and education, while 
    cities like Oxford, Cambridge, and Edinburgh are famous for their prestigious universities.
  `;

  const countryDetails = [
    { label: "Capital", value: "London" },
    { label: "Population", value: "67 Million" },
    { label: "Language", value: "English" },
    { label: "International Students", value: "605,130" },
    { label: "Currency", value: "Pound Sterling (GBP)" },
    { label: "GDP", value: "$3.2 Trillion" },
    { label: "Universities", value: "130+" },
  ];

  const dropdownSections = [
    {
      title: "Prestigious education system",
      content: "The UK is home to world-class universities like Oxford and Cambridge.",
    },
    {
      title: "Global career opportunities",
      content: "A UK degree is highly valued by employers worldwide.",
    },
    {
      title: "Diverse academic programs",
      content: "Choose from a wide range of programs in various disciplines.",
    },
    {
      title: "Cultural and historical richness",
      content: "Experience a vibrant culture with a rich historical heritage.",
    },
    {
      title: "High quality of life",
      content: "Enjoy modern cities, excellent healthcare, and a dynamic lifestyle.",
    },
    {
      title: "Research and innovation hub",
      content: "Access cutting-edge research opportunities in top institutions.",
    },
  ];

  const intakes = [
    "September/October (Fall)",
    "January/February (Spring)",
    "Some universities offer additional intakes in May/June.",
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
        image={ukImage}
        dropdownSections={dropdownSections}
        intakes={intakes}
        countryName="UK"
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

export default Uk;