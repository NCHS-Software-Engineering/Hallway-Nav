import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import MapComponentb from "./MapComponentb.js"; // Import the component
import MapComponentf1 from "./MapComponentf1.js"; // Import the component
import MapComponentf2 from "./MapComponentf2.js"; // Import the component
import MapComponentf3 from "./MapComponentf3.js"; // Import the component

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [path, setPath] = useState([]);
  const [floor, setFloor] = useState(-1);
  const [MapComponent, setMapComponent] = useState(null);
  return (
    <div className="App">
      <Barcode />
      <div className="bg-red-600 min-h-screen flex items-center justify-center">
    </div>
      <ul>
        <li><button onClick={() => {setMapComponent(require('./MapComponentb.js')); setFloor(0)}}>Basement</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf1.js')); setFloor(1)}}>First Floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf2.js')); setFloor(2)}}>Second Floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf3.js')); setFloor(3)}}>Third Floor</button></li>
      </ul>


      <figure>
        {floor === 0 ? <MapComponentb/> :
        (floor === 1 ? <MapComponentf1/> :
         (floor === 2 ? <MapComponentf2/> : 
          (floor === 3 ? <MapComponentf3/> : null)
         )
        )}
      </figure>

    </div>
  );
}

export default App;
