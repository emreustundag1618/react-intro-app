import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary';


export default class Navi extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

  render() {
    return (
        <div>
        <Navbar color="light" light expand="sm">
            <NavbarBrand href="/">Northwind App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        
                        <NavLink href="/form1">Form Demo 1</NavLink>
                        
                    </NavItem>
                    <NavItem>
                        
                        <NavLink href="/form2">Form Demo 2</NavLink>
                        
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
    </div>
    )
  }
}