import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../UiComponents/SocialMedia";

const Banner = ({
  backgroundImage,
  title,
  description = "",
  className = "",
  classNameTitle = "",
  showDateTime = false,
  showSocialMedia = false,
  date,
  time,
  showApplyButton = false,
  buttonText = "Apply Now", // Default button text
}) => {
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  const handleShareUrl = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <header
      className={`relative w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[450px] xl:h-[450px] flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black via-black opacity-60"></div>
      <div className="z-10 text-center space-y-6">
        <h1
          className={`font-two text-xl md:text-3xl lg:text-5xl font-medium text-white mb-4 ${classNameTitle}`}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />
        {description && (
          <p
            className="w-3/5 mx-auto font-one text-sm md:text-base lg:text-lg font-light text-white leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {showApplyButton && (
          <div className="mt-6">
            <button
              className="bg-[#F9920A] hover:bg-[#e68209] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F9920A] focus:ring-opacity-50 shadow-lg"
              onClick={() => alert(`${buttonText} clicked!`)}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 grid md:flex items-center justify-center md:justify-between gap-y-2 w-full">
        {showDateTime && (
          <div className="relative left-0 md:left-24 flex items-center justify-center">
            <p className="flex items-center justify-start font-one text-sm md:text-md lg:text-md font-light text-white leading-relaxed">
              <span>{date}</span>
              <div className="pl-[4px]">
                <span>{time}</span>
              </div>
            </p>
          </div>
        )}
        {showSocialMedia && (
          <div className="relative right-0 md:right-24">
            <div className="flex space-x-4">
              <SocialMedia />
              <div className="flex space-x-4">
                <button
                  onClick={handleCopyUrl}
                  className="flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
                  title="Copy URL"
                >
                  <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShareUrl}
                  className="flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
                  title="Share this page"
                >
                  <FontAwesomeIcon icon={faShareAlt} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Banner;
