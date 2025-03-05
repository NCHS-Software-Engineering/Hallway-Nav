import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import MapComponent from "./MapComponent1.js"; // Import the component

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [path, setPath] = useState([]);
  const [MapComponent1, setMapComponentb] = useState(null);
  return (
    <div className="App">
      <Barcode />
      <div className="bg-red-600 min-h-screen flex items-center justify-center">
    {<MapComponent/>}
    </div>
      <ul>

        <li><button onClick={() => setMapComponentb(require('./MapComponent1.js'))}>Basement</button></li>
        <li><button onClick={() => setImageSrc(require('./img/firstFloor.png'))}>First Floor</button></li>
        <li><button onClick={() => setImageSrc(require('./img/secondFloor.png'))}>Second Floor</button></li>
        <li><button onClick={() => setImageSrc(require('./img/thirdFloor.png'))}>Third Floor</button></li>
      </ul>


      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>

    </div>
  );
}

export default App;
