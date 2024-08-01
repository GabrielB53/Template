import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const DeletarCardapio = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/home'}
                    title={'Cardapio'}
                    logo={logo}
                    />
                <h2>Conteúdo da página</h2>
                <p>alguma coisa aí</p>
           </div>
        </div>
    )
}

export default DeletarCardapio