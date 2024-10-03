import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação
import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import axios from 'axios'; // Importa a biblioteca axios para requisições HTTP
import { useEffect, useState } from "react"; // Importa hooks do React

const UsuariosLista = () => {
    const [dados, setDados] = useState([]); // Estado para armazenar dados dos usuários
    const [itemApagado, setItemApagado] = useState(false); // Estado para controle de remoção de usuário

    // Função para buscar dados dos usuários
    function receberDados() {
        axios.get('http://localhost:8080/usuarionovo')
            .then(response => {
                console.log(response.data); // Log dos dados recebidos
                setDados(response.data); // Atualiza o estado com os dados recebidos
            })
            .catch(error => console.log(error)); // Trata erro na requisição
    }

    // Função assíncrona para apagar dados de um usuário
    async function apagarDados(usuario) {
        axios.delete('http://localhost:8080/usuarionovo', {
            data: usuario,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                "Content-Type": "application/json;charset=UTF-8"
            },
        })
        .then(response => {
            console.log(response); // Log da resposta da requisição
            console.log('Dados apagados!'); // Mensagem de confirmação
            setItemApagado(true); // Atualiza estado para indicar que um item foi apagado
        })
        .catch(error => console.log(error)); // Trata erro na requisição
    }

    // useEffect para chamar a função receberDados ao montar o componente
    useEffect(() => {
        receberDados();
    }, []);

    // useEffect para buscar dados novamente se um item foi apagado
    useEffect(() => {
        if (itemApagado) {
            receberDados(); // Recarrega dados após a exclusão
        }
        return () => {
            setItemApagado(false); // Reseta estado após a execução
        };
    }, [itemApagado]);

    // Componente que renderiza os itens na tabela
    const ItensTable = () => dados.map(usuario => (
        <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.tipoUsuario}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={async () => {
                        await apagarDados(JSON.stringify(usuario)); // Chama função para apagar dados do usuário
                    }} 
                >
                    Deletar
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="d-flex">
            <Sidebar /> {/* Renderiza o Sidebar */}
            <div className="p-3 w-100"> {/* Container principal com padding e largura 100% */}
                <Header
                    goto={'/usuario'} // Propriedade para redirecionar ao usuário
                    title={'Lista de Usuários'} // Título da seção
                    logo={logo} // Imagem do logo
                />
                <section className="m-2 p-2 shadow-lg"> {/* Seção com estilo e sombra */}
                    <div className="table-wrapper"> {/* Container para tabela */}
                        <table className="table table-striped table-hover"> {/* Tabela estilizada */}
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ItensTable /> {/* Renderiza os itens na tabela */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UsuariosLista; // Exporta o componente UsuariosLista para uso em outras partes da aplicação
