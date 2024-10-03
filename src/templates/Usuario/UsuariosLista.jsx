import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação
import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import axios from 'axios'; // Importa axios para requisições HTTP
import { useEffect, useState } from "react"; // Importa hooks useEffect e useState

const UsuariosLista = () => {
    
    const [dados, setDados] = useState([]); // Estado para armazenar os dados dos usuários
    const navigate = useNavigate(); // Inicializa a navegação

    // Função para buscar dados do servidor
    function receberDados() {
        axios.get('http://localhost:8080/usuarionovo') // Faz a requisição GET
            .then(response => {
                console.log(response.data); // Log dos dados recebidos
                setDados(response.data); // Atualiza o estado com os dados recebidos
            })
            .catch(error => console.log(error)); // Log de erro em caso de falha
    }

    // Efeito que busca dados ao montar o componente
    useEffect(() => {
        receberDados(); // Chama a função para receber dados
    }, []); // O array vazio indica que isso só deve ser executado uma vez

    // Função que mapeia os dados e gera a tabela
    const ItensTable = () => dados.map(
        usuario => (
            <tr key={usuario.id}> {/* Usa o ID como chave única */}
                <td>{usuario.id}</td> {/*Exibe o ID */}
                <td>{usuario.nome}</td> {/*Exibe o nome do usuário */}
                <td>{usuario.email}</td> {/* Exibe o email do usuário*/}
                <td>{usuario.tipoUsuario}</td> {/*Exibe o tipo de usuário*/}
                <td>
                    <button
                        className="btn btn-danger" // Estilo do botão
                        onClick={() => navigate('/usuarioeditar', { state: { usuario } })} // Navega para a página de edição passando o usuário como estado
                    >
                        Alterar
                    </button>
                </td>
            </tr>
        )
    );

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
                    <div className="table-wrapper"> {/* Wrapper para a tabela */}
                        <table className="table table-striped table-hover"> {/* Tabela com estilos */}
                            <thead>
                                <tr>
                                    <th scope="col">ID</th> {/* Cabeçalho para ID */}
                                    <th scope="col">Nome</th> {/* Cabeçalho para Nome */}
                                    <th scope="col">Email</th> {/* Cabeçalho para Email */}
                                    <th scope="col">Status</th> {/* Cabeçalho para Status */}
                                    <th scope="col">Ações</th> {/* Cabeçalho para Ações */}
                                </tr>
                            </thead>
                            <tbody>
                                <ItensTable /> {/* Renderiza os itens da tabela */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UsuariosLista; // Exporta o componente
