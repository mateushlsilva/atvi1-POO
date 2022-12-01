import { Component } from "react";
import CSS from 'csstype'
import editar from '../Icons/editar.png'
import excluir from '../Icons/excluir.png'
import axios from "axios"

type props = {
    tema: string
}
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
const ImagemStyle: CSS.Properties = {
    padding: '5px',
    maxHeight: '30px',
    maxWidth: '30px'

}

type table = {
    id: string,
    name: string,
    nome: string,
    cpf: number,
    valor: number,
    prod: any[],
    serv: any[]
}

export default class Pedidos extends Component<{}, table> {
    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            name: '',
            nome: '',
            cpf: 0,
            valor: 0,
            prod: [],
            serv: []
        }
    }
    componentDidMount(): void {
        axios.get('http://localhost:3001/usuarioProduto/listagemProdutoPedidos').then(res => {
            let dados = res.data
            this.setState({
                prod: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/listagemServicoPedidos').then(res => {
            let dados = res.data
            this.setState({
                serv: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
    }
    
    render() {
        return (
            <div>
            <>
                <nav className="">
                <div  style={backgroundColor}  className="nav-wrapper">
                    <a className="brand-logo center" style={fontStyle}>WB</a>
                    <a style={botaoStyle} href="/Home">Home</a>
                    <a style={botaoStyle} href="/clientes">Cliente</a>
                    <a style={botaoStyle} href="/produtos">Produto</a>
                    <a style={botaoStyle} href="/pedidos">Pedidos</a>
                    <a style={botaoStyle} href="/servicos">Serviços</a>
                    <a style={botaoStyle} href="/Listagens">Listagens</a>
                </div>
                </nav>
            </>
            <br/>
            <div className='container'>
            <h5 className="center-align">Pedido Produto</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.prod.map(item => {
                        return(
                            <tr>
                                <td>{item.cliente}</td>
                                <td>{item.cpf}</td>
                                <td>{item.produto}</td>
                                <td>{item.valor}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br></br>
            <h5 className="center-align">Pedido Serviço</h5>
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>Serviço</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.serv.map(item => {
                        return(
                            <tr>
                                <td>{item.cliente}</td>
                                <td>{item.cpf}</td>
                                <td>{item.produto}</td>
                                <td>{item.valor}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            </div>
        </div>
        )
    }
}