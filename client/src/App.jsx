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

function App() {
  const [floor, setFloor] = useState(-1);
  const [MapComponent, setMapComponent] = useState(null);
  return (
    <div className="App">
      <header>
          <p>Naperville Central class finder</p>
      </header>
      <Barcode />
      
      <ul>
        <li><label htmlFor="rooms-start">Start from room</label><Select idStr="rooms-start"/></li>
        <li><label htmlFor="rooms-end">End at room</label><Select idStr="rooms-end"/></li>
        <button disabled>Find route (doesn't work yet)</button>
        <li><button onClick={() => {setMapComponent(require('./MapComponentb.js')); setFloor(0)}}>Basement</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf1.js')); setFloor(1)}}>1st floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf2.js')); setFloor(2)}}>2nd floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf3.js')); setFloor(3)}}>3rd floor</button></li>
        {floor !== -1 &&
        <div className="scroll">
          <li>
            <IconButton aria-label="up" size="medium" onClick={() => setFloor(floor === 3? 0: floor + 1)}>
              <KeyboardArrowUpIcon /> {floor === 3? "Loop around to basement": "To higher floor"}
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="down" size="medium" onClick={() => setFloor(floor === 0? 3: floor - 1)}>
              <KeyboardArrowDownIcon /> {floor === 0? "Loop around to third floor": "To lower floor"}
            </IconButton>
          </li>
        </div>}
      </ul>


      <figure>
        {floor !== -1 && [<MapComponentb/>, <MapComponentf1/>, <MapComponentf2/>, <MapComponentf3/>][floor]}
      </figure>
      <footer>
        <p>Pathfinders, 2025</p>
      </footer>
    </div>
  );
}

export default App;
