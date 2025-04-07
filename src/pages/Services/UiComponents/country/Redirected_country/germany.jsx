import React, { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/country/Germany-Banner.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../../../assets/country/germany-education.webp";

const Germany = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in Germany",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Talk to an Expert",
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Country data
  const countryDetails = [
    { label: "Capital", value: "Berlin" },
    { label: "Population", value: "83 Million" },
    { label: "Language", value: "German" },
    { label: "International Students", value: "458210" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$ 4.5 Trillion" },
    { label: "Universities", value: "400+" },
    { label: "Universities", value: "400+" },
  ];

  const dropdownSections = [
    {
      title: "Germany Excels with Top Universities",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Diverse Study Programs",
      content: "Choose from a wide range of programs in various fields of study."
    },
    {
      title: "Public University Scholarships",
      content: "Many public universities offer scholarships to international students."
    },
    {
      title: "Research and Innovation",
      content: "Germany is a global leader in research and technological innovation."
    },
    {
      title: "Prosperity, Quality of life, Career advancement",
      content: "Enjoy high living standards and excellent career opportunities."
    },
    {
      title: "Healthcare, Competitive pay, Ideal conditions",
      content: "Benefit from excellent healthcare and working conditions."
    }
  ];

  const intakes = [
    "Winter-Sept/Oct",
    "Summer-March/April",
    "Additional intakes (Feb/May/June) at some private universities."
  ];

  return (
    <div className="">
      <Banner {...bannerProps} />
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-base sm:text-lg text-gray-600 mx-auto content-justify">
              Germany, located in Western Europe, is renowned for its diverse landscapes, including forests, rivers, mountain ranges, and beaches along the North Sea. The country is celebrated for its impressive architecture and is known for being both safe and clean. Low crime rates and strict regulations help create a secure living environment. Cities are well-maintained with efficient waste management systems and public initiatives that ensure high levels of cleanliness.
            </p>
          </div>

          {/* Country Details Section */}
          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {countryDetails.map((detail, index) => (
                <div key={index} className="relative p-5 rounded-lg shadow-md text-center bg-gray-100">
                  <h3 className="text-lg text-gray-600">{detail.label}</h3>
                  <p className="text-gray-800 font-bold mt-2">{detail.value}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: "#F9920A" }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Germany Section - Full Width with No Padding */}
      <section className="mt-16 w-full py-8">
        <div className="flex flex-col lg:flex-row w-full" style={{ height: "800px" }}>
          {/* Left Side - Full Blue Background */}
          <div
            className="lg:w-1/2"
            style={{
              backgroundColor: "#00334D",
              height: "100%", // Matches parent height
            }}
          >
            <div
              className="p-6 ml-12 overflow-y-auto"
              style={{ height: "100%" }} // Ensures content area matches container height
            >
              <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-16 text-white">
                Why choose <span className="text-[#F9920A]">Germany?</span>
              </h2>
              <p className="text-white mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>

              <div className="space-y-4">
                {dropdownSections.map((section, index) => (
                  <div key={index} className="rounded-lg overflow-hidden w-full">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left p-4 flex items-center"
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
                      <span className="text-lg font-semibold text-[#F9920A]">{section.title}</span>
                      <svg
                        className={`w-5 h-5 text-[#F9920A] transition-transform duration-300 ml-auto ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="pt-2 pb-4 text-white" style={{ paddingLeft: "50px" }}>
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2" style={{ height: "100%" }}>
            <div className="h-full overflow-hidden">
              <img src={germanyImage} alt="Study in Germany" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections with Original Padding */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mt-16 mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Intake</h2>
          <div className="space-y-3">
            {intakes.map((intake, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="h-2 w-2 rounded-full bg-[#F9920A]"></div>
                </div>
                <p className="text-gray-800">{intake}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="#" className="text-[#F9920A] font-medium hover:underline">
              For more details click here
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Germany;