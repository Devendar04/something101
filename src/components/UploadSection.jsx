import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const UploadSection = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = React.useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);
  

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full h-[75vh] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-gray-400 text-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16l4.8-4.8a4 4 0 015.657 0L21 18m-9 0h3a2 2 0 002-2v-5a2 2 0 00-2-2h-5a2 2 0 00-2 2v3a2 2 0 002 2h3" />
        </svg>
        {/* <p>Upload Image/Video</p> */}
      </div>

      <div className="w-[95vh] h-[95vh] ">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          height="100%"
          videoConstraints={{ facingMode: "user",deviceId: "f0485ccf24c359cc51dcea65988f0bf53d93d30fc9a7be696c043f78a54fb99c" }} // Use "user" for the front camera
          style={{ objectFit: 'contain' }}
        />
        
        
       
      </div>
    </div>
  );
};

export default UploadSection;
