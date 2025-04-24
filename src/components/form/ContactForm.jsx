import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    helpOption: "",
    message: "",
    acceptPrivacyPolicy: true, 
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
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
    if (!formData.acceptPrivacyPolicy)
      newErrors.acceptPrivacyPolicy = "You must accept the privacy policy";
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
    // Add your form submission logic here (e.g., API call)
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      helpOption: "",
      message: "",
      acceptPrivacyPolicy: true, // Reset to checked
    });
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-200 text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder=""
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-200 text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder=""
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-gray-200 text-sm font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder=""
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Location */}
      <div className="flex flex-col">
        <label
          htmlFor="location"
          className="text-gray-200 text-sm font-medium mb-1"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder=""
        />
        {errors.location && (
          <p className="text-red-400 text-xs mt-1">{errors.location}</p>
        )}
      </div>

      {/* How Can We Help You */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-200 text-sm font-medium">
          How Can We Help You
        </label>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleHelpOption("Education")}
            className={`p-2 rounded-lg border border-gray-300 text-white transition-colors text-sm ${
              formData.helpOption === "Education"
                ? "bg-amber-500 border-amber-500"
                : "hover:bg-amber-500 hover:border-amber-500"
            }`}
          >
            Education
          </button>
          <button
            type="button"
            onClick={() => handleHelpOption("Job Assistance")}
            className={`p-2 rounded-lg border border-gray-300 text-white transition-colors text-sm ${
              formData.helpOption === "Job Assistance"
                ? "bg-amber-500 border-amber-500"
                : "hover:bg-amber-500 hover:border-amber-500"
            }`}
          >
            Job Assistance
          </button>
          <button
            type="button"
            onClick={() => handleHelpOption("Migration")}
            className={`p-2 rounded-lg border border-gray-300 text-white transition-colors text-sm ${
              formData.helpOption === "Migration"
                ? "bg-amber-500 border-amber-500"
                : "hover:bg-amber-500 hover:border-amber-500"
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
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-gray-200 text-sm font-medium mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder=""
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="acceptPrivacyPolicy"
          name="acceptPrivacyPolicy"
          checked={formData.acceptPrivacyPolicy}
          onChange={handleCheckboxChange}
          className="mr-2 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
        />
        <label
          htmlFor="acceptPrivacyPolicy"
          className="text-gray-200 text-sm font-medium"
        >
          I agree to the{" "}
          <a href="/terms-and-conditions" className="text-blue-500 underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-blue-500 underline">
            Privacy Policy
          </a>
        </label>
        {errors.acceptPrivacyPolicy && (
          <p className="text-red-400 text-xs mt-1">
            {errors.acceptPrivacyPolicy}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-sm font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;