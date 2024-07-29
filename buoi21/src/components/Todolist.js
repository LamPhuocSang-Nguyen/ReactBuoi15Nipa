import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addStudent, deleteStudent } from '../redux2/TodoSlice'
import Add from './Add'

export default function TodoList() {
    const [flag, setFlag] = useState("")
    const todoList=useSelector(state=>state.TodoList.students)
    const dispatch = useDispatch()
    const handle_add = (text)=>{
        dispatch(addStudent(text))
    }

    const fillterStudent = (list ,flag)=>{
        if(flag=="CHECKED"){
            return list.filter(item=>item.checked)
        }
    }
  return (
    <div>
        <Add handle_add={handle_add}/>
        {
            todoList.map((item,index)=>
            <div key={index}> 
            {item.name}
            <button onClick={()=>dispatch(deleteStudent(item.id))}>Delete</button>
            </div>)
        }
    </div>
  )
}
