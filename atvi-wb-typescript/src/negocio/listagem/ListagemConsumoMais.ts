import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemConsumoMais extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public async listar(): Promise<void> {
        let consumoProduto:any = []
        let consumoServico:any = []

        this.clientes.forEach(cliente => {
            let produtosConsumidosTamanho = cliente.getProdutosConsumidos.length
            consumoProduto.push({
                nome: cliente.nome, 
                cpf: cliente.getCpf.getValor,
                quantidadeProdutos: produtosConsumidosTamanho
            })
            let servicosConsumidosTamanho = cliente.getServicosConsumidos.length
            consumoServico.push({
                nome: cliente.nome, 
                cpf: cliente.getCpf.getValor,
                quantidadeProdutos: servicosConsumidosTamanho
            })
        })

        consumoProduto.sort(function(n1,n2) {
            return n2.quantidadeProdutos - n1.quantidadeProdutos
        })
        consumoProduto = consumoProduto.slice(0,10)

        consumoServico.sort(function(n1,n2) {
            return n2.quantidadeProdutos - n1.quantidadeProdutos
        })
        consumoServico = consumoServico.slice(0,10)

        console.log("Listagem dos 10 Clientes que MAIS consumiram produtos em quantidade.");

        console.log(`\n--------------------------------------\n`);

        consumoProduto.forEach( cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}` );
            console.log(`CPF do Cliente: ${cliente.cpf}` );
            console.log(`Quantidade de produtos Consumido pelo Cliente: ${cliente.quantidadeProdutos}` );

            console.log(`\n--------------------------------------\n`);
        })

        console.log("Listagem dos 10 Clientes que MAIS consumiram serviços em quantidade.");

        console.log(`\n--------------------------------------\n`);

        consumoServico.forEach( cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}` );
            console.log(`CPF do Cliente: ${cliente.cpf}` );
            console.log(`Quantidade de produtos Consumido pelo Cliente: ${cliente.quantidadeProdutos}` );

            console.log(`\n--------------------------------------\n`);
        })
        
    }
}