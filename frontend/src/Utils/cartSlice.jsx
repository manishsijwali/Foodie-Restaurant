import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
    reoveItem:(state)=>{
        state.items.pop(); 
    },
    clearCart:(state)=>{
        state.items.length = 0;
    }    

    }
})

export const {addItem,reoveItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;