import React, { use, useState } from 'react';
import './App.css';
import Barcode from './Components/Barcode';
import Select from './Components/Select';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [form, setForm] = useState(-1);

  return (
    <div className="App">
      <Barcode />

      <ul>
          <li>{form!==-1 && <><label>Start </label> <Select index={form}/></>}</li>
          <li>{form!==-1 && <><label>End </label> <Select index={form}/></>}</li>
          <li><button onClick={() => {setImageSrc(require('./img/basement.png')); setForm(0);}}>Basement</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/firstFloor.png')); setForm(1);}}>First Floor</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/secondFloor.png')); setForm(2);}}>Second Floor</button></li>
          <li><button onClick={() => {setImageSrc(require('./img/thirdFloor.png')); setForm(3);}}>Third Floor</button></li>
      </ul>

      <figure>
        {imageSrc && <img src={imageSrc} alt="Floor Plan" />}
      </figure>
    </div>
  );
}

export default App;


