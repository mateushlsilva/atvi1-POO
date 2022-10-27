import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(mensagem)
        let numero  = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let exe = true
        while (exe) {
            let texto = prompt(mensagem)
            let resto = texto.slice(1,texto.length)
            if (texto == ""){
                console.log("Esse campo é obrigatorio!");
                exe = true
            }else if(texto.length < 3){
                console.log("Esse campo não pode ser menor que três digitos!");
                exe = true
            }
            else{
                exe = false
                return texto[0].toUpperCase()+resto.toLowerCase()
            }
        }
        return "Como você chegou aqui???"
    }
}