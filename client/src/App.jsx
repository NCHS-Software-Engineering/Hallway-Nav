import React, { useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import styles from 'react-awesome-button/src/styles/themes/theme-blue';


function App() {
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <div className="App">
      <Barcode />

      <AwesomeButton type="primary">Primary</AwesomeButton>


      <ul>
          <li><AwesomeButton onClick={"basement.png"}>Basement</AwesomeButton></li>
          <li><AwesomeButton onClick={"firstFloor.png"}>First Floor</AwesomeButton></li>
          <li><AwesomeButton onClick={"secondFloor.png"}>Second Floor</AwesomeButton></li>
          <li><AwesomeButton onClick={"thirdFloor.png"}>Third Floor</AwesomeButton></li>
          <AwesomeButton type="primary">Primary</AwesomeButton>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;
