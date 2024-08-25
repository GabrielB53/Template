
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../Botoes/TrocarCor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navegar.css';

function BasicExample() {
    const [theme, setTheme] = useState('Claro');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <Navbar expand="lg" data-bs-theme={theme === 'Claro' ? 'light' : 'dark'}>
            <Container>
                <Navbar.Brand href="#home"><p>Sistema SGM</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='ms-auto'>
                <Nav className="ms-auto">
                <Row>
                <Col md="auto"> <ThemeToggleButton onThemeChange={handleThemeChange} /></Col>
                <Col><Link to={'/login'} className='btn btn-sm CorNavButtonLog'>Login</Link></Col>
                </Row>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
