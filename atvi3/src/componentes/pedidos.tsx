import { Component } from "react";
import CSS from 'csstype'

const backgroundColor: CSS.Properties = {
    backgroundColor: '#0077ff',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}

const Pedidos = () => {
        return (
            <div>
            <>
                <nav className="">
                <div  style={backgroundColor}  className="nav-wrapper">
                    <a className="brand-logo center" style={fontStyle}>WB</a>
                    <a style={botaoStyle} href="/Home">Home</a>
                    <a style={botaoStyle} href="/listaCliente">Cliente</a>
                    <a style={botaoStyle} href="/listaProduto">Produto</a>
                    <a style={botaoStyle} href="/listaPedidos">Pedidos</a>
                    <a style={botaoStyle} href="/listaServicos">Serviços</a>
                    <a style={botaoStyle} href="/Listagens">Listagens</a>
                </div>
                </nav>
            </>
            <br/>
            <div className='container'>
            <h5 className="center-align">Cliente</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nome Social</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h5 className="center-align">Produto</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Id_Pedido</th>
                        <th>Id_Produto</th>
                        <th>Nome do Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <h5 className="center-align">Serviço</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Id_Servico</th>
                        <th>Id_Produto</th>
                        <th>Nome do Serviço</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>

            </div>
        </div>
        )
    }
export default Pedidos