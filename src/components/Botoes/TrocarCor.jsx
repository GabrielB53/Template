import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function BotaoTroca({ onThemeChange }) {
    const [theme, setTheme] = useState('Claro');

    // Função para aplicar o tema diretamente no body
    const applyTheme = (theme) => {
        if (theme === 'Escuro') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    // Carrega o tema inicial do localStorage e aplica ao body
    useEffect(() => {
        const savedTheme = localStorage.getItem('tema') || 'Claro';
        setTheme(savedTheme); // Define o estado do tema
        applyTheme(savedTheme); // Aplica o tema no body
        onThemeChange(savedTheme); // Notifica a mudança de tema, se necessário
    }, [onThemeChange]);

    // Atualiza o tema sempre que o estado `theme` muda
    useEffect(() => {
        localStorage.setItem('tema', theme); // Salva o tema no localStorage
        applyTheme(theme); // Aplica o tema ao body
        onThemeChange(theme); // Notifica a mudança de tema, se necessário
    }, [theme, onThemeChange]);

    // Alterna o tema ao clicar no botão
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Claro' ? 'Escuro' : 'Claro'));
    };

    const buttonColor = theme === 'Claro' ? 'primary' : 'error';

    return (
        <Button onClick={toggleTheme} variant='contained' color={buttonColor} sx={{ mt: 2, mb: 2,}}>
           Trocar tema: {theme === 'Claro' ? 'Escuro' : 'Claro'}
        </Button>
    );
}

export default BotaoTroca;
