import React from 'react';

const LanguageSelector = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <label htmlFor="language" className="block text-gray-700 mb-2">Select Language</label>
      <select id="language" className="w-full p-2 border rounded-md">
        <option value="">Select language</option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="tamil">Tamil</option>
        <option value="telugu">Telugu</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
