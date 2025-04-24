import React, { useState } from 'react';

const EventDetailsSection = ({
  imageSrc,
  title,
  description,
  date,
  time,
  location,
  category,
  lat,
  lng,
  onJoinEvent,
}) => {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active tab

  // Construct the Google Maps embed URL dynamically
  const mapLocation = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin`;

  return (
    <section className="  bg-white">
      {/* Full-screen width container */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-20 mt-20">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex items-start">
          <div className="rounded-lg overflow-hidden border-4 border-gray-200 w-full h-[500px]">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Event Details with Tabs */}
        <div className="w-full lg:w-1/2 flex items-start">
          <div className="flex flex-col w-full p-8 bg-white">
            <div>
              <h2 className="text-4xl font-bold text-[#00334D] mb-4">{title}</h2>
              <p className="text-gray-600 text-lg mb-8">{description}</p>

              {/* Tabs */}
              <div className="flex gap-8 mb-8">
                <div
                  className={`text-lg font-medium cursor-pointer transition-all duration-300 ${
                    activeTab === 'overview'
                      ? 'text-[#F9920A] border-b-2 border-[#F9920A]'
                      : 'text-gray-600 hover:text-[#F9920A] hover:border-b-2 hover:border-[#F9920A]'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  EVENT OVERVIEW
                </div>
                <div
                  className={`text-lg font-medium cursor-pointer transition-all duration-300 ${
                    activeTab === 'moreInfo'
                      ? 'text-[#F9920A] border-b-2 border-[#F9920A]'
                      : 'text-gray-600 hover:text-[#F9920A] hover:border-b-2 hover:border-[#F9920A]'
                  }`}
                  onClick={() => setActiveTab('moreInfo')}
                >
                  MORE INFO
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === 'overview' && (
                  <ul className="text-gray-700 text-lg space-y-4">
                    <li className="pb-4 border-b border-gray-300">
                      <span className="font-semibold">• Date:</span> {date}
                    </li>
                    <li className="py-4 border-b border-gray-300">
                      <span className="font-semibold">• Time:</span> {time}
                    </li>
                    <li className="py-4 border-b border-gray-300">
                      <span className="font-semibold">• Event Location:</span> {location}
                    </li>
                    <li className="pt-4">
                      <span className="font-semibold">• Category:</span> {category}
                    </li>
                  </ul>
                )}
                {activeTab === 'moreInfo' && (
                  <p className="text-gray-600 text-lg">{description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="mt-16">
        <div className="bg-[#00334D] text-white p-8   h-[600px]">
          <div className="w-full flex flex-col lg:flex-row gap-5">
            {/* Map (Left Section) */}
            <div className="w-full lg:w-1/2 pl-20">
              <div className="w-full h-[500px] relative">
                <iframe
                  src={mapLocation}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${title} Location`}
                  className="filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                ></iframe>
                <p className="mt-6 text-base">Here’s how to get to the event venue</p>

                {/* Address Overlay Box */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-6 rounded-lg max-w-xs shadow-lg mt-4">
                  <div className="flex items-start">
                    <svg
                      className="text-[#F9920A] w-8 h-8 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00334D]">Event Location</h3>
                      <p className="text-gray-600 text-base mt-2">{location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Right Section) */}
            <div className="w-full lg:w-1/2 px-20">
              <h3 className="text-2xl font-semibold mb-6">Your Global Journey Starts Here - Join the Event!</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded bg-white text-[#00334D] text-lg"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded bg-white text-[#00334D] text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded bg-white text-[#00334D] text-lg"
                />
                <select className="w-full p-3 border rounded bg-white text-[#00334D] text-lg">
                  <option value="">Choose your qualification</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
                <button
                  type="button"
                  onClick={onJoinEvent}
                  className="w-full bg-[#F9920A] text-white p-3 rounded-full mt-4 text-lg"
                >
                  Join Event
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;