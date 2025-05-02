import React, { Suspense } from "react";
import Banner from "../../components/Banner"; // Adjust path as per your project structure
import bannerImg from "../../assets/aboutus/aboutbg.webp"; // Reuse the same background image as Aboutus
import ContactSection from "../../pages/Home/UiComponents/ContactSection"; // Adjust path as per your project structure

const TermsAndConditions = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Terms and Conditions",
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
  };

  return (
    <div className="relative">
      {/* Banner Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      {/* Main Terms and Conditions Content */}
      <section className="bg-white text-center py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            <span style={{ color: "#00334D" }}>Our </span>
            <span style={{ color: "#F9920A" }}>Terms</span>
            <span style={{ color: "#00334D" }}> & Conditions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-7xl mx-auto mb-12 leading-relaxed">
            Welcome to Crossroads. Please read these Terms and Conditions carefully to understand your rights and obligations when using our services.
          </p>

          <div className="max-w-7xl mx-auto text-left">
            <p className="text-sm text-gray-600 italic mb-4">
              Last Updated: April 30, 2025
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              These Terms and Conditions govern your use of the Crossroads website and services. By accessing or using our platform, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you confirm that you accept these Terms and Conditions and agree to comply with them. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                2. Services Provided
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crossroads provides educational guidance, course selection, and support services for students seeking international education. We reserve the right to modify or discontinue any services at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                3. User Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2">
                <li>Provide accurate and complete information when registering or using our services.</li>
                <li>Use our services in compliance with all applicable laws.</li>
                <li>Not engage in any unauthorized or fraudulent activities.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                4. Payment and Fees
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Certain services may require payment. Fees are outlined at the time of service enrollment. All payments are non-refundable unless otherwise stated. We accept no liability for payment disputes.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                5. Intellectual Property
              </h3>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Crossroads or its licensors and is protected by copyright laws. You may not reproduce or distribute any content without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crossroads is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid by you for the services.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                7. Termination
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any time for breach of these terms or for any other reason, with or without notice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                8. Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes will be resolved in the courts of [Insert City], India.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#00334D] mb-3">
                9. Contact Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@crossroadsge.com"
                    className="text-[#F9920A] hover:underline"
                    aria-label="Email us at info@crossroadsge.com"
                  >
                    info@crossroadsge.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+919539688800"
                    className="text-[#F9920A] hover:underline"
                    aria-label="Call us at +91 95396 88800"
                  >
                    +91 95396 88800
                  </a>
                </li>
              </ul>
            </section>

            <p className="text-gray-700 text-center leading-relaxed">
              Thank you for choosing Crossroads. We look forward to supporting your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default TermsAndConditions;