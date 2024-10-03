import React from 'react'; // Importa a biblioteca React para criação de componentes
import './App.css'; // Importa o arquivo CSS para estilização da aplicação
import '../../components/Carousel/Style.css'; // Importa o estilo específico para o componente Carousel
import Navbar from '../../components/Menu/Navegacao'; // Importa o componente de navegação
import Caarousel from '../../components/Carousel/Nsei'; // Importa o componente Carousel
import Login from '../../components/Botoes/LoginButton'; // Importa o botão de login
import SectionContent from '../../components/Secoes/SectionContent'; // Importa o conteúdo da seção
import { ThemeProvider } from '../../contexts/ThemeContext'; // Importa o ThemeProvider para gerenciamento de tema

// Define o componente funcional App
function App() {
    const OPTIONS = {}; // Define opções para o Carousel (atualmente vazio)
    const SLIDE_COUNT = 5; // Número total de slides no Carousel
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys()); // Cria um array de índices para os slides

    return (
        <ThemeProvider> {/* Envolve toda a aplicação no ThemeProvider para fornecer contexto de tema */}
            <div className="opa"> {/* Div principal da aplicação */}
                <nav>
                    <Navbar /> {/* Renderiza a barra de navegação */}
                </nav>
                <div className="container mb-5"> {/* Container para o conteúdo da aplicação */}
                    <h1 className="text-center fw-bold m-4">Bem-vindo!</h1> {/* Título da aplicação */}
                    <section className="uepa">
                        <Caarousel slides={SLIDES} options={OPTIONS} /> {/* Renderiza o componente Carousel com slides e opções */}
                    </section>
                </div>
                <main className="container"> {/* Seção principal da aplicação */}
                    <SectionContent /> {/* Renderiza o conteúdo da seção */}
                </main>

                <footer>
                    <Login /> {/* Renderiza o botão de login no rodapé */}
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App; // Exporta o componente App para uso em outros arquivos
