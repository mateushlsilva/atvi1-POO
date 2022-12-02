import { Component } from "react";
import CSS from 'csstype'
import axios from 'axios';
import Swal from 'sweetalert2'
import Servico from "../../class/ServicoClass";
import Select from 'react-select'
import AsyncSelect from "react-select/async";

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
    opcao: any[]
}

  

export default class Teste extends Component<any,state> {
    
    private produto:Servico = new Servico('', 0)

    constructor(props: any){
        super(props);
        this.state = {
            nomeError: '',
            valorError: '',
            dados: [],
            opcao: []
        }
        this.nomeChange = this.nomeChange.bind(this);
        this.valorChange = this.valorChange.bind(this);
    }
    
    componentDidMount(): void {
        axios.get("http://localhost:3001/servico").then((res) =>{
            let data = res.data
            this.setState({
                dados: data
            })
            this.state.dados.forEach(u => {
                this.state.opcao.push({
                    value: u.id,
                    label: u.nome
                })
            })
        })
    }
    formatGroupLabel = (data:any) => (
        <div>
          <span>{data.label}</span>
          <span >{data.options.length}</span>
        </div>
      );
    // {this.state.dados.map((user) => {})}
    
    // options = [
    //     this.state.dados.map(user => {
    //         { value: user.id, label: user.nome }
    //     })
    //     // { value: 'chocolate', label: 'Chocolate' },
    //     // { value: 'strawberry', label: 'Strawberry' },
    //     // { value: 'vanilla', label: 'Vanilla' }
    //   ]
      
    // MyComponent = () => (
    //     <Select options={this.options} />
    // )
    eventoFormulario = (evento: any) => {
        evento.preventDefault()
    }
    nomeChange(event: any) {
        let nomeError;
        const target = event.target;
        this.produto.setNome = target.value;
        if (!this.produto.getNome) {
            nomeError = "O nome é obrigatório!";
        } else {
            nomeError = ""
        }
        this.setState({ nomeError: nomeError })
    }
    valorChange(event:any) {
        let valorError;
        const target = event.target;
        this.produto.setValor = target.value;
        if (!this.produto.getValor) {
            valorError = "O preço é obrigatório!";
        } else {
            valorError = ""
        }
        this.setState({ valorError: valorError })
    }


    validate = () => {
        let nomeError = "";
        let valorError = "";

        if (!this.produto.getNome) {
            nomeError = "O nome é obrigatório!"
        } else {
            nomeError = ""
        }
        if (!this.produto.getValor) {
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
            await axios.post("http://localhost:3001/servico/cadastrar", {
                nome: this.produto.getNome,
                preco: Number(this.produto.getValor.toString().replace(',', '.')).toFixed(2)
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
            <div className="row">
                <form className="col s12">
                        {/* <select className="browser-default">
                            <option value="" disabled selected>Choose your option</option>
                            {this.state.dados.map((user) => {
                                <option key={user.id} value={user.id}>{user.nome}</option>
                            })}
                        </select>  */}
                            
                            <Select
                                options={this.state.opcao}
                            />
                            {/* <Select options={options} /> */}
                        
                            {/* <AsyncSelect
                                value={this.state.dados}
                                placeholder="Admin Name"
                                // onChange={(e) => {
                                // this.onSearchChange(e);
                                // }}
                                defaultOptions={true}
                            /> */}
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_servico" type="text" className="validate" onChange={this.nomeChange} />
                            <label htmlFor="nome_servico">Nome</label>
                            <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.nomeError}
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <input id="valor_servico" type="text" className="validate" onChange={this.valorChange} />
                            <label htmlFor="valor_servico">Preço</label>
                            <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.valorError}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action" onClick={this.postClickButton}>Cadastrar Serviço
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