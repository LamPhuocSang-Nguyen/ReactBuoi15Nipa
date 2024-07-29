import { createSlice } from "@reduxjs/toolkit";

const initialState={
    student:{
        name:"Le Meo Gia",
        math:3,
        pro:0.5,
        dtb:0
    },
    checked:false
}

const studentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        changeAVG(state){
            state.student.dtb = (state.student.math+state.student.pro)/2;
        },
        reChecked(state){
            state.checked = !state.checked
        }
    }
})


export const {reChecked, changeAVG} = studentSlice.actions
export default studentSlice.reducer