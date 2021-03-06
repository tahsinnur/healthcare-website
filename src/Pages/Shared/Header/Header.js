import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
            <>
                <Navbar sticky="top" style={{backgroundColor:"#00887a"}} className="p-1" collapseOnSelect expand="lg">
                <Container>
                    <Nav.Link as={HashLink} to="/home" className="text-uppercase fs-2 text-white fw-bold"><i className="fas fa-stethoscope"></i> lifeline</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-6">
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link className="text-white text-uppercase" as={HashLink} to="/home#about">About Us</Nav.Link>
                        {user?.email ?
                            <div className="d-flex">
                                <Button onClick={logOut} variant="light">Logout</Button>
                                <Navbar.Text className="text-white ms-2">
                                    User: {user?.displayName}
                                </Navbar.Text>
                            </div> :
                            <Nav.Link as={Link} to="/login"><Button variant="light">Login</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;