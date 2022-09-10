import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizar from "./atualizar";

export default class AtualizarProdutos extends Atualizar{
    private produtos:Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>, entrada: Entrada){
        super()
        this.produtos = produtos
        this.entrada = entrada
    }
    public atualiza(): void {
        console.log(`\nInício da atualização do produto`);
        let busca = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        this.produtos.forEach(produto =>{
            if (produto.nome == busca){
                console.log(`Produto encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do Produto: `)
                produto.nome = nome
                this.produtos.push(produto)
                console.log(`\nCadastro atualizado :)\n`);
            }
            else{
                console.log(`\n nenhum Produto encontrado com o nome informado!!! \n`); 
            }
                      
        })
        
        
    }
}