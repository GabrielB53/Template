import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'


const AddCardapio = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/cardapio'}
                    title={'Adicionar Cardapio'}
                    logo={logo}
                    />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputData" className="form-label">Data</label>
                            <input type="date" className="form-control" id="inputData" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPrincipal" className="form-label">Principal</label>
                            <input type="text" className="form-control" id="inputPrincipal" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAcompanhamento" className="form-label">Acompanhamento</label>
                            <input type="text" className="form-control" id="inputAcompanhamento" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAdicional" className="form-label">Adicional</label>
                            <input type="text" className="form-control" id="inputPrincipal" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
          
           </div>
        </div>
    )
}

export default AddCardapio