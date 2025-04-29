import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CustomMap from "./maps/b.svg"; // Import the SVG file
import "./App.css";
export default function MapComponentb() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <TransformWrapper>
        <TransformComponent>
        <img src={CustomMap} alt="This is the basement floor" className="w-full h-auto"/>
          <svg width="600" height="600" viewBox="0 0 500 500"></svg>
          <button onclick="readAltText()">Describe image</button>
          <script src="tts.js"></script>
          
        </TransformComponent>
      </TransformWrapper>
      
    </div>
    
  );
}
