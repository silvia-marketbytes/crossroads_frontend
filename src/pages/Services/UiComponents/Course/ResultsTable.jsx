import React from 'react';

const ResultsTable = ({ courses }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse">
        <thead className="bg-[#003050] text-white">
          <tr className=''>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              SL No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              Course
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              Institution
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              Education level
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              Stream
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-white">
              More info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">

            </th>
          </tr>
        </thead>
        <tbody className="text-[#003050]">
          {courses.map((course, index) => (
            <tr key={course.id} className="text-center bg-white hover:bg-gray-100">
              <td className="px-3 py-6 whitespace-nowrap text-sm">{index + 1}</td>
              <td className="px-3 py-6 whitespace-nowrap text-sm font-medium">{course.course}</td>
              <td className="px-3 py-6 whitespace-nowrap text-sm">{course.institution}</td>
              <td className="px-3 py-6 whitespace-nowrap text-sm">{course.educationLevel}</td>
              <td className="px-3 py-6 whitespace-nowrap text-sm">{course.stream}</td>
              <td className="px-3 py-6 whitespace-nowrap text-sm flex items-center gap-2">
                <button className="flex items-center px-6 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200">
                  <svg width="16" height="18" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9995 23.375C15.4021 23.375 14.9328 22.9075 14.9328 22.3125V3.1875C14.9328 2.5925 15.4021 2.125 15.9995 2.125C16.5968 2.125 17.0661 2.5925 17.0661 3.1875V22.3125C17.0661 22.9075 16.5968 23.375 15.9995 23.375ZM28.7995 31.875H3.19948C2.60215 31.875 2.13281 31.4075 2.13281 30.8125V26.5625C2.13281 25.9675 2.60215 25.5 3.19948 25.5C3.79681 25.5 4.26615 25.9675 4.26615 26.5625V29.75H27.7328V26.5625C27.7328 25.9675 28.2021 25.5 28.7995 25.5C29.3968 25.5 29.8661 25.9675 29.8661 26.5625V30.8125C29.8661 31.4075 29.3968 31.875 28.7995 31.875Z" fill="#FFFFFF"/>
                    <path d="M16.0001 25.5C15.8602 25.5017 15.7215 25.4742 15.5929 25.4193C15.4643 25.3644 15.3487 25.2833 15.2535 25.1813L7.7868 17.7438C7.36013 17.3188 7.36013 16.66 7.7868 16.235C8.21346 15.81 8.8748 15.81 9.30146 16.235L16.0215 22.9288L22.7415 16.235C23.1681 15.81 23.8295 15.81 24.2561 16.235C24.6828 16.66 24.6828 17.3188 24.2561 17.7438L16.7895 25.1813C16.5761 25.3938 16.2988 25.5 16.0428 25.5H16.0001Z" fill="#FFFFFF"/>
                  </svg>
                </button>
                </td>
                <td>
                <button className="px-5 py-1 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 hover:text-orange-600 transition duration-200">
                  Apply Now
                </button>
              </td>
              <td className="px-6 py-6 whitespace-nowrap text-sm"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;