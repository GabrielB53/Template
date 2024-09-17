import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import { Formik } from 'formik';
import axios from 'axios';
import Alert from '@mui/material/Alert'; // Importa o Alert do Material-UI
import CheckIcon from '@mui/icons-material/Check';

const UsuarioNovo = () => {
    const [dados, setDados] = useState({});
    const [clicou, setClicou] = useState(false);
    const [alerta, setAlerta] = useState({ show: false, message: '', type: '' }); // Estado para controlar o alert

    function enviarDados() {
        axios.post('http://localhost:8080/usuarionovo', dados)
            .then(response => {
                console.log(response);
                setAlerta({ show: true, message: 'Dados enviados com sucesso!', type: 'success' });
            })
            .catch(error => {
                console.log(error);
                setAlerta({ show: true, message: 'Erro ao enviar dados.', type: 'error' });
            });
    }

    useEffect(() => {
        if (clicou) {
            enviarDados();
        }
        return () => setClicou(false);
    }, [clicou]);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Novo Usuário'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    {/* Exibe o Alert condicionalmente */}
                    {alerta.show && (
                        <Alert
                            icon={alerta.type === 'success' ? <CheckIcon fontSize="inherit" /> : null}
                            severity={alerta.type}
                            className="alert-position"
                            onClose={() => setAlerta({ show: false, message: '', type: '' })}
                        >
                            {alerta.message}
                        </Alert>
                    )}
                    <Formik
                        initialValues={{
                            nome: '',
                            email: '',
                            destaque: '',
                            statusLog: 'Aluno'
                        }}
                        onSubmit={(values, actions) => {
                            if (values.nome.length > 0 && values.email.length > 0 && values.senha.length > 0) {
                                setTimeout(() => {
                                    setDados({
                                        nome: values.nome,
                                        email: values.email,
                                        senha: values.senha,
                                        statusLog: values.statusLog
                                    });
                                    setClicou(true);
                                }, 1000);
                            } else {
                                // Exibe o alerta de erro em vez de usar o alert padrão
                                setAlerta({ show: true, message: 'Favor preencher todas as informações!', type: 'error' });
                            }
                        }}
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit} className="row g-3">
                                <div className="col-md-5">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.nome}
                                        placeholder="Nome"
                                        name="nome"
                                    />
                                    {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                                </div>
                                <div className="col-md-5">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                        name="email"
                                        placeholder="Emailegal@gmail.com"
                                    />
                                    {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                                </div>
                                <div className="col-md-5">
                                    <input
                                        className="form-control"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.senha}
                                        name="senha"
                                        placeholder="Senha"
                                    />
                                    {props.errors.senha && <div id="feedback">{props.errors.senha}</div>}
                                </div>
                                <div className="col-md-5">
                                    <select
                                        className="form-select"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.statusLog}
                                        name="statusLog"
                                    >
                                        <option>Aluno</option>
                                        <option>Funcionário</option>
                                    </select>
                                    {props.errors.statusLog && <div id="feedback">{props.errors.statusLog}</div>}
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-secondary">SALVAR</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </div>
    );
}

export default UsuarioNovo;
