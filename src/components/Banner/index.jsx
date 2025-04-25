import React, { useEffect, useState } from "react";
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
  buttonText = "Apply Now",
  showCounter = false,
  counterPosition = "below",
  onButtonClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const counterData = [
    { number: "+20k", text: "Lorem ipsum", description: "Lorem ipsum is simply dummy text of the printing and" },
    { number: "+15k", text: "Lorem ipsum", description: "Lorem ipsum is simply dummy text of the printing and" },
    { number: "+3k", text: "Lorem ipsum", description: "Lorem ipsum is simply dummy text of the printing and" },
    { number: "+5k", text: "Lorem ipsum", description: "Lorem ipsum is simply dummy text of the printing and" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % counterData.length);
    }, 3000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [counterData.length]);

  return (
    <div className="relative">
      <header
        className={`relative w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[500px] flex items-center justify-center ${className}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black via-black opacity-50"></div>
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
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>

        {showCounter && counterPosition === "overlay" && (
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-40">
            <div className="container mx-auto border border-white m-4 md:m-12 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-white relative">
                {counterData.map((item, index) => (
                  <div
                    key={index}
                    className={`px-4 md:px-12 py-4 text-center transition-opacity duration-1000 md:opacity-100 ${
                      index === currentIndex ? "opacity-100" : "opacity-0 hidden md:block"
                    }`}
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {item.number}
                    </h3>
                    <p className="text-lg md:text-xl text-white font-medium">
                      {item.text}
                    </p>
                    <p className="text-base md:text-lg text-white mt-4 opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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

      {showCounter && counterPosition === "below" && (
        <div className="bg-white py-8 px-4 border-t border-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-white">
              {counterData.map((item, index) => (
                <div key={index} className="px-12 py-6 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    {item.number}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 font-medium">
                    {item.text}
                  </p>
                  <p className="text-base md:text-lg text-gray-500 mt-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
