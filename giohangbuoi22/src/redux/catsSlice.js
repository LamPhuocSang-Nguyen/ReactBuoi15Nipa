import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    cats:[],
    currentPage:1,
    status:"start",
    error:"",
    totalPage:30,
    currentPage:1
}

const url = "https://66a07c067053166bcabb90cf.mockapi.io/products";

export const fetchCats = createAsyncThunk('cats/fetchCats', async(page)=>{
    const res = await axios.get(`${url}?page=${page}&&limit=5`)
    return res.data;
})

export const deleteCat = createAsyncThunk('cats/deleteCat', async(id)=>{
    await axios.delete(url+"/"+id)
    return id;
})

export const addNewCat = createAsyncThunk('cats/addNewCat', async(cat)=>{
    const res = await axios.post(url,cat)
    return res.data;
})

export const reCheckCat = createAsyncThunk('cats/reCheckCat', async(cat)=>{
    const res = await axios.put(url+"/"+cat.id,{...cat,checked:!cat.checked})
    return res.data;
})

const cartSlice = createSlice({
    name:"cats",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCats.pending,state=>{
            state.status="loading"
        })
        .addCase(fetchCats.fulfilled,(state,action)=>{
            state.status="succeeded"
            state.cats=action.payload
            console.log("abc")
        })
        .addCase(fetchCats.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.payload.message
        })
        .addCase(deleteCat.fulfilled,(state,action)=>{
            state.cats = state.cats.filter(item=>item.id !== action.payload)
        })
        .addCase(addNewCat.fulfilled,(state,action)=>{
            state.cats=[...state.cats,action.payload]
        })
        .addCase(reCheckCat.fulfilled,(state,action)=>{
            state.cats=state.cats.map(item=>item.id===action.payload.id?{...item,checked:!item.checked}:item)
        })
    }
})

export default cartSlice.reducer;