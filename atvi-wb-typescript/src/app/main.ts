import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import RG from "../modelo/rg";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()


// Clientes cadastrados antes do programa
let cli1 = new Cliente('Gustavo', 'Gusta gol', new CPF('45454545454',new Date(12,12,1221)), 'Masculino')
let cli2 = new Cliente('Arnaldo', 'Arnaldo César', new CPF('89421565454',new Date(12,12,1221)), 'Masculino')
let cli3 = new Cliente('Maria', 'Maria Joaquina', new CPF('49478542453',new Date(12,12,1221)), 'Feminino')
let cli4 = new Cliente('Guliano', 'Guliano', new CPF('73454542354',new Date(12,12,1221)), 'Masculino')
let cli5 = new Cliente('Vasco', 'Gigante', new CPF('28426645454',new Date(12,12,1221)), 'Masculino')
let cli6 = new Cliente('Lucimara', 'Lucimara', new CPF('39454475554',new Date(12,12,1221)), 'Feminino')
let cli7 = new Cliente('Ayanokoji', 'Ayanokoji', new CPF('14454877456',new Date(12,12,1221)), 'Masculino')
let cli8 = new Cliente('Kei', 'Kei Karuizawa', new CPF('52452245451',new Date(12,12,1221)), 'Feminino')
let cli9 = new Cliente('Ichigo', 'Ichigo', new CPF('11454445458',new Date(12,12,1221)), 'Masculino')
cli1.addRg(new RG('58951348',new Date(20,12,2000)))
cli2.addRg(new RG('89522146',new Date(20,12,2000)))
cli3.addRg(new RG('77572727',new Date(20,12,2000)))
cli4.addRg(new RG('53475527',new Date(20,12,2000)))
cli5.addRg(new RG('71466984',new Date(20,12,2000)))
cli6.addRg(new RG('39845464',new Date(20,12,2000)))
cli7.addRg(new RG('87214654',new Date(20,12,2000)))
cli8.addRg(new RG('44874668',new Date(20,12,2000)))
cli9.addRg(new RG('52115576',new Date(20,12,2000)))

empresa.getClientes.push(cli1)
empresa.getClientes.push(cli2)
empresa.getClientes.push(cli3)
empresa.getClientes.push(cli4)
empresa.getClientes.push(cli5)
empresa.getClientes.push(cli6)
empresa.getClientes.push(cli7)
empresa.getClientes.push(cli8)
empresa.getClientes.push(cli9)
// FIM


let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar clientes`);
    console.log(`4 - Excluir clientes`);
    console.log(`5 - Cadastrar Produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Atualizar produtos`);
    console.log(`8 - Excluir produtos`);
    console.log(`9 - Cadastrar Serviços`);
    console.log(`10 - Listar todos os Serviços`);
    console.log(`11 - Atualizar serviços`);
    console.log(`12 - Excluir serviços`);
    
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarSer = new CadastroServicos(empresa.getServicos)
            cadastrarSer.cadastrar()
            break
        case 10:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break
        case 11:
            let atualizaSer = new AtualizarServicos(empresa.getServicos)
            atualizaSer.atualiza()
            break
        case 12:
            let excluirSer = new ExcluirServico(empresa.getServicos)
            excluirSer.Exclui()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}