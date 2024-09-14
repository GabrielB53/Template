
import React, { useState, useEffect } from 'react';

function BotaoTroca({ onThemeChange }) {
    const [theme, setTheme] = useState('Claro');

    useEffect(() => {
        const TemaLocal = localStorage.getItem('tema') || 'Claro';
        setTheme(TemaLocal); // Seta o tema - Tá escrito na função
        onThemeChange(TemaLocal); // Salva o tema local,tipo,meio que ele muda e(já deu pra sacar)
    }, [onThemeChange]);

    useEffect(() => {
        localStorage.setItem('tema', theme);
        if (theme === 'Escuro') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        onThemeChange(theme);  // Ele alterna o tema salvo
    }, [theme, onThemeChange]);
    // A função que vai realmente mudar o tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Claro' ? 'Escuro' : 'Claro'));
    };
    return (

        <button onClick={toggleTheme} className={theme === 'Claro' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-danger'}>
           Trocar tema: {theme === 'Claro' ? 'Escuro' : 'Claro'}
        </button>
    );
}

export default BotaoTroca;
