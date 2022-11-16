"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    return Produto;
}());
exports.default = Produto;
