import { createSlice } from '@reduxjs/toolkit';


const visibleSlice = createSlice({
    name : 'visible',
    initialState : {state : true},

    reducers :{
        change : (state) => {
           return !state
        }
    }
})

export const {change} = visibleSlice.actions;

export default visibleSlice.reducer;