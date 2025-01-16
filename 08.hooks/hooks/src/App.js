import './App.css';
import UseCallbackEx from './conponents/UseCallback';
import UseCallbackEx2 from './conponents/UseCallback2';
import UseMemoEx from './conponents/UseMemo';
import ProductFilter from './conponents/HookTest';
import ShoppingCartApp from './conponents/HookTest2';
import { ThemeProvider } from './conponents/ThemeProvider';
import { ThemeMidele } from './conponents/ThemeMidele';
import Faq from './conponents/Faq';
import useTitle from './hooks/useTitle';
import Form from './conponents/react-hook-form/Form';
import HookFormTest from './conponents/react-hook-form/HookFormTest';
// import TodoApp from './conponents/TodoApp';



function App() {
  useTitle('리엑트 훅스 학습중');
  return (
    <div className="App">
    <UseMemoEx></UseMemoEx>
    <hr />
    <UseCallbackEx></UseCallbackEx>
    <hr />
    <UseCallbackEx2 postId={7}></UseCallbackEx2>
    <hr />
    <ProductFilter></ProductFilter>
    <hr />
    <ShoppingCartApp></ShoppingCartApp>
    <hr />
    <ThemeProvider>
      <ThemeMidele></ThemeMidele>
    </ThemeProvider>

    <hr></hr>

    <Faq></Faq>
    <hr></hr>
    {/* <TodoApp></TodoApp> */}

    <hr />
    <Form></Form>

    <hr />
    <HookFormTest></HookFormTest>
    </div>
  );
}

export default App;


// import './App.css';
// import { ThemeMiddle } from './components/ThemeMiddle';
// import { ThemeProvider } from './components/ThemeProvider';
// import UseCallbackEx from './components/UseCallbackEx';
// import UseCallbackEx2 from './components/UseCallbackEx2';
// import UseMemoEx from './components/UseMemoEx';
// import UseReducerEx from './components/UseReducerEx';

// function App() {
//     return (
//         <div className="App">
//             {/* <UseMemoEx></UseMemoEx> */}
//             {/* <UseCallbackEx></UseCallbackEx> */}
//             {/* <UseCallbackEx2 postId={9}></UseCallbackEx2> */}
//             {/* <UseReducerEx></UseReducerEx> */}
//             <ThemeProvider>
//                 <ThemeMiddle></ThemeMiddle>
//             </ThemeProvider>
//         </div>
//     );
// }

// export default App;
