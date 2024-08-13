import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import ListaCardapio from '../../components/Listas/ListCardapioAlt'

const AlterarCardapio = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/cardapio'}
                    title={'Alterar cardapio'}
                    logo={logo}
                    />
                    <section className=" p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-1">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly 
                                />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome"  
                               />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAdicional" className="form-label">Adicional</label>
                            <input type="text" className="form-control" id="inputAdicional"  
                                />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAcompanhamento" className="form-label">Acompanhamento</label>
                            <input type="text" className="form-control" id="inputAcompanhamento"  
                                />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAdicional" className="form-label">Adicional</label>
                            <input type="text" className="form-control" id="inputAdicional"  
                                />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputData" className="form-label">Data</label>
                            <input type="date" className="form-control" id="inputData" readOnly  
                                />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly  
                          />
                        </div>
                        
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                        </div>
                    </form>
                </section>
                <section className="p-2 shadow-lg">
                <h2 className="p-2 fw-1">Listas de cardápios</h2>
                <ListaCardapio
                funcao={'Alterar'}
                opcao={'Alterar'}
                />
                </section>
                
           </div>
        </div>
    )
}

export default AlterarCardapio