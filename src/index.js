import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Webcam from "react-webcam";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
 
 const webEle = document.getElementById("webCam")
 const canvasEle = document.getElementById("canvas")
 const webCam = new Webcam(webEle,"user",canvasEle)
 webCam.start();
 const MyComponent = () => {
    const webcamRef = React.useRef(null);
  
    return (
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </div>
    );
  };
  