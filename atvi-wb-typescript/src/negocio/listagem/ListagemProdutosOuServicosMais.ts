import chalk from "chalk"
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";


export default class ListagemProdutosOuServicosMais extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public async listar(): Promise<void> {
        let consumoProduto:any = []
        let consumoServico:any = []
        let consumoP:any = []


        this.clientes.forEach(cliente => {
            let lista = cliente.getProdutosConsumidos;
            for(let n = 0; n <lista.length;n++){
                
                let count = 0;
                let listaProduto = lista.filter(item =>{ return  item.nome == lista[n].nome})
                count = listaProduto.length;
                console.log(consumoProduto.indexOf(lista[n].nome));
                
                if(consumoProduto.indexOf(lista[n].nome) == -1){
                    consumoProduto.push({
                        nome: listaProduto[n].nome,
                        quantidadeProdutos: count
                    })
                }else{
                    consumoProduto.quantidadeProdutos = consumoProduto.quantidadeProdutos + count
                }
                lista = lista.filter(item =>{ return item.nome != listaProduto[n].nome })
                n = 0;


            }
            // cliente.getProdutosConsumidos.forEach(produto => {
            //     let cont = 0
            //     var listaProduto = cliente.getProdutosConsumidos.filter(item =>{ item.nome == produto.nome})
                
                
            //     // let indice = consumoProduto.indexOf(produto)
            //     // consumoProduto.splice(indice, 1)
            //     while(consumoProduto[produto.nome] != ){
            //         cont = consumoProduto[produto.nome] = ( consumoProduto[produto.nome] || 0 ) + 1
            //     }
            //         consumoProduto.push({
            //             nome: produto.nome,
            //             quantidadeProdutos: cont
            //         })

            // })
            
        })
        
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servicos => {
                let cont = consumoServico[servicos.nome] = ( consumoServico[servicos.nome] || 0 ) + 1
                
                consumoServico.push({
                    nome: servicos.nome,
                    quantidadeServicos: cont
                })
                
            })
        })

        consumoProduto.sort(function(n1,n2) {
            return n2.quantidadeProdutos - n1.quantidadeProdutos
        })
        
        // consumoProduto.forEach(prod => {
        //     let indice = consumoProduto.indexOf(prod)
        //     consumoProduto.splice(indice, 1)
        // })

        //consumoProduto = consumoProduto.slice(0, 5)

        consumoServico.sort(function(n1,n2) {
            return n2.quantidadeServicos - n1.quantidadeServicos
        })
        consumoServico = consumoServico.slice(0,5)
        
        let exec = true
        while (exec) {
            let entrada = new Entrada()
            console.log("------------------------------------------------");
            console.log(`Opção de Listagem.`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`); 
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao) {
                case 1:
                    console.log(chalk.greenBright("Listagem dos produtos mais consumidos em quantidade."));

                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));

                    consumoProduto.forEach( prod => {
                        console.log(chalk.blueBright('Nome do Produto: ') + prod.nome );
                        console.log(chalk.blueBright('Quantidade de Produtos Consumidos pelos Clientes: ') + prod.quantidadeProdutos );

                        console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    })
                    exec = false
                    break;
                case 2:
                    console.log(chalk.greenBright("Listagem dos serviços mais consumidos em quantidade."));
                    console.log(chalk.red(`\n---------------------------------------------------------------\n`));
                    consumoServico.forEach( serv => {
                        console.log(chalk.blueBright('Nome do Serviço: ') + serv.nome  );
                        console.log(chalk.blueBright('Quantidade de Serviços Consumidos pelos Clientes: ') + serv.quantidadeServicos );
        
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