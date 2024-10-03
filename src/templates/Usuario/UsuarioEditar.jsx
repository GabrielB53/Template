import React, { useEffect, useState } from "react"; // Importa React e hooks
import { useLocation, useNavigate } from "react-router-dom"; // Importa hooks para navegação
import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import { Formik } from "formik"; // Importa Formik para manipulação de formulários
import * as Yup from 'yup'; // Importa Yup para validação de esquemas
import axios from "axios"; // Importa axios para requisições HTTP
import Alert from '@mui/material/Alert'; // Importa componente Alert do Material-UI
import CheckIcon from '@mui/icons-material/Check'; // Importa ícone de confirmação

const UsuarioEditar = () => {
    const { state } = useLocation(); // Obtém o estado da localização atual
    const usuario = state.usuario; // Extrai os dados do usuário do estado
    const navigate = useNavigate(); // Inicializa o hook de navegação
    const [alerta, setAlerta] = useState({ show: false, message: '', type: '' }); // Estado para alertas

    // Define o esquema de validação usando Yup
    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'), // Valida o nome
        email: Yup.string().email('Email inválido').required('Email é obrigatório'), // Valida o email
        senha: Yup.string(), // Senha é opcional
        tipoUsuario: Yup.string().required('Selecione um tipo de usuário') // Valida o tipo de usuário
    });

    // Função chamada ao submeter o formulário
    const handleFormSubmit = (values) => {
        axios.put(`http://localhost:8080/usuarionovo/${usuario.id}`, values) // Faz a requisição PUT para atualizar o usuário
            .then(response => {
                setAlerta({ show: true, message: 'Usuário atualizado com sucesso!', type: 'success' }); // Exibe alerta de sucesso
                setTimeout(() => {
                    navigate('/usuarioslista'); // Redireciona após 2 segundos
                }, 2000);
            })
            .catch(error => {
                setAlerta({ show: true, message: 'Erro ao atualizar usuário.', type: 'error' }); // Exibe alerta de erro
            });
    };

    return (
        <div className="d-flex">
            <Sidebar /> {/* Renderiza o Sidebar */}
            <div className="p-3 w-100"> {/* Container principal com padding e largura 100% */}
                <Header
                    goto={'/usuario'} // Propriedade para redirecionar ao usuário
                    title={'Editar Usuário'} // Título da seção
                    logo={logo} // Imagem do logo
                />
                <section className="m-2 p-2 shadow-lg"> {/* Seção com estilo e sombra */}
                    {alerta.show && ( // Exibe o alerta se necessário
                        <Alert
                            icon={alerta.type === 'success' ? <CheckIcon fontSize="inherit" /> : null} // Ícone baseado no tipo de alerta
                            severity={alerta.type} // Define o tipo de alerta
                            sx={{
                                position: 'absolute', // Estiliza o alerta
                                bottom: 16,
                                right: 16,
                                zIndex: 1000,
                            }}
                            onClose={() => setAlerta({ show: false, message: '', type: '' })} // Fecha o alerta
                        >
                            {alerta.message} {/* Mensagem do alerta */}
                        </Alert>
                    )}
                    <Formik
                        initialValues={usuario} // Usa os dados do usuário como initialValues
                        validationSchema={validationSchema} // Define o esquema de validação
                        onSubmit={handleFormSubmit} // Define a função ao submeter
                    >
                        {props => ( // Renderiza o formulário
                            <form onSubmit={props.handleSubmit} className="row g-3">
                                <div className="col-md-2">
                                    <label htmlFor="inputID" className="form-label">ID</label>
                                    <input type="text" className="form-control" id="inputID" readOnly 
                                        value={usuario.id} /> {/* ID do usuário é apenas leitura */}
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputNome"
                                        name="nome"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.nome}
                                    />
                                    {props.touched.nome && props.errors.nome && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.nome}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                    />
                                    {props.touched.email && props.errors.email && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.email}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputSenha" className="form-label">Senha (Deixe em branco para não alterar)</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputSenha"
                                        name="senha"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.senha}
                                    />
                                    {props.touched.senha && props.errors.senha && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.senha}</div>
                                    )}
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                                    <select
                                        id="inputAcesso"
                                        className="form-select"
                                        name="tipoUsuario"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.tipoUsuario}
                                    >
                                        <option value="">Selecione o tipo</option> {/* Opção padrão */}
                                        <option value="Aluno">Aluno</option> {/* Opção de tipo de usuário */}
                                        <option value="Funcionario">Funcionário</option> {/* Opção de tipo de usuário */}
                                    </select>
                                    {props.touched.tipoUsuario && props.errors.tipoUsuario && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.tipoUsuario}</div>
                                    )}
                                </div>

                                <div className="col-12 d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary"> {/* Botão de envio */}
                                        Gravar Alterações
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </div>
    );
}

export default UsuarioEditar; // Exporta o componente UsuarioEditar
