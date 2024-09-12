import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from '../../assets/images/Logozinha.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-3 py-2 border-bottom rounded">
                <img src={logo} alt="logo" className="m-1 logo" />
                <span className="fw-bold fst-italic">SGM</span>
            </div>

            <nav className="nav  flex-column">
                <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link>
                <Link className="nav-link" to={'/mensagem'}>Mensagem</Link>
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
                <Link className="nav-link" to={'/grafico'}>Gráfico</Link>
                <Link className="nav-link" to={'/cardapio'}>Cardápio</Link>
                
            </nav>
        </div>
    )
}

export default Sidebar