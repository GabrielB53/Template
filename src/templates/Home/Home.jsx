import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import Caarousel from '../../components/Carousel/Nsei'; // Importa o componente Carousel
import ContentHome from "../../components/Secoes/ContentHome"; // Importa o conteúdo da seção Home
import './Home.css'; // Importa o arquivo CSS para estilização do componente Home

// Define o componente funcional Home
const Home = () => {
    const OPTIONS = {}; // Define opções para o Carousel (atualmente vazio)
    const SLIDE_COUNT = 5; // Número total de slides no Carousel
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys()); // Cria um array de índices para os slides

    return (
        <div className="d-flex opa"> {/* Div principal com classes para layout flexível */}
            <Sidebar /> {/* Renderiza o componente Sidebar */}
            <div className="p-3 w-100"> {/* Div que ocupa toda a largura com padding */}
                <Header 
                    goto={'/'} // Propriedade que define o destino do header
                    title={'Inicial'} // Título do header
                    logo={logo} // Passa o logo como prop
                />
                <div className="caixota mt-3"> {/* Container para o conteúdo principal */}
                    <h2 className="text-center fw-bold m-4">Bem-vindo!</h2> {/* Título de boas-vindas */}
                    <section className='uepa'>
                        <Caarousel slides={SLIDES} options={OPTIONS} /> {/* Renderiza o componente Carousel com slides e opções */}
                    </section>
                    <main className="container"> {/* Seção principal da página */}
                        <ContentHome /> {/* Renderiza o conteúdo da seção Home */}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home; // Exporta o componente Home para uso em outros arquivos
