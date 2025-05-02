import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { courses, tabContent, whyChoose } from "./data";

import Banner from "../../../components/Banner";

import ContactSection from "../../Home/UiComponents/ContactSection";

import Modal from "../../../components/modal";

const TickSVG = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#F9920A] mr-2 inline-block shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#F9920A" />
    <path
      d="M8 12L11 15L17 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CoursePage = ({ courseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = courses.find((c) => c.id === courseId);

  const tabs = tabContent[course?.title]?.map((item) => item.tab) || [];

  // Set the first tab as the initial active tab, or fallback to an empty string if tabs is empty

  const [activeTab, setActiveTab] = useState(tabs[0] || "");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(true);
  };

  if (!course) {
    return <div className="text-center py-10">Course not found</div>;
  }

  const renderContent = () => {
    const activeTabData = tabContent[course.title]?.find(
      (item) => item.tab === activeTab
    );

    if (!activeTabData) return null;

    // Split content into groups of 3

    const contentGroups = [];

    for (let i = 0; i < activeTabData.content.length; i += 3) {
      contentGroups.push(activeTabData.content.slice(i, i + 3));
    }

    return (
      <AnimatePresence mode="wait">
        <div>
          {contentGroups.map((group, groupIndex) => {
            const isReversed = groupIndex % 2 === 1;

            const image =
              activeTabData.images && activeTabData.images[groupIndex]
                ? activeTabData.images[groupIndex]
                : activeTabData.image || course.image;

            return (
              <motion.div
                key={`${activeTab}-${groupIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 sm:mt-8 lg:mt-20"
              >
                <div
                  className={`w-full mx-auto flex flex-col md:flex-row items-stretch bg-gray-100 ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={image}
                      alt={`${activeTab} ${course.title} Program - Section ${
                        groupIndex + 1
                      }`}
                      className={`w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover px-4 ${
                        isReversed
                          ? "md:pr-10 md:pl-4 lg:pr-28"
                          : "md:pl-10 lg:pl-28"
                      }`}
                    />
                  </div>
                  <div className="w-full md:w-1/2 grid items-center p-4">
                    <div>
                      <ul
                        className={`space-y-8 ${
                          isReversed
                            ? "ml-4 sm:ml-4 lg:ml-24 mr-4 sm:mr-4 lg:mr-0"
                            : "mr-4 sm:mr-4 lg:mr-9 ml-4 sm:ml-4 lg:ml-0"
                        }`}
                      >
                        {group.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="block"
                          >
                            <span className="font-medium text-[#00334D] mt-2 flex items-center">
                              <TickSVG /> {item.title}:
                            </span>
                            <div>
                              {item.description && (
                                <span className="text-[#00334D] mt-2 text-sm sm:text-sm lg:text-sm">
                                  {item.description}
                                </span>
                              )}

                              {item.subItems && (
                                <ul className="list-disc list-outside pl-5 mt-2 space-y-2">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="text-[#00334D] text-sm sm:text-sm lg:text-sm"
                                    >
                                      {subItem}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="course-container">
        <div className="banner-wrapper">
          <Banner title={course.title} backgroundImage={course.image} />
        </div>
        <div className="flex flex-wrap gap-2 justify-center space-x-2 my-6 sm:my-8 lg:my-16 overflow-x-auto px-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`min-w-[120px] sm:w-40 h-8 sm:h-9 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#F9920A] text-white"
                  : "bg-transparent text-[#00334D] border border-[#F9920A] hover:bg-[#F9920A] hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {renderContent()}
        <div className="mt-8 sm:mt-8 lg:mt-24">
          <div className="bg-[#00334D] py-8 sm:py-10">
            <h3 className="px-4 sm:px-10 md:px-20 text-2xl sm:text-3xl text-gray-100">
              <span>Why Choose </span>
              <span className="text-[#F9920A]">{course.title}</span> from India?
            </h3>
            <div className="py-8 sm:py-10 px-4 sm:px-10 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {whyChoose[course.title]?.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F9920A]/30 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-[#F9920A] pt-2 space-x-2 flex items-center justify-start">
                      <span className="ml-3">
                        <TickSVG />
                      </span>

                      {card.title}
                    </h3>
                    <p className="text-gray-200 p-4 sm:p-5 ml-6 mr-4 text-sm sm:text-base">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button
                className="text-white hover:text-[#00334D] bg-[#F9920A] hover:bg-[#fcfcfc] transition-all duration-300 text-sm px-4 py-2 rounded-full"
                onClick={openModal}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="my-6 sm:my-8 lg:my-16">
          <ContactSection />
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && <ModalNews onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default CoursePage;
