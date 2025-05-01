import React, { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Barcode from './Components/Barcode';
import Select from "./Components/Select";
import Search from "./Components/Search";
import MapComponentb from "./MapComponentb"; // Import the component
import MapComponentf1 from "./MapComponentf1"; // Import the component
import MapComponentf2 from "./MapComponentf2"; // Import the component
import MapComponentf3 from "./MapComponentf3"; // Import the component

function App() {
  const [floor, setFloor] = useState(-1);
  const [MapComponent, setMapComponent] = useState(null);
  const [room, setRoom] = useState(0);
  return (<>
    <div className="App">
      <header>
          <p>Naperville Central class finder</p>
      </header>
      <Barcode />
      
      <ul>
        <li><label htmlFor="rooms-end">Where is...</label><Select idStr="rooms-end" value={room}/></li>
        <li><button onClick={(Search())}>Route</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentb.js')); setFloor(0)}}>Basement</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf1.js')); setFloor(1)}}>1<sup>st</sup> floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf2.js')); setFloor(2)}}>2<sup>nd</sup> floor</button></li>
        <li><button onClick={() => {setMapComponent(require('./MapComponentf3.js')); setFloor(3)}}>3<sup>rd</sup> floor</button></li>
        {floor !== -1 &&
        <div className="scroll">
          <li>
            <IconButton aria-label="up" size="medium" onClick={() => setFloor(floor === 3? 0: floor + 1)}>
              <KeyboardArrowUpIcon /> {floor === 3? "Loop around to basement": "To higher floor"}
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="down" size="medium" onClick={() => setFloor(floor === 0? 3: floor - 1)}>
              <KeyboardArrowDownIcon /> {floor === 0? "Loop around to floor 3": "To lower floor"}
            </IconButton>
          </li>
        </div>}
      </ul>


      <figure>
        {floor !== -1 && [<MapComponentb/>, <MapComponentf1/>, <MapComponentf2/>, <MapComponentf3/>][floor]}
      </figure>
      <div id="aside">
        <p style={{fontStyle: "oblique"}}>Pathfinders, 2025.</p>
        <p style={{fontWeight: 700}}>Contributors:</p>
        <hr />
        <p>Shawn Plackiyil.</p>
        <p>Daniel Kozlowski.</p>
        <p>Yutian Wang.</p>
        <p>Fionn McCabeWild.</p>
        <hr />
      </div>
      <div id="floor" style={{backgroundColor: "#" + "cd3fa8a8c8cd".slice(3*floor, 3*floor+3)}}>
        Displaying {["awaited", "basement", `floor 1`, "floor 2", "floor 3"][floor+1]}.
      </div>
    </div>
  </>);
}

export default App;
