import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./deletar";

let executa = true

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInício da Exclusão do cliente`);
        while (executa){
            let busca = this.entrada.receberTexto(`Por favor informe o número do cpf do cliente: `);
            this.clientes.forEach(cliente =>{
                if (cliente.getCpf.getValor == busca){
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente?`);
                    let confirma = this.entrada.receberNumero(`1 - excluir, 2 - cancelar`)
                    switch(confirma){
                        case 1:
                            let indice = this.clientes.indexOf(cliente)
                            this.clientes.slice(indice, 1)
                            console.log(`Cliente excluido!`);
                            break
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break
                            
                    }
                }
                else{
                    console.log(`\n nenhum cliente encontrado com o cpf informado!!! \n`); 
                }
            })
                
                        
        }
    }

}