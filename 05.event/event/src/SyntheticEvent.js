import React from 'react'

export default function SyntheticEvent() {

function synEvent(e){
    console.log('합성 이벤트 버튼클릭');
    console.log(e)
}

function printInputValue(event){
    console.log(event.target.value);

}
  return (
    <>
    <div>
        <button onClick={synEvent}>합성 이벤트 콘솔에 찍기</button>
    </div>
    <br />
    <input type="text" placeholder='입력' onChange={printInputValue} />
    </>

)
}
