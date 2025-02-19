import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="App">
      <Barcode />

      <ul>
        <li>
          <AwesomeButton type="primary" onPress={() => setImageSrc(require('./img/basement.png'))}>
            Basement
          </AwesomeButton>
        </li>
        <li>
          <AwesomeButton type="secondary" onPress={() => setImageSrc(require('./img/firstFloor.png'))}>
            First Floor
          </AwesomeButton>
        </li>
        <li>
          <AwesomeButton type="primary" onPress={() => setImageSrc(require('./img/secondFloor.png'))}>
            Second Floor
          </AwesomeButton>
        </li>
        <li>
          <AwesomeButton type="secondary" onPress={() => setImageSrc(require('./img/thirdFloor.png'))}>
            Third Floor
          </AwesomeButton>
        </li>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;
