import React, {useState } from 'react';

export const Mapinputtest = () => {

    const [list, setList] = useState([
        { name: '코디', email: 'codi@gmail.com' ,id : 1},
        { name: '윤도훈', email : 'ydh7804@gmail.com', id : 2}
  
    ]);
    const [nameText , setNameText] = useState('');
    const [emailText, setemailText] = useState('');

    const addList = ()=>{

        const newList = list.concat(
            {
                name : nameText,
                email : emailText,
                id : list.length +1
            }
        )
        setList(newList);
        setNameText('');
        setemailText('')
    }
    const enterEvent = (e)=>{
        if(e.keyCode === 13){
            addList()
        }
    }

    const removeList = (e)=>{

        console.log(e.target.id)
        const targetId = Number(e.target.id)
        const newList = list.filter(
            (removeTarget)=> removeTarget.id !== targetId,
            )
            console.log(newList)
            setList(newList);
            setNameText('');
            setemailText('')
    }

  return (
    <>
    <input type="text" placeholder='이름' value={nameText}  onChange={(e) => {
                    setNameText(e.target.value);
                }}/>
    <input  type="email" 
            placeholder='이메일'
            value={emailText} 
            onKeyDown={enterEvent}
            onChange={(e) => {
                    setemailText(e.target.value);
                }}/>
    <button onClick={addList}>등록</button>

    <div onDoubleClick={removeList}>
        {list.map((value)=>(
            <h1 key={value.name} id={value.id}>{value.name} : {value.email}</h1>
        ))}
    </div>
    </>

)
}
