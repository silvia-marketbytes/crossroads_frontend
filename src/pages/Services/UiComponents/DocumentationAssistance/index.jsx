import React, { useState, useRef, Suspense, lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docSlide1 from "../../../../assets/Services/slide1.webp";
import docSlide2 from "../../../../assets/Services/slide2.webp";
import docSlide3 from "../../../../assets/Services/slide3.webp";
import docSlide4 from "../../../../assets/Services/slide4.webp";
import travelImage from "../../../../assets/Services/slide5.webp";
import bannerImg from "../../../../assets/Services/banner png.webp";
import Banner from "../../../../components/Banner"; // Keep the import

const ContactSection = lazy(() => import("../../../Home/UiComponents/ContactSection"));

const documentationItems = [
  {
    id: 1,
    title: "Attestation assistance – Various certificates",
    description:
      "We provide professional and efficient support to expedite the attestation of your certificates. Certificate attestation is a crucial process that verifies the authenticity of a document through official government authorities. Attestation ensures that your certificate is genuine and is acknowledged by the relevant country, institution, or organization where it will be submitted.",
    image: docSlide1,
  },
  {
    id: 2,
    title: "VISA document preparation assistance",
    description:
      "We provide comprehensive visa assistance, guiding you through every step from filling out applications to preparing documents, ensuring you meet the strict requirements of the visa offices for your chosen destination. Our team of seasoned professionals is well-equipped with the expertise needed to manage the entire visa file preparation process. From completing the application form to organizing all necessary documents, we aim to strengthen your application for a higher success rate. This allows us to deliver efficient and reliable visa preparation services with a focus on quick turnaround times.",
    image: docSlide2,
  },
  {
    id: 3,
    title: "Document Translation Assistance",
    description:
      "Document translation is the process of transforming written material from one language to another, ensuring that the original meaning, tone, and context are preserved. This task requires expert linguists who are proficient in both the source and target languages to deliver accurate and high-quality translations. We offer certified translations in both Indian and foreign languages, which are recognized and accepted by legal authorities.",
    image: docSlide3,
  },
  {
    id: 4,
    title: "Appointment Assistance",
    description:
      "A formal procedure is necessary for students to have their visas processed. Our team of specialists ensures that appointments are scheduled in alignment with the specific needs of each student. We make it a priority to secure the most convenient and suitable time slots, ensuring the process is smooth and accommodating to their preferences",
    image: docSlide4,
  },
];

const travelItems = [
  {
    id: 1,
    title: "Transportation Support",
    description:
      "Travel assistance involves offering support, services, and guidance to our students to ensure their journey is safe, convenient, and enjoyable. This includes various aspects such as transportation, accommodation, travel information, and emergency assistance. Our dedicated team ensures that students experience a smooth and secure trip from the start of their journey until they safely arrive at their chosen university",
    image: travelImage,
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedItem, setSelectedItem] = useState(documentationItems[0]);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setSelectedItem(documentationItems[current]),
    arrows: false,
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Documentation and Travel Assistance",
    className: "px-10",
    classNameTitle: "text-services-title",
    showDateTime: false,
    showSocialMedia: false,
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <section className="py-6 sm:py-8 lg:py-12 px-10 sm:px-12 lg:px-16 flex justify-center">
        <div className="w-full">
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            style={{ textAlign: 'justify' }}
          >
            We provide comprehensive Travel & Documentation Assistance to ensure a smooth and hassle-free experience. From certificate attestation and visa document preparation to certified translations and appointment scheduling, our expert team handles every detail with efficiency and accuracy. Additionally, we offer reliable travel support, including transportation, accommodation, and essential guidance, ensuring a safe and stress-free journey. With our dedicated services, students and professionals can confidently navigate their travel and documentation needs with ease.
          </p>
        </div>
      </section>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="w-full flex flex-col md:flex-row md:h-[600px] lg:h-[700px]">
          <div className="w-full md:w-1/2 h-full bg-gray-100 relative flex flex-col">
            <div className="bg-white flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 py-4 sm:py-6">
              <button
                className={`w-full sm:w-48 md:w-56 lg:w-64 h-12 rounded-full border font-medium transition-colors duration-300 ${
                  activeTab === 1
                    ? "bg-[#F9920A] text-white"
                    : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
                }`}
                onClick={() => {
                  setActiveTab(1);
                  setSelectedItem(documentationItems[0]);
                  if (sliderRef.current) sliderRef.current.slickGoTo(0);
                }}
              >
                Documentation Assistance
              </button>
              <button
                className={`w-full sm:w-48 md:w-56 lg:w-64 h-12 rounded-full border font-medium transition-colors duration-300 ${
                  activeTab === 2
                    ? "bg-[#F9920A] text-white"
                    : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
                }`}
                onClick={() => {
                  setActiveTab(2);
                  setSelectedItem(travelItems[0]);
                }}
              >
                Travel Assistance
              </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 rounded-lg flex-1 flex flex-col justify-center">
              {activeTab === 1 ? (
                <Slider ref={sliderRef} {...sliderSettings}>
                  {documentationItems.map((item) => (
                    <div key={item.id} className="p-2 sm:p-4">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-[#00334D]">
                        {item.title}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#00334D] overflow-y-auto max-h-[200px] sm:max-h-[300px] lg:max-h-[400px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="p-2 sm:p-4 pt-0 sm:pt-2">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-[#00334D]">
                    {selectedItem.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#00334D] overflow-y-auto max-h-[200px] sm:max-h-[300px] lg:max-h-[400px]">
                    {selectedItem.description}
                  </p>
                </div>
              )}
            </div>

            {activeTab === 1 && (
              <div className="pb-4 flex justify-center space-x-2">
                <button
                  className="text-[#00334D] w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 sm:w-6"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="text-[#00334D] w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 sm:w-6"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-full flex flex-col justify-end">
            <div className="bg-white rounded-lg flex items-center justify-center h-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Services;