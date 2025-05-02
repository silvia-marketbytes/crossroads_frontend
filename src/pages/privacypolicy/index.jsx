import React, { Suspense } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";

const PrivacyPolicy = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Privacy Policy",
    className: "px-1 relative",
    classNameTitle: "relative -top-center text-services-title",
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

      {/* Main Privacy Policy Content */}
      <section className="text-center min-h-[600px] py-8 sm:py-12 md:py-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
            <span style={{ color: "#00334D" }}>Your </span>
            <span style={{ color: "#F9920A" }}>Privacy</span>
            <span style={{ color: "#00334D" }}> Matters</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            <span>At Crossroads, we are committed to protecting your personal information.</span>{" "}
            <span>Learn how we collect, use, and safeguard your data to ensure your trust and security.</span>
          </p>

          <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto text-left">
            <p className="text-xs sm:text-sm text-gray-600 italic mb-4">
              Last Updated: April 30, 2025
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              This Privacy Policy explains how Crossroads collects, uses, discloses, and safeguards your information when you visit our website or use our services. By accessing or using our platform, you agree to the terms outlined in this policy.
            </p>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                1. Information We Collect
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
                <li>
                  <span className="font-semibold">Personal Information</span>: Name, email address, phone number, and other contact details you provide when registering or contacting us.
                </li>
                <li>
                  <span className="font-semibold">Usage Data</span>: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.
                </li>
                <li>
                  <span className="font-semibold">Cookies and Tracking Technologies</span>: We use cookies and similar technologies to enhance your experience and analyze usage patterns.
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                2. How We Use Your Information
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We use your information to:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve and personalize your experience.</li>
                <li>Communicate with you, including responding to inquiries or sending updates.</li>
                <li>Analyze usage trends to enhance our offerings.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                3. How We Share Your Information
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We do not sell your personal information. We may share it with:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
                <li>
                  <span className="font-semibold">Service Providers</span>: Third parties who assist us with website operations, analytics, or customer support, under confidentiality agreements.
                </li>
                <li>
                  <span className="font-semibold">Legal Requirements</span>: When required by law or to protect our rights and safety.
                </li>
                <li>
                  <span className="font-semibold">Business Transfers</span>: In the event of a merger, acquisition, or sale of assets, your information may be transferred.
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                4. Your Choices and Rights
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Disable cookies through your browser settings, though this may affect functionality.</li>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-3 leading-relaxed">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:info@crossroadsge.com"
                  className="text-[#F9920A] hover:underline"
                  aria-label="Email us at info@crossroadsge.com"
                >
                  info@crossroadsge.com
                </a>.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                5. Data Security
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect your information from unauthorized access, loss, or misuse. However, no online transmission is fully secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                6. International Data Transfers
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries outside your region. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                7. Children's Privacy
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children. If we learn we have, we will delete it promptly.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                8. Changes to This Policy
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy regularly.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00334D] mb-3">
                9. Contact Us
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc list-inside ml-4 mt-3 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
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

            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed">
              Thank you for trusting Crossroads with your information.
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

export default PrivacyPolicy;