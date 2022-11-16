export default class Produto {
    public nome!: string
    public preco!: number
    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
    }
    public getNome(): string{
        return this.nome
    }
    public getPreco(): number{
        return this.preco
    }
}