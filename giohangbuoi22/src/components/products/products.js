import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../redux/product.js'
import {  Container, Row } from 'reactstrap';
import Product from '../product/Product.js'

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product)
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === 'start') {
      dispatch(fetchProduct());
    }
  }, []);



  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }






  return (
    <Container>
      <Row>
        {
          product.map((item) => (
            <Product key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              exp={item.exp}
            />
          ))
        }
      </Row>
    </Container>
  );
}
