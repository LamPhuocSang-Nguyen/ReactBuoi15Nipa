import cartSlice from "./cartSlice";
import productSlice from "./product";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice
    }
})

export default store