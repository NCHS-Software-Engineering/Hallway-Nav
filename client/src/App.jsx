import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import { AwesomeButton } from 'react-awesome-button/src/components/AwesomeButton';

import 'react-awesome-button/dist/themes/theme-blue.css';

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="App">
      <Barcode />

      <AwesomeButton type="primary">Primary</AwesomeButton>


      <ul>
          <li><AwesomeButton onClick={Basement}>Basement</AwesomeButton></li>
          <li><AwesomeButton onClick={Floor1}>First Floor</AwesomeButton></li>
          <li><AwesomeButton onClick={Floor2}>Second Floor</AwesomeButton></li>
          <li><AwesomeButton onClick={Floor3}>Third Floor</AwesomeButton></li>
          
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;


