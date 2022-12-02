import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import Home from "./home";
// import ListaCliente from "./cliente/listaCliente";
import FormularioCadastroCliente from "./cadastros/formularioCadastroCliente";
// import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./cadastros/formularioCadastroProduto";
import FormularioCadastroServico from './cadastros/formularioCadastroServico';
import FormularioCadastroPedido from './cadastros/formularioCadastroPedido';
import Produtos from './produto/produtos';
// import ListaPedidos from './produto/listaPedidos';
import Pedidos from './pedidos';
import Clientes from './cliente/clientes';
import Servicos from './servico/servicos';
// import ListaSevicos from './servico/listaServicos';
import Listagens from './Listagens';
import FormularioAtulizaProduto from './produto/atualizaProduto';
import FormularioAtulizaServico from './servico/atualizaServico';
import Teste from './cadastros/teste';


function GetIdProduto(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <FormularioAtulizaProduto taskId={id}></FormularioAtulizaProduto>
    </div>
  )
}
function GetIdServico(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <FormularioAtulizaServico taskId={id}></FormularioAtulizaServico>
    </div>
  )
}
function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/Listagens" element={<Listagens/>}/>
      {/* <Route path="/listaCliente" element={<ListaCliente/>}/> */}
      <Route path="/teste" element={<Teste/>}/> 
      <Route path="/atualizaServico/:id" element={<GetIdServico/>}/> 
      <Route path="/atualizaProduto/:id" element={<GetIdProduto/>}/> 
      <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente/>}/>
      <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto/>}/>
      <Route path="/formularioCadastroServico" element={<FormularioCadastroServico/>}/>
      <Route path="/formularioCadastroPedido" element={<FormularioCadastroPedido/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/pedidos" element={<Pedidos/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/servicos" element={<Servicos/>}/>
      </Routes>
      </BrowserRouter>
    );
}
  export default App;

