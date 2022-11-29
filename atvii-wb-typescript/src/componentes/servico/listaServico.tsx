/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


export default class ListaServico extends Component<any> {
    render() {
        //let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item" style={{color: '#FA652A'}} >Servico 1</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Servico 2</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Servico 3</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Servico 4</a>
            </div>
        )
    }
}