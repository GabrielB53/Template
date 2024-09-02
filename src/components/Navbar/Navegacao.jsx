
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeToggleButton from '../Botoes/TrocarCor';
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
                <Nav className="ms-auto">
               <ThemeToggleButton onThemeChange={handleThemeChange} />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
