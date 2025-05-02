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
import usaFlag from "../../../../assets/country/austria.webp"; // Note: Incorrect, should be usa.webp
import netherlandsFlag from "../../../../assets/country/netherlands.webp";
import swedenFlag from "../../../../assets/country/sweden.webp";
import newZealandFlag from "../../../../assets/country/newzealand.webp";
import switzerlandFlag from "../../../../assets/country/switzerland.webp";
import finlandFlag from "../../../../assets/country/finland.webp";
import italyFlag from "../../../../assets/country/italy.webp";
import latviaFlag from "../../../../assets/country/latvia.webp";
import maltaFlag from "../../../../assets/country/malta.webp";
import polandFlag from "../../../../assets/country/poland.webp";
import slovakiaFlag from "../../../../assets/country/slovakia.webp";
import spainFlag from "../../../../assets/country/spain.webp";
// Placeholder for missing flags (replace with actual imports)
import sloveniaFlag from "../../../../assets/country/slovakia.webp"; // Placeholder, replace with slovenia.webp
import irelandFlag from "../../../../assets/country/slovakia.webp"; // Placeholder, replace with ireland.webp
import austriaFlag from "../../../../assets/country/slovakia.webp"; // Placeholder, replace with austria.webp
import Modal from '../../../../components/modal';
import { AnimatePresence } from 'framer-motion';

const countryData = [
  {
    name: "France",
    flag: franceFlag,
    description:
      "Experience world-class education in France, home to prestigious universities and rich cultural heritage.",
    path: "/services/education/country/france",
  },
  {
    name: "Germany",
    flag: germanyFlag,
    description:
      "Study in Germany with tuition-free education at public universities. Excellent programs in engineering.",
    path: "/services/education/country/germany",
  },
  {
    name: "Australia",
    flag: australiaFlag,
    description:
      "Australia offers high-quality education with globally recognized degrees.",
    path: "/services/education/country/australia",
  },
  {
    name: "Canada",
    flag: canadaFlag,
    description:
      "Canada provides excellent post-study work opportunities with welcoming immigration policies.",
    path: "/services/education/country/canada",
  },
  {
    name: "UK",
    flag: ukFlag,
    description:
      "The UK boasts some of the world's oldest universities with short-duration programs.",
    path: "/services/education/country/uk",
  },
  {
    name: "USA",
    flag: usaFlag, // Note: Incorrect, should use usa.webp
    description:
      "The United States has the largest number of top-ranked universities.",
    path: "/services/education/country/usa",
  },
  {
    name: "Netherlands",
    flag: netherlandsFlag,
    description:
      "The Netherlands offers many English-taught programs with international classrooms.",
    path: "/services/education/country/netherlands",
  },
  {
    name: "Sweden",
    flag: swedenFlag,
    description:
      "Sweden is known for its innovative education system and focus on sustainability.",
    path: "/services/education/country/sweden",
  },
  {
    name: "New Zealand",
    flag: newZealandFlag,
    description:
      "New Zealand offers safe study environments with accredited qualifications.",
    path: "/services/education/country/new-zealand",
  },
  {
    name: "Switzerland",
    flag: switzerlandFlag,
    description: "Switzerland is renowned for hospitality management programs.",
    path: "/services/education/country/switzerland",
  },
  {
    name: "Finland",
    flag: finlandFlag,
    description:
      "Finland is known for its high-quality education and beautiful landscapes.",
    path: "/services/education/country/finland",
  },
  {
    name: "Italy",
    flag: italyFlag,
    description:
      "Italy offers a rich cultural experience with renowned universities.",
    path: "/services/education/country/italy",
  },
  {
    name: "Latvia",
    flag: latviaFlag,
    description:
      "Latvia provides affordable education with a mix of traditional and modern influences.",
    path: "/services/education/country/latvia",
  },
  {
    name: "Malta",
    flag: maltaFlag,
    description:
      "Malta offers a unique blend of cultures and high-quality education.",
    path: "/services/education/country/malta",
  },
  {
    name: "Poland",
    flag: polandFlag,
    description:
      "Poland is known for its strong academic traditions and vibrant student life.",
    path: "/services/education/country/poland",
  },
  {
    name: "Slovenia",
    flag: sloveniaFlag, // Replace with correct flag
    description:
      "Slovenia offers a diverse range of study programs with a rich cultural heritage.",
    path: "/services/education/country/slovenia",
  },
  {
    name: "Slovakia",
    flag: slovakiaFlag,
    description:
      "Slovakia offers a diverse range of study programs with a rich cultural heritage.",
    path: "/services/education/country/slovakia",
  },
  {
    name: "Spain",
    flag: spainFlag,
    description:
      "Spain is famous for its vibrant culture and high-quality education.",
    path: "/services/education/country/spain",
  },
  {
    name: "Ireland",
    flag: irelandFlag, // Replace with correct flag
    description:
      "Ireland offers a diverse range of study programs with a rich cultural heritage.",
    path: "/services/education/country/ireland",
  },
  {
    name: "Austria",
    flag: austriaFlag, // Replace with correct flag
    description:
      "Bernhard offers a diverse range of study programs with a rich cultural heritage.",
    path: "/services/education/country/austria",
  },
];

const CountrySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsPerPage = 12; // 4 cards per row * 3 rows
  const totalPages = Math.ceil(countryData.length / cardsPerPage);
  const sectionRef = useRef(null); // Ref to target the section

  // Scroll to the "Know your destination" section when currentPage changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate the cards to display for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = countryData.slice(startIndex, startIndex + cardsPerPage);

  // Split current cards into rows (4 cards per row)
  const rows = [];
  for (let i = 0; i < currentCards.length; i += 4) {
    rows.push(currentCards.slice(i, i + 4));
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            <span className="text-[#00334D]">Know</span>
            <span className="text-[#F9920A]"> your destination</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Begin your academic journey in these welcoming study destinations.
          </p>
        </div>

        <div className="relative">
          {countryData.length > 0 ? (
            <>
              {/* Card Grid: 3 rows, 4 cards per row */}
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6"
                >
                  {row.map((country, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="relative h-48 sm:h-56 md:h-60 bg-gray-100 rounded-lg md:rounded-xl shadow-md hover:shadow-lg overflow-hidden group transition-all duration-300"
                      onMouseEnter={() =>
                        setHoveredCard(startIndex + rowIndex * 4 + index)
                      }
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
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

                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                          hoveredCard === startIndex + rowIndex * 4 + index
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                      >
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-cover rounded-full mb-3 sm:mb-4 border-4 border-[#00334D]/10"
                          loading="lazy"
                        />
                        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-[#00334D] text-center">
                          {country.name}
                        </h3>
                      </div>

                      <div
                        className={`absolute inset-0 flex flex-col p-4 sm:p-5 bg-[#00334D] text-white transition-opacity duration-300 ${
                          hoveredCard === startIndex + rowIndex * 4 + index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="flex items-center mb-3 sm:mb-4">
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full mr-2 sm:mr-3 border-2 border-white"
                          />
                          <h3 className="text-base sm:text-lg md:text-xl font-bold">
                            {country.name}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm md:text-sm mb-3 sm:mb-4 line-clamp-4">
                          {country.description}
                        </p>
                        <div className="mt-auto">
                          <Link
                            to={country.path}
                            className="text-[#F9920A] font-medium flex items-center text-xs sm:text-sm md:text-base"
                          >
                            <span className="hover:text-[#e07a00] transition-colors duration-200">
                              Know more <span className="ml-1 sm:ml-2">→</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Pagination Controls */}
              {totalPages > 1 && (
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
              )}
            </>
          ) : (
            <div className="text-center text-red-500">
              No data available for the carousel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Country = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Choose.Apply.Study",
    className: "",
    classNameTitle: "text-white text-3xl sm:text-4xl lg:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
    showApplyButton: true,
    buttonText: "Apply Now",
    onButtonClick: openModal,
  };

  return (
    <div>
      <Banner {...bannerProps} />
      <CountrySection />
      <ContactSection />
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Country;