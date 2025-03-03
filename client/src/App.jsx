import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const images = [require('./img/basement.png'), require('./img/firstFloor.png'), require('./img/secondFloor.png'), require('./img/thirdFloor.png')]
  const [index, setIndex] = useState(null);
  return (
    <div className="App">
      <div className="scan"><Barcode /></div>

      <div className="scroll">
        <li><IconButton aria-label="up" size="medium" onClick={function(event){ if(index===3)setImageSrc(images[0]); else setImageSrc(images[index+1]); if(index===3) setIndex(0); else setIndex(index+1)}}><KeyboardArrowUpIcon /></IconButton></li>
        <li><IconButton aria-label="down" size="medium" onClick={function(event){ if(index===0) setImageSrc(images[3]); else setImageSrc(images[index-1]); if(index===0) setIndex(3); else setIndex(index-1)}}><KeyboardArrowDownIcon /></IconButton></li>
      </div>

      <ul>
          <li><button  onClick={function(event){ setImageSrc(images[0]); setIndex(0)}}>Basement</button></li>
          <li><button onClick={function(event){ setImageSrc(images[1]); setIndex(1)}}>First Floor</button></li>
          <li><button onClick={function(event){ setImageSrc(images[2]); setIndex(2)}}>Second Floor</button></li>
          <li><button onClick={function(event){ setImageSrc(images[3]); setIndex(3)}}>Third Floor</button></li>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;
