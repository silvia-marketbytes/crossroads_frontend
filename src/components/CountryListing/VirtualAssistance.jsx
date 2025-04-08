import React from "react";

const VirtualAssistance = () => {
  return (
    <section
      className="w-full pt-12 pb-12 bg-[#00334D] text-center"
      style={{ minHeight: "250px" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl sm:text-3xl mb-4">
          <span className="text-[#F9920A]">Virtual Assistance</span>{" "}
          <span className="text-white">for Your Study Abroad Journey</span>
        </h2>
        <p className="text-white text-base sm:text-lg mx-auto max-w-2xl text-center mb-6">
          If you can't come to our office, we can come to you virtually! Get
          expert counselling services from the comfort of your home or
          anywhere you are.
        </p>
        <button className="bg-[#F9920A] hover:bg-[#e08309] text-white font-medium py-2 px-4 rounded-full transition-colors">
          Enquire now
        </button>
      </div>
    </section>
  );
};

export default VirtualAssistance;