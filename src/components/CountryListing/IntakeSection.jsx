import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../modal";
 
const IntakeSection = ({ intakes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-transparent">
        <div className="bg-[#00334D]/30 p-6 w-full max-w-md rounded-lg shadow-md border border-white/20">
          <h2 className="text-xl font-bold mb-4 text-white">Intake</h2>
          <div className="space-y-3">
            {intakes.map((intake, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="white" />
                    <path
                      d="M6 10L9 13L14 8"
                      stroke="#00334D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <label className="text-white">{intake}</label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              className="bg-[#F9920A] hover:bg-[#00334D] text-white text-sm font-medium py-2 px-4 rounded-full transition-colors"
              onClick={openModal}
            >
              For more details click here
            </button>
          </div>
        </div>
      </div>
 
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};
 
export default IntakeSection;