import {useState} from "react"

function Hook1(){
    const [name, setName] = useState("");

    return(<div>
        <h1>Hook1, name: {name}</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={(event)=>setName(event.target.value)}></input>
    </div>)
}

export default Hook1;