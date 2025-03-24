import React from 'react';


// Placeholder for the image of medical students
import medicalStudentsImg from '../../../../assets/medical-students.png';

const MBBSSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90em] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={medicalStudentsImg}
              alt="Medical students"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 bg-blue-950 text-white p-12 md:p-13">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">MBBS</h2>
            <p className="text-gray-200 text-lg mb-6">
              Medical colleges abroad are renowned for their high-quality education, advanced technology, and cutting-edge infrastructure. These institutions provide students with hands-on experience and a solid foundation in practical knowledge, which can greatly enhance their medical expertise. Additionally, MBBS graduates from foreign universities have the opportunity to explore diverse career paths beyond clinical practice, such as research, teaching, and various administrative roles within the healthcare sector. Positions such as medical officers, health inspectors, and disease control officers are just a few examples of the avenues open to those with an MBBS degree.
            </p>
            <a
              href="#"
              className="text-orange-500 font-semibold flex items-center hover:underline"
            >
              Read More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MBBSSection;