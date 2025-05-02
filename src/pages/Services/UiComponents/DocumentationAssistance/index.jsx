import React, { useState, useRef, Suspense, lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docSlide1 from "../../../../assets/Services/slide1.webp";
import docSlide2 from "../../../../assets/Services/slide2.webp";
import docSlide3 from "../../../../assets/Services/slide3.webp";
import docSlide4 from "../../../../assets/Services/slide4.webp";
import travelImage from "../../../../assets/Services/slide5.webp";
import bannerImg from "../../../../assets/Services/Documentation and travel_result.webp";
import Banner from "../../../../components/Banner";
 
const ContactSection = lazy(() => import("../../../Home/UiComponents/ContactSection"));
 
const documentationItems = [
  {
    id: 1,
    title: "Fast & Trustworthy Certificate Attestation",
    description:
      "We provide professional and efficient support to expedite the attestation of your certificates. Certificate attestation is a crucial process that verifies the authenticity of a document through official government authorities. Attestation ensures that your certificate is genuine and is acknowledged by the relevant country, institution, or organization where it will be submitted.",
    image: docSlide1,
  },
  {
    id: 2,
    title: "Efficient VISA Document Preparation Assistance",
    description:
      "We provide comprehensive visa assistance, guiding you through every step from filling out applications to preparing documents, ensuring you meet the strict requirements of the visa offices for your chosen destination. Our team of seasoned professionals is well-equipped with the expertise needed to manage the entire visa file preparation process. From completing the application form to organizing all necessary documents, we aim to strengthen your application for a higher success rate. This allows us to deliver efficient and reliable visa preparation services with a focus on quick turnaround times.",
    image: docSlide2,
  },
  {
    id: 3,
    title: "Accurate Document Translation Assistance",
    description:
      "Document translation is the process of transforming written material from one language to another, ensuring that the original meaning, tone, and context are preserved. This task requires expert linguists who are proficient in both the source and target languages to deliver accurate and high-quality translations. We offer certified translations in both Indian and foreign languages, which are recognized and accepted by legal authorities.",
    image: docSlide3,
  },
  {
    id: 4,
    title: "Convenient Appointment Assistance",
    description:
      "A formal procedure is necessary for students to have their visas processed. Our team of specialists ensures that appointments are scheduled in alignment with the specific needs of each student. We make it a priority to secure the most convenient and suitable time slots, ensuring the process is smooth and accommodating to their preferences",
    image: docSlide4,
  },
];
 
const travelItems = [
  {
    id: 1,
    title: "Reliable Transportation Support",
    description:
      "Travel assistance involves offering support, services, and guidance to our students to ensure their journey is safe, convenient, and enjoyable. This includes various aspects such as transportation, accommodation, travel information, and emergency assistance. Our dedicated team ensures that students experience a smooth and secure trip from the start of their journey until they safely arrive at their chosen university",
    image: travelImage,
  },
];
 
// Preload images to reduce loading delays
const preloadImages = (items) => {
  items.forEach((item) => {
    const img = new Image();
    img.src = item.image;
  });
};
 
preloadImages([...documentationItems, ...travelItems]);
 
const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedItem, setSelectedItem] = useState(documentationItems[0]);
  const sliderRef = useRef(null);
 
  const sliderSettings = {
    dots: activeTab === 1,
    infinite: activeTab === 1,
    speed: 300, // Slightly increased for smoother transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: activeTab === 1,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      const activeItems = activeTab === 1 ? documentationItems : travelItems;
      setSelectedItem(activeItems[newIndex] || activeItems[0]);
    },
    arrows: false,
    fade: true, // Added fade effect for smoother image transitions
  };
 
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Documentation and Travel Assistance",
    className: "px-10",
    classNameTitle: "text-services-title",
    showDateTime: false,
    showSocialMedia: false,
  };
 
  const activeItems = activeTab === 1 ? documentationItems : travelItems;
 
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
 
      <section className="py-6 sm:py-8 lg:py-12 px-10 sm:px-12 lg:px-16 flex justify-center">
        <div className="w-full">
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            We provide comprehensive Travel & Documentation Assistance to ensure a smooth and hassle-free experience. From certificate attestation and visa document preparation to certified translations and appointment scheduling, our expert team handles every detail with efficiency and accuracy. Additionally, we offer reliable travel support, including transportation, accommodation, and essential guidance, ensuring a safe and stress-free journey. With our dedicated services, students and professionals can confidently navigate their travel and documentation needs with ease.
          </p>
        </div>
      </section>
 
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-100 flex flex-col">
            <div className="relative flex flex-col sm:flex-row justify-center sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-4 sm:py-6">
              <div className="hidden md:hidden lg:hidden xl:block -z-0 absolute w-[87%] h-24 left-0 top-0 rounded-br-lg bg-white"></div>
              <div className="hidden md:hidden lg:hidden xl:block z-20 absolute w-[13%] h-24 right-0 top-0 rounded-tl-xl bg-gray-100"></div>
              <div className="hidden md:hidden lg:hidden xl:block z-10 absolute w-[13%] h-24 right-0 top-0 bg-white"></div>
              {[
                { id: 1, name: "Documentation Assistance" },
                { id: 2, name: "Travel Assistance" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`z-30 w-full h-16 lg:w-64 lg:h-10 rounded-full border transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#F9920A] text-white"
                      : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const newSelectedItem = tab.id === 1 ? documentationItems[0] : travelItems[0];
                    setSelectedItem(newSelectedItem);
                    if (sliderRef.current && tab.id === 1) sliderRef.current.slickGoTo(0);
                  }}
                  dangerouslySetInnerHTML={{ __html: tab.name }}
                />
              ))}
            </div>
 
            <div className="flex-1 flex flex-col justify-start">
              {activeTab && activeItems.length > 0 ? (
                activeItems.length > 1 ? (
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {activeItems.map((item) => (
                      <div key={item.id} className="px-4">
                        <div
                          className="py-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00334D]"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <div
                          className="leading-relaxed max-h-full sm:max-h-full lg:max-h-[400px] text-[#00334D]"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="px-4">
                    <div
                      className="py-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00334D]"
                      dangerouslySetInnerHTML={{ __html: activeItems[0].title }}
                    />
                    <div
                      className="leading-relaxed max-h-full sm:max-h-full lg:max-h-[400px] text-[#00334D]"
                      dangerouslySetInnerHTML={{ __html: activeItems[0].description }}
                    />
                  </div>
                )
              ) : (
                <div className="px-4">
                  <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#00334D]">
                    No items available for this tab.
                  </p>
                </div>
              )}
            </div>
 
            {activeTab === 1 && activeItems.length > 1 && (
              <div className="pb-4 flex justify-center space-x-2">
                <button
                  className="text-[#00334D] w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 sm:w-8"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="text-[#00334D] w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 sm:w-8"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
 
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white flex items-center justify-center h-full">
              {selectedItem && selectedItem.image ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  loading="lazy" // Added lazy loading
                />
              ) : (
                <div className="text-center text-[#00334D]">No image available</div>
              )}
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
 