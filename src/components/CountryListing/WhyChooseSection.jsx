import React, { useState } from "react";
import IntakeSection from "./IntakeSection";

const WhyChooseSection = ({ image, dropdownSections, intakes, countryName }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className="w-full py-20 relative">
      <div className="flex flex-col lg:flex-row w-full" style={{ height: "800px" }}>
        {/* Left Side - Dropdowns */}
        <div className="lg:w-1/2 w-full" style={{ backgroundColor: "#00334D", height: "100%" }}>
          <div className="p-4 lg:p-6 lg:ml-12 overflow-hidden" style={{ height: "100%", maxHeight: "100%" }}>
            <h2 className="text-xl lg:text-3xl font-bold mt-8 lg:mt-16 mb-8 lg:mb-16 text-white">
              Why choose <span className="text-[#F9920A]">{countryName}?</span>
            </h2>
            <p className="text-white mb-6 lg:mb-8 text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="space-y-3 lg:space-y-4 pb-4 lg:pb-0">
              {dropdownSections.map((section, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`w-full text-left p-3 lg:p-4 flex items-center ${
                      activeDropdown === index ? "bg-gray-800 rounded-t-lg" : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 lg:mr-4"
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
                    <span className="text-base lg:text-lg font-semibold text-[#F9920A]">
                      {section.title}
                    </span>
                    <svg
                      className={`w-4 lg:w-5 h-4 lg:h-5 text-[#F9920A] transition-transform duration-300 ml-auto ${
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
                        paddingTop: "12px",
                      }}
                    >
                      <p className="text-gray-200 text-sm lg:text-base">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image with Intake Overlay */}
        <div className="lg:w-1/2 w-full relative" style={{ height: "100%" }}>
          <div className="h-full overflow-hidden">
            <img
              src={image}
              alt={`Study in ${countryName}`}
              className="w-full h-full object-cover"
            />
          </div>
          <IntakeSection intakes={intakes} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;