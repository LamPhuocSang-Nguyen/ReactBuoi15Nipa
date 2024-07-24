import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Container, Table, Button, Input } from 'reactstrap';

export default function Studnents() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(null)
    const [text,setText] = useState("")
    const [isEdit, setIsEdit] = useState({id:"",flag:false})
    const [textEdit,setTextEdit] = useState("")
    const url = "https://66a07c067053166bcabb90cf.mockapi.io/students";

    const getStudent = () => {
        axios.get(url)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    const deleteById = (id) => {
        axios.delete(url + "/" + id)
            .then(function (response) {
                setMessage("Delete Success");
                setData(data.filter(item=>item.id!==id))
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const updateStudentById = (id,txt) => {
        axios.put(url + "/" + id, {
            name: txt
        })
            .then(function (response) {
                setMessage("Edit Successfull");
                setData(data.map(item=>item.id === id ?{...item,name:txt}:item))
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    const addNewStudent = (txt) => {
        axios.post(url, {
            name: txt
        })
            .then(function (response) {
                setMessage("Add sucessfull")
                setData([...data,{id:response.data.id,name:txt}])
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    //At this point, it only run one time when app start and data also is called from API after that it will not call anytime in the next time.
    useEffect(()=>{
        getStudent();
    },[])

    return (
        <div>
            <Container className='text-center'>
                {
                    message && <p>{message}</p>
                }
                <h1>Student List</h1>
                <Input type='text' value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={(event)=>{
                    if(event.key=="Enter"){
                        addNewStudent(text)
                        setText("");
                    }
                }}></Input>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Option
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {
                                            isEdit.id==item.id && isEdit.flag==true?<Input type='text' value={textEdit} onChange={(e)=>setTextEdit(e.target.value)} 
                                            onKeyDown={(e)=>{
                                                if(e.key=="Enter"){
                                                    updateStudentById(item.id,textEdit)
                                                    setIsEdit({id:"",flag:false})
                                                }
                                            }}></Input>:
                                            <p onDoubleClick={()=>{
                                                setIsEdit({id:item.id,flag:true})
                                                setTextEdit(item.name)
                                            }}>{item.name}</p>
                                        }
                                    </td>
                                    <td>
                                        <Button onClick={() => deleteById(item.id)} className='btn btn-danger'>Delete</Button>
                                        <Button onClick={() => updateStudentById(item.id)} className='btn btn-success'>Edit</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
