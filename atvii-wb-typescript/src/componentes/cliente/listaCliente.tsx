/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


export default class ListaCliente extends Component<any> {
    render() {
        //let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item" style={{color: '#FA652A'}} >Cliente 1</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Cliente 2</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Cliente 3</a>
                <a className="collection-item" style={{color: '#FA652A'}}>Cliente 4</a>
            </div>
        )
    }
}