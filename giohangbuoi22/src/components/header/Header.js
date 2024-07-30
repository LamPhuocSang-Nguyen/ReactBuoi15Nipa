import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
                <Link to="/ShowCart">Cart <span>{cart.length}</span></Link>
            </Navbar>
        </div>
    );
}
