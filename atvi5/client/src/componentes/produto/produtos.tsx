import { Component } from "react";
import CSS from 'csstype'
import editar from '../../Icons/editar.png'
import excluir from '../../Icons/excluir.png'
import { Link } from "react-router-dom";
import axios from "axios";

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
    nome: string,
    preco: number
    result: any[]
}

export default class Produtos extends Component<{}, table> {
    
    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            nome: '',
            preco: 0,
            result: []
        }
    }
    componentDidMount(): void {
        axios.get('http://localhost:3001/produto').then(res => {
            let dados = res.data
            this.setState({
                result: dados
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
            <table className='highlight centered'>
                <thead>
                    <tr>
                        <th>Nome Produto</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.result.map((item) => {
                        return(
                        <tr key={item.id}>
                            <td>{ item.nome }</td>
                            <td>{ item.preco }</td>
                            <td>
                                <Link to="/formularioCadastroProduto">
                                    <img src={editar}  style={ImagemStyle}  />
                                </Link>
                                <img src={excluir} style={ImagemStyle}/>
                            </td>
                        </tr>
                    )})}
                </tbody>
      </table>

            </div>
        </div>
        )
    }
}