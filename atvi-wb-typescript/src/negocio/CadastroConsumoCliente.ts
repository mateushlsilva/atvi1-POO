import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Cadastro from "./cadastro";


export default class CadastroConsumoCliente extends Cadastro{
    private entrada: Entrada
    private clientes: Array<Cliente>
    private empresa: Empresa
    constructor(clientes: Array<Cliente>, empresa: Empresa){
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
        this.clientes = clientes
    }
    public cadastrar(): void {
        let proc = this.entrada.receberCpf(`Informe o cpf da pessoa: `)
        let exe = true
        let c = 1
        let execucao = true
        while(execucao){
            this.clientes.forEach(cliente => {
                if(cliente.getCpf.getValor == proc){
                    while(exe){
                        console.log("------------------------------------------------");
                        console.log(`Opeção de consumo.`);
                        console.log(`1 - Produto`);
                        console.log(`2 - Serviço`);
                        console.log(`0 - Sair`);           
                        let op = this.entrada.receberNumero('Insira a Opção:  ')
                        let cont = 1
                        switch(op){
                            case 1:
                                let produtoNome = this.entrada.receberTexto(`Informe o nome do produto: `)
                                this.empresa.getProdutos.forEach(prod => {
                                    if(prod.nome == produtoNome){
                                        cliente.addProduto(prod)
                                        console.log(`\nInserido com Sucesso`);
                                    }else if(cont == this.empresa.getProdutos.length){
                                        console.log(`Produto invalido!`);
                                    }else{
                                        cont++
                                    }
                                })
                                break
                            case 2:
                                let servicoNome = this.entrada.receberTexto(`Informe o nome do serviço: `)
                                this.empresa.getServicos.forEach(ser => {
                                    if(ser.nome == servicoNome){
                                        cliente.addServico(ser)
                                        console.log(`\nInserido com Sucesso`);
                                    }else if(cont == this.empresa.getServicos.length){
                                        console.log(`Serviço invalido!`);
                                    }else{
                                        cont++
                                    }
                                })
                                break
                            case 0:
                                exe = false
                                execucao = false
                                console.log(`Obrigado!`)
                                break;
                            default:
                                console.log(`Digite Uma Opção Válida!`);
                                exe = true 
                        }
                    }
                }else if(c == this.clientes.length){
                    console.log('CPF invalido!');
                    console.log('\n')
                    execucao = false
                }else{
                    c++
                }
            })
        }
    }
}