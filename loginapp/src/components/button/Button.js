import React from 'react'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { increaseProduct,decreaseProduct } from '../../redux/productSlice';
import "./Button.css"
export default function ButtonBtn() {
    const dispatch = useDispatch();
    const {product} = useSelector((state)=>state.product);
  return (
    <div>
        <Button className='btn' color='light' onClick={()=>(dispatch(increaseProduct()))}>+</Button>
        <Button className='btn' color='light'>{product.value}</Button>
        <Button className='btn' color='light' onClick={()=>{dispatch(decreaseProduct())}}>-</Button>
    </div>
  )
}
