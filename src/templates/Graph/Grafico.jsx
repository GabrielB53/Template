import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import Comp from '../../components/Grafico/Graficos'; // Importa o componente de gráficos
import './Grafico.css'; // Importa o arquivo de estilos CSS para este componente

// Componente principal para exibição do gráfico
const Grafico = () => {
    return (
        <div className="d-flex"> {/* Usando flexbox para layout */}
            <Sidebar /> {/* Renderiza a barra lateral de navegação */}
            <div className="p-3 w-100"> {/* Contêiner principal com padding e largura total */}
                <Header 
                    goto={'/home'} // Rota para a página inicial
                    title={'Gráfico'} // Título do cabeçalho
                    logo={logo} // Passa o logo para o cabeçalho
                />
                <section className="caixota mt-2 mb-2"> {/* Seção para descrição do gráfico */}
                    <h2>Análise de Dados Semanais</h2> {/* Título da seção */}
                    <p>
                        Nesta seção, você pode visualizar as tendências de uso/consumo em diferentes turnos ao longo da semana. 
                        Este gráfico ajuda a identificar padrões que podem ser usados para otimizar recursos, ajustar 
                        planejamentos e garantir que a gestão esteja alinhada com as necessidades reais.
                    </p>
                </section>
                <div id="ContainerGraph" className="caixota"> {/* Contêiner para o gráfico */}
                    <Comp /> {/* Renderiza o componente de gráficos */}
                </div>
            </div>
        </div>
    );
};

export default Grafico; // Exporta o componente Grafico para ser utilizado em outras partes da aplicação
