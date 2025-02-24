import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="App">
      <Barcode />

      <ul>
          <li><button onClick={() => setImageSrc(require('./img/basement.png'))}>Basement</button></li>
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
