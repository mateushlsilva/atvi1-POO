"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var CadastroProdutos_1 = __importDefault(require("../negocio/CadastroProdutos"));
var CadastroServicos_1 = __importDefault(require("../negocio/CadastroServicos"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var ListagemProdutos_1 = __importDefault(require("../negocio/ListagemProdutos"));
var ListagemServicos_1 = __importDefault(require("../negocio/ListagemServicos"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar Produto");
    console.log("4 - Listar todos os produtos");
    console.log("5 - Cadastrar Servi\u00E7os");
    console.log("6 - Listar todos os Servi\u00E7os");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastrarProd = new CadastroProdutos_1.default(empresa.getProdutos);
            cadastrarProd.cadastrar();
            break;
        case 4:
            var listagemProd = new ListagemProdutos_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 5:
            var cadastrarSer = new CadastroServicos_1.default(empresa.getServicos);
            cadastrarSer.cadastrar();
            break;
        case 6:
            var listagemSer = new ListagemServicos_1.default(empresa.getServicos);
            listagemSer.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
