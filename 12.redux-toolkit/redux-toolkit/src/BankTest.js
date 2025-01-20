import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { money } from './store/BankStore';

export default function BankTest() {

    const [moneyValue , setMoney] = useState(0);

    const nowMoney = useSelector((state) => state.money);

    console.log('nowMoney >>>' , nowMoney.state);
    

  

    const dispatch = useDispatch();


  return (
    <div>
        <h1>
            코딩온 은행
        </h1>
        <h2>잔액은 : {nowMoney.state} </h2>

        <input type="number" onChange={(e)=>{
            setMoney(e.target.value)
        }} />
        <button onClcik={()=>dispatch(money(moneyValue))}>입금</button>
        <button>출금</button>

    </div>
  )
}
