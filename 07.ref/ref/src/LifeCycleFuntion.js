import React, { useState } from 'react'
import LifeCycleFunChild from './LifeCycleFunChild'

export default function LifeCycleFuntion() {

    const [number , setNumber] = useState(0)
    const [visible , setVisible] = useState(false)

    const changeNumber = ()=>{
        setNumber(number+1)
    }

    const changeVisible = ()=>{
        setVisible(!visible)
    }
  return (
    <div>
        <h1>함수형 부모 컴포넌트</h1>
        <button onClick={changeNumber}>plus</button>
        <button onClick={changeVisible}>on/off</button>

      {visible && ( <LifeCycleFunChild number={number}></LifeCycleFunChild>)}
    </div>
  )
}
