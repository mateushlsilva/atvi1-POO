export default class Servico {
    public nome: string
    public valor: number
    
    constructor(nome: string ,valor: number){
        this.nome = nome
        this.valor = valor
    }
    set setNome(value: string){
        this.nome = value
    }
    get getNome(): string { return this.nome }
    set setValor(value: number){
        this.valor = value
    }
    get getValor(): number { return this.valor }
}