import React, { useState } from 'react'

export const Titlecolor = () => {

    let [titlecolor,setColor] = useState('black');
    let [title,setTitle] = useState('검은색 글씨');

    const red = ()=>{
        setTitle('빨간색 글씨')
        setColor('red')
    }
    const blue = ()=>{
        setTitle('파란색 글씨')
        setColor('blue')
    }
   
  return (
    <>
    <div style={{color : titlecolor}}>{title}</div>

    <button onClick={red}>red</button>
    <button onClick={blue}>blue</button>

    </>
  )
}
