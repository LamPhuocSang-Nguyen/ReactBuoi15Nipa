import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reChecked, changeAVG } from '../redux2/studentSlice'

export default function Exam5() {
    const student=useSelector(state=>state.student.student)
    const checked=useSelector(state=>state.student.checked)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Studnet'name"{student.name}</h1>
        <h1>math: {student.math}</h1>
        <h1>pro: {student.pro}</h1>
        <h1>avg: {student.dtb}</h1>
        <h1>checked: {checked?"true":"false"}</h1>
        <button onClick={()=>dispatch(reChecked())}>reChecked</button>
        <button onClick={()=>dispatch(changeAVG())}>AVG</button>
    </div>
  )
}
