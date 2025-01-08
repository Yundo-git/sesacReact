import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import { SayFunction } from './SayFunction';
import {StateTest} from './StateTest';

function App() {
    return (
        <div className="App">
            <CounterClass></CounterClass>
            <hr />
            <CounterFunction value={'Plus 1'}></CounterFunction>
            <SayFunction></SayFunction>
            <hr />

            <StateTest></StateTest>
        </div>
    );
}

export default App;