import './App.css';
import Barcode from './Components/Barcode';

function App() {
  return (
    <div className="App">
      <Barcode/>
      <header className="App-header">
        <ul>
            <li><a href = "basement.html">Basement</a></li>
            <li><a href = "baseFloor.html">Base Floor</a></li>
            
            <li><a href = "bSecondFloor.html">Second Floor</a></li>
            <li><a href = "bThirdFloor.html">Third Floor</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
