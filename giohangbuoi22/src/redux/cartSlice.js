import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        cart:[],
        status: 'idle',
        error: null,
    },

    reducers:{
        addItem:(state, action)=>{
            let index = state.cart.findIndex((item)=>item.id===action.payload.id)
            
            if(index === -1){
                let newProduct = {...action.payload, quantity:1};
                state.cart.push(newProduct);
            }
            else{
                state.cart[index].quantity+=1;
            }
        },

        removeItem:(state, action)=>{
            let index = state.cart.findIndex((item)=>item.id===action.payload);
            if(state.cart[index].quantity > 1){
                state.cart[index].quantity-=1;
            }
        },

        clearCart: (state, action)=>{
            state.cart = [];
        },

        setLoading: (state)=>{
            state.status = "Loading";
        },

        setError: (state, action)=>{
            state.status= "Faild";
            state.error = action.payload;
        },

        setLoaded: (state)=>{
            state.status = "Success";
        }
    }
})

export const {addItem, removeItem, clearCart, setLoading, setError, setLoaded} =cartSlice.actions;
export default cartSlice.reducer;