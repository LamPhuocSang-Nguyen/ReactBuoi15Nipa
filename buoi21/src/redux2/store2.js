import { configureStore } from "@reduxjs/toolkit";
import countReducer from './countSlice2'
import userReducer from './countSlice2'
import studentSlice from './studentSlice'
import TodoSlice from "./TodoSlice";

const store = configureStore({
    reducer:{
        count:countReducer,
        user:userReducer,
        student:studentSlice,
        TodoList:TodoSlice
    }
})

export default store