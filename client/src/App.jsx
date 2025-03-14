import React, { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Barcode from './Components/Barcode';
import Select from "./Components/Select";
import MapComponentb from "./MapComponentb"; // Import the component
import MapComponentf1 from "./MapComponentf1"; // Import the component
import MapComponentf2 from "./MapComponentf2"; // Import the component
import MapComponentf3 from "./MapComponentf3"; // Import the component

import logo from "./img/NCHSlogo.png";

function App() {
  const [floor, setFloor] = useState(-1);
  const [MapComponent, setMapComponent] = useState(null);
  return (
    <div className="App">
      <header style={{backgroundColor: 'red'}}>
          <p>Naperville Central class finder - by Pathfinders</p>
      </header>
      <Barcode />
      <div className="bg-red-600 min-h-screen flex items-center justify-center">
    </div>
      <ul>
        <li><label>Start </label> <Select /></li>
        <li><label>End </label> <Select /></li>
        <button disabled>Find route (doesn't work yet)</button>
        <li><button onClick={() => {setMapComponent(require('./MapComponentb.js')); setFloor(0)}}>Basement</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf1.js')); setFloor(1)}}>1st floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf2.js')); setFloor(2)}}>2nd floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf3.js')); setFloor(3)}}>3rd floor</button></li>
        {floor !== -1 &&
        <div className="scroll">
          <li>
            <IconButton aria-label="up" size="medium" onClick={() => setFloor(floor === 3? 0: floor + 1)}><KeyboardArrowUpIcon /></IconButton>
          </li>
          <li>
            <IconButton aria-label="down" size="medium" onClick={() => setFloor(floor === 0? 3: floor - 1)}><KeyboardArrowDownIcon /></IconButton>
          </li>
        </div>}
      </ul>


      <figure>
        {floor !== -1 && [<MapComponentb/>, <MapComponentf1/>, <MapComponentf2/>, <MapComponentf3/>][floor]}
      </figure>
    </div>
  );
}

export default App;
