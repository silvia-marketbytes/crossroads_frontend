import React, { Suspense } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/ContactUs/CONTACTBANNER_result.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Contact Us",
    className: "px-1 relative",
    classNameTitle: "relative -top-center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
  };

  // Google Maps embed URL for Oberon Mall, Kochi
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.960156463408!2d76.30966471474592!3d10.014455192336135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2040ea1321%3A0x882574aff9e3e896!2sOberon+Mall!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin";

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      {/* Contact Info Section with Individual Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Address Card */}
          <div className="bg-gray-100 rounded-lg p-6 flex-1 max-w-md group hover:shadow-md transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaMapMarkerAlt className="text-[#00334D] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#00334D]">Address</h3>
              <p className="text-gray-600 group-hover:text-[#F9920A] transition-all duration-300">
                Crossroads Career Consultants Pvt. Ltd, Level 3, Oberon Mall,
                Edapally, Kochi, Kerala 682024
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-100 rounded-lg p-6 flex-1 max-w-md group hover:shadow-md transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaPhone className="text-[#00334D] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#00334D]">Call us</h3>
              <p className="text-gray-600">
                <a
                  href="tel:+919539688800"
                  className="hover:text-[#F9920A] transition-all duration-300 block"
                >
                  +91 95396 88800
                </a>
                <a
                  href="tel:+919539688800"
                  className="hover:text-[#F9920A] transition-all duration-300 block"
                >
                  +91 95396 88800
                </a>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-gray-100 rounded-lg p-6 flex-1 max-w-md group hover:shadow-md transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaEnvelope className="text-[#00334D] text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#00334D]">Email us</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:info@crossroadsge.com"
                  className="hover:text-[#F9920A] transition-all duration-300"
                >
                  info@crossroadsge.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>

      {/* Full-width Map Section with Address Overlay */}
      <div className="w-full h-[500px] mt-12 relative">
        <iframe
          src={mapLocation}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Crossroads Career Consultants Location"
          className="filter grayscale-0 hover:grayscale-0 transition-all duration-300"
        ></iframe>
        {/* Clickable Overlay for Google Maps Redirect */}
        <a
          href="https://www.google.com/maps/place/Oberon+Mall/@10.0144552,76.3096647,17z/data=!3m1!4b1!4m5!3m4!1s0x3b080d2040ea1321:0x882574aff9e3e896!8m2!3d10.0144552!4d76.3118534"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
        ></a>

        {/* Address Overlay Box */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg max-w-xs shadow-lg z-20">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-[#F9920A] text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-semibold text-[#00334D]">Our Location</h3>
              <p className="text-gray-600 text-sm">
                Crossroads Career Consultants Pvt. Ltd, Level 3, Oberon Mall,
                Edapally, Kochi, Kerala 682024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;