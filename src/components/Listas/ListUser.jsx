
const UserLista = () => {
    const goTo = () => {
        navigate('/alterarcardapio')
    }
    return(
    <>
    <div className="table-wrapper">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Id</th>
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
                        <td scope="row">1</td>
                        <td>User 1</td>
                        <td>User1@gmail.com</td>
                        <td>Administrador</td>
                        <td>Carne com batatas</td>
                        <td>Salada</td>
                        <td>
                    <button type="button" onClick={() => goTo()}
                            className="btn btn-sm btn-warning">
                    <i className=""></i>{opcao}
                    </button>
                        </td>
                        </tr>
                </tbody>
        </table>
    </div>
    </>
    )
}

export default UserLista