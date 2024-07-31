import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {value:1},
    status: 'start',
    error: null,
}


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        increaseProduct(state){
            state.product.value = state.product.value+=1
        },
        decreaseProduct(state){
            if(state.product.value > 1){
                state.product.value = state.product.value-=1
            }
        }
    }
})


export const {increaseProduct, decreaseProduct} = productSlice.actions
export default productSlice.reducer