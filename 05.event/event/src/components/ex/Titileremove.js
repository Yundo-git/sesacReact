import React, { useState } from 'react'

export const Titileremove = () => {
    const [title , setTitle] = useState('안녕하세요');
    const [button, setButton] = useState('사라져라');

    const remove = ()=>{
        if(title === '안녕하세요'){
            setTitle('');
            setButton('보여라')
        }else if(title === ''){
            setTitle('안녕하세요');
            setButton('사라져라')
        }
    
    }

  return (

    <>
    <button onClick={remove}>{button}</button>
    <h1>{title}</h1>
    </>
  )
}
