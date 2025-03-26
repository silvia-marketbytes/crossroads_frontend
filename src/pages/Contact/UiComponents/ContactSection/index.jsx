// F:\crossroads\crossroads\frontend\src\pages\Contact\UiComponents\ContactSection\index.jsx
import React, { useState } from "react";
import CutOut from "../../../../components/UiComponents/CutOut";

const ContactSection = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    helpOption: "",
    message: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle button selection for "How Can We Help You"
  const handleHelpOption = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      helpOption: option,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.helpOption) newErrors.helpOption = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Log form data (you can replace this with an API call)
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      helpOption: "",
      message: "",
    });

    // Optionally show a success message
    alert("Form submitted successfully!");
  };

  return (
    <section className="py-10 bg-white" style={{ zIndex: "10" }}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-950 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center overflow-hidden">
          <div className="absolute -top-52 left-28">
            <CutOut />
          </div>

          {/* Left Side: Heading and Description */}
          <div className="w-full md:w-1/2 p-3 md:p-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Contact Information
            </h2>
            <p className="text-gray-300 text-base">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 p-3 md:p-6">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Left Column: Name and Email */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-white text-xs mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-xs mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Right Column: Phone Number and Location */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-white text-xs mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="location" className="text-white text-xs mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
                {errors.location && (
                  <p className="text-red-400 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              {/* Full Width: Buttons (No Dropdown) */}
              <div className="md:col-span-2 flex flex-col">
                <label className="text-white text-xs mb-1">
                  How Can We Help You
                </label>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Education")}
                    className={`p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm ${
                      formData.helpOption === "Education"
                        ? "bg-orange-500 border-orange-500"
                        : ""
                    }`}
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Job Assistance")}
                    className={`p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm ${
                      formData.helpOption === "Job Assistance"
                        ? "bg-orange-500 border-orange-500"
                        : ""
                    }`}
                  >
                    Job Assistance
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Migration")}
                    className={`p-2 rounded-lg border border-gray-400 text-white hover:bg-orange-500 hover:border-orange-500 transition-colors text-sm ${
                      formData.helpOption === "Migration"
                        ? "bg-orange-500 border-orange-500"
                        : ""
                    }`}
                  >
                    Migration
                  </button>
                </div>
                {errors.helpOption && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.helpOption}
                  </p>
                )}
              </div>

              {/* Full Width: Message */}
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="text-white text-xs mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder=""
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button - Aligned to Left */}
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="absolute -bottom-52 right-28">
            <CutOut />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
