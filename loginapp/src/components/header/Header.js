import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Button
} from 'reactstrap';
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';

function Header(args) {
    const dispatch = useDispatch();
    const {product} = useSelector((state)=>state.product);
  const [isDark, setisDark] = useState(false);
  const [statusRes, setStatusRes] = useState(false)


  return (
    <div>
      <Navbar color='light' light='true'>
        <NavbarBrand href="/">My App</NavbarBrand>
        <NavbarText>Welcome <strong>PhatConex</strong></NavbarText>
        <NavbarText><span className='status'>{statusRes&&statusRes==true?"Logout":"Login"}</span></NavbarText>
        <NavbarText>Product:{product.value}</NavbarText>
        <NavbarText><Button color='dark'>Dark</Button></NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;