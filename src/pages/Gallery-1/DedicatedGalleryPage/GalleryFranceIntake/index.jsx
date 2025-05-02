import React, { Suspense, useState, useRef } from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import ContactSection from "../../../Home/UiComponents/ContactSection";
import bannerImg from "../../../../assets/Gallery/banner.webp";
import student1 from "../../../../assets/Gallery/1_result.webp";
import student2 from "../../../../assets/Gallery/2_result.webp";
import student3 from "../../../../assets/Gallery/3_result.webp";
import student4 from "../../../../assets/Gallery/4_result.webp";
import student5 from "../../../../assets/Gallery/5_result.webp";
import student6 from "../../../../assets/Gallery/6_result.webp";
import student7 from "../../../../assets/Gallery/7_result.webp";
import student8 from "../../../../assets/Gallery/8_result.webp";
import student9 from "../../../../assets/Gallery/9_result.webp";
import student10 from "../../../../assets/Gallery/10_result.webp";
import student21 from "../../../../assets/Gallery/21_result.webp";
import student22 from "../../../../assets/Gallery/22_result.webp";
import student23 from "../../../../assets/Gallery/23_result.webp";
import student24 from "../../../../assets/Gallery/24_result.webp";
import student25 from "../../../../assets/Gallery/25_result.webp";
import student27 from "../../../../assets/Gallery/27_result.webp";
import student28 from "../../../../assets/Gallery/28_result.webp";
import student30 from "../../../../assets/Gallery/30_result.webp";
import student31 from "../../../../assets/Gallery/31_result.webp";
import student32 from "../../../../assets/Gallery/32_result.webp";
import student33 from "../../../../assets/Gallery/33_result.webp";
import student34 from "../../../../assets/Gallery/34_result.webp";
import student35 from "../../../../assets/Gallery/35_result.webp";
import student36 from "../../../../assets/Gallery/36_result.webp";
import student37 from "../../../../assets/Gallery/37_result.webp";
import student38 from "../../../../assets/Gallery/38_result.webp";
import student39 from "../../../../assets/Gallery/39_result.webp";
import video1 from "../../../../assets/Students/Videos/Video1.mp4";
import video2 from "../../../../assets/Students/Videos/Video2.mp4";
import flag1 from "../../../../assets/Flags/austria.png";
import flag2 from "../../../../assets/Flags/germany.png";
import flag3 from "../../../../assets/Flags/italy.png";

const TESTIMONIALS_DATA = [
  { imageSrc: student1, name: "Anjali Krishnan", flag: flag1, rating: 5, description: "Lorem Ipsum...", type: "image" },
  { imageSrc: student2, name: "Harikumar V.", flag: flag2, rating: 5, description: "Lorem Ipsum...", type: "image" },
  { imageSrc: student3, name: "Priya Sharma", flag: flag3, rating: 4, description: "It was popularised...", type: "image" },
  { imageSrc: student4, name: "Rahul Patel", flag: flag1, rating: 5, description: "Lorem Ipsum...", type: "image" },
  { imageSrc: student5, name: "Sneha Gupta", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student6, name: "Amit Singh", flag: flag3, rating: 5, description: "Lorem Ipsum...", type: "image" },
  { imageSrc: student7, name: "Vikram Rao", flag: flag1, rating: 5, description: "Lorem Ipsum...", type: "image" },
  { imageSrc: student8, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student9, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student10, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student21, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student22, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student23, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student24, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student25, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student27, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student28, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student30, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student31, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student32, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student33, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student34, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student35, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student36, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student37, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student38, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
  { imageSrc: student39, name: "Neha Verma", flag: flag2, rating: 4, description: "It has survived...", type: "image" },
];

const VIDEO_TESTIMONIALS = [
  { videoSrc: video1, name: "Divya Ajith", flag: flag3, rating: 5, description: "Lorem Ipsum...", type: "video" },
  { videoSrc: video2, name: "Rohan Mehta", flag: flag1, rating: 5, description: "It has survived...", type: "video" },
  { videoSrc: video1, name: "Ananya Nair", flag: flag2, rating: 4, description: "Lorem Ipsum...", type: "video" },
  { videoSrc: video2, name: "Kiran Desai", flag: flag3, rating: 5, description: "Lorem Ipsum...", type: "video" },
  { videoSrc: video1, name: "Meera Kapoor", flag: flag1, rating: 4, description: "It has survived...", type: "video" },
  { videoSrc: video2, name: "Arjun Reddy", flag: flag2, rating: 5, description: "Lorem Ipsum...", type: "video" },
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="w-full h-[300px] bg-white overflow-hidden flex flex-col shadow-md rounded-lg hover:bg-gray-100 transition-colors duration-300 mx-auto">
      {item.type === "image" ? (
        <img
          src={item.imageSrc}
          alt="Testimonial"
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <video
          src={item.videoSrc}
          controls
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const GalleryFranceIntake = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const cardsPerPage = 12; // 4 images per row, 3 rows

  const data = activeTab === "images" ? TESTIMONIALS_DATA : VIDEO_TESTIMONIALS;
  const totalPages = Math.ceil(data.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "France",
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
          <div className="flex justify-center mb-8 gap-4 sm:gap-8">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "images"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("images");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Images
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("videos");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Videos
            </button>
          </div>

          <div className="relative">
            {data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentCards.map((item, index) => (
                    <TestimonialCard key={`${currentPage}-${item.name}-${index}`} item={item} />
                  ))}
                  {currentCards.length < cardsPerPage &&
                    Array.from({ length: cardsPerPage - currentCards.length }).map((_, index) => (
                      <div
                        key={`empty-${currentPage}-${index}`}
                        className="w-full h-[300px] bg-transparent"
                      ></div>
                    ))}
                </div>

                <div className="flex justify-center items-center mt-8 space-x-2">
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
    type: PropTypes.oneOf(["image", "video"]).isRequired,
  }).isRequired,
};

export default GalleryFranceIntake;