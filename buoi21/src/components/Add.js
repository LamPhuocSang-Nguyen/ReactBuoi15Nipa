import React,{useState} from 'react'

export default function Add(props) {
    const [text,setText] = useState("")
    const {handle_add}= props

  return (
    <div>
        <input type='text' placeholder='title' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
            if(e.key === "Enter"){
                handle_add(text)
                setText("")
            }}}></input>
    </div>
  )
}