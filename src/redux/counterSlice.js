import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    // name the slice components
    name:'counterApplication ',
    //initial value of the state
    initialState:{
        value:0
    },
    reducers:{
        // actions created inside reducer key ,each logic given as key value pair,separated by commas

        //increment count
        increment : (state,action)=>{
            state.value+=action.payload

        },

        //decrement count
        decrement : (state,action)=>{
            state.value-=action.payload

        },

        //reset
        reset : (state)=>{
            state.value=0
        }

    }
})

//slice returns actions as well as reducer
//actions are called by component
//reducer is for store

export const {increment,decrement,reset} = counterSlice.actions

//export reducer
export default counterSlice.reducer