import React, { useState } from "react";

const languageLabItems = [
  {
    id: 1,
    title: "OET - Occupational English Test for Healthcare Professionals",
    description:
      "The OET is a specialized language assessment designed specifically for healthcare professionals who wish to register and practice in English-speaking countries. Covering 12 healthcare professions, including medicine, nursing, dentistry, and physiotherapy, OET evaluates the language and communication skills essential for effective practice in these fields. The exam is divided into four components: listening, reading, writing, and speaking, each tailored to reflect real healthcare scenarios.",
  },
  {
    id: 2,
    title: "IELTS - The International English Language Testing System",
    description:
      "The IELTS is the world’s most recognized English language proficiency test, essential for non-native speakers seeking higher education or migration opportunities in English-speaking countries. IELTS is widely accepted by academic institutions and employers across the globe as valid proof of English proficiency. With two main versions—IELTS Academic and IELTS General Training—this test ensures that candidates are well-prepared for the linguistic demands of a globalized world.",
  },
  {
    id: 3,
    title: "German Language",
    description:
      "At Crossroads, we pride ourselves on offering top-tier German language courses through both online and offline formats, designed to suit the diverse needs of our students. Our team of highly experienced professionals are dedicated to helping you achieve fluency and reach your language learning goals. We provide comprehensive training across all proficiency levels—A1, A2, B1, B2, C1, and C2—tailored to students and professionals who aim to migrate to Germany for education or career advancement. Our courses equip you with the language skills necessary to excel in a German-speaking environment.",
  },
  {
    id: 4,
    title: "PTE - Pearson Test of English",
    description:
      "The PTE is a computer-based academic English language test ideal for non-native English speakers planning to study abroad. PTE offers a range of tests each designed to assess proficiency in reading, writing, listening, and speaking. These scenario-based exams provide a comprehensive evaluation of English language skills. PTE’s rigorous assessment is recognized by universities and employers worldwide, making it a valuable credential for students seeking international opportunities.",
  },
];

const Language = () => {
  const [selectedItem, setSelectedItem] = useState(
    languageLabItems.length > 0 ? languageLabItems[0] : null
  );

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
        {/* Left Navigation Panel */}
        <div className="w-full md:w-1/3 min-h-[200px] sm:min-h-[250px] md:min-h-full flex flex-col rounded-xl overflow-hidden">
          <div className="flex flex-col p-3 sm:p-4 lg:p-6">
            {languageLabItems.map((item, index) => (
              <div
                key={item.id}
                className={index !== languageLabItems.length - 1 ? "border-b border-gray-800" : ""}
              >
                <button
                  className={`w-full text-left px-4 py-4 sm:px-5 sm:py-6 lg:py-8 text-xs sm:text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
                    selectedItem?.id === item.id
                      ? "bg-[#00334D] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="w-full md:w-2/3 min-h-[200px] sm:min-h-[250px] md:min-h-full flex flex-col bg-gray-100 rounded-xl overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col justify-start overflow-y-auto">
            {selectedItem ? (
              <>
                <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-2 sm:mb-3 lg:mb-4 text-[#00334D] font-poppins">
                  {selectedItem.title}
                </h2>
                <p className="text-xs sm:text-sm lg:text-lg leading-relaxed text-gray-700">
                  {selectedItem.description}
                </p>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
                  Select a language test to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;