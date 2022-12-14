import { Component } from "react";
import CSS from 'csstype'
import axios from "axios";
import Swal from 'sweetalert2'
import Select from 'react-select'
import Cliente from "../../class/Cliente"

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

const genero = [
    {value: 'M', label: 'Masculino'},
    {value: 'F', label: 'Feminino'}
]

type state = {
    nomeError: string,
    nomeSocialError: string,
    generoError: string,
    cpfError: string,
    rgError: string,
    dddError: string,
    telefoneError: string
}

export default class FormularioCadastroCliente extends Component<any,state> {

    private cliente:Cliente = new Cliente('', '','',0,'',0,0)
    private generoSelected!: string;

    constructor(props: any){
        super(props);
        this.state = {
            nomeError: '',
            nomeSocialError: '',
            generoError: '',
            cpfError: '',
            rgError: '',
            dddError: '',
            telefoneError: ''
        }
        this.nomeChange = this.nomeChange.bind(this);
        this.nomeSocialChange = this.nomeSocialChange.bind(this);
        this.generoChange = this.generoChange.bind(this);
        this.cpfChange = this.cpfChange.bind(this);
        this.rgChange = this.rgChange.bind(this);
        this.dddChange = this.dddChange.bind(this);
        this.telefoneChange = this.telefoneChange.bind(this);
    }
    
    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }
    nomeChange(event: any) {
        let nomeError;
        const target = event.target;
        this.cliente.setNome = target.value;
        if (!this.cliente.getNome) {
            nomeError = "O nome é obrigatório!";
        } else {
            nomeError = ""
        }
        this.setState({ nomeError: nomeError })
    }
    nomeSocialChange(event:any) {
        let nomeSocialError;
        const target = event.target;
        this.cliente.setNomeSocial = target.value;
        if (!this.cliente.getNomeSocial) {
            nomeSocialError = "O Nome Social é obrigatório!";
        } else {
            nomeSocialError = ""
        }
        this.setState({ nomeSocialError: nomeSocialError })
    }
    generoChange(event: any) {
        let generoError;
        const target = event.value;
        this.cliente.setGenero = target;
        if (target == -1) return
        this.generoSelected = target;
        if (this.state.generoError.includes("Select")) {
            this.setState({ generoError: "" })
        }
        console.log(this.generoSelected);
    }
    cpfChange(event:any) {
        let cpfError;
        const target = event.target;
        this.cliente.setCpf = target.value;
        if (!this.cliente.getCpf) {
            cpfError = "O CPF é obrigatório!";
        } else {
            cpfError = ""
        }
        if(this.cliente.getCpf.toString().length != 11){
            cpfError = "O CPF deve ter 11 digitos!"
        }else{
            cpfError = ""
        }
        this.setState({ cpfError: cpfError })
    }
    rgChange(event: any) {
        let rgError;
        const target = event.target;
        this.cliente.setRg = target.value;
        if (!this.cliente.getRg) {
            rgError = "O RG é obrigatório!";
        } else {
            rgError = ""
        }
        this.setState({ rgError: rgError })
    }
    dddChange(event:any) {
        let dddError;
        const target = event.target;
        this.cliente.setDdd = target.value;
        if (!this.cliente.getDdd) {
            dddError = "O DDD é obrigatório!";
        } else {
            dddError = ""
        }
        this.setState({ dddError: dddError })
    }
    telefoneChange(event: any) {
        let telefoneError;
        const target = event.target;
        this.cliente.setTelefone = target.value;
        if (!this.cliente.getTelefone) {
            telefoneError = "O Telefone é obrigatório!";
        } else {
            telefoneError = ""
        }
        this.setState({ telefoneError: telefoneError })
    }

    validate = () => {
        let nomeError = "";
        let nomeSocialError = "";
        let generoError = ""
        let cpfError = ""
        let rgError = ""
        let dddError = ""
        let telefoneError = ""

        if (!this.cliente.getNome) {
            nomeError = "O nome é obrigatório!"
        } else {
            nomeError = ""
        }
        if (!this.cliente.getNomeSocial) {
            nomeSocialError = "O Nome Social é obrigatório!";
        } else {
            nomeSocialError = ""
        }

        if (!this.generoSelected) {
            generoError = "O Gênero é obrigatório!"
        } else {
            generoError = ""
        }
        this.setState({
            generoError: generoError
        });
        if (generoError) {
            return false
        }
        if (!this.cliente.getCpf) {
           cpfError = "O CPF é obrigatório!";
        }else {
            cpfError = ""
        }
        if(this.cliente.getCpf.toString().length != 11){
            cpfError = "O CPF deve ter 11 digitos!"
        }else{
            cpfError = ""
        }
        if (!this.cliente.getRg) {
            rgError = "O RG é obrigatório!"
        } else {
            rgError = ""
        }
        if (!this.cliente.getDdd) {
            dddError = "O DDD é obrigatório!";
        } else {
            dddError = ""
        }
        if (!this.cliente.getTelefone) {
            telefoneError = "O Telefone é obrigatório!";
        } else {
            telefoneError = ""
        }

        this.setState({
           nomeError: nomeError, nomeSocialError: nomeSocialError,generoError: generoError, cpfError: cpfError, rgError: rgError, dddError: dddError, telefoneError: telefoneError
        });
        if (nomeError || nomeSocialError || generoError || cpfError || rgError || dddError || telefoneError ) {
            return false
        }
        return true;
    }

    postClickButton = async (event: any) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let res = -1
            
            await axios.post("http://localhost:3001/users/cadastrar", {
                name: this.cliente.getNome,
                nameSocial: this.cliente.getNomeSocial,
                genero: this.generoSelected,
                cpf: this.cliente.getCpf,
                ddd: this.cliente.getDdd,
                telefone: this.cliente.getTelefone,
                rg: this.cliente.getRg
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
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        let estilo = `${this.props.tema}`
        return (
            <div>
            <>
                <nav className={estilo}>
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
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nome_cliente" type="text" className="validate" onChange={this.nomeChange} />
                                    <label htmlFor="nome_cliente">Nome</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.nomeError}
                                    </div>
                                </div>
                                <div className="input-field col s6">
                                    <input id="nome_social" type="text" className="validate" onChange={this.nomeSocialChange}/>
                                    <label htmlFor="nome_social">Nome social</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.nomeSocialError}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="cpf" type="number" className="validate" onChange={this.cpfChange}/>
                                    <label htmlFor="cpf">CPF</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.cpfError}
                                    </div>
                                </div>
                                <div className="input-field col s6">
                                    <input id="rg" type="text" className="validate" onChange={this.rgChange}/>
                                    <label htmlFor="rg">RG</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.rgError}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Select
                                    onChange={this.generoChange}
                                    options={genero}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.generoError}
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="ddd" type="number" className="validate" onChange={this.dddChange}/>
                                    <label htmlFor="ddd">DDD</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.dddError}
                                    </div>
                                </div>
                                <div className="input-field col s6">
                                    <input id="telefone" type="number" className="validate" onChange={this.telefoneChange}/>
                                    <label htmlFor="telefone">Telefone</label>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.telefoneError}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action" onClick={this.postClickButton}>Cadastrar Cliente
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