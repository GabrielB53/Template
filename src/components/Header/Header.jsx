import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação entre páginas
import Button from '@mui/material/Button'; // Importa o componente Button da biblioteca Material UI
import HomeIcon from '@mui/icons-material/Home'; // Importa o ícone de casa da biblioteca Material UI
import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import Avatar from '@mui/material/Avatar'; // Importa o componente Avatar da biblioteca Material UI
import Box from '@mui/material/Box'; // Importa o componente Box da biblioteca Material UI

// Define o componente funcional Header
const Header = ({ goto, title, logo }) => {
    const navigate = useNavigate(); // Inicializa o hook de navegação

    // Função para navegar para a rota especificada
    const vaipara = () => {
        navigate(goto); 
    };

    const [theme, setTheme] = useState('Claro'); // Estado para armazenar o tema atual

    // useEffect para carregar o tema salvo no localStorage quando o componente é montado
    useEffect(() => {
        const savedTheme = localStorage.getItem('tema') || 'Claro'; // Recupera o tema salvo ou usa 'Claro' como padrão
        setTheme(savedTheme); // Atualiza o estado com o tema salvo
    }, []);
  
    // Define a cor do botão e do Avatar com base no tema
    const buttonColor = theme === 'Claro' ? 'primary' : 'error'; // Cor do botão
    const homeBgColor = theme === 'Claro' ? 'primary.main' : 'error.main'; // Cor de fundo do Avatar
    
    return (
        <div className="
            d-flex justify-content-between align-content-center 
            p-3 border-bottom shadow rounded caixota"> {/* Estrutura do cabeçalho */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Button 
                    onClick={vaipara} // Chama a função de navegação ao clicar
                    variant="contained" // Estilo do botão
                    color={buttonColor} // Cor do botão com base no tema
                    className="fw-medium shadow">
                    Voltar
                </Button>
                <span className="fw-bold h2">{title}</span> {/* Título do cabeçalho */}
                <Avatar sx={{ bgcolor: homeBgColor }}> {/* Avatar com cor de fundo baseada no tema */}
                    <HomeIcon /> {/* Ícone de casa */}
                </Avatar>
            </Box>
        </div>
    );
};

export default Header; // Exporta o componente Header para uso em outros arquivos
