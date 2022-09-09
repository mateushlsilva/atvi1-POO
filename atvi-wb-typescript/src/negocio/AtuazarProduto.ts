import Atualizar from "./Atualizar";

export default class AtualizarProdutos extends Atualizar{
    public nome:string
    constructor(nome:string){
        super()
        this.nome = nome
    }
    public update(): void {
        
    }
}