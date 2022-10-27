"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var valor = prompt(mensagem);
        var numero = new Number(valor);
        return numero.valueOf();
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var exe = true;
        while (exe) {
            var texto = prompt(mensagem);
            var resto = texto.slice(1, texto.length);
            if (texto == "") {
                console.log("Esse campo é obrigatorio!");
                exe = true;
            }
            else if (texto.length < 3) {
                console.log("Esse campo não pode ser menor que três digitos!");
                exe = true;
            }
            else {
                exe = false;
                return texto[0].toUpperCase() + resto.toLowerCase();
            }
        }
        return "Como você chegou aqui???";
    };
    return Entrada;
}());
exports.default = Entrada;
