import { type } from "@testing-library/user-event/dist/type";
import { Component, ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";


import FormularioCadastroCliente from "../cliente/formularioCadastroCliente";
import ListaCliente from "../cliente/listaCliente";
import ListaProduto from "../produto/listaProduto";
import Roteador from "../roteador";
import ListaServico from "../servico/listaServico";
import TelaCadastro from "../telaCadastro";


type state = {
    tela: string
}

export default class RouteIndex extends Component <{}, state>{
    constructor(props:{}| Readonly <{}>){
        super(props)
        this.state = {
            tela:'TelaCadastro'
        }
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render(){
        return(
            <Routes>
                {/* <Roteador /> */}
                <Route index element={<TelaCadastro/>}/> 
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/listaCliente" element={<ListaCliente/>}/>
                <Route path="/listaProduto" element={<ListaProduto/>}/>
                <Route path="/listaServicos" element={<ListaServico/>}/>
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
                
    
    
            </Routes>
        )
    }
}