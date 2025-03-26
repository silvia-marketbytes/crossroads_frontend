import React, { useState } from "react";

const Card = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the description is long enough to need a "Show More" button
  const shouldShowButton = item.description.length > 50;

  return (
    <div className="px-2">
      <div className="card bg-white rounded-lg overflow-hidden h-[500px] w-[350px] flex flex-col">
        {item.type === "image" ? (
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-[350px] h-[250px] object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/350x250?text=Image+Not+Found";
              console.error(`Failed to load image: ${item.imageSrc}`);
            }}
          />
        ) : (
          <video
            controls
            className="w-[350px] h-[250px] object-cover"
            src={item.videoSrc}
            onError={(e) => {
              console.error(`Failed to load video: ${item.videoSrc}`);
            }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-blue-950">{item.name}</h4>
            <div className="flex items-center">
              <img src={item.flag} alt="Flag" className="w-5 h-5 mr-2" />
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p
              className={`text-gray-600 text-sm text-justify ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {item.description}
            </p>
          </div>
          {shouldShowButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-black text-sm mt-2 text-left hover:underline uppercase hover:text-amber-600 flex items-center"
            >
              <span>{isExpanded ? "Show Less" : "Show More"}</span>
              <span className="ml-1">{">"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
