import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'



const UsuariosLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/usuarioeditar')
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuários'}
                    logo={logo}
                />
                <section className="m-0 p-2 shadow-lg container">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
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
                                        <td>1</td>
                                        <td>Guilherme Lima de Andrade</td>
                                        <td>Bonitinho@estudante.fieb.edu.br</td>
                                        <td>Estudante</td>
                                        <td>90204</td>
                                        <td>Ativo</td>
                                        <td>
                                            <button type="button" className="btn btn-sm btn-warning rounded"  onClick={() => goTo()}>
                                                <i className="bi bi-envelope-open"> Abrir</i>
                                            </button>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UsuariosLista

/*import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../assets/react.svg'

const Listagem = () => {

    const [dados, setDados] = useState([])

    function receberDados(){
        axios.get('http://localhost:8080/produto'
        ).then(response => {
            console.log(response.data)
            setDados(response.data)
        })
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
       receberDados()
    }, [])

    const ItensLista = () => dados.map(
        produto => 
        <li key={produto.id} style={{listStyle: 'none'}}>
            <Card style={{ width: '18rem', borderRadius:8, 
                            margin: 16,  
                            backgroundColor:'pink' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>
                    {produto.descricao}
                </Card.Text>
                <Button variant="primary">Detalhe do Produto</Button>
            </Card.Body>
            </Card>
        </li>
    )

    
    return (
    <div>
        <h1>Cadastrar Produto</h1>
        <Link to={"/cadastro"}>
            CADASTRO
        </Link>

        <ul>
            <ItensLista />
        </ul>

    </div>
    );
}

export default Listagem */