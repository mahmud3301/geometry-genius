// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto ">
                        <Link className='text-decoration-none text-white ms-3' to="/">Home</Link>
                        <Link className='text-decoration-none text-white ms-3' to="/login">Login</Link>
                        <Link className='text-decoration-none text-white ms-3' to="/signUp">Sign Up</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;