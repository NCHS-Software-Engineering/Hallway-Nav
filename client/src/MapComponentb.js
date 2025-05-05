import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CustomMap from "./maps/b.svg"; // Import the SVG file
import "./App.css";
function readAltText() {
  const utterance = new SpeechSynthesisUtterance("This is the basement floor");
  speechSynthesis.speak(utterance);
}

export default function MapComponentb() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <TransformWrapper>
        <TransformComponent>
        <img src={CustomMap} alt="This is the basement floor" className="w-full h-auto"/>
          <svg width="600" height="600" viewBox="0 0 500 500"></svg>
          <button id="svg-button-base" onClick={readAltText()}>Describe image</button>
          <style>{`
          #svg-button-base {
            top: 147px;
            left: 21px;
            border-radius: 0 0 8px 0;
            border-width: 0 2px 2px 0;
          }
          `}
          </style>
          <script src="tts.js"></script>
          
        </TransformComponent>
      </TransformWrapper>
      
    </div>
    
  );
}
