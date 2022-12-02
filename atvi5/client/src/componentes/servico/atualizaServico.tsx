import { Component } from "react";
import CSS from 'csstype'
import axios from 'axios';
import Swal from 'sweetalert2'
import Servico from "../../class/ServicoClass";

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

type state = {
    nomeError: string,
    valorError: string,
    dados: any[],
    servico: Servico
}


export default class FormularioAtulizaServico extends Component<any, state> {
    constructor(props: any){
        super(props);
        this.state = {
            nomeError: '',
            valorError: '',
            dados: [],
            servico: new Servico('', 0)
        }
        this.nomeChange = this.nomeChange.bind(this);
        this.valorChange = this.valorChange.bind(this);
    }
    
    componentDidMount(): void {
        axios.get('http://localhost:3001/servico/' + this.props.taskId).then((response) => {
            let dadosBD = response.data
            this.setState({
                dados: dadosBD,
                servico: new Servico(dadosBD.nome, dadosBD.preco)
            }) 
        }).catch((res) => {
            console.log("teste");
        })
    }

    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }
    nomeChange(event: any) {
        let nomeError;
        const target = event.target;
        this.state.servico.setNome = target.value;
        if (!this.state.servico.getNome) {
            nomeError = "O nome é obrigatório!";
        } else {
            nomeError = ""
        }
        this.setState({ nomeError: nomeError })
    }
    valorChange(event:any) {
        let valorError;
        const target = event.target;
        this.state.servico.setValor = target.value;
        if (!this.state.servico.getValor) {
            valorError = "O preço é obrigatório!";
        } else {
            valorError = ""
        }
        this.setState({ valorError: valorError })
    }


    validate = () => {
        let nomeError = "";
        let valorError = "";

        if (!this.state.servico.getNome) {
            nomeError = "O nome é obrigatório!"
        } else {
            nomeError = ""
        }
        if (!this.state.servico.getValor) {
            valorError = "O preço é obrigatório!";
        } else {
            valorError = ""
        }

        this.setState({
           nomeError: nomeError, valorError: valorError
        });
        if (nomeError || valorError ) {
            return false
        }
        return true;
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let res = -1
            await axios.put("http://localhost:3001/servico/modificar/" + this.props.taskId, {
                nome: this.state.servico.getNome,
                preco: Number(this.state.servico.getValor.toString().replace(',', '.')).toFixed(2)
            }).then((response) => {
                console.log('foi');
                
            }).catch((res) => {
                console.log("teste");
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Atualização Completa',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function () {
                 window.location.href = "/servicos"
            }, 1500);
        }
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
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
            <div className="row">
                <form className="col s12" onSubmit={this.eventoFormulario} id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <h6>Nome</h6>
                            <input id="nome_produto" type="text" onChange={this.nomeChange}  className="validate" value={this.state.servico.getNome} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nomeError}
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <h6>Preço</h6>
                            <input id="valor" type="number" onChange={this.valorChange}  className="validate" value={this.state.servico.getValor} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.valorError}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action" onClick={this.postClickButton}>Atualização Serviço
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        )
    }
}