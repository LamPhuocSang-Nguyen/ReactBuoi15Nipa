import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Input, Table } from 'reactstrap'
import { fetchCats, deleteCat, addNewCat, reCheckCat } from '../../redux/catsSlice'
import Pagination from 'react-js-pagination';
import "./cats.css"

export default function Cats() {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch();
    const { cats, totalPage } = useSelector((state) => state.cats)
    // console.log(typeof totalPage)
    useEffect(() => {
        dispatch(fetchCats(currentPage))
    }, [currentPage])

    // console.log(cats)

    const handle_delete = (id) => {
        dispatch(deleteCat(id))
    }

    const handle_add = (cat) => {
        dispatch(addNewCat(cat))
    }

    const handle_rechecked = (cat) => {
        dispatch(reCheckCat(cat))
    }



    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            <Container>
                <Input type='text' placeholder='Name' onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handle_add({ name: "Le Van Meo", checked: false })
                    }
                }}></Input>
                <Table hover>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {
                            cats.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td className={item.checked ? "cat-name active" : "cat-name"}
                                        onClick={() => handle_rechecked(item)}>{item.name}</td>
                                    <td>{item.checked ? "true" : "false"}</td>
                                    <td><Button onClick={() => handle_delete(item.id)}>Delete</Button></td>
                                </tr>)
                            )
                        }
                    </tbody>
                </Table>

                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={5}
                    totalItemsCount={totalPage}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}>

                </Pagination>
            </Container>
        </div>
    )
}