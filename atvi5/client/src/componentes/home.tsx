import 'materialize-css/dist/css/materialize.min.css'
import CSS from 'csstype'
import { Component } from "react";



type props = {
    tema: string
}
const backgroundColor: CSS.Properties = {
    backgroundColor: '#0077ff',
}   
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}

const botaoStyle: CSS.Properties = {
    padding: '10px'
}

class Home extends Component<any, props> {
    render() {
        return (
            <div>
                <>
                    <nav className="">
                    <div className="nav-wrapper" style={backgroundColor} >
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
                    <div className="center-align">
                        <div className="card">
                            <span className="card-title">Cadastros</span>
                            <div className="card-content">
                                <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroCliente">Cadastrar clientes</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroProduto">Cadastrar produtos</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroServico">Cadastrar Servico</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn" style={backgroundColor} href="/formularioCadastroPedido">Cadastrar Pedidos</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        )
    }
}
export default Home;