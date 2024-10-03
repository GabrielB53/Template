import { Link } from "react-router-dom"; // Importa o componente Link para navegação entre páginas
import './Sidebar.css'; // Importa o arquivo CSS para estilização do componente Sidebar
import logo from '../../assets/images/Logozinha.png'; // Importa a imagem do logo

// Define o componente funcional Sidebar
const Sidebar = () => {
    return (
        <div className="sidebar"> {/* Div principal que representa a barra lateral */}
            <div className="d-flex justify-content-around align-items-center px-3 py-2 border-bottom rounded"> {/* Cabeçalho da sidebar */}
                <img src={logo} alt="logo" className="m-1 logo" /> {/* Logo da aplicação */}
                <span className="fw-bold fst-italic">SGM</span> {/* Nome da aplicação estilizado */}
            </div>

            <nav className="nav flex-column"> {/* Navegação vertical */}
                {/* Links para diferentes páginas da aplicação */}
                <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link> {/* Link para a página de Dashboard */}
                <Link className="nav-link" to={'/mensagem'}>Mensagem</Link> {/* Link para a página de Mensagem */}
                <Link className="nav-link" to={'/usuario'}>Usuário</Link> {/* Link para a página de Usuário */}
                <Link className="nav-link" to={'/grafico'}>Gráfico</Link> {/* Link para a página de Gráfico */}
            </nav>
        </div>
    );
}

export default Sidebar; // Exporta o componente Sidebar para uso em outros arquivos
