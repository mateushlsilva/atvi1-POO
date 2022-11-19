import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaCliente from "./cliente/listaCliente";
import ListaProduto from "./produto/listaProduto";
import ListaServico from "./servico/listaServico";
import TelaCadastro from "./telaCadastro";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços' ,'Cadastros']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        }else if(this.state.tela === 'Produtos'){
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        }else if(this.state.tela === 'Serviços'){
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        } 
        // else {
        //     return (
        //         <>
        //             {barraNavegacao}
        //             <FormularioCadastroCliente tema="purple lighten-4" />
        //         </>
        //     )
        // }
        else {
            return (
                <>
                    {barraNavegacao}
                    <TelaCadastro tema="purple lighten-4" />
                </>
            )
        }

    }
}