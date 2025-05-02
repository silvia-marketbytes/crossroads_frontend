import React, { Suspense, useState } from "react";
import Banner from "../../../components/Banner";
import bannerImg from "../../../assets/FreeEducation/austriafree_result.webp";
import ContactSection from "../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../assets/FreeEducation/BANNER PNG_result.webp";
import FeatureHighlightSection from "../../../components/FreeEducation/FeatureHighlightSection";
import AffordableEducationOptions from "../../../components/FreeEducation/AffordableEducationOptions";
import { motion } from "framer-motion";
import ContactForm from "../../../components/form/ContactForm";

const CloseIcon = ({ className = "", onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Modal = ({ onClose, isNewsEvents = false, eventTitle }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 backdrop-brightness-50 z-[100] flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="scale-[0.80] bg-[#00334D] rounded-lg p-4 w-full max-w-lg shadow-xl relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-200 hover:text-gray-400"
          onClick={onClose}
        >
          <CloseIcon className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-200 mb-3">
          {isNewsEvents ? "News and Events Registration" : "Get in Touch"}
        </h2>
        <ContactForm isNewsEvents={isNewsEvents} eventTitle={eventTitle} />
      </motion.div>
    </motion.div>
  );
};

const FreeEducationAustria = () => {
  const [showModal, setShowModal] = useState(false);

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Free Education : Austria",
    className: "px-1 relative",
    classNameTitle: "relative -top-center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
  };

  const IntakeSection = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-transparent z-20">
        <div className="bg-[#00334D]/80 p-6 w-full max-w-md rounded-lg shadow-md border border-white/20">
          <p className="text-white">
            While tuition is free, students should plan to cover living expenses
            such as housing, food, and transportation, which can vary depending on
            the city and region. Make sure to budget accordingly to fully enjoy
            your international study experience.
          </p>
          <div className="mt-4">
            <button
              className="bg-[#F9920A] hover:bg-[#e08309] text-white font-medium py-2 px-4 rounded-full transition-colors"
              onClick={() => setShowModal(true)}
            >
              For more details click here
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WhyChooseSection = () => {
    const [activeDropdown, setActiveDropdown] = React.useState(null);

    const toggleDropdown = (index) => {
      setActiveDropdown(activeDropdown === index ? null : index);
    };

    const dropdownSections = [
      {
        title: "Student Union Membership and Insurance:",
        content:
          "All students are required to pay a nominal student union membership fee and a student accident insurance fee each semester.",
      },
      {
        title: "Application Deadlines:",
        content:
          "For bachelor’s and diploma programs, students must register by September 5 for the winter semester and February 5 for the summer semester.",
      },
      {
        title: "English Proficiency:",
        content:
          "Many universities accept alternative English proficiency tests, and some may waive this requirement for students who have completed prior education in English.",
      },
      {
        title: "High School Diploma:",
        content:
          "Applicants must hold an A-level or high school diploma that is equivalent to the Austrian Matura examination certification.",
      },
    ];

    dropdownSections.sort((a, b) => a.title.localeCompare(b.title));

    const shouldScroll = dropdownSections.length > 6;

    return (
      <section className="mt-16 w-full py-16 relative">
        <div className="flex flex-col lg:flex-row w-full" style={{ height: "800px" }}>
          <div className="lg:w-1/2 w-full flex flex-col" style={{ backgroundColor: "#00334D" }}>
            <div
              className={`p-6 ml-24 flex-grow ${shouldScroll ? "overflow-y-auto" : ""}`}
              style={{ maxHeight: "calc(100vh - 100px)", paddingBottom: "50px" }}
            >
              <h3 className="text-2xl sm:text-3xl font-l mt-16 mb-1 text-white">
                Want Free Education in Austria?
              </h3>
              <h3 className="text-2xl sm:text-3xl font-l mt-1 mb-16 text-white">
                Here's What You Need to <span className="text-[#F9920A]">Qualify</span>
              </h3>
              <p className="text-white mb-8">
                Austria offers world-class education with no tuition fees at public
                universities for international students.
              </p>
              <div className="space-y-3 flex-grow">
                {dropdownSections.map((section, index) => (
                  <div key={index} className="w-full">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left p-4 flex items-center ${
                        activeDropdown === index ? "bg-gray-800 rounded-t-lg" : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4"
                      >
                        <circle cx="10" cy="10" r="10" fill="#F9920A" />
                        <path
                          d="M6 10L9 13L14 8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-lg font-semibold text-[#F9920A]">
                        {section.title}
                      </span>
                      <svg
                        className={`w-5 h-5 text-[#F9920A] transition-transform duration-300 ml-auto ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div
                        className="bg-gray-800 rounded-b-lg hover:text-white transition-colors duration-200"
                        style={{
                          paddingLeft: "50px",
                          paddingRight: "20px",
                          paddingBottom: "16px",
                        }}
                      >
                        <p className="text-gray-200">{section.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image with Intake Overlay */}
          <div className="lg:w-1/2 w-full relative" style={{ height: "100%" }}>
            <div className="h-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img
                src={germanyImage}
                alt="Study in Austria"
                className="w-full h-full object-cover"
              />
            </div>
            <IntakeSection />
          </div>
        </div>
      </section>
    );
  };

  const educationOptions = {
    title: "Other Options for Free or Affordable Education Abroad",
    sections: [
      {
        heading: "Nordic Countries",
        points: [
          "Norway: Offers completely tuition-free education for all students, regardless of nationality or level of study.",
          "Denmark, Sweden, Finland: Free education available only to EU/EEA & Swiss students for bachelor's and master's programs.",
          "Non-EU/EEA students must pay tuition fees in Denmark, Sweden, and Finland.",
          "PhD programs across these countries are fully funded, often including a stipend.",
        ],
      },
      {
        heading: "Scholarship Friendly Countries",
        points: [
          "Countries like Greece, Japan, China, Switzerland, the Netherlands, and South Korea offer full scholarships for international students.",
          "Note: Scholarship availability and criteria vary by institution, so checking details is crucial.",
        ],
      },
    ],
  };

  const features = [
    {
      title: "No Tuition Fees",
      description:
        "Students must satisfy the academic prerequisites for their chosen program.",
    },
    {
      title: "A Global Student Hub",
      description:
        "Austria attracts thousands of international students, including many from India, with its affordable, high-quality education.",
    },
    {
      title: "Investing in Tomorrow's Leaders",
      description:
        "The tuition-free model reflects Austria's commitment to building a future-ready, globally aware generation.",
    },
    {
      title: "Equal Access for All",
      description:
        "Regardless of where you're from, Austria ensures equal opportunities for academic success.",
    },
    {
      title: "World-Class Standards",
      description:
        "Free doesn't mean easy — Austrian universities maintain rigorous academic standards and a strong focus on excellence.",
    },
    {
      title: "Research Opportunities",
      description:
        "Students have access to cutting-edge research facilities and collaborations with industry leaders.",
    },
  ];

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <FeatureHighlightSection
        title="Launch Your Future with Free Education in Austria"
        features={features}
      />

      <WhyChooseSection />

      <AffordableEducationOptions
        title={educationOptions.title}
        sections={educationOptions.sections}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default FreeEducationAustria;