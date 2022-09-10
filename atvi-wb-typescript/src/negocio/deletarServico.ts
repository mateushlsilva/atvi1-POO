import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Excluir from "./deletar";

let executa = true

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInício da Exclusão do Serviço`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `);
            this.servicos.forEach(servico =>{
                if (servico.nome == busca){
                    console.log(`Serviço encontrado, deseja realmente excluir o Serviço?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar`)
                    switch(confirma){
                        case 1:
                            let indice = this.servicos.indexOf(servico)
                            this.servicos.slice(indice, 1)
                            console.log(`Serviço excluido!`);
                            break
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n nenhum Serviço encontrado com o nome informado!!! \n`); 
                }
            })
                
                        
        }
    }

}