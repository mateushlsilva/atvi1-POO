import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaGeneroConsumo extends Listagem {
    private clientes: Array<Cliente> 
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    listar(): void {
        let filtrado: any;
        
        filtrado = this.clientes.reduce(( ac, cur ) => {
            cur.getProdutosConsumidos.forEach( p => {
                if(ac[cur.genero][`produto_${p.getNome}`]){
                    ac[cur.genero][`produto_${p.getNome}`].qtd++
                }else{
                    ac[cur.genero][`produto_${p.getNome}`] = { qtd:1, nome:p.getNome }
                }
            })
            cur.getServicosConsumidos.forEach( s => {
                if(ac[cur.genero][`servico_${s.nome}`]){
                    ac[cur.genero][`servico_${s.nome}`].qtd++
                }else{
                    ac[cur.genero][`servico_${s.nome}`] = {qtd:1, nome:s.getNomeS}
                }
            })
            return ac
        },{M:{}, F:{}})
        let ordenadoM = Object.keys(filtrado.M).map(k=>{
            const [tipo,nome] = k.split("_")
            return {nome, tipo, qtd:filtrado.M[k].qtd}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        let ordenadoF = Object.keys(filtrado.F).map( k => {
            const [tipo,nome] = k.split("_")
            return {nome, tipo, qtd:filtrado.F[k].qtd}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        console.log(`Listagem dos serviços ou produtos mais consumidos por gênero`);
        console.log(`\n--------------------------------------\n`);
        console.log(`Masculino`);
        ordenadoM.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )
        console.log(`\n--------------------------------------\n`);
        console.log(`Feminino`);
        ordenadoF.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Nome do produto: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )
        console.log(`\n--------------------------------------\n`);
    }

}