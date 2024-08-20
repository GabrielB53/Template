import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from '../../assets/images/system-logo_24_x_24.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <img src={logo} alt="logo" className="m-1" />
                <span className="fw-bold fst-italic">SGM</span>
            </div>

            <nav className="nav flex-column">
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