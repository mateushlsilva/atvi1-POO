export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    public cpf: number
    public rg: string
    public ddd: number
    public telefone: number
    
    
    constructor(nome: string , nomeSocial: string, genero: string, cpf: number, rg: string, ddd: number, telefone:number){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rg = rg
        this.ddd = ddd
        this.telefone = telefone
    }
    set setNome(value: string){
        this.nome = value
    }
    get getNome(): string { return this.nome }
    set setNomeSocial(value: string){
        this.nomeSocial = value
    }
    get getNomeSocial(): string { return this.nomeSocial }
    set setGenero(value: string){
        this.genero = value
    }
    get getGenero(): string { return this.genero }
    set setCpf(value: number){
        this.cpf = value
    }
    get getCpf(): number { return this.cpf }

    set setRg(value: string){
        this.rg = value
    }
    get getRg(): string { return this.rg }
    set setDdd(value: number){
        this.ddd = value
    }
    get getDdd(): number { return this.ddd }

    set setTelefone(value: number){
        this.telefone= value
    }
    get getTelefone(): number { return this.telefone }
}