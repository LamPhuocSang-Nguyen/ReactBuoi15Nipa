import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addItem, removeItem, clearCart} from '../../redux/cartSlice.js'
import {Container, Table , Button} from 'reactstrap';

export default function Cart() {
    const dispatch = useDispatch();
    const {cart} = useSelector(state=>state.cart)

  return (
    <div>
    <Container>
        <Table hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart&&cart.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Button onClick={()=>dispatch(addItem(item))} color='warning'>+</Button>
                                <span>{item.quantity}</span>
                                <Button onClick={()=>dispatch(removeItem(item.id))} color='danger'>-</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>

        <Button onClick={()=>dispatch(clearCart())} color='warning'>Clear cart</Button>
    </Container>
</div>
  )
}
