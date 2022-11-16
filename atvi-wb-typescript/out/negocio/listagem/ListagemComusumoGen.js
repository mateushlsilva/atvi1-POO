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
var listagem_1 = __importDefault(require("../listagem"));
var ListaGeneroConsumo = /** @class */ (function (_super) {
    __extends(ListaGeneroConsumo, _super);
    function ListaGeneroConsumo(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListaGeneroConsumo.prototype.listar = function () {
        var filtrado;
        filtrado = this.clientes.reduce(function (ac, cur) {
            cur.getProdutosConsumidos.forEach(function (p) {
                if (ac[cur.genero]["produto_".concat(p.getNome)]) {
                    ac[cur.genero]["produto_".concat(p.getNome)].qtd++;
                }
                else {
                    ac[cur.genero]["produto_".concat(p.getNome)] = { qtd: 1, nome: p.getNome };
                }
            });
            cur.getServicosConsumidos.forEach(function (s) {
                if (ac[cur.genero]["servico_".concat(s.nome)]) {
                    ac[cur.genero]["servico_".concat(s.nome)].qtd++;
                }
                else {
                    ac[cur.genero]["servico_".concat(s.nome)] = { qtd: 1, nome: s.getNomeS };
                }
            });
            return ac;
        }, { M: {}, F: {} });
        var ordenadoM = Object.keys(filtrado.M).map(function (k) {
            var _a = k.split("_"), tipo = _a[0], nome = _a[1];
            return { nome: nome, tipo: tipo, qtd: filtrado.M[k].qtd };
        }).sort(function (a, b) { return b.qtd - a.qtd; }).slice(0, 3);
        var ordenadoF = Object.keys(filtrado.F).map(function (k) {
            var _a = k.split("_"), tipo = _a[0], nome = _a[1];
            return { nome: nome, tipo: tipo, qtd: filtrado.F[k].qtd };
        }).sort(function (a, b) { return b.qtd - a.qtd; }).slice(0, 3);
        console.log("Listagem dos servi\u00E7os ou produtos mais consumidos por g\u00EAnero");
        console.log("\n--------------------------------------\n");
        console.log("Masculino");
        ordenadoM.forEach(function (items, index) {
            console.log("".concat(index + 1, "\u00B0"));
            console.log("Nome do ".concat(items.tipo, ": ").concat(items.nome));
            console.log("Quantidade Consumido: ".concat(items.qtd, "\n"));
        });
        console.log("\n--------------------------------------\n");
        console.log("Feminino");
        ordenadoF.forEach(function (items, index) {
            console.log("".concat(index + 1, "\u00B0"));
            console.log("Nome do produto: ".concat(items.nome));
            console.log("Quantidade Consumido: ".concat(items.qtd, "\n"));
        });
        console.log("\n--------------------------------------\n");
    };
    return ListaGeneroConsumo;
}(listagem_1.default));
exports.default = ListaGeneroConsumo;
