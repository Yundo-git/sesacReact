import './App.css';
import ClassComponent from './ClassComponent';
import TestComponent from './TestComponent';
import FunctionComponent from './FunctionComponent';
import FoodComponent from './FoodComponent';
import FunctionTest from './FunctionTest';
import Button from './Button';
import MultiChild from './MultiChild';

function App() {
  return (
    <div className="App">
     <ClassComponent></ClassComponent>
     <hr/>

     <ClassComponent place= '새싹 강동캠퍼스'></ClassComponent>
    <hr/>
    <TestComponent></TestComponent> 
    <TestComponent test = '이건 받아온 props'></TestComponent> 
    <hr></hr>

    <FunctionComponent ></FunctionComponent>
    <FunctionComponent name='john' age={30}></FunctionComponent>
    <hr></hr>


    <FoodComponent></FoodComponent>

    <FoodComponent food='likefood'></FoodComponent>

    <hr></hr>
    <FunctionTest title = '나의하루는 4시 40분에 시작한다.'author = '김유진' price = '13,500원' type = '자기개발서'></FunctionTest>

    <hr></hr>
    <Button link="https://www.google.com">google</Button>
    <Button></Button>

    <hr></hr>

    <MultiChild>
      <b>다중 자식</b>
      <p>요소전달</p>
      <div>체험해보기</div>
    </MultiChild>
    </div>

  );
}

export default App;


// import './App.css';
// import Button from './Button';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import MultiChild from './MultiChild';

// function App() {
//     return (
//         <div className="App">
//             {/* <ClassComponent></ClassComponent>
//             <hr />
//             <ClassComponent place="새싹 강동캠퍼스 5층"></ClassComponent>
//             <hr />
//             <FunctionComponent></FunctionComponent>
//             <hr />
//             <FunctionComponent name="john" age={30}></FunctionComponent> */}
//             {/* JSX에서 JS 표현식을 평가하는 용도로 사용하는게 {} */}
//             {/* {}로 감싸야 React가 이것을 JS 숫자로 인식함. */}

//             <hr />
//             {/* children - 단일 자식 요소 전달 */}
//             <Button link="https://www.google.com">Google</Button>
//             <Button></Button>
//             <hr />
//             {/* children - 다중 자식 요소 전달 */}
//             <MultiChild>
//                 <b>다중 자식</b>
//                 <p>요소 전달</p>
//                 <div>체험 해보기</div>
//             </MultiChild>
//         </div>
//     );
// }

// export default App;