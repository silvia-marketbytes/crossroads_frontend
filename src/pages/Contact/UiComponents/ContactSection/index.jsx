// F:\crossroads\crossroads\frontend\src\pages\Contact\UiComponents\ContactSection\index.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-950 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Semi-circle effect at top-left and bottom-right corners */}
          <div
            className="absolute top-0 left-50 w-40 h-30 bg-white rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          <div
            className="absolute bottom-0 right-50 w-40 h-30 bg-white rounded-full"
            style={{ transform: 'translate(50%, 50%)' }}
          />

          {/* Left Side: Heading and Description */}
          <div className="w-full md:w-1/2 p-3 md:p-6">
            <h2 className="text-3xl font-bold text-white mb-2">Contact Information</h2>
            <p className="text-gray-300 text-base">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 p-3 md:p-6">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Name and Email */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-white text-xs mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-xs mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
              </div>

              {/* Right Column: Phone Number and Location */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-white text-xs mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location" className="text-white text-xs mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
              </div>

              {/* Full Width: Buttons (No Dropdown) */}
              <div className="md:col-span-2 flex flex-col">
                <label className="text-white text-xs mb-1">
                  How Can We Help You
                </label>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    type="button"
                    className="p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm"
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm"
                  >
                    Job Assistance
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm"
                  >
                    Migration
                  </button>
                </div>
              </div>

              {/* Full Width: Message */}
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="text-white text-xs mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;