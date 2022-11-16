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
var produto_1 = __importDefault(require("../modelo/produto"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroProdutos = /** @class */ (function (_super) {
    __extends(CadastroProdutos, _super);
    function CadastroProdutos(nome) {
        var _this = _super.call(this) || this;
        _this.nomes = nome;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProdutos.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var preco = this.entrada.receberNumero("Por favor informe o pre\u00E7o do produto: ");
        var produto = new produto_1.default(nome, preco);
        //produto.nome = nome
        this.nomes.push(produto);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroProdutos;
}(cadastro_1.default));
exports.default = CadastroProdutos;
