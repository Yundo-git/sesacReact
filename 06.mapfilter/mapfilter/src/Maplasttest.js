import React, { useState } from 'react'
import './Maplastcss.css'

export const Maplasttest = () => {
    const [list , setList] = useState([]);

    const [nameText , setNameText] = useState('');
    const [titleText, settitleText] = useState('');
    const [searchText,setSearchText] = useState('');

    const addList = ()=>{
        const newList = list.concat(
            {
                name : nameText,
                id : list.length +1,
                title : titleText
            }
        )
        setList(newList);
        setNameText('');
        settitleText('')
    }

    const searchId = (e)=>{
        console.log(searchText)

    }
  

  return (
    <>
    <div className='inputdiv'>
        <span>작성자 : 
            <input type="text" value={nameText} onChange={(e) => {
                    setNameText(e.target.value);
                }}/>
        </span>
        <span>
            제목 : 
            <input type="text" value={titleText} onChange={(e) =>{
                settitleText(e.target.value);
            }} />
        </span>
        <button onClick={addList}>작성</button>

    </div>
    <div className='content'>
    <select className='padding'>
            <option value="name">작성자</option>
            <option value="number">번호</option>
            <option value="title">제목</option>


        </select>
        <input className='padding' type="text" placeholder='검색어' value={searchText}
         onChange={(e) => {
            searchId(searchText);
        }}/>
        <button className='padding' onClick={searchId} >검색</button>
        </div>

        <table className='table'>
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
            </tr>
            {list.map((value)=>{
               return <tr>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.name}</td>

                </tr>
            })}
        </table>
    </>


)
}
