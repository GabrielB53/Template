import React, { createContext, useState, useEffect } from 'react';

// Criação do contexto
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('Claro');

    // Carrega o tema salvo no localStorage ou define como 'Claro' por padrão
    useEffect(() => {
        const savedTheme = localStorage.getItem('tema') || 'Claro';
        setTheme(savedTheme);
    }, []);

    // Função para alternar entre 'Claro' e 'Escuro'
    const toggleTheme = () => {
        const newTheme = theme === 'Claro' ? 'Escuro' : 'Claro';
        setTheme(newTheme);
        localStorage.setItem('tema', newTheme); // Salva no localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
