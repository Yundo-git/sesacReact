import React, { useState } from 'react'

export const SayFunction = () => {

    console.log(useState('Welcome'))

    const [message , setMessage] = useState('welcome');
    const onClickEnter = ()=>{
        setMessage('안녕하세요~');
    }
    const onClickLeave = ()=>{
        setMessage('안녕히 가세요');
    }
    const handleClick = ()=>{
        setMessage((currentMessage) =>{
            return currentMessage === 'welcome'?'환영' : 'Hi'
        })
    }
  return (
    <>
    <div>SayFunction</div>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    <button onClick={handleClick}>Hi로바꾸기</button>
    <h1>{message}</h1>
    </>
  )
}
