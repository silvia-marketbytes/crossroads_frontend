import React, { useState } from "react";
import "../../gallery.css";
import LazyLoad from "react-lazyload";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galleryImagesMuscat from "../../galleryImagesMuscat";
import ServicesNavbar from "../../../../components/Services/ServicesNavbar";
import PageMain from "../../../../components/PageMain";
import Footer from "../../../../components/Home/Footer";
import PlayIcon from "../../components/PlayIcon";
import { motion } from "framer-motion";
import videoImg1 from "../../../../images/Gallery/IftarMuscat/ALSI Global Muscat Iftar Party 2024 Photo169_result.webp";
import videoImg2 from "../../../../images/Gallery/IftarMuscat/ALSI Global Muscat Iftar Party 2024 Photo261_result.webp";

const GalleryIftarMuscat = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("images");

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseCarousel = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const videoLinkOne = "https://youtu.be/oShoLMW5InU";
  const videoLinkTwo = "https://youtu.be/iITzYLr_e6s";

  return (
    <div>
      <ServicesNavbar />
      <PageMain
        title="Iftar Sohar"
        main={{
          style: {
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/Gallery/dar59.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        }}
        introduction={[]}
      />

      <section style={{ paddingBottom: "40px", paddingTop: "40px" }}>
        <div className="container">
          <ul
            className="nav nav-tabs justify-content-center"
            style={{ border: "none" }}
          >
            <li className="nav-item px-1">
              <button
                className={`nav-link ${activeTab === "images" ? "active" : ""}`}
                onClick={() => handleTabClick("images")}
                style={{ fontWeight: "700", fontSize: "14px" }}
              >
                Images
              </button>
            </li>
            <li className="nav-item px-1">
              <button
                className={`nav-link ${activeTab === "videos" ? "active" : ""}`}
                onClick={() => handleTabClick("videos")}
                style={{ fontWeight: "700", fontSize: "14px" }}
              >
                Videos
              </button>
            </li>
          </ul>
          {activeTab === "images" && (
            <div
              className="row justify-content-center"
              style={{ paddingTop: "40px" }}
            >
              {galleryImagesMuscat.map((image, index) => (
                <div
                  key={index}
                  className="col-md-3 col-sm-6"
                  style={{ marginBottom: "20px" }}
                >
                  <LazyLoad height={300} offset={100}>
                    <div className="card-gallery">
                      <a
                        className="lightbox"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleImageClick(index);
                        }}
                      >
                        <img
                          className="card-img-top zoom-on-hover-card"
                          src={image}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </a>
                    </div>
                  </LazyLoad>
                </div>
              ))}
            </div>
          )}
          {activeTab === "videos" && (
            <div
              className="row justify-content-center"
              style={{ paddingTop: "20px" }}
            >
              <motion.div
                className="col-lg-6 col-md-12 position-relative pt-2"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="card mb-4"
                  style={{
                    position: "relative",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "0px",
                  }}
                >
                  <a
                    href={videoLinkOne}
                    target="_blank"
                    className="video-thumbnail-link"
                  >
                    <div className="video-thumbnail">
                      <img
                        src={videoImg1}
                        alt="Video 1"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          border: "0px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <PlayIcon />
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="col-lg-6 col-md-12 position-relative pt-2"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="card mb-4"
                  style={{
                    position: "relative",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "0px",
                  }}
                >
                  <a
                    href={videoLinkTwo}
                    target="_blank"
                    className="video-thumbnail-link"
                  >
                    <div className="video-thumbnail">
                      <img
                        src={videoImg2}
                        alt="Video 2"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          border: "0px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <PlayIcon />
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
          {selectedImageIndex !== null && (
            <div className="custom-modal" onClick={handleCloseCarousel}>
              <div className="custom-modal-content">
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  selectedItem={selectedImageIndex}
                  onClickItem={handleCloseCarousel}
                  className="custom-carousel-root gallery-carousel-image"
                >
                  {galleryImagesMuscat.map((image, index) => (
                    <div key={index}>
                      <button
                        className="close-button-gallery"
                        onClick={handleCloseCarousel}
                      >
                        x
                      </button>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="gallery-carousel-image"
                        style={{ border: "0", borderRadius: "10px" }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryIftarMuscat;
