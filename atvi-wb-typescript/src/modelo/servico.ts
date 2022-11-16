export default class Servico {
    public nome!: string
    public preco!: number
    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
    }
    getNomeS(): string{
        return this.nome
    }
    getPrecos(): number{
        return this.preco
    }
}