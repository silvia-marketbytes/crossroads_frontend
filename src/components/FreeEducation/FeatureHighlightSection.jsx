import React from "react";

const FeatureHighlightSection = ({ features, title }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#00334D] text-left">
            {title}
          </h2>
        )}
        
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-4"> 
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#F9920A" />
                      <path
                        d="M6 10L9 13L14 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#00334D] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#00334D]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;