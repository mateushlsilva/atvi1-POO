import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Excluir from "./deletar";

let executa = true

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInício da Exclusão do Produto`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do Produto: `);
            this.produtos.forEach(produto =>{
                if (produto.nome == busca){
                    console.log(`Produto encontrado, deseja realmente excluir o Produto?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar`)
                    switch(confirma){
                        case 1:
                            let indice = this.produtos.indexOf(produto)
                            this.produtos.slice(indice, 1)
                            console.log(`Produto excluido!`);
                            break
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n nenhum Produto encontrado com o nome informado!!! \n`); 
                }
            })
                
                        
        }
    }

}