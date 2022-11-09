import chalk from "chalk"
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemConsumoMenos extends Listagem{
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
                quantidadeServicos: servicosConsumidosTamanho
            })
        })

        consumoProduto.sort(function(n1,n2) {
            return n1.quantidadeProdutos - n2.quantidadeProdutos
        })
        consumoProduto = consumoProduto.slice(0,10)

        consumoServico.sort(function(n1,n2) {
            return n1.quantidadeServicos - n2.quantidadeServicos
        })
        consumoServico = consumoServico.slice(0,10)
        
        let exec = true
        while (exec) {
            let entrada = new Entrada()
            console.log("------------------------------------------------");
            console.log(`Opeção de Listagem.`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`); 
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                case 1:
                    console.log(chalk.blue("Listagem dos 10 Clientes que Menos consumiram produtos em quantidade."));

                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));

                    consumoProduto.forEach( cliente => {
                        console.log(chalk.blueBright('Nome do Cliente: ') + cliente.nome );
                        console.log(chalk.blueBright('CPF do Cliente: ') + cliente.cpf );
                        console.log(chalk.blueBright('Quantidade de Produtos Consumidos pelo Cliente: ') + cliente.quantidadeProdutos );

                        console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    })
                    exec = false
                    break;
                case 2:
                    console.log(chalk.blue("Listagem dos 10 Clientes que Menos consumiram serviços em quantidade."));
                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    consumoServico.forEach( cliente => {
                        console.log(chalk.blueBright('Nome do Cliente: ') + cliente.nome  );
                        console.log(chalk.blueBright('CPF do Cliente: ') + cliente.cpf  );
                        console.log(chalk.blueBright('Quantidade de Serviços Consumidos pelo Cliente: ') + cliente.quantidadeServicos );
        
                        console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    })
                    exec = false
                    break
                default:
                    console.log(chalk.red(`Digite Uma Opção Válida!`));
                    exec = true 
            }
            
        }
    }
}