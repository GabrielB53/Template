import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação
import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import Button from '@mui/material/Button'; // Importa o componente Button do Material-UI
import ButtonGroup from '@mui/material/ButtonGroup'; // Importa o componente ButtonGroup do Material-UI

// Componente Usuario
const Usuario = () => {
    const navigate = useNavigate(); // Inicializa o hook de navegação

    // Função para navegar para a página de criar um novo usuário
    const novoUser = () => {
        navigate('/usuarionovo');  
    };

    // Função para navegar para a lista de usuários
    const listaUser = () => {
        navigate('/usuarioslista');  
    };

    // Função para navegar para a página de deletar um usuário
    const deletarUser = () => {
        navigate('/usuariodeletar');  
    };

    return (
        <div className="d-flex"> {/* Container principal com flexbox */}
            <Sidebar /> {/* Renderiza o Sidebar */}
            <div className="p-3 w-100"> {/* Container principal com padding e largura 100% */}
                <Header 
                    goto={'/home'} // Propriedade para redirecionar ao home
                    title={'Usuário'} // Título da seção
                    logo={logo} // Imagem do logo
                />
                <section className="mt-2 p-2 shadow-lg caixota"> {/* Seção com estilo e sombra */}
                    <div className="d-flex justify-content-around"> {/* Flexbox para disposição */}
                        <ButtonGroup variant="contained" color="secondary" aria-label="Basic button group"> {/* Grupo de botões */}
                            <Button onClick={novoUser}>Novo Usuário</Button> {/* Botão para novo usuário */}
                            <Button onClick={listaUser}>Lista de Usuários</Button> {/* Botão para lista de usuários */}
                            <Button onClick={deletarUser}>Deletar Usuário</Button> {/* Botão para deletar usuário */}
                        </ButtonGroup>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Usuario; // Exporta o componente Usuario para uso em outras partes da aplicação
