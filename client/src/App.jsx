import React, { use, useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import Select from './Components/Select';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [form, setForm] = useState("-1");

  return (
    <div className="App">
      <Barcode />

      <ul>
          <li><button onClick={() => {setImageSrc(require('./img/basement.png')); setForm("A");}}>Basement</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/firstFloor.png')); setForm("B");}}>First Floor</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/secondFloor.png')); setForm("C");}}>Second Floor</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/thirdFloor.png')); setForm("D");}}>Third Floor</button></li>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
        {form!=="-1" && <Select index={form}/>}
      </figure>
    </div>
  );
}

export default App;


