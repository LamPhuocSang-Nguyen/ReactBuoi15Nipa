import React, { useEffect, useState } from 'react'

export default function Hook() {

    const [count, setCount] = useState(10);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prestate) => prestate - 1);
            console.log("a");
        }, 1000);

        return ()=>{
            clearInterval(timer);
        }
    },[])
  return (
    <div>{count}</div>
  )
}
