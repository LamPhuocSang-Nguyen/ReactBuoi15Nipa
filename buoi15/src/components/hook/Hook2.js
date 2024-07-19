import {useState} from "react"

function Hook2(){
    console.log("render Hook2")
    const [number,setNumber] = useState(10);

    function handle_count_up(){
        setNumber(number+10);//count = count + 1
    }

    return(<div>
        <p>Number: {number}</p>
        <button onClick={handle_count_up}>Count up</button>
    </div>)


}

export default Hook2;