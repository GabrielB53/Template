import React, { createContext, useState, useEffect } from 'react';

// Criação do contexto para o tema
export const ThemeContext = createContext();

// Componente provedor do tema
export const ThemeProvider = ({ children }) => {
    // Estado para armazenar o tema atual, inicializando com 'Claro'
    const [theme, setTheme] = useState('Claro');

    // Efeito colateral para carregar o tema salvo no localStorage ao montar o componente
    useEffect(() => {
        // Obtém o tema salvo ou define como 'Claro' se não houver nenhum
        const savedTheme = localStorage.getItem('tema') || 'Claro';
        setTheme(savedTheme); // Atualiza o estado com o tema salvo
    }, []); // O array vazio indica que isso roda apenas uma vez, após a montagem

    // Função para alternar entre 'Claro' e 'Escuro'
    const toggleTheme = () => {
        // Define o novo tema com base no tema atual
        const newTheme = theme === 'Claro' ? 'Escuro' : 'Claro';
        setTheme(newTheme); // Atualiza o estado com o novo tema
        localStorage.setItem('tema', newTheme); // Salva o novo tema no localStorage
    };

    return (
        // Provedor do contexto que disponibiliza o tema e a função de alternância
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* Renderiza os componentes filhos que podem acessar o contexto */}
        </ThemeContext.Provider>
    );
};
