import './App.css';
import Basic from './Basic';
import Alphabet from './Alpahbet';
import { Mapinputtest } from './Mapinputtest';
import { Maplasttest } from './Maplasttest';

function App() {
  return (
    <div className="App">
     <Basic></Basic>
     <hr />

    <Alphabet></Alphabet>

    <hr />
    <Mapinputtest></Mapinputtest>

    <hr />
    <Maplasttest></Maplasttest>
    </div>
  );
}

export default App;
