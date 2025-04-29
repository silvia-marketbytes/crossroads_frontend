import React, { Suspense, useState, useRef } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/Banner";
import ContactSection from "../Home/UiComponents/ContactSection";
import bannerImg from "../../assets/testimonials/our_sucess_story.webp";
import student1 from "../../assets/Students/Student1.png";
import student2 from "../../assets/Students/Student2.png";
import video1 from "../../assets/Students/Videos/Video1.mp4";
import video2 from "../../assets/Students/Videos/Video2.mp4";
import flag1 from "../../assets/Flags/austria.png";
import flag2 from "../../assets/Flags/germany.png";
import flag3 from "../../assets/Flags/italy.png";
 
const TESTIMONIALS_DATA = [
  {
    imageSrc: student1,
    name: "Anjali Krishnan",
    flag: flag1,
    rating: 5,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    type: "image",
  },
  {
    imageSrc: student2,
    name: "Harikumar V.",
    flag: flag2,
    rating: 5,
    description:
      "Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    type: "image",
  },
  {
    imageSrc: student1,
    name: "Priya Sharma",
    flag: flag3,
    rating: 4,
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
    type: "image",
  },
  {
    imageSrc: student1,
    name: "Rahul Patel",
    flag: flag1,
    rating: 5,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    type: "image",
  },
  {
    imageSrc: student2,
    name: "Sneha Gupta",
    flag: flag2,
    rating: 4,
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    type: "image",
  },
  {
    imageSrc: student1,
    name: "Amit Singh",
    flag: flag3,
    rating: 5,
    description:
      "Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    type: "image",
  },
  {
    imageSrc: student1,
    name: "Vikram Rao",
    flag: flag1,
    rating: 5,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    type: "image",
  },
  {
    imageSrc: student2,
    name: "Neha Verma",
    flag: flag2,
    rating: 4,
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    type: "image",
  },
];
 
const VIDEO_TESTIMONIALS = [
  {
    videoSrc: video1,
    name: "Divya Ajith",
    flag: flag3,
    rating: 5,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    type: "video",
  },
  {
    videoSrc: video2,
    name: "Rohan Mehta",
    flag: flag1,
    rating: 5,
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    type: "video",
  },
  {
    videoSrc: video1,
    name: "Ananya Nair",
    flag: flag2,
    rating: 4,
    description:
      "Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    type: "video",
  },
  {
    videoSrc: video2,
    name: "Kiran Desai",
    flag: flag3,
    rating: 5,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    type: "video",
  },
  {
    videoSrc: video1,
    name: "Meera Kapoor",
    flag: flag1,
    rating: 4,
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    type: "video",
  },
  {
    videoSrc: video2,
    name: "Arjun Reddy",
    flag: flag2,
    rating: 5,
    description:
      "Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets.",
    type: "video",
  },
];
 
const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[90%] h-[350px] sm:h-[350px] lg:h-[380px] bg-white overflow-hidden flex flex-col hover:bg-gray-100 rounded-lg transition-colors duration-300 mx-auto">
      {item.type === "image" ? (
        <img
          src={item.imageSrc}
          alt={item.name}
          className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover object-top"
        />
      ) : (
        <video
          src={item.videoSrc}
          controls
          className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover rounded-2xl"
        />
      )}
      <div className="flex flex-col px-3 py-2 flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
            {item.name}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500 text-sm sm:text-base lg:text-lg">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
            <img src={item.flag} alt="Country flag" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
        <div className="h-[100px] overflow-y-auto text-xs sm:text-sm lg:text-sm text-gray-600 pr-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100 custom-scrollbar line-clamp-4">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};
 
const customScrollbarCSS = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
 
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #F97316;
    border-radius: 10px;
  }
 
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #E67E22;
  }
 
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
 
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = customScrollbarCSS;
  document.head.appendChild(style);
}
 
const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("testimonials");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const cardsPerSlide = 6; // Fixed at 6 cards per page
 
  const chunkArray = (array, size) => {
    if (!array || array.length === 0) return [];
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
 
  const testimonialSlides = chunkArray(TESTIMONIALS_DATA, cardsPerSlide);
  const videoTestimonialSlides = chunkArray(VIDEO_TESTIMONIALS, cardsPerSlide);
  const slides = activeTab === "testimonials" ? testimonialSlides : videoTestimonialSlides;
  const totalPages = slides.length;
 
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
 
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
 
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Testimonials",
    className: "px-1 relative",
    classNameTitle: "relative center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
    subtitle: "Discover the journeys of individuals who transformed ambition into achievement...",
  };
 
  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
 
      <section ref={sectionRef} className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-[#00334D]">Hear</span>
              <span className="text-[#F9920A]"> their stories</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the journeys of individuals who transformed ambition into achievement with Crossroads.
            </p>
          </div>
 
          <div className="flex justify-center mb-8 gap-4 sm:gap-8">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "testimonials"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("testimonials");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Testimonials
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "videoTestimonials"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("videoTestimonials");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Video Testimonials
            </button>
          </div>
 
          <div className="relative">
            {slides.length > 0 ? (
              <>
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                    {slides[currentPage - 1].map((item, index) => (
                      <TestimonialCard
                        key={`${currentPage}-${item.name}-${index}`}
                        item={item}
                      />
                    ))}
                    {slides[currentPage - 1].length < cardsPerSlide &&
                      Array.from({ length: cardsPerSlide - slides[currentPage - 1].length }).map(
                        (_, idx) => (
                          <div
                            key={`placeholder-${currentPage}-${idx}`}
                            className="w-full h-[400px] sm:h-[420px] lg:h-[450px] invisible"
                          ></div>
                        )
                      )}
                  </div>
                </div>
 
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2">
                    <button
                      onClick={handlePrevPage}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-[#F9920A] hover:text-[#e07a00]"
                      }`}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
 
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`px-3 py-1 rounded ${
                          currentPage === number
                            ? "bg-[#F9920A] text-white"
                            : "text-[#F9920A] hover:text-[#e07a00]"
                        }`}
                      >
                        {number}
                      </button>
                    ))}
 
                    <button
                      onClick={handleNextPage}
                      className={`px-3 py-1 rounded ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-[#F9920A] hover:text-[#e07a00]"
                      }`}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-red-500">
                No testimonials available.
              </div>
            )}
          </div>
        </div>
      </section>
 
      <ContactSection />
    </div>
  );
};
 
TestimonialCard.propTypes = {
  item: PropTypes.shape({
    imageSrc: PropTypes.string,
    videoSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["image", "video"]).isRequired,
  }).isRequired,
};
 
export default Testimonials;