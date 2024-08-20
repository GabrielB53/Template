import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'


const UsuariosLista = () => {

    const goTo = () => {
        navigate('/editarusuario')
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuários'}
                    logo={logo}
                />
                <section className="m-0 p-2 shadow-lg container">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Acesso</th>
                                    <th scope="col">Cadastro</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Guilherme Lima de Andrade</td>
                                        <td>Bonitinho@estudante.fieb.edu.br</td>
                                        <td>Estudante</td>
                                        <td>90204</td>
                                        <td>Ativo</td>
                                        <td>
                                            <button className="btn btn-sm btn-warning rounded" onClick={() => goTo()}>
                                                <i className="bi bi-envelope-open"> Abrir</i>
                                            </button>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UsuariosLista