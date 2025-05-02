import React, { useState } from 'react';
import SearchForm from './SearchForm';
import ResultsTable from './ResultsTable';

const sampleCourses = [
  {
    id: 1,
    courseCode: '001',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  {
    id: 2,
    courseCode: '002',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  {
    id: 3,
    courseCode: '003',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  {
    id: 4,
    courseCode: '004',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  {
    id: 5,
    courseCode: '005',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  {
    id: 6,
    courseCode: '006',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf', 
  },
  // Add more courses as needed
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
    <div className="w-full bg-[#003050] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Find a course</h2>
        <SearchForm onSearch={handleSearch} />
        {isSearched && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-left">Results</h3>
            <ResultsTable courses={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FindCourse;
