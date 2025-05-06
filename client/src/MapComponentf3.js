import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CustomMap from "./maps/f3.svg"; // Import the SVG file
import "./App.css";
function readAltText() {
  const utterance = new SpeechSynthesisUtterance("This is the third floor");
  speechSynthesis.speak(utterance);
}
export default function MapComponentf3() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <TransformWrapper>
        <TransformComponent>
        <img src={CustomMap} alt="Custom SVG Map" className="w-full h-auto"/>
          <svg width="600" height="600" viewBox="0 0 500 500"></svg>
          <img alt="This is the third floor"></img>
          <button onClick={readAltText()} id="svg-button-third">Describe image</button>
          <style>{`
            #svg-button-third {
              top: 114px;
              right: 180px;
              border-radius: 0 0 0 8px;
              border-width: 0 0 2px 2px;
            }
          `}</style>
          <script src="tts.js"></script>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
