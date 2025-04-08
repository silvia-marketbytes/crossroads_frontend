import React from "react";

const CountryDetails = ({ details }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg text-gray-600 mx-auto content-justify">
            Germany, located in Western Europe, is renowned for its diverse
            landscapes, including forests, rivers, mountain ranges, and
            beaches along the North Sea. The country is celebrated for its
            impressive architecture and is known for being both safe and
            clean. Low crime rates and strict regulations help create a secure
            living environment. Cities are well-maintained with efficient
            waste management systems and public initiatives that ensure high
            levels of cleanliness.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {details.map((detail, index) => (
              <div
                key={index}
                className="relative p-5 rounded-lg shadow-md text-center bg-gray-100"
              >
                <h3 className="text-lg text-gray-600">{detail.label}</h3>
                <p className="text-gray-800 font-bold mt-2">{detail.value}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-2"
                  style={{ backgroundColor: "#F9920A" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;