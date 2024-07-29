import {createSlice} from '@reduxjs/toolkit'

const initialState={
    students:[
        {id:1,name:"Le Van meo", checked:true},
        {id:2,name:"Le Van Tho", checked:false},
        {id:3,name:"Le Van nai", checked:true},
    ],
    checkedAll:false
}


const studentSlice = createSlice({
    name:"TodoList",
    initialState,
    reducers:{
        addStudent(state,action){
            state.students=[...state.students,{id:state.students.length === 0 ? 1 : state.students.reduce((value,item) => Math.max(item.id, value)+1,0), name:action.payload,checked:true}]
        },
        deleteStudent(state,action){
            state.students = state.students.filter(item=>item.id!== action.payload)
        }
    }
})

export const {addStudent, deleteStudent} = studentSlice.actions
export default studentSlice.reducer;