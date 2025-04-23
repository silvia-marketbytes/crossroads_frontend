// components/AffordableEducationOptions.js
import React from "react";
import PropTypes from "prop-types";

const AffordableEducationOptions = ({ title, sections }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-bold mb-8 text-[#00334D] text-left">
          {title}
        </h2>
        
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gray-200 px-4 py-4 rounded-t-md border border-gray-100">
                <h3 className="text-xl font-semibold text-[#00334D]">
                  {section.heading}
                </h3>
              </div>
              <ul className="space-y-3 list-disc pl-5">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-[#00334D]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

AffordableEducationOptions.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default AffordableEducationOptions;