import './App.css';
import Barcode from './Components/Barcode';
import React from 'react';
import {Button} from 'react-bootstrap';
import 'react-awesome-button/dist/themes/theme-blue.css';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
import AwesomeButtonSocial from 'react-awesome-button/src/components/AwesomeButtonSocial';



const Basement = () => {
  document.querySelector("figure").innerHTML = `<img src=${require('./img/basement.png')}/>`;
}

const Floor1 = () => {
  document.querySelector("figure").innerHTML = `<img src=${require('./img/firstFloor.png')}/>`;
}

const Floor2 = () => {
  document.querySelector("figure").innerHTML = `<img src=${require('./img/secondFloor.png')}/>`;
}

const Floor3 = () => {
  document.querySelector("figure").innerHTML = `<img src=${require('./img/thirdFloor.png')}/>`;
}

function App() {
  return (
    
    <div className="App">
       
      <Barcode/>
      <ul>
          <li><Button onClick={Basement}>Basement</Button></li>
          <li><Button onClick={Floor1}>First Floor</Button></li>
          <li><Button onClick={Floor2}>Second Floor</Button></li>
          <li><Button onClick={Floor3}>Third Floor</Button></li>
          
      </ul>
      <figure>
      </figure>
    </div>
  );
}

export default App;
