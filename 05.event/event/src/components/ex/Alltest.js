import React, { useState } from 'react'
import apple from './img/apple.png'
import banana from './img/banana.png'
import peach from './img/peach.png'
import orange from './img/orange.png'
import './alltest.css'

export const Alltest = () => {
    const [fruits , setFruits] = useState(apple);
    const [backcolor , setBackground] = useState('black');
    const [textcolor , settextColor] = useState('black');
    const [subtext , setSubtext] = useState('입력해주세요');

    function selectFruits(e) {
        setFruits(e.target.value);
    }
    function selectBackcolor(e){
        setBackground(e.target.value);
    }
    function selectColor(e){
        settextColor(e.target.value);
    }
    function inputText(e){
        setSubtext(e.target.value);
    }

   
  return (

    <>
    <span>과일 
        <select onChange={selectFruits} >
            <option value={apple}>사과</option>
            <option value={banana}>바나나</option>
            <option value={peach} >복숭아</option>
            <option value={orange}>오렌지</option>
        </select>
    </span>
    <span>배경색
        <select onChange={selectBackcolor} >
            <option value='black'>검정</option>
            <option value='red'>빨강</option>
            <option value='orange'>주황</option>
            <option value='yellow'>노랑</option>
        </select>
    </span>
    <span>글자색
        <select onChange={selectColor}>
            <option value='black'>검정</option>
            <option value='red'>빨강</option>
            <option value='orange'>주황</option>
            <option value='yellow'>노랑</option>
        </select>
    </span>
    <div>
       내용 : <input type='text' onChange={inputText}></input>
        </div>
    <div className='area'>
    <img src={fruits} alt="error" />
    <h3 className='subtitle' style={{backgroundColor : backcolor, color: textcolor}}>{subtext}</h3>
    </div>
    </>
  )
}
