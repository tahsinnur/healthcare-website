import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
            <>
                <Navbar sticky="top" style={{backgroundColor:"#00887a"}} className="p-2" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-uppercase fs-2 text-white fw-bold">lifeline</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-6">
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Navbar.Text>
                            User:
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;