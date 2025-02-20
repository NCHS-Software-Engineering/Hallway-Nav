import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import {Button} from 'react-bootstrap';

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="App">
      <Barcode />

      <ul>
        <li>
          <Button onClick={() => setImageSrc(require('./img/basement.png'))}>
            Basement
          </Button>
        </li>
        <li>
          <Button onClick={() => setImageSrc(require('./img/firstFloor.png'))}>
            First Floor
          </Button>
        </li>
        <li>
          <Button onClick={() => setImageSrc(require('./img/secondFloor.png'))}>
            Second Floor
          </Button>
        </li>
        <li>
          <Button onClick={() => setImageSrc(require('./img/thirdFloor.png'))}>
            Third Floor
          </Button>
        </li>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;
