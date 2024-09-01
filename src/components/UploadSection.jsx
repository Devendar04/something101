import React from 'react';

const UploadSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-gray-400 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16l4.8-4.8a4 4 0 015.657 0L21 18m-9 0h3a2 2 0 002-2v-5a2 2 0 00-2-2h-5a2 2 0 00-2 2v3a2 2 0 002 2h3" />
        </svg>
        <p>Upload Image/Video</p>
      </div>
    </div>
  );
};

export default UploadSection;
