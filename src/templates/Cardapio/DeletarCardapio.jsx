
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

import ListaCardapio from '../../components/Listas/ListCardapioAlt'

const DeletarCardapio = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/cardapio'}
                    title={'Deletar cardapio'}
                    logo={logo}
                />
                <section className="p-2 shadow-lg">
                <h2 className="p-2 fw-1">Listas de cardápios</h2>
                <ListaCardapio
                funcao={'Deletar'}
                opcao={'Deletar'}
                />
                </section>
            </div>
        </div>
    )
}

export default DeletarCardapio