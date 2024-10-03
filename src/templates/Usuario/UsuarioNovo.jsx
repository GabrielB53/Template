import React, { useState, useEffect } from 'react'; // Importa React e hooks
import Header from "../../components/Header/Header"; // Importa o componente Header
import Sidebar from '../../components/Menu/Sidebar'; // Importa o componente Sidebar
import logo from '../../assets/images/home.png'; // Importa a imagem do logo
import { Formik } from 'formik'; // Importa Formik para manipulação de formulários
import * as Yup from 'yup'; // Importa Yup para validação de esquemas
import axios from 'axios'; // Importa axios para requisições HTTP
import Alert from '@mui/material/Alert'; // Importa componente Alert do Material-UI
import CheckIcon from '@mui/icons-material/Check'; // Importa ícone de confirmação

const UsuarioNovo = () => {
    const [dados, setDados] = useState({}); // Estado para armazenar dados do formulário
    const [clicou, setClicou] = useState(false); // Estado para verificar se o botão foi clicado
    const [alerta, setAlerta] = useState({ show: false, message: '', type: '' }); // Estado para alertas

    // Define o esquema de validação usando Yup
    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'), // Valida o nome
        email: Yup.string().email('Email inválido').required('Email é obrigatório'), // Valida o email
        senha: Yup.string().required('Senha é obrigatória'), // Valida a senha
        tipoUsuario: Yup.string().required('Selecione um tipo de usuário') // Valida o tipo de usuário
    });

    // Função para enviar dados ao servidor
    const enviarDados = () => {
        axios.post('http://localhost:8080/usuarionovo', dados) // Faz a requisição POST
            .then(response => {
                console.log(response);
                setAlerta({ show: true, message: 'Dados enviados com sucesso!', type: 'success' }); // Alerta de sucesso
            })
            .catch(error => {
                console.log(error);
                setAlerta({ show: true, message: 'Erro ao enviar dados.', type: 'error' }); // Alerta de erro
            })
            .finally(() => {
                setClicou(false); // Reseta o estado clicou após o envio
            });
    };

    // Efeito para enviar dados quando clicou for true
    useEffect(() => {
        if (clicou) {
            enviarDados(); // Chama a função de enviar dados
        }
    }, [clicou]); // Dependência de clicou

    return (
        <div className="d-flex">
            <Sidebar /> {/* Renderiza o Sidebar */}
            <div className="p-3 w-100"> {/* Container principal com padding e largura 100% */}
                <Header
                    goto={'/usuario'} // Propriedade para redirecionar ao usuário
                    title={'Novo Usuário'} // Título da seção
                    logo={logo} // Imagem do logo
                />
                <section className="m-2 p-2 shadow-lg"> {/* Seção com estilo e sombra */}
                    {alerta.show && ( // Exibe o alerta se necessário
                        <Alert
                            icon={alerta.type === 'success' ? <CheckIcon fontSize="inherit" /> : null} // Ícone baseado no tipo de alerta
                            severity={alerta.type} // Define o tipo de alerta
                            className="alert-position" // Classe para posicionamento do alerta
                            onClose={() => setAlerta({ show: false, message: '', type: '' })} // Fecha o alerta
                        >
                            {alerta.message} {/* Mensagem do alerta */}
                        </Alert>
                    )}
                    <Formik
                        initialValues={{
                            nome: '', // Inicializa o valor do nome
                            email: '', // Inicializa o valor do email
                            senha: '', // Inicializa o valor da senha
                            tipoUsuario: 'Aluno', // Inicializa o tipo de usuário
                        }}
                        validationSchema={validationSchema} // Define o esquema de validação
                        onSubmit={(values, actions) => {
                            setDados(values); // Atualiza os dados com os valores do formulário
                            setClicou(true); // Define clicou como true para acionar o envio
                        }}
                    >
                        {props => ( // Renderiza o formulário
                            <form onSubmit={props.handleSubmit} className="row g-3">
                                <div className="col-md-5">
                                    <input
                                        className="form-control" // Classe de estilo
                                        type="text" // Tipo de entrada
                                        onChange={props.handleChange} // Manipulador de mudança
                                        onBlur={props.handleBlur} // Manipulador de blur
                                        value={props.values.nome} // Valor atual do nome
                                        placeholder="Nome" // Texto de placeholder
                                        name="nome" // Nome do campo
                                    />
                                    {props.touched.nome && props.errors.nome && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.nome}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <input
                                        className="form-control" // Classe de estilo
                                        type="text" // Tipo de entrada
                                        onChange={props.handleChange} // Manipulador de mudança
                                        onBlur={props.handleBlur} // Manipulador de blur
                                        value={props.values.email} // Valor atual do email
                                        name="email" // Nome do campo
                                        placeholder="Emailegal@gmail.com" // Texto de placeholder
                                    />
                                    {props.touched.email && props.errors.email && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.email}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <input
                                        className="form-control" // Classe de estilo
                                        type="password" // Tipo de entrada
                                        onChange={props.handleChange} // Manipulador de mudança
                                        onBlur={props.handleBlur} // Manipulador de blur
                                        value={props.values.senha} // Valor atual da senha
                                        name="senha" // Nome do campo
                                        placeholder="Senha" // Texto de placeholder
                                    />
                                    {props.touched.senha && props.errors.senha && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.senha}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <select
                                        className="form-select" // Classe de estilo
                                        onChange={props.handleChange} // Manipulador de mudança
                                        onBlur={props.handleBlur} // Manipulador de blur
                                        value={props.values.tipoUsuario} // Valor atual do tipo de usuário
                                        name="tipoUsuario" // Nome do campo
                                    >
                                        <option value="">Selecione o tipo</option> {/* Opção padrão */}
                                        <option value="Aluno">Aluno</option> {/* Opção de tipo de usuário */}
                                        <option value="Funcionario">Funcionário</option> {/* Opção de tipo de usuário */}
                                    </select>
                                    {props.touched.tipoUsuario && props.errors.tipoUsuario && ( // Exibe erro de validação se necessário
                                        <div id="feedback">{props.errors.tipoUsuario}</div>
                                    )}
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-secondary">SALVAR</button> {/* Botão de envio */}
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </div>
    );
}

export default UsuarioNovo; // Exporta o componente UsuarioNovo
