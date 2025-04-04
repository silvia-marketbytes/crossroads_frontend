import React, { useState } from "react";
import CutOut from "../../../../components/UiComponents/CutOut";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    helpOption: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHelpOption = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      helpOption: option,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      helpOption: "",
      message: "",
    });
    alert("Form submitted successfully!");
  };

  return (
    <section className="py-10 bg-white" style={{ zIndex: "10" }}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative text-white rounded-3xl p-6 md:p-14 flex flex-col md:flex-row items-center overflow-hidden"
          style={{ backgroundColor: "#00334D" }}
        >
          <div className="absolute -top-52 left-28 hidden md:block">
            <CutOut />
          </div>

          {/* Left Section: Contact Info */}
          <div className="w-full md:w-1/2 p-3 md:p-6 z-10">
            <h2 className="text-3xl font-bold text-white mb-2 flex flex-col">
              <span>Contact</span>
              <span className="block">Information</span>
            </h2>
            <p className="text-gray-300 text-base">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="w-full md:w-1/2 p-3 md:p-6 z-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
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
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9920A] text-sm"
                  placeholder=""
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
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
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9920A] text-sm"
                  placeholder=""
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
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
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9920A] text-sm"
                  placeholder=""
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Location */}
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
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9920A] text-sm"
                  placeholder=""
                />
                {errors.location && (
                  <p className="text-red-400 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              {/* How Can We Help You */}
              <div className="md:col-span-2 flex flex-col space-y-2">
                <label className="text-white text-xs">
                  How Can We Help You
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Education")}
                    className={`p-2 rounded-lg border border-gray-400 text-white transition-colors text-sm ${
                      formData.helpOption === "Education"
                        ? "bg-[#F9920A] border-[#F9920A]"
                        : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                    }`}
                  >
                    Education
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Job Assistance")}
                    className={`p-2 rounded-lg border border-gray-400 text-white transition-colors text-sm ${
                      formData.helpOption === "Job Assistance"
                        ? "bg-[#F9920A] border-[#F9920A]"
                        : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                    }`}
                  >
                    Job Assistance
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHelpOption("Migration")}
                    className={`p-2 rounded-lg border border-gray-400 text-white transition-colors text-sm ${
                      formData.helpOption === "Migration"
                        ? "bg-[#F9920A] border-[#F9920A]"
                        : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                    }`}
                  >
                    Migration
                  </button>
                </div>
                {errors.helpOption && (
                  <p className="text-red-400 text-xs">{errors.helpOption}</p>
                )}
              </div>

              {/* Message */}
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
                  className="p-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F9920A] text-sm"
                  placeholder=""
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="text-white font-semibold py-2 px-6 rounded-full transition-colors text-sm hover:bg-[#e07b00]"
                  style={{ backgroundColor: "#F9920A" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="absolute -bottom-52 right-28 hidden md:block">
            <CutOut />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;