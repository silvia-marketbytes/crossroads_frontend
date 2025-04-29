import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    course: '',
    location: '',
    educationLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4 p-6 bg-[#003050] rounded-lg">
      <div className="relative w-64">
      <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
        >
          <path
            d="M24 22.8323L17.6669 16.4992C19.1508 14.7503 20.0509 12.4933 20.0509 10.0254C20.0509 4.4978 15.5531 0 10.0254 0C4.49782 0 0 4.4978 0 10.0254C0 15.5531 4.49782 20.0509 10.0254 20.0509C12.4933 20.0509 14.7503 19.1508 16.4992 17.6669L22.8323 24L24 22.8323ZM1.65156 10.0254C1.65156 5.40871 5.40874 1.65153 10.0254 1.65153C14.6422 1.65153 18.3994 5.40871 18.3994 10.0254C18.3994 14.6422 14.6422 18.3994 10.0254 18.3994C5.40874 18.3994 1.65156 14.6422 1.65156 10.0254Z"
            fill="white"
          />
        </svg>
        <select
          name="course"
          value={filters.course}
          onChange={handleChange}
          className="px-8 py-2 border border-gray-300 rounded-md bg-[#003050] text-white w-full appearance-none"
        >
          <option value="">What do you want to study?</option>
          <option value="computer_science">Computer Science</option>
          <option value="business">Business</option>
          <option value="engineering">Engineering</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>

      <div className="relative w-64">
      <svg
          width="15"
          height="15"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.247 18.969C9.39711 17.9254 10.4615 16.7911 11.43 15.577C13.47 13.014 14.711 10.487 14.795 8.24C14.8282 7.32679 14.6771 6.41626 14.3505 5.56278C14.024 4.7093 13.5288 3.9304 12.8945 3.27259C12.2602 2.61478 11.4998 2.09157 10.6588 1.7342C9.81775 1.37684 8.91331 1.19265 7.9995 1.19265C7.08569 1.19265 6.18125 1.37684 5.34022 1.7342C4.49918 2.09157 3.73881 2.61478 3.10451 3.27259C2.4702 3.9304 1.975 4.7093 1.64846 5.56278C1.32192 6.41626 1.17076 7.32679 1.204 8.24C1.289 10.487 2.531 13.014 4.57 15.577C5.53846 16.7911 6.60289 17.9254 7.753 18.969C7.86367 19.069 7.946 19.1417 8 19.187L8.247 18.969ZM7.262 20.134C7.262 20.134 0 14.018 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 14.018 8.738 20.134 8.738 20.134C8.334 20.506 7.669 20.502 7.262 20.134ZM8 10.8C8.74261 10.8 9.4548 10.505 9.9799 9.9799C10.505 9.4548 10.8 8.74261 10.8 8C10.8 7.25739 10.505 6.5452 9.9799 6.0201C9.4548 5.495 8.74261 5.2 8 5.2C7.25739 5.2 6.5452 5.495 6.0201 6.0201C5.495 6.5452 5.2 7.25739 5.2 8C5.2 8.74261 5.495 9.4548 6.0201 9.9799C6.5452 10.505 7.25739 10.8 8 10.8ZM8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12Z"
            fill="white"
          />
        </svg>
        
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="px-8 py-2 border border-gray-300 rounded-md bg-[#003050] text-white w-full appearance-none"
        >
          <option value="">Study where?</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
      </div>

      <div className="relative w-64">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
        >
          <path
            d="M24 22.8323L17.6669 16.4992C19.1508 14.7503 20.0509 12.4933 20.0509 10.0254C20.0509 4.4978 15.5531 0 10.0254 0C4.49782 0 0 4.4978 0 10.0254C0 15.5531 4.49782 20.0509 10.0254 20.0509C12.4933 20.0509 14.7503 19.1508 16.4992 17.6669L22.8323 24L24 22.8323ZM1.65156 10.0254C1.65156 5.40871 5.40874 1.65153 10.0254 1.65153C14.6422 1.65153 18.3994 5.40871 18.3994 10.0254C18.3994 14.6422 14.6422 18.3994 10.0254 18.3994C5.40874 18.3994 1.65156 14.6422 1.65156 10.0254Z"
            fill="white"
          />
        </svg>
        <select
          name="educationLevel"
          value={filters.educationLevel}
          onChange={handleChange}
          className="px-8 py-2 border border-gray-300 rounded-md bg-[#003050] text-white w-full appearance-none"
        >
          <option value="">Education level</option>
          <option value="degree">Degree</option>
          <option value="diploma">Diploma</option>
          <option value="certificate">Certificate</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
