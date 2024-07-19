import React, {useState} from "react"

function Hook2(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [res, setRes] = useState(0);


    return(
    <div>
        <label for="a">a = </label>
        <input type="text" placeholder="" id="a" value={a} onChange={(event)=>setA(event.target.value*1)}></input> 
        <label for="a">b = </label>
        <input type="text" placeholder="" id="b" value={b} onChange={(event)=>setB(event.target.value*1)}></input>

        <button onClick={()=>setRes(a+b)}>+</button>
        <button onClick={()=>setRes(a-b)}>-</button>
        <button onClick={()=>setRes(a*b)}>*</button>
        <button onClick={()=>setRes(a/b)}>/</button>
        <button>Result: {res}</button>
    </div>)
}

export default Hook2;