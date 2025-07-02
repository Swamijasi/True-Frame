import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/Trueframe logo.jpg';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='white' sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="Trueframe Solutions"
                        height="70"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/technology">Technology</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
