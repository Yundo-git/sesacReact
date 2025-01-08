// import React, { Component, useState } from 'react'

// export default class StateTest extends Component {

//     state = {
//         number: 0,
//     };
//   render() {

//     const { number } = this.state;


//     return (
//         <>
//       <div>StateTest</div>
//       <h1>현재 숫자 : {this.state.number}</h1>
//       <button onClick={()=>{this.setState({number : this.state.number+2})}}>더하기2</button>
//       <button onClick={()=>{this.setState({number : this.state.number-1})}}>빼기1</button>

//       </>
//     )
//   }
// }


import React, { useState } from 'react';

export const StateTest = ({}) => {

    const [number, setNumber] = useState(0); // (초기값) = 0
    const increase = () => {
        setNumber(number + 1);
    };

    const decrease=()=>{
        setNumber(number-2);
    }

  return (
   
    <>
    <div>StateTest</div>
    <h1>현재 숫자 : {number}</h1>
    <button onClick={increase}>더하기 1</button>
    <button onClick={decrease}>빼기 2</button>

    
    </>
  )
}
