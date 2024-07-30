import React, { useEffect, useState } from 'react'
import { InputGroup, Input, Button, Container } from 'reactstrap'
import "../todolist/Todolist.css";

export default function Todolist() {
    const data = [
        {
            id: 1,
            name: "Hit the gym",
            check: true
        },
        {
            id: 2,
            name: "Pay bills",
            check: true
        },
        {
            id: 3,
            name: "Buy Eggs",
            check: false
        },
        {
            id: 4,
            name: "Read a book",
            check: false
        }
    ]
    const [listdata, setListdata] = useState(data);
    const [text, setText] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [textItem, setTextItem] = useState("")

    // const fetchData = (list) => {
    //     let newList = listdata;
    //     return newList;
    // }

    const addItemdata = (name) => {
        let newListData = [...listdata, { id: listdata.length === 0 ? 1 : listdata.reduce((value,item) => Math.max(item.id, value)+1,0), name: name, check: false }]
        setListdata(newListData);
    }

    const deleteItem = (id)=>{
        const newListdata = listdata.filter(item=>item.id!==id)
        setListdata(newListdata);
    }

    const EditItem = (id,name)=>{
        const newData = listdata.filter((item)=>(item.id === id));

        setListdata([...listdata, {id:newData.id, name:name,check:newData.check}]); 
    }
    // useEffect(() => {
    //     fetchData()
    // }, [text])


    return (
        <div>
            <Container className="content">
                <h1 className='title'>My To Do List</h1>
                <InputGroup>
                    <Input placeholder='title' onChange={(e) => setText(e.target.value)} value={text} onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addItemdata(text)
                            setText("")
                        }
                    }} />
                    <Button>
                        ADD
                    </Button>
                </InputGroup>

            </Container>

            <Container className='listdata'>
                {
                    listdata.map((item, index) => {
                        return (<div className='dataItem'>
                            <div className='itemCheck'>
                                <Input type='checkbox'></Input>
                                {
                                isEdit ? (<Input type='text' value={item.name} onChange={(e)=>(setTextItem(e.target.value))} onKeyDown={(e)=>{
                                    if(e.key==="Enter"){
                                        EditItem(item.id,textItem);
                                        setTextItem("");
                                    }
                                }}></Input>)
                                : 
                                (<p onDoubleClick={()=>setIsEdit(!isEdit)}>{item.name}</p>)
                                }
                            </div>
                            <Button onClick={()=>deleteItem(item.id)}>X</Button>
                        </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}
