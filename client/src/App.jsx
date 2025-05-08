import React, { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from "./Components/Select";
import MapComponentb from "./MapComponentb";
import MapComponentf1 from "./MapComponentf1";
import MapComponentf2 from "./MapComponentf2";
import MapComponentf3 from "./MapComponentf3";
import JsonRead from "./Components/JsonRead";

function App() {
  const [floor, setFloor] = useState(-1);
  const [room, setRoom] = useState(10);
  const [route, setRoute] = useState(null);

  let RenderedComponent;
  if (route === null)
  {

  }
  else if (route.length === 2){
    RenderedComponent = <JsonRead src="finalFilter.json" csvSrc="p1.csv" backgroundImage="f1.svg" endId={room}/>;
  }
  else{
    if(parseInt(room[0]) === 1){
      RenderedComponent = <JsonRead src="finalFilter.json" csvSrc="p1.csv" backgroundImage="f1.svg" endId={room}/>;
    }
    else if(parseInt(room[0]) === 2){
      RenderedComponent = <ul><li><JsonRead src="finalFilter.json" csvSrc="p1.csv" backgroundImage="f1.svg" endId={27}/></li><li><JsonRead src="finalFilter.json" csvSrc="p2.csv" backgroundImage="f2.svg" endId={room}/></li></ul>; 
    }
    else if(parseInt(room[0]) === 3){
      RenderedComponent = <ul><li><JsonRead src="finalFilter.json" csvSrc="p1.csv" backgroundImage="f1.svg" endId={27}/></li><li><JsonRead src="finalFilter.json" csvSrc="p3.csv" backgroundImage="f3.svg" endId={room}/></li></ul>; 
    }
    else{
      RenderedComponent = <div>Sorry We Don't Have This Yet</div>;
    }
  }

  const handleSelectChange = (e) => {
    const selectedRoom = e.target.value;
    setRoom(selectedRoom);
    setRoute(null);
    console.log('Selected Room:', selectedRoom);
  };

  return (
    <>
      <div className="App">
        <header>
          <p>Naperville Central class finder</p>
        </header>

        <ul>
          <li>
            <label htmlFor="rooms-end">Where is...</label>
            <Select idStr="rooms-end" value={room} onChange={handleSelectChange} />
          </li>
          <li>
            <button onClick={() => setRoute(room)}>Route</button>
          </li>
          <li>
            <button onClick={() => setFloor(0)}>Basement</button>
          </li>
          <li>
            <button onClick={() => setFloor(1)}>1<sup>st</sup> floor</button>
          </li>
          <li>
            <button onClick={() => setFloor(2)}>2<sup>nd</sup> floor</button>
          </li>
          <li>
            <button onClick={() => setFloor(3)}>3<sup>rd</sup> floor</button>
          </li>
          <div>
            {RenderedComponent}
          </div>

          {floor !== -1 && (
            <div className="scroll">
              <li>
                <IconButton
                  aria-label="up"
                  size="medium"
                  onClick={() => setFloor(floor === 3 ? 0 : floor + 1)}
                >
                  <KeyboardArrowUpIcon />
                  {floor === 3 ? "Loop around to basement" : "To higher floor"}
                </IconButton>
              </li>
              <li>
                <IconButton
                  aria-label="down"
                  size="medium"
                  onClick={() => setFloor(floor === 0 ? 3 : floor - 1)}
                >
                  <KeyboardArrowDownIcon />
                  {floor === 0 ? "Loop around to floor 3" : "To lower floor"}
                </IconButton>
              </li>
            </div>
          )}
        </ul>

        <figure>
          {floor !== -1 &&
            [<MapComponentb />, <MapComponentf1 />, <MapComponentf2 />, <MapComponentf3 />][floor]}
        </figure>

        <div id="aside">
          <p style={{ fontStyle: "oblique" }}>Pathfinders, 2025.</p>
          <p style={{ fontWeight: 700 }}>Contributors:</p>
          <hr />
          <p>Shawn Plackiyil.</p>
          <p>Daniel Kozlowski.</p>
          <p>Yutian Wang.</p>
          <p>Fionn McCabeWild.</p>
          <hr />
        </div>

        <div
          id="floor"
          style={{
            backgroundColor: "#" + "cd3fa8a8c8cd".slice(3 * floor, 3 * floor + 3),
          }}
        >
          Display
          {[": awaiting..", "ing basement", "ing floor 1", "ing floor 2", "ing floor 3"][floor + 1]}.
        </div>
      </div>
    </>
  );
}

export default App;
