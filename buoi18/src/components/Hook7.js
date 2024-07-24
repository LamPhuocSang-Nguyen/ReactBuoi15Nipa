import React, {useState, useEffect} from 'react'

export default function Hook7() {
    const [count,setCount] = useState(1);
    const [number, setNumber] = useState(1);

    useEffect(()=>{
        console.log("side Effect");
        const x = setInterval(()=>{
          console.log("load count")
          setCount(preState=>preState+1)
        })

        return ()=>{
          clearInterval(x);
          console.log("Day la cleaned up");
        }
    },[]);

    //console.log("Render Hook7")
  return (
    <div>
        <h1>Tim hieu useEffect</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Count up</button>
        <p>Number:{number}</p>
        <button onClick={()=>setNumber(number+1)}>number up</button>
    </div>
  )
}
