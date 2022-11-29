import express, { Request, Response, NextFunction } from 'express'
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route'
import produtoRoute from './routes/produto.route';
import cors from 'cors';
import servicoRoute from './routes/servico.route';
import telefoneRoute from './routes/telefone.route';
import rgRoute from './routes/rg.route';
import usuarioProdutoRoute from './routes/usuarioProduto.route';
import usuarioServicoRoute from './routes/usuarioServico.route';
import usuarioTelefoneRoute from './routes/usuarioTelefone.route';

const app = express()

app.use(cors())

 // configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(usersRoute);
app.use(servicoRoute);
app.use(produtoRoute);
app.use(rgRoute);
app.use(statusRouter);
app.use(telefoneRoute);
app.use(usuarioProdutoRoute);
app.use(usuarioServicoRoute)
app.use(usuarioTelefoneRoute)


// inicialização do server
app.listen(3001,()=>{
    console.log("Server rodando na porta 3001");  
})