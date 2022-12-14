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
    pro: any[],
    pr: any[],
    opcao: any[],
    nomeError: string,
    perError: string
}

export default class FormularioCadastroPedido extends Component<{}, table> {
    private cliSelected!: number;
    private proSelected!: number;

    constructor(props: any){
        super(props);
        this.state = {
            id: '',
            nome: '',
            preco: 0,
            cli: [],
            pro: [],
            pr: [],
            opcao: [],
            nomeError: '',
            perError: ''
        }
        this.cliChange = this.cliChange.bind(this);
        this.proChange = this.proChange.bind(this);
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
        axios.get('http://localhost:3001/produto').then(res => {
            let dados = res.data
            this.setState({
                pr: dados
            })
            this.state.pr.forEach(prod => {
                this.state.pro.push({
                    value: prod.id,
                    label: prod.nome
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
    proChange(event: any) {
        let nomeError;
        const target = event.value;
        if (target == -1) return
        this.proSelected = target;
        console.log(this.proSelected);
        if (this.state.perError.includes("Select")) {
            this.setState({ perError: "" })
        }
        console.log(this.proSelected);
    }
    

    validate = () => {
        let nomeError = "";
        let perError = "";
        if (!this.cliSelected) {
            nomeError = "O cliente ?? obrigat??rio!"
        } else {
            nomeError = ""
        }
        this.setState({
           nomeError: nomeError
        });
        if (nomeError) {
            return false
        }
        if (!this.proSelected) {
            perError = "O Produto ?? obrigat??rio!"
        } else {
            perError = ""
        }
        this.setState({
            perError: perError
        });
        if (perError) {
            return false
        }
        this.setState({
            nomeError: nomeError, perError: perError
          });
        if (nomeError || perError) {
            return false;
        }
        return true;
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let res = -1
            await axios.post("http://localhost:3001/usuarioProduto/cadastrar", {
                userId: this.cliSelected,
                produtoId: this.proSelected
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
                    <a style={botaoStyle} href="/servicos">Servi??os</a>
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
                    <h5>Produtos</h5>
                    <Select
                        onChange={this.proChange}
                        options={this.state.pro}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.perError}
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