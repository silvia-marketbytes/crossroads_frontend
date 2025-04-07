import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../../components/Banner";
import bannerImg from "../../../../assets/country/banner.webp";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";

import franceFlag from "../../../../assets/country/france.webp";
import germanyFlag from "../../../../assets/country/Germany.webp";
import australiaFlag from "../../../../assets/country/Australia.webp";
import canadaFlag from "../../../../assets/country/canada.webp";
import ukFlag from "../../../../assets/country/UK.webp";
import usaFlag from "../../../../assets/country/austria.webp";
import netherlandsFlag from "../../../../assets/country/netherlands.webp";
import swedenFlag from "../../../../assets/country/sweden.webp";
import newZealandFlag from "../../../../assets/country/newzealand.webp";
import switzerlandFlag from "../../../../assets/country/switzerland.webp";
import finlandlandFlag from "../../../../assets/country/finland.webp";
import italyFlag from "../../../../assets/country/italy.webp";
import latviaFlag from "../../../../assets/country/latvia.webp";
import maltaFlag from "../../../../assets/country/malta.webp";
import polandFlag from "../../../../assets/country/poland.webp";
import slovakiaFlag from "../../../../assets/country/slovakia.webp";
import spainFlag from "../../../../assets/country/spain.webp";

const CountrySection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isForward, setIsForward] = useState(true);
  const sliderRef = useRef(null);

  const getCardsPerSlide = () => {
    if (window.innerWidth < 640) return 2; // Mobile
    if (window.innerWidth < 1024) return 4; // Tablet
    return 8; // Desktop
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  const countryData = [
    { name: "France", flag: franceFlag, description: "Experience world-class education in France, home to prestigious universities and rich cultural heritage.", path: "/france" },
    { name: "Germany", flag: germanyFlag, description: "Study in Germany with tuition-free education at public universities. Excellent programs in engineering.", path: "/germany" },
    { name: "Australia", flag: australiaFlag, description: "Australia offers high-quality education with globally recognized degrees.", path: "/australia" },
    { name: "Canada", flag: canadaFlag, description: "Canada provides excellent post-study work opportunities with welcoming immigration policies.", path: "/canada" },
    { name: "UK", flag: ukFlag, description: "The UK boasts some of the world's oldest universities with short-duration programs.", path: "/uk" },
    { name: "USA", flag: usaFlag, description: "The United States has the largest number of top-ranked universities.", path: "/usa" },
    { name: "Netherlands", flag: netherlandsFlag, description: "The Netherlands offers many English-taught programs with international classrooms.", path: "/netherlands" },
    { name: "Sweden", flag: swedenFlag, description: "Sweden is known for its innovative education system and focus on sustainability.", path: "/sweden" },
    { name: "New Zealand", flag: newZealandFlag, description: "New Zealand offers safe study environments with accredited qualifications.", path: "/new-zealand" },
    { name: "Switzerland", flag: switzerlandFlag, description: "Switzerland is renowned for hospitality management programs.", path: "/switzerland" },
    { name: "Finland", flag: finlandlandFlag, description: "Finland is known for its high-quality education and beautiful landscapes.", path: "/finland" },
    { name: "Italy", flag: italyFlag, description: "Italy offers a rich cultural experience with renowned universities.", path: "/italy" },
    { name: "Latvia", flag: latviaFlag, description: "Latvia provides affordable education with a mix of traditional and modern influences.", path: "/latvia" },
    { name: "Malta", flag: maltaFlag, description: "Malta offers a unique blend of cultures and high-quality education.", path: "/malta" },
    { name: "Poland", flag: polandFlag, description: "Poland is known for its strong academic traditions and vibrant student life.", path: "/poland" },
    { name: "Slovakia", flag: slovakiaFlag, description: "Slovakia offers a diverse range of study programs with a rich cultural heritage.", path: "/slovakia" },
    { name: "Spain", flag: spainFlag, description: "Spain is famous for its vibrant culture and high-quality education.", path: "/spain" },
  ];

  const totalSlides = Math.ceil(countryData.length / cardsPerSlide);

  useEffect(() => {
    const handleResize = () => setCardsPerSlide(getCardsPerSlide());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => {
          if (isForward) {
            if (prev === totalSlides - 1) {
              setIsForward(false);
              return prev - 1;
            }
            return prev + 1;
          } else {
            if (prev === 0) {
              setIsForward(true);
              return prev + 1;
            }
            return prev - 1;
          }
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides, isPaused, isForward]);

  const handleNext = () => {
    setIsForward(true);
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handlePrev = () => {
    setIsForward(false);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            <span className="text-[#00334D]">Know</span>
            <span className="text-[#F9920A]"> your destination</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Begin your academic journey in these welcoming study destinations.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2">
                  {countryData
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((country, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className="relative h-64 sm:h-72 lg:h-80 bg-gray-100 rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
                        onMouseEnter={() => {
                          setHoveredCard(slideIndex * cardsPerSlide + index);
                          setIsPaused(true);
                        }}
                        onMouseLeave={() => {
                          setHoveredCard(null);
                          setIsPaused(false);
                        }}
                      >
                        {/* Arrow SVG */}
                        <div className="absolute top-4 right-4 z-10">
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 23 23"
                            fill="none"
                            className="transition-all duration-300 group-hover:fill-white fill-[#00334D] group-hover:rotate-180"
                          >
                            <path d="M17.3249 22.9103L17.3458 6.13748L0.572996 6.15845L0.58507 1.00038L22.5343 0.949003L22.4829 22.8982L17.3249 22.9103Z" />
                          </svg>
                        </div>

                        {/* Default View */}
                        <div
                          className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
                            hoveredCard === slideIndex * cardsPerSlide + index ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-4 border-4 border-[#00334D]/10"
                            loading="lazy"
                          />
                          <h3 className="text-xl sm:text-2xl font-bold text-[#00334D]">{country.name}</h3>
                        </div>

                        {/* Hover View */}
                        <div
                          className={`absolute inset-0 flex flex-col p-4 sm:p-6 bg-[#00334D] text-white transition-opacity duration-300 ${
                            hoveredCard === slideIndex * cardsPerSlide + index ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="flex items-center mb-4">
                            <img
                              src={country.flag}
                              alt={`${country.name} flag`}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full mr-2 sm:mr-3 border-2 border-white"
                            />
                            <h3 className="text-lg sm:text-xl font-bold">{country.name}</h3>
                          </div>
                          <p className="text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-4">{country.description}</p>
                          <div className="mt-auto">
                            <Link to={country.path} className="text-[#F9920A] font-medium flex items-center hover:underline text-sm sm:text-base">
                              Know more <span className="ml-2">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 && !isForward}
            className="text-[#00334D] hover:text-[#F9920A] transition duration-300 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1 && isForward}
            className="text-[#00334D] hover:text-[#F9920A] transition duration-300 disabled:opacity-50"
            aria-label="Next slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const Country = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Choose.Apply.Study",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
  };

  return (
    <div className="">
      <Banner {...bannerProps} />
      <CountrySection />
      <ContactSection />
    </div>
  );
};

export default Country;
