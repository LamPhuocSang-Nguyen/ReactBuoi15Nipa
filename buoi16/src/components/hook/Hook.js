import React from "react";
import { useState, useRef } from "react";
import "./hook.css";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Hook() {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(10);
    const sidebarRef = useRef();
    console.log(flag);

    const handle_count = () => {
        setCount(count - 1);
        setCount(preSate => preSate - 1);
        setCount(preSate => preSate - 1);
    }

    return (
        <>

            {/*<div>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </div>*/}
            <h1>Count: {count}</h1>
            <button onClick={handle_count}>Count down</button>
            <div className={flag ? "hook5 active" : "hook5"}>
                <h1>Hook5</h1>
                <p>Flag: {flag ? "True" : "false"}</p>

                <div className="meo" ref={sidebarRef}>

                </div>



                <button onClick={() => {
                    setFlag(!flag)
                    sidebarRef.current.classList.toggle("active")
                }}>Change Flag</button>
            </div>
        </>)
}