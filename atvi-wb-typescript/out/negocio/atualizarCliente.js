"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var atualizar_1 = __importDefault(require("./atualizar"));
var AtualizarCliente = /** @class */ (function (_super) {
    __extends(AtualizarCliente, _super);
    function AtualizarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarCliente.prototype.atualiza = function () {
        var _this = this;
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o do cliente");
        var busca = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf do cliente: ");
        var cont = 1;
        this.clientes.forEach(function (cliente) {
            if (cliente.getCpf.getValor == busca) {
                console.log("Cliente encontrado, forne\u00E7a as informa\u00E7\u00F5es:");
                var nome = _this.entrada.receberTexto("Por favor informe o nome do cliente: ");
                var nomeSocial = _this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
                cliente.nome = nome;
                cliente.nomeSocial = nomeSocial;
                console.log("\nCadastro atualizado :)\n");
            }
            else if (cont == _this.clientes.length) {
                console.log("\n nenhum cliente encontrado com o cpf informado!!! \n");
            }
            else {
                cont++;
            }
        });
    };
    return AtualizarCliente;
}(atualizar_1.default));
exports.default = AtualizarCliente;
