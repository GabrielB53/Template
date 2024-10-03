import React, { useState } from 'react'; // Importa React e useState para gerenciamento de estado
import Container from 'react-bootstrap/Container'; // Importa o componente Container do React Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importa o componente Nav do React Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa o componente Navbar do React Bootstrap
import ThemeToggleButton from '../Botoes/ToggleTheme'; // Importa o botão de alternância de tema personalizado
import './Navegar.css'; // Importa o arquivo CSS para estilização do componente

// Define o componente funcional BasicExample
function BasicExample() {
    const [theme, setTheme] = useState('Claro'); // Estado que armazena o tema atual, inicializado como 'Claro'

    // Função para atualizar o estado do tema
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme); // Atualiza o estado com o novo tema recebido
    };

    // Retorna a estrutura da barra de navegação
    return (
        <Navbar expand="lg" data-bs-theme={theme === 'Claro' ? 'light' : 'dark'}> {/* Define o tema da navbar com base no estado */}
            <Container> {/* Contêiner que centraliza o conteúdo da navbar */}
                <Navbar.Brand href="#home"><p>Nome Projeto</p></Navbar.Brand> {/* Marca com o nome do projeto */}
                <Nav className="ms-auto"> {/* Componente de navegação, alinhado à direita */}
                    <ThemeToggleButton onThemeChange={handleThemeChange} /> {/* Botão para alternar o tema, passando a função de callback */}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BasicExample; // Exporta o componente para uso em outros arquivos
