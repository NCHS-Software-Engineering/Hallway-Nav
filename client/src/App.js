import './App.css';
import Barcode from './Components/Barcode';
import React from 'react';
import {Button} from 'react-bootstrap';


const Basement = () => {
  document.querySelector("figure").innerHTML = "<img src = \"./img/basement.png\"/>";
}

const Floor1 = () => {
  document.querySelector("figure").innerHTML = "<img src = \"./img/firstFloor.png\"/>";
}

const Floor2 = () => {
  document.querySelector("figure").innerHTML = "<img src = \"./img/secondFloor.png\"/>";
}

const Floor3 = () => {
  document.querySelector("figure").innerHTML = "<img src = \"./img/thirdFloor.png\"/>";
}

function App() {
  return (
    <div className="App">
      <Barcode/>
      <header className="App-header">
        <ul>
            <li><Button onClick={Basement}>Basement</Button></li>
            <li><Button onClick={Floor1}>First Floor</Button></li>
            <li><Button onClick={Floor2}>Second Floor</Button></li>
            <li><Button onClick={Floor3}>Third Floor</Button></li>
        </ul>
      </header>
      <figure>
      </figure>
    </div>
  );
}

export default App;
