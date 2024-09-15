import React, {useState, useEffect} from 'react';
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { Formik } from 'formik';
import axios from 'axios';

const UsuarioNovo = () => {
    const [dados, setDados] = useState({})
    const [clicou, setClicou] = useState(false)

    function enviarDados(){
        axios.post('http://localhost:8080/usuarionovo', 
            dados
        ).then(response => console.log(response))
        .then(dados => alert('Dados enviados com sucesso'))
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
       clicou ? enviarDados() : console.log('app no ar')
       return (()=>setClicou(false))
    }, [clicou])
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
            <Formik
            initialValues={{
                nome: '',
                email: '',
                destaque: '',
                statusLog: 'Aluno'
            }}
            onSubmit={(values, actions) => {

                if(values.nome.length > 0){
                        setTimeout(() => {
                        setDados({
                            nome: values.nome,
                            email: values.email,
                            senha: values.senha,
                            statusLog: values.statusLog
                        })
                        setClicou(true)
                        // alert(JSON.stringify(values, null, 2));
                        // console.log(JSON.stringify(values, null, 2));
                        // actions.setSubmitting(false);
                    }, 1000);
                } else {
                    alert('Favor preencher informações!')
                }
                
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit} className="row g-3">
                    <div  className="col-md-5">
                        <label htmlFor="nome"></label>
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
                            placeholder="0"
                        />
                        {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                    </div >
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
                    <button type="submit" className="btn btn-primary">SALVAR</button>
                    </div>
                </form>
            )}
        </Formik>
                </section>
            </div>
        </div>
    )
}

export default UsuarioNovo