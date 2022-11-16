"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var produto_1 = __importDefault(require("../modelo/produto"));
var rg_1 = __importDefault(require("../modelo/rg"));
var servico_1 = __importDefault(require("../modelo/servico"));
var atualizarCliente_1 = __importDefault(require("../negocio/atualizarCliente"));
var atualizarProduto_1 = __importDefault(require("../negocio/atualizarProduto"));
var atualizarServicos_1 = __importDefault(require("../negocio/atualizarServicos"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var CadastroConsumoCliente_1 = __importDefault(require("../negocio/CadastroConsumoCliente"));
var CadastroProdutos_1 = __importDefault(require("../negocio/CadastroProdutos"));
var CadastroServicos_1 = __importDefault(require("../negocio/CadastroServicos"));
var deletarCliente_1 = __importDefault(require("../negocio/deletarCliente"));
var deletarProduto_1 = __importDefault(require("../negocio/deletarProduto"));
var deletarServico_1 = __importDefault(require("../negocio/deletarServico"));
var ListagemComusumoGen_1 = __importDefault(require("../negocio/listagem/ListagemComusumoGen"));
var ListagemConsumoMais_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMais"));
var ListagemConsumoMenos_1 = __importDefault(require("../negocio/listagem/ListagemConsumoMenos"));
var ListagemGenero_1 = __importDefault(require("../negocio/listagem/ListagemGenero"));
var ListagemProdutosOuServicosMais_1 = __importDefault(require("../negocio/listagem/ListagemProdutosOuServicosMais"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var ListagemProdutos_1 = __importDefault(require("../negocio/ListagemProdutos"));
var ListagemServicos_1 = __importDefault(require("../negocio/ListagemServicos"));
console.log(chalk_1.default.greenBright("Bem-vindo ao cadastro de clientes do Grupo World Beauty"));
var empresa = new empresa_1.default();
// Clientes cadastrados antes do programa
var cli1 = new cliente_1.default('Gustavo', 'Gusta gol', new cpf_1.default('45454545454', new Date(12, 12, 1221)), 'Masculino');
var cli2 = new cliente_1.default('Arnaldo', 'Arnaldo César', new cpf_1.default('89421565454', new Date(12, 12, 1221)), 'Masculino');
var cli3 = new cliente_1.default('Maria', 'Maria Joaquina', new cpf_1.default('49478542453', new Date(12, 12, 1221)), 'Feminino');
var cli4 = new cliente_1.default('Guliano', 'Guliano', new cpf_1.default('73454542354', new Date(12, 12, 1221)), 'Masculino');
var cli5 = new cliente_1.default('Vasco', 'Gigante', new cpf_1.default('28426645454', new Date(12, 12, 1221)), 'Masculino');
var cli6 = new cliente_1.default('Lucimara', 'Lucimara', new cpf_1.default('39454475554', new Date(12, 12, 1221)), 'Feminino');
var cli7 = new cliente_1.default('Ayanokoji', 'Ayanokoji', new cpf_1.default('14454877456', new Date(12, 12, 1221)), 'Masculino');
var cli8 = new cliente_1.default('Kei', 'Kei Karuizawa', new cpf_1.default('52452245451', new Date(12, 12, 1221)), 'Feminino');
var cli9 = new cliente_1.default('Ichigo', 'Ichigo', new cpf_1.default('11454445458', new Date(12, 12, 1221)), 'Masculino');
var cli10 = new cliente_1.default('Naruto', 'Naruto', new cpf_1.default('31454745895', new Date(12, 12, 1221)), 'Masculino');
var cli11 = new cliente_1.default('Mario', 'Mario', new cpf_1.default('56554745895', new Date(12, 12, 1221)), 'Masculino');
cli1.addRg(new rg_1.default('58951348', new Date(20, 12, 2000)));
cli2.addRg(new rg_1.default('89522146', new Date(20, 12, 2000)));
cli3.addRg(new rg_1.default('77572727', new Date(20, 12, 2000)));
cli4.addRg(new rg_1.default('53475527', new Date(20, 12, 2000)));
cli5.addRg(new rg_1.default('71466984', new Date(20, 12, 2000)));
cli6.addRg(new rg_1.default('39845464', new Date(20, 12, 2000)));
cli7.addRg(new rg_1.default('87214654', new Date(20, 12, 2000)));
cli8.addRg(new rg_1.default('44874668', new Date(20, 12, 2000)));
cli9.addRg(new rg_1.default('52115576', new Date(20, 12, 2000)));
cli10.addRg(new rg_1.default('47115597', new Date(20, 12, 2000)));
cli11.addRg(new rg_1.default('88715597', new Date(20, 12, 2000)));
empresa.getClientes.push(cli1);
empresa.getClientes.push(cli2);
empresa.getClientes.push(cli3);
empresa.getClientes.push(cli4);
empresa.getClientes.push(cli5);
empresa.getClientes.push(cli6);
empresa.getClientes.push(cli7);
empresa.getClientes.push(cli8);
empresa.getClientes.push(cli9);
empresa.getClientes.push(cli10);
empresa.getClientes.push(cli11);
var servico1 = new servico_1.default("Corte", 24);
var servico2 = new servico_1.default("Remoção de rugas", 12);
var servico3 = new servico_1.default("Remoção  de manchas na pele", 34);
empresa.getServicos.push(servico1);
empresa.getServicos.push(servico2);
empresa.getServicos.push(servico3);
var produto1 = new produto_1.default("Pomada", 12);
var produto2 = new produto_1.default("Condicionador", 20);
var produto3 = new produto_1.default("Creme", 15);
empresa.getProdutos.push(produto1);
empresa.getProdutos.push(produto2);
empresa.getProdutos.push(produto3);
cli1.addProduto(produto1);
cli2.addProduto(produto2);
cli3.addProduto(produto3);
cli4.addProduto(produto2);
cli5.addProduto(produto1);
cli6.addProduto(produto3);
cli7.addProduto(produto3);
cli8.addProduto(produto1);
cli9.addProduto(produto1);
cli9.addProduto(produto2);
cli11.addProduto(produto2);
cli1.addServico(servico1);
cli2.addServico(servico2);
cli3.addServico(servico3);
cli4.addServico(servico2);
cli5.addServico(servico1);
cli6.addServico(servico3);
cli7.addServico(servico3);
cli8.addServico(servico1);
cli9.addServico(servico1);
cli11.addServico(servico1);
// FIM
var execucao = true;
while (execucao) {
    console.log(chalk_1.default.blackBright("Op\u00E7\u00F5es:"));
    console.log(chalk_1.default.blueBright("1 - Cadastrar cliente"));
    console.log(chalk_1.default.blueBright("2 - Listar todos os clientes"));
    console.log(chalk_1.default.blueBright("3 - Atualizar clientes"));
    console.log(chalk_1.default.blueBright("4 - Excluir clientes"));
    console.log(chalk_1.default.blueBright("5 - Cadastrar Produto"));
    console.log(chalk_1.default.blueBright("6 - Listar todos os produtos"));
    console.log(chalk_1.default.blueBright("7 - Atualizar produtos"));
    console.log(chalk_1.default.blueBright("8 - Excluir produtos"));
    console.log(chalk_1.default.blueBright("9 - Cadastrar Servi\u00E7os"));
    console.log(chalk_1.default.blueBright("10 - Listar todos os Servi\u00E7os"));
    console.log(chalk_1.default.blueBright("11 - Atualizar servi\u00E7os"));
    console.log(chalk_1.default.blueBright("12 - Excluir servi\u00E7os"));
    console.log(chalk_1.default.blueBright("13 - Listagem por g\u00EAnero"));
    console.log(chalk_1.default.blueBright("14 - Cadastrar consumo de produtos ou servi\u00E7o para o cliente"));
    console.log(chalk_1.default.blueBright("15 - Listagem do consumo dos 10 produtos ou servi\u00E7o mais consumidos"));
    console.log(chalk_1.default.blueBright("16 - Listagem do consumo dos 10 produtos ou servi\u00E7o menos consumidos"));
    console.log(chalk_1.default.blueBright("17 - Listagem do produto ou servi\u00E7o mais consumido"));
    console.log(chalk_1.default.blueBright("18 - Listagem do produto ou servi\u00E7o mais consumido por g\u00EAnero"));
    console.log(chalk_1.default.red("0 - Sair"));
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
            var atualizar = new atualizarCliente_1.default(empresa.getClientes);
            atualizar.atualiza();
            break;
        case 4:
            var exclusao = new deletarCliente_1.default(empresa.getClientes);
            exclusao.Exclui();
            break;
        case 5:
            var cadastrarProd = new CadastroProdutos_1.default(empresa.getProdutos);
            cadastrarProd.cadastrar();
            break;
        case 6:
            var listagemProd = new ListagemProdutos_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 7:
            var atualizarProdutos = new atualizarProduto_1.default(empresa.getProdutos);
            atualizarProdutos.atualiza();
            break;
        case 8:
            var exclusaoProduto = new deletarProduto_1.default(empresa.getProdutos);
            exclusaoProduto.Exclui();
            break;
        case 9:
            var cadastrarSer = new CadastroServicos_1.default(empresa.getServicos);
            cadastrarSer.cadastrar();
            break;
        case 10:
            var listagemSer = new ListagemServicos_1.default(empresa.getServicos);
            listagemSer.listar();
            break;
        case 11:
            var atualizaSer = new atualizarServicos_1.default(empresa.getServicos);
            atualizaSer.atualiza();
            break;
        case 12:
            var excluirSer = new deletarServico_1.default(empresa.getServicos);
            excluirSer.Exclui();
            break;
        case 13:
            var listagemGem = new ListagemGenero_1.default(empresa.getClientes);
            listagemGem.listar();
            break;
        case 14:
            var cadastroConsumoCliente = new CadastroConsumoCliente_1.default(empresa.getClientes, empresa);
            cadastroConsumoCliente.cadastrar();
            break;
        case 15:
            var listagem10mais = new ListagemConsumoMais_1.default(empresa.getClientes);
            listagem10mais.listar();
            break;
        case 16:
            var listagem10menos = new ListagemConsumoMenos_1.default(empresa.getClientes);
            listagem10menos.listar();
            break;
        case 17:
            var listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais_1.default(empresa.getClientes);
            listagemProdutosOuServicosMais.listar();
            break;
        case 18:
            var listagemConsumoGem = new ListagemComusumoGen_1.default(empresa.getClientes);
            listagemConsumoGem.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
