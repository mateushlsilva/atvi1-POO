import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'
import axios from "axios"

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

type table = {
    id: string,
    name: string,
    nome: string,
    cpf: number,
    valorP: number,
    valorS: number,
    preco: number,
    dadosUsP: any[],
    dadosUsS: any[],
    cliConP: any[],
    cliConS: any[],
    cliComPM: any[],
    cliComSM: any[],
    pro: any[],
    ser: any[],
    resultPM: any[],
    resultPF: any[],
    resultSM: any[],
    resultSF: any[]
}

export default class Listagens extends Component<{}, table> {
    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            name: '',
            nome: '',
            cpf: 0,
            valorP: 0,
            valorS: 0,
            preco: 0,
            dadosUsP: [],
            dadosUsS: [],
            cliConP: [],
            cliConS: [],
            cliComPM: [],
            cliComSM: [],
            pro: [],
            ser: [],
            resultPM: [],
            resultPF: [],
            resultSM: [],
            resultSF: []
        }
    }
    componentDidMount() {
        console.log(M);
        M.AutoInit();
        axios.get('http://localhost:3001/usuarioProduto/ClienteConsumoValor').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.valor - a.valor
            })
            this.setState({
                dadosUsP: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/ClienteConsumoValor').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.valor - a.valor
            })
            this.setState({
                dadosUsS: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioProduto/listagemClienteProdutoConsumidoQuantidade').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.consumo - a.consumo
            })
            this.setState({
                cliConP: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioProduto/listagemClienteProdutoConsumidoQuantidade').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return a.consumo - b.consumo
            })
            this.setState({
                cliComPM: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/listagemClienteServicoConsumidoQuantidade').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.consumo - a.consumo
            })
            this.setState({
                cliConS: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/listagemClienteServicoConsumidoQuantidade').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return a.consumo - b.consumo
            })
            this.setState({
                cliComSM: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioProduto/listagemProdutoMaisConsumido').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.consumo - a.consumo
            })
            this.setState({
                pro: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/listagemServicoMaisConsumido').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.consumo - a.consumo
            })
            this.setState({
                ser: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioProduto/generoMasculino').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.quantidade - a.quantidade
            })
            this.setState({
                resultPM: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioProduto/generoFeminino').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.quantidade - a.quantidade
            })
            this.setState({
                resultPF: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/generoMasculino').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.quantidade - a.quantidade
            })
            this.setState({
                resultSM: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/usuarioServico/generoFeminino').then(res => {
            let dados = res.data
            dados.sort(function(a:any,b:any){
                return b.quantidade - a.quantidade
            })
            this.setState({
                resultSF: dados
            })   
        }).catch(err => {
            console.log('fasf');
            
        })
    }
render() {
    return (
        <div>
        <>
            <nav>
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
            <div className='container center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <br></br>
                <div className="row">
                    <div className="">
                        <ul className="tabs-swipe-demo tabs tabsConsumo ">
                            <li className="tab col s3"><a href="#1" style={{color: 'black', fontSize: '10px'}}>Cliente Consumo Valor</a></li>
                            <li className="tab col s2"><a href="#2" style={{color: 'black', fontSize: '10px'}}>Cliente Maior Qtd</a></li>
                            <li className="tab col s3"><a href="#3" style={{color: 'black', fontSize: '10px'}}>Cliente Menor Consumo</a></li>
                            <li className="tab col s2"><a href="#4" style={{color: 'black', fontSize: '10px'}}>Prod/Serv Consumo</a></li>
                            <li className="tab col s2"><a href="#5" style={{color: 'black', fontSize: '10px'}}>Consumo Genero</a></li>
                        </ul>
                    </div>
                    <div id="1" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.dadosUsP.map(itemP => {
                                            return(
                                                <tr>
                                                    <td>{itemP.nome}</td>
                                                    <td>{itemP.cpf}</td>
                                                    <td>R$ {itemP.valor}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.dadosUsS.map(itemP => {
                                                return(
                                                    <tr>
                                                        <td>{itemP.nome}</td>
                                                        <td>{itemP.cpf}</td>
                                                        <td>R$ {itemP.valor}</td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="2" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.cliConP.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.cpf}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.cliConS.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.cpf}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="3" className="col s12">
                    <form>
                        <h5 className='generoConsumoFont'>Produto</h5>
                        <div>
                            <table className='responsive-table centered'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total Consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cliComPM.map(item => {
                                        return(
                                            <tr>
                                                <td>{item.nome}</td>
                                                <td>{item.cpf}</td>
                                                <td>{item.consumo}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h5 className='generoConsumoFont'>Serviço</h5>
                        <div>
                            <table className='responsive-table centered'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total Consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cliComSM.map(item => {
                                        return(
                                            <tr>
                                                <td>{item.nome}</td>
                                                <td>{item.cpf}</td>
                                                <td>{item.consumo}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </form>


                    </div>

                    <div id="4" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.pro.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ser.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="5" className="col s12">
                        <form>
                        <h5 className='generoConsumoFont'>Produtos com consumidos pelo publico Masculino </h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultPM.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviços com consumidos pelo publico Masculino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultSM.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Produtos com consumidos pelo publico Feminino </h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultPF.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviços com consumidos pelo publico Feminino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultSF.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}