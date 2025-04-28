import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../../components/form/ContactForm";

const CloseIcon = ({ className = "", onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Modal = ({ onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  useEffect(() => {
   
    document.body.style.overflow = 'hidden';
    
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 backdrop-brightness-50 z-[100] flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="scale-[0.80] bg-[#00334D] rounded-lg p-4 w-full max-w-lg shadow-xl relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-200 hover:text-gray-400"
          onClick={onClose}
        >
          <CloseIcon className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-200 mb-3">Get in Touch</h2>
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Modal;