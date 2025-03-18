import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CustomMap from "./maps/f1.svg"; // Import the SVG file
import "./App.css";
export default function MapComponentf1() {
  return (
    <div className="bg-red-600 min-h-screen flex items-center justify-center">
      <TransformWrapper>
        <TransformComponent>
        <img src={CustomMap} alt="Custom SVG Map" className="w-full h-auto"/>
          <svg width="600" height="600" viewBox="0 0 500 500"></svg>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
