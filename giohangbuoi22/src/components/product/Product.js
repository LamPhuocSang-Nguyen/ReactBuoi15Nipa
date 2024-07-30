import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap';
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product(props) {
  const { id, name, price, exp } = props;
  const dispatch = useDispatch();
  return (
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
          {id}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {name}
        </CardSubtitle>
        <CardText>
          {price}
        </CardText>
        <CardText>
          {exp}
        </CardText>
        <Button color='warning' onClick={()=>dispatch(addItem({id,name,price,exp}))}>
          Add to cart
        </Button>
      </CardBody>
    </Card>
  );
}
