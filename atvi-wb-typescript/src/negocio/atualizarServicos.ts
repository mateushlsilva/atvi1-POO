import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizar from "./atualizar";

export default class AtualizarServicos extends Atualizar{
    private servicos:Array<Servico>
    private entrada: Entrada
    constructor(servicos:Array<Servico>, entrada: Entrada){
        super()
        this.servicos = servicos
        this.entrada = entrada
    }
    public atualiza(): void {
        console.log(`\nInício da atualização do Serviço`);
        let busca = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `);
        this.servicos.forEach(servico =>{
            if (servico.nome == busca){
                console.log(`Serviço encontrado, forneça as informações:`);
                let nome = this.entrada.receberTexto(`Por favor informe o nome do Serviço: `)
                servico.nome = nome
                this.servicos.push(servico)
                console.log(`\nCadastro atualizado :)\n`);
            }
            else{
                console.log(`\n nenhum Serviço encontrado com o nome informado!!! \n`); 
            }
                      
        })
        
        
    }
}