import cartSlice from "./cartSlice";
import catsSlice from "./catsSlice";
import productSlice from "./product";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
        cats:catsSlice
    }
})

export default store