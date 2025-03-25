// src/pages/Footer/UiComponents/FooterSection/index.jsx
import React from 'react';
import FooterCard from '../../../../components/UiComponents/FooterCard';

const FooterSection = () => {
  // Data for the footer cards
  const crossroadsData = {
    title: 'Crossroads®',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the',
    socialLinks: [
      {
        label: 'Facebook',
        href: '#',
        iconPath:
          'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
      },
      {
        label: 'Instagram',
        href: '#',
        iconPath:
          'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.44-4.142 1.54-1.1 1.1-1.467 2.516-1.54 4.142-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.44 3.043 1.54 4.142 1.1 1.1 2.516 1.467 4.142 1.54 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.44 4.142-1.54 1.1-1.1 1.467-2.516 1.54-4.142.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.44-3.043-1.54-4.142-1.1-1.1-2.516-1.467-4.142-1.54-1.28-.058-1.688-.072-4.947-.072z',
      },
      {
        label: 'LinkedIn',
        href: '#',
        iconPath:
          'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-9.018-7.619-11.018-3.869v-2h-.001z',
      },
      {
        label: 'WhatsApp',
        href: '#',
        iconPath:
          'M12 2C6.48 2 2 6.48 2 12c0 1.78.46 3.45 1.27 4.91L2 22l5.09-1.27A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.18 13.16c-.29.82-1.44 1.52-2.38 1.72-1.99.42-3.66-.82-4.92-1.86-.63-.52-1.18-1.12-1.65-1.77-.47-.65-.82-1.35-.82-2.06 0-.71.29-1.39.77-1.89.24-.25.55-.39.88-.39.24 0 .48.05.69.15.21.1.4.25.57.42.17.17.34.35.5.55.16.2.29.42.38.65.09.23.14.47.14.72 0 .25-.03.5-.1.74-.07.24-.18.47-.32.69-.14.22-.31.42-.51.61-.2.19-.42.36-.66.51-.24.15-.5.28-.77.39-.27.11-.55.2-.84.26-.29.06-.58.09-.88.09-.3 0-.6-.03-.89-.09-.29-.06-.57-.15-.84-.26-.27-.11-.53-.24-.77-.39-.24-.15-.46-.32-.66-.51-.2-.19-.37-.39-.51-.61-.14-.22-.25-.45-.32-.69-.07-.24-.1-.49-.1-.74 0-.25.05-.49.14-.72.09-.23.22-.45.38-.65.16-.2.33-.38.5-.55.17-.17.36-.32.57-.42.21-.1.45-.15.69-.15.33 0 .64.14.88.39.48.5.77 1.18.77 1.89 0 .71-.35 1.41-.82 2.06-.47.65-1.02 1.25-1.65 1.77-1.26 1.04-2.93 2.28-4.92 1.86-.94-.2-2.09-.9-2.38-1.72-.29-.82-.14-1.72.38-2.38.52-.66 1.37-.94 2.24-.94.87 0 1.72.28 2.24.94.52.66.67 1.56.38 2.38z',
      },
    ],
  };

  const servicesData = {
    title: 'SERVICES',
    links: [
      { label: 'Education', href: '#' },
      { label: 'Job Assistance', href: '#' },
      { label: 'Documentation & Travel Assistance', href: '#' },
      { label: 'Immigration', href: '#' },
    ],
  };

  const contactData = {
    title: 'CONTACT US',
    contactInfo: {
      address: 'Crossroads, Career Consultants Pvt Ltd,\nLevel 3, Oberoi Mall,\nEdapally, Kochi - 6820 24 Kerala',
      phone: '+91 95396 88800',
      email: 'info@crossroadsglobal.in',
    },
  };

  return (
    <footer className="w-full">
      {/* Top Section: Call to Action */}
      <div className="bg-white rounded-3xl py-8 px-4 md:px-8 flex flex-col items-center justify-center relative z-10 -mb-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full">
          <h2 className="text-2xl md:text-2xl font-semibold text-blue-950 text-center">
            ANY QUESTION OR REMARKS?
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-600 text-sm">
              <span>Get started now</span>
              <span>👍</span>
            </button>
            <a
              href="tel:+919539688800"
              className="text-blue-950 text-lg flex items-center space-x-2 whitespace-nowrap"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+91 95396 88800</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-blue-950 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterCard {...crossroadsData} />
          <FooterCard {...servicesData} />
          <FooterCard {...contactData} />
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="bg-blue-950 border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        <p>
          © 2024 ALL RIGHTS RESERVED BY CROSSROADS. MADE WITH PASSION BY{' '}
          <a href="#" className="text-orange-500 hover:underline">
            MARKETBYTES WEB WORKS PVT LTD
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;