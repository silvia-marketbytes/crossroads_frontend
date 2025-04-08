import React, { useState } from "react";
import Banner from "../../../../../components/Banner";
import bannerImg from "../../../../../assets/country/Germany-Banner.webp";
import ContactSection from "../../../../../pages/Home/UiComponents/ContactSection";
import germanyImage from "../../../../../assets/country/germany-education.webp";
import CoursesOffered from "../../../../../../src/components/UiComponents/CoursesOffered";

const Sweden = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Study in Sweden",
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

  const countryDetails = [
    { label: "Capital", value: "Berlin" },
    { label: "Population", value: "83 Million" },
    { label: "Language", value: "German" },
    { label: "International Students", value: "458210" },
    { label: "Currency", value: "Euro" },
    { label: "GDP", value: "$ 4.5 Trillion" },
    { label: "Universities", value: "400+" },
    { label: "International Students", value: "458210" },
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
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-base sm:text-lg text-gray-600 mx-auto content-justify">
              Germany, located in Western Europe, is renowned for its diverse
              landscapes, including forests, rivers, mountain ranges, and
              beaches along the North Sea. The country is celebrated for its
              impressive architecture and is known for being both safe and
              clean. Low crime rates and strict regulations help create a secure
              living environment. Cities are well-maintained with efficient
              waste management systems and public initiatives that ensure high
              levels of cleanliness.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {countryDetails.map((detail, index) => (
                <div
                  key={index}
                  className="relative p-5 rounded-lg shadow-md text-center bg-gray-100"
                >
                  <h3 className="text-lg text-gray-600">{detail.label}</h3>
                  <p className="text-gray-800 font-bold mt-2">{detail.value}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-2"
                    style={{ backgroundColor: "#F9920A" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 w-full py-16 relative">
        <div
          className="flex flex-col lg:flex-row w-full"
          style={{ height: "800px" }}
        >
          {/* Left Side - Full Blue Background */}
          <div
            className="lg:w-1/2 w-full"
            style={{
              backgroundColor: "#00334D",
              height: "100%",
            }}
          >
            <div
              className="p-6 ml-12 overflow-hidden"
              style={{ height: "100%" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-16 text-white">
                Why choose <span className="text-[#F9920A]">Sweden?</span>
              </h2>
              <p className="text-white mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>

              <div className="space-y-4">
                {dropdownSections.map((section, index) => (
                  <div key={index} className="w-full">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left p-4 flex items-center ${
                        activeDropdown === index
                          ? "bg-gray-800 rounded-t-lg"
                          : ""
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

          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full relative" style={{ height: "100%" }}>
            <div className="h-full overflow-hidden">
              <img
                src={germanyImage}
                alt="Study in Germany"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
              <div className="bg-[#00334D]/30 p-6 w-full max-w-md rounded-lg shadow-md border border-white/20">
                <h2 className="text-xl font-bold mb-4 text-white">Intake</h2>
                <div className="space-y-3">
                  {intakes.map((intake, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="10" cy="10" r="10" fill="white" />
                          <path
                            d="M6 10L9 13L14 8"
                            stroke="#00334D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <label className="text-white">{intake}</label>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="bg-[#F9920A] hover:bg-[#e08309] text-white font-medium py-2 px-4 rounded-full transition-colors">
                    For more details click here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full pt-12 pb-12 bg-[#00334D] text-center"
        style={{ minHeight: "250px" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl sm:text-3xl mb-4">
            <span className="text-[#F9920A]">Virtual Assistance</span>{" "}
            <span className="text-white">for Your Study Abroad Journey</span>
          </h2>
          <p className="text-white text-base sm:text-lg mx-auto max-w-2xl text-center mb-6">
            If you can't come to our office, we can come to you virtually! Get
            expert counselling services from the comfort of your home or
            anywhere you are.
          </p>
          <button className="bg-[#F9920A] hover:bg-[#e08309] text-white font-medium py-2 px-4 rounded-full transition-colors">
            Enquire now
          </button>
        </div>
      </section>

      <CoursesOffered title="Courses offered" courses={courses} />

      <ContactSection />
    </div>
  );
};

export default Sweden;
