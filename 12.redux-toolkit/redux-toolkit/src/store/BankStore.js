import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
    name : 'money',
    initialState : {state : 0},
    reducers : {
        money : (state) =>{
            return state
        }
    }
})

console.log('testtest >>>', moneySlice);

export const {money} = moneySlice.actions;

export default moneySlice.reducer;