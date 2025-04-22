import React, { Suspense } from "react";
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
    link: "/Gallery/Germany",
  },
  {
    id: 2,
    image: galleryFrance[144],
    title: "France",
    subtitle: "(2024)",
    link: "/Gallery/France",
  },
];

const Gallery = () => {
  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", paddingTop: "60px", paddingBottom: "60px" }}>
        {cardsData.map((card) => (
          <div key={card.id} style={{ width: "350px" }} className="card-container-gallery">
            <Link to={card.link} style={{ textDecoration: "none", color: "#000" }}>
              <div style={{ border: "0px", borderRadius: "8px", overflow: "hidden", boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)", height: "400px" }}>
                <img
                  src={card.image}
                  alt={`Image ${card.id}`}
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h2 style={{ margin: "0", fontSize: "20px", fontWeight: 800 }}>{card.title}</h2>
                  <p style={{ margin: "5px 0", fontSize: "16px" }}>{card.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default Gallery;