import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docSlide1 from "../../../../assets/Services/slide1.webp";
import docSlide2 from "../../../../assets/Services/slide2.webp";
import docSlide3 from "../../../../assets/Services/slide3.webp";
import docSlide4 from "../../../../assets/Services/slide4.webp";
import travelImage from "../../../../assets/Services/slide5.webp";

const carouselItems = [
  {
    id: 1,
    title: "Fast & Trustworthy Certificate Attestation",
    description:
      "We provide professional and efficient support to expedite the attestation of your certificates.",
    image: docSlide1,
  },
  {
    id: 2,
    title: "VISA document preparation assistance",
    description:
      "We provide comprehensive visa assistance, guiding you through every step from filling out applications to preparing documents.",
    image: docSlide2,
  },
  {
    id: 3,
    title: "Document Translation Assistance",
    description:
      "Document translation is the process of transforming written material from one language to another.",
    image: docSlide3,
  },
  {
    id: 4,
    title: "Appointment Assistance",
    description:
      "Our team of specialists ensures that appointments are scheduled in alignment with the specific needs of each student.",
    image: docSlide4,
  },
];

const Cards = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedItem, setSelectedItem] = useState(carouselItems[0]);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setSelectedItem(carouselItems[current]),
    arrows: false, 
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-[700px] bg-gray-100 relative flex flex-col">
        <div className="bg-white flex justify-center space-x-4 py-6">
          <button
            className={`w-64 h-15 rounded-full border font-medium transition-colors duration-300 ${
              activeTab === 1
                ? "bg-[#F9920A] text-white"
                : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
            }`}
            onClick={() => {
              setActiveTab(1);
              setSelectedItem(carouselItems[0]);
              if (sliderRef.current) sliderRef.current.slickGoTo(0);
            }}
          >
            Documentation Assistance
          </button>

          <button
            className={`w-64 h-15 rounded-full border font-medium transition-colors duration-300 ${
              activeTab === 2
                ? "bg-[#F9920A] text-white"
                : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Travel Assistance
          </button>
        </div>

        {activeTab === 1 ? (
          <div className="p-8 rounded-lg relative h-[31rem] flex flex-col justify-center">
            <Slider ref={sliderRef} {...sliderSettings}>
              {carouselItems.map((item) => (
                <div key={item.id} className="p-4">
                  <h2 className="text-2xl font-bold mb-4 text-[#00334D]">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[#00334D]">
                    {item.description}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="p-8 rounded-lg h-[28rem] flex flex-col justify-center">
            <p className="text-9xl font-bold mb-4 text-[#00334D]">
              Travel Assistance
            </p>
            <p className="text-base leading-relaxed text-[#00334D]">
              Travel assistance involves offering support, services, and
              guidance to our students to ensure their journey is safe,
              convenient, and enjoyable.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6">
            <button
              className="text-[#00334D] w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-[#00334D] hover:text-white transition-colors duration-300"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="text-[#00334D] w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-[#00334D] hover:text-white transition-colors duration-300"
              onClick={() => sliderRef.current.slickNext()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="w-1/2 h-[700px]">
        <div className="bg-white rounded-lg flex items-center justify-center">
          <img
            src={activeTab === 1 ? selectedItem.image : travelImage}
            alt={activeTab === 1 ? selectedItem.title : "Travel Assistance"}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
