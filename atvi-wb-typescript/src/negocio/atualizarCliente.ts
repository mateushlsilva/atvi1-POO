import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Atualizar from "./atualizar";
import ListagemClientes from "./listagemClientes";

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualiza(): void {
        console.log(`\nInício da atualização do cliente`);
        let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
        this.clientes.forEach(cliente =>{
            if (cliente.getCpf.getValor == busca){
                console.log(`Cliente encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                cliente.nome = nome
                cliente.nomeSocial = nomeSocial
                this.clientes.push(cliente)
                console.log(`\nCadastro atualizado :)\n`);
            }
            else{
                console.log(`\n nenhum cliente encontrado com o cpf informado!!! \n`); 
            }
                      
        })
    }
}