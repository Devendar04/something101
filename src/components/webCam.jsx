import React from 'react';



const MyComponent = () => {
    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc); // Do something with the captured image
    }, [webcamRef]);
  
    return (
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%" // Adjust the width as needed
        />
    
      </div>
    );
  };
  




export default webCam;