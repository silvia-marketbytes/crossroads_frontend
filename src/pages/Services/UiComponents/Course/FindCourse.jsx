import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ResultsTable from './ResultsTable';

// Sample data for demonstration
const sampleCourses = [
  {
    id: 1,
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
  },
  {
    id: 2,
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
  },
];

const FindCourse = () => {
  const [searchResults, setSearchResults] = useState(sampleCourses);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (filters) => {
    console.log('Search filters:', filters);
   
    setSearchResults(sampleCourses);
    setIsSearched(true);
  };

  return (
    <div className="w-full  bg-[#003050] text-white p-5">
      <h1 className="text-3xl font-medium text-center mb-5">Find a course</h1>

      <SearchForm onSearch={handleSearch} />

      {isSearched && (
        <div className="mt-5">
          <h3 className=" mb-2 text-left">Results</h3>
          <ResultsTable courses={searchResults} />
        </div>
      )}
    </div>
  );
};

export default FindCourse;
