import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemGenero extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    public listar():void{

        let mas: Cliente[] = []
        let fem: Cliente[] = []

        this.clientes.forEach(cliente => {
            if(cliente.genero[0] == 'M'){
                mas.push(cliente)
            }else{
                fem.push(cliente)
            }
        })

        let entrada =  new Entrada()
        let genero = entrada.receberGenero('Qual é o gênero?: ')
        if(genero[0].toUpperCase() == 'M'){
            mas.forEach(cliente => {
                console.log(`--------------------------------------`);
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                cliente.getRgs.forEach(rg => {
                    console.log(`RG: ${rg.getValor}`);
                })
                console.log(`Produtos consumidos: [ `)
                cliente.getProdutosConsumidos.forEach(prod => {
                    console.log('      '+ prod.nome)
                });console.log(']');
                console.log(`Serviços consumidos: [ `)
                cliente.getServicosConsumidos.forEach(ser => {
                    console.log('      '+ ser.nome);
                });console.log(']');
                console.log(`--------------------------------------`);
            })
        }else{
            fem.forEach(cliente => {
                console.log(`--------------------------------------`);
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ${cliente.genero}`);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                cliente.getRgs.forEach(rg => {
                    console.log(`RG: ${rg.getValor}`);
                
                })
                console.log(`Produtos consumidos: [ `)
                cliente.getProdutosConsumidos.forEach(prod => {
                    console.log('      '+ prod.nome)
                });console.log(']');
                console.log(`Serviços consumidos: [ `)
                cliente.getServicosConsumidos.forEach(ser => {
                    console.log('      '+ ser.nome);
                });console.log(']');
                console.log(`--------------------------------------`);
            })
        }
    }
}