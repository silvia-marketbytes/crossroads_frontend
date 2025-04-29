import { Suspense, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import galleryGermany from "./galleryGermany";
import galleryFrance from "./galleryFrance";
import ContactSection from "../Home/UiComponents/ContactSection";
import bannerImg from "../../assets/country/png_result.webp";

const bannerProps = {
  backgroundImage: bannerImg,
  title: "Gallery",
  className: "px-1 relative",
  classNameTitle: "relative center text-services-title",
  backgroundPosition: "center",
  showDateTime: false,
  showSocialMedia: false,
  showCounter: false,
  counterPosition: "overlay",
  subtitle: "Discover the journeys of individuals who transformed ambition into achievement...",
};

const cardsData = [
  {
    id: 1,
    image: galleryGermany[28],
    title: "Germany",
    subtitle: "(2024)",
    link: "/gallery/germany",
  },
  {
    id: 2,
    image: galleryFrance[144],
    title: "France",
    subtitle: "(2024)",
    link: "/gallery/france",
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const sectionRef = useRef(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

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

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
      <section
        ref={sectionRef}
        style={{
          padding: "60px 16px",
          backgroundColor: "#fff",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
          {currentCards.map((card) => (
            <div
              key={card.id}
              style={{ width: "350px", maxWidth: "100%" }}
              className="card-container-gallery"
            >
              <Link
                to={card.link}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div
                  style={{
                    border: "0px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)",
                    height: "400px",
                  }}
                >
                  <img
                    src={card.image}
                    alt={`Image ${card.id}`}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <h2
                      style={{
                        margin: "0",
                        fontSize: "20px",
                        fontWeight: 800,
                      }}
                    >
                      {card.title}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "16px",
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "32px",
            gap: "8px",
          }}
        >
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              background: "transparent",
              color: currentPage === 1 ? "#cccccc" : "#F9920A",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
            className={currentPage !== 1 && "hover:text-[#e07a00]"}
          >
            Prev
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                border: "none",
                background: currentPage === number ? "#F9920A" : "transparent",
                color: currentPage === number ? "#ffffff" : "#F9920A",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
              }}
              className={currentPage !== number && "hover:text-[#e07a00]"}
            >
              {number}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              background: "transparent",
              color: currentPage === totalPages ? "#cccccc" : "#F9920A",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
            className={currentPage !== totalPages && "hover:text-[#e07a00]"}
          >
            Next
          </button>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Gallery;