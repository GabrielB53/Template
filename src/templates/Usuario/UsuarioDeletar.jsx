import {useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import axios from 'axios';
import { useEffect, useState } from "react";

const UsuarioDeletar = () => {
    const navigate = useNavigate();
    const [dados, setDados] = useState([]);

    // Função para receber os dados da API
    function receberDados() {
        axios.get('http://localhost:8080/usuarionovo')
            .then(response => {
                console.log(response.data);
                setDados(response.data);
            })
            .catch(error => console.log(error));
    }

    // Função para deletar um usuário
    const deletarUsuario = (id) => {
        axios.delete(`http://localhost:8080/usuarionovo/${id}`)
            .then(response => {
                console.log(`Usuário ${id} deletado com sucesso!`);
                // Atualiza a lista após deletar
                setDados(dados.filter(usuario => usuario.id !== id));
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        receberDados();
    }, []);

    // Renderiza a tabela com os dados e adiciona o botão de deletar
    const ItensTable = () => dados.map(
        usuario =>
            <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.tipoUsuario}</td>
                <td>
                    {/* Botão de Deletar */}
                    <button
                        className="btn btn-danger"
                        onClick={() => deletarUsuario(usuario.id)}
                    >
                        Deletar
                    </button>
                </td>
            </tr>
    );

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Deletar Usuário'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ações</th> {/* Coluna de ações */}
                                </tr>
                            </thead>
                            <tbody>
                                <ItensTable />
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default UsuarioDeletar;
