import { useState } from "react";
import Hook7 from "./components/Hook7";
import API1 from "./components/API1";
import Hook11 from "./components/Hook11";
import 'bootstrap/dist/css/bootstrap.min.css';
import Studnents from "./components2/studnents";


function App() {
  const [show,setShow] = useState(true);

  return (
    /*<>
    {
      show?<Hook11 />: "Not Show Hook11"
    }

    <button onClick={()=>{setShow(!show)}}>show</button>
    </>*/

    /*<>
    <API1 />
    </>*/
    <>
    <Studnents />
    </>
  );
}

export default App;
