import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import './Cardapio.css';

const Cardapio = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/home'}
                    title={'Cardapio'}
                    logo={logo}
                    />
                    
                    <section className="m-1 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/addcardapio'} 
                            className="btn btn-lg btn-primary">
                            Adicionar
                        </Link>
                        <Link to={'/alterarcardapio'} 
                            className="btn btn-lg btn-sucess" id="Verde">
                            Alterar
                        </Link>
                        <Link to={'/deletarcardapio'} 
                            className="btn btn-lg btn-warning">
                            Deletar
                        </Link>
                    </div>
                </section>
                
           </div>
        </div>
    )
}

export default Cardapio