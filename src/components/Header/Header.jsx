import { Link } from "react-router-dom";
import ThemeToggleButton from '../Botoes/TrocarCorADM';
import React, { useState } from 'react';

const Header = ({goto,title, logo}) => {
    const [, setTheme] = useState('Claro');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <div className="
            d-flex justify-content-between align-content-center 
            p-3 border-bottom shadow rounded">
            <Link to={goto} className="btn btn-info shadow">Voltar</Link>
            <div>
                <span className="fw-bold h2">{title}</span>
            </div>
            <div>
            <ThemeToggleButton onThemeChange={handleThemeChange} />
            </div>
        </div>
    )
}

export default Header