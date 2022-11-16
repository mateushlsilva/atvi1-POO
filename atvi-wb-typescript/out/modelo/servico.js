"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Servico.prototype.getNomeS = function () {
        return this.nome;
    };
    Servico.prototype.getPrecos = function () {
        return this.preco;
    };
    return Servico;
}());
exports.default = Servico;
