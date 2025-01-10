import './App.css';
import SyntheticEvent from './SyntheticEvent';
import { FuncComponent } from './FunComponent';
import ClassComponent from './ClassComponent';
import Handler from './components/ex/Handler';
import { Titlecolor } from './components/ex/Titlecolor';
import { Titileremove } from './components/ex/Titileremove';
import { Alltest } from './components/ex/Alltest';
import Alltest2 from './components/ex/Alltest2';

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
    <FuncComponent></FuncComponent>
    <hr />
    <ClassComponent></ClassComponent>
    <hr />
    <Handler></Handler>
    <hr />
    <Titlecolor></Titlecolor>
    <hr></hr>
    <Titileremove></Titileremove>
    <hr></hr>
    <Alltest></Alltest>
    <hr />
    <Alltest2></Alltest2>
    </div>
   
  );
}

export default App;
