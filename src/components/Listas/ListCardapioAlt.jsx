import {useNavigate } from "react-router-dom"
import React from 'react';


const CardapioLista = ({funcao,opcao}) => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('//')
    }
    return(
    <>
    <div className="table-wrapper ">
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Data</th>
                    <th scope="col">Principal</th>
                    <th scope="col">Acompanhamento</th>
                    <th scope="col">Adicional</th>
                    <th scope="col">{funcao}</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td scope="row">Cardapio 1</td>
                        <td>10/08/2007</td>
                        <td>Arroz e feijão</td>
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

export default CardapioLista