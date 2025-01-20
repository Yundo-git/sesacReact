import { createSlice } from '@reduxjs/toolkit';


const visibleSlice = createSlice({
    name : 'visible',
    initialState : true,

    reducers :{
        change : (state) => {
           return !state
        }

        // (state) => !state  리턴을 안적으면 이렇게 하면 된다.
    }
})

export const {change} = visibleSlice.actions;

export default visibleSlice.reducer;