import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import barraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";


export default class TelaCadastro extends Component<any> {
    render() {
        let estiloBotao = `btn waves-effect waves-light `
        return (
            <div style={{backgroundColor: '#AD461E', paddingTop: '334px', paddingBlock: '220px' , textAlign: "center"}}>
                    <h1 style={{color: "white"}}>Cadastros</h1>
                    <div style={{display: 'inline', marginLeft: '40px'}}>
                        <a href="formularioCadastroCliente">
                            <button className={estiloBotao} style={{backgroundColor: '#d45624', paddingLeft: '20px', paddingRight: '25px'}} type="submit" name="action">Cadastro Cliente
                            </button>
                        </a>
                    </div>
                    <div style={{display: 'inline', marginLeft: '40px'}}>
                        <button className={estiloBotao} style={{backgroundColor: '#d45624'}} type="submit" name="action">Cadastro Produto
                        </button>
                    </div>
                    <div style={{display: 'inline', marginLeft: '40px'}}>
                        <button className={estiloBotao} style={{backgroundColor: '#d45624', paddingLeft: '20px', paddingRight: '25px'}} type="submit" name="action">Cadastro Serviço
                        </button>
                    </div>
            </div>
        )
    }
    
}