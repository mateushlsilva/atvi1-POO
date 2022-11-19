import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import barraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";


type props = {
    tema: string
}


export default class TelaCadastro extends Component<props> {
    render() {
        let estiloBotao = `btn waves-effect waves-light `
        //let estilo = `collection-item active ${this.props.tema}`
        return (
            // <div className="collection">
            //     <a className="collection-item" style={{color: '#FA652A'}} >Servico 1</a>
            //     <a className="collection-item" style={{color: '#FA652A'}}>Servico 2</a>
            //     <a className="collection-item" style={{color: '#FA652A'}}>Servico 3</a>
            //     <a className="collection-item" style={{color: '#FA652A'}}>Servico 4</a>
            // </div>
            <div style={{backgroundColor: '#AD461E', paddingTop: '334px', paddingBlock: '170px' , textAlign: "center"}}>
                    <h1 style={{color: "white"}}>Cadastros</h1>
                    <div style={{display: 'inline', marginLeft: '40px'}}>
                        <a href="/cliente/formularioCadastroCliente">
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
    // if ('/cliente/formularioCadastroCliente.tsx') {
    //     return (
    //         <>
    //             {barraNavegacao}
    //             <FormularioCadastroCliente tema="purple lighten-4" />
    //         </>
    //     )
    // }
    
}