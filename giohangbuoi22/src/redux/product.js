import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = "https://66a07c067053166bcabb90cf.mockapi.io/products";

const initialState = {
    product: [],
    status: 'start',
    error: null,
}


export const fetchProduct = createAsyncThunk('product/fetchProduct', async() =>{
    const respone = await axios.get(url);
    return respone.data;
});



const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

})

export default productSlice.reducer