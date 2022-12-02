import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import CSS from 'csstype'
import axios from "axios";
import Swal from 'sweetalert2'
import Select from 'react-select'

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
const marginDiv: CSS.Properties ={
    marginBottom: '300px'
}

type table = {
    id: string,
    nome: string,
    preco: number
    cli: any[],
    ser: any[],
    se: any[],
    opcao: any[],
    nomeError: string,
    serError: string
}

export default class FormularioCadastroServico extends Component<{}, table> {
    private cliSelected!: number;
    private serSelected!: number;

    constructor(props: any){
        super(props);
        this.state = {
            id: '',
            nome: '',
            preco: 0,
            cli: [],
            ser: [],
            se: [],
            opcao: [],
            nomeError: '',
            serError: ''
        }
        this.cliChange = this.cliChange.bind(this);
        this.serChange = this.serChange.bind(this);
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        });
        axios.get('http://localhost:3001/users').then(res => {
            let dados = res.data
            this.setState({
                cli: dados
            })   
            this.state.cli.forEach(u => {
                this.state.opcao.push({
                    value: u.id,
                    label: u.name
                })
            })
        }).catch(err => {
            console.log('fasf');
            
        })
        axios.get('http://localhost:3001/servico').then(res => {
            let dados = res.data
            this.setState({
                se: dados
            }) 
            this.state.se.forEach(se => {
                this.state.ser.push({
                    value: se.id,
                    label: se.nome
                })
            })  
        }).catch(err => {
            console.log('fasf');
            
        })
    }

    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }
    cliChange(event: any) {
        let nomeError;
        const target = event.value;
        if (target == -1) return
        this.cliSelected = target;
        if (this.state.nomeError.includes("Select")) {
            this.setState({ nomeError: "" })
        }
        console.log(this.cliSelected);
        
    }
    serChange(event: any) {
        let serError;
        const target = event.value;
        if (target == -1) return
        this.serSelected = target;
        if (this.state.serError.includes("Select")) {
            this.setState({ serError: "" })
        }
        console.log(this.serSelected);
        
    }

    validate = () => {
        let nomeError = "";
        let serError = "";
        if (!this.cliSelected) {
            nomeError = "O cliente é obrigatório!"
        } else {
            nomeError = ""
        }
        this.setState({
           nomeError: nomeError
        });
        if (nomeError) {
            return false
        }
        if (!this.serSelected) {
            serError = "O serviço é obrigatório!"
        } else {
            serError = ""
        }
        this.setState({
           serError: serError
        });
        if (serError) {
            return false
        }
        this.setState({
            nomeError: nomeError, serError: serError
          });
        if (nomeError || serError) {
            return false;
        }
        return true;
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let res = -1
            await axios.post("http://localhost:3001/usuarioServico/cadastrar", {
                userId: this.cliSelected,
                servicoId: this.serSelected
            }).then((response) => {
                console.log('foi');
                
            }).catch((res) => {
                console.log("teste");
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cadastrado Com Sucesso',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(function () {
                 window.location.href = "/Home"
            }, 1500);
        }
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
                <h2 className="center-align">Cadastrar Pedidos</h2>
                <div>
                    <h5>Clientes</h5>
                    <Select
                        onChange={this.cliChange}
                        options={this.state.opcao}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.nomeError}
                    </div>
                </div>
                <div style={marginDiv}>
                    <h5>Serviços</h5>
                    <Select
                        onChange={this.serChange}
                        options={this.state.ser}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.serError}
                    </div>
                </div>
                <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action" onClick={this.postClickButton}>Cadastrar Pedido
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
            </div> 
        </div>
        
        )
    }
}