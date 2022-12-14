import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioProdutoRoute = Router();
const usuarioProduto = require('../models/usuarioProdutoTable')
const tabelaUsuario = require('../models/userTable')
const tabelaProduto = require('../models/produtoTable')

usuarioProdutoRoute.get('/usuarioProduto', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioProdutoList = await usuarioProduto.findAll();
    res.status(StatusCodes.OK).send(usuarioProdutoList)
})

usuarioProdutoRoute.get('/usuarioProduto/ClienteConsumoValor', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioList = await tabelaUsuario.findAll()
    const produtoList = await tabelaProduto.findAll()
    const usuarioProdutoList = await usuarioProduto.findAll();

    let listProdM:any = []
    let produ:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    let s = 0
    let v = 0
    let v1 = 0
    let c = 0

    usuarioProdutoList.sort(function(a,b){
        return a.userId - b.userId
    })
    usuarioProdutoList.forEach(dados => {
        let proId = dados.produtoId
        let userId = dados.userId
        produtoList.forEach(prod => {
            if(prod.id == proId){
                produ.push({
                    nome: userId,
                    valor: prod.preco
                })
            }
        })
    })
    produ.forEach(cli => {
        n = cli.nome
        v = cli.valor
        if(n != n1){
            if(cont >= 1){
                listProdM.push({
                    nome: n1,
                    consumo: s
                })
            }
            s = Number(v)
            n1 = n
            cont = 1
            c++
        }
        else{
            v1 = Number(v)
            if(produ.length >= c){
                s = Number(s) + Number(v)
            }else{
                s = Number(v) + Number(v1)
            }
            cont++
            c++
        }
   
    });
    listProdM.push({
        nome: n,
        consumo: s
    })
    produ = []
    usuarioList.forEach(user => {
        listProdM.forEach(cli =>{
            if(user.id == cli.nome){
                produ.push({
                    nome: user.name,
                    cpf: user.cpf,
                    valor: cli.consumo
                })
            }
        })
    });
    listProdM = []
    res.status(StatusCodes.OK).send(produ)
})

usuarioProdutoRoute.get('/usuarioProduto/generoMasculino', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioMasList = await tabelaUsuario.findAll({ where: { genero: "Masculino" } })
    const produtoList = await tabelaProduto.findAll()
    const usuarioProdutoList = await usuarioProduto.findAll();

    let listProdM:any ={}
    let produ:any = []
    let cont = -1

    usuarioProdutoList.forEach(dados => {
        let proId = dados.produtoId
        let userId = dados.userId
        usuarioMasList.forEach(mas => {
            if(mas.id == userId){
                produtoList.forEach(prod => {
                    if(prod.id == proId){
                        produ.push(prod.id)
                    }
                })
            }
        })
    })
    produ.forEach((count) => {
        listProdM[count] = (listProdM[count] || 0) + 1
    })
    produ = []
    produtoList.forEach(p => {
        Object.keys(listProdM).forEach((id) => {
            if(p.id == id){
                cont++
                produ.push({
                    nome: p.nome,
                    quantidade: Object.values(listProdM)[cont]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(produ)
})

usuarioProdutoRoute.get('/usuarioProduto/generoFeminino', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioFemList = await tabelaUsuario.findAll({ where: { genero: "Feminino" } })
    const produtoList = await tabelaProduto.findAll()
    const usuarioProdutoList = await usuarioProduto.findAll();

    let listProdF:any ={}
    let produ:any = []
    let cont = -1

    usuarioProdutoList.forEach(dados => {
        let proId = dados.produtoId
        let userId = dados.userId
        usuarioFemList.forEach(mas => {
            if(mas.id == userId){
                produtoList.forEach(prod => {
                    if(prod.id == proId){
                        produ.push(prod.id)
                    }
                })
            }
        })
    })
    produ.forEach((count) => {
        listProdF[count] = (listProdF[count] || 0) + 1
    })
    produ = []
    produtoList.forEach(p => {
        Object.keys(listProdF).forEach((id) => {
            if(p.id == id){
                cont++
                produ.push({
                    nome: p.nome,
                    quantidade: Object.values(listProdF)[cont]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(produ)
})

usuarioProdutoRoute.get('/usuarioProduto/listagemProdutoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let produtoMP:any = []
    let proP:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioProdutoList = await usuarioProduto.findAll({ attributes: ['produtoId'] });
    const produtoList = await tabelaProduto.findAll()
    usuarioProdutoList.forEach(prod => {
        // produto.append(prod.produtoId)
        n = prod.produtoId
        if(n != n1){
            if(cont >= 1){
                produtoMP.push({
                    produtoId: n1,
                    consumo: cont
                })
            }
            n1 = n
            cont = 1
        }
        else{
            cont++
        }
    });
    produtoMP.push({
        produtoId: n,
        consumo: cont
    })
    produtoList.forEach(usu => {
        produtoMP.forEach(p => {
            if(usu.id == p.produtoId){
                proP.push({
                    nome: usu.nome,
                    consumo: p.consumo
                })
            }
        })
    })
    res.status(StatusCodes.OK).send(proP)
})

usuarioProdutoRoute.get('/usuarioProduto/listagemProdutoPedidos', async(req: Request, res: Response, next: NextFunction)=>{
    let produtoMP:any = []
    const usuarioProdutoList = await usuarioProduto.findAll();
    const produtoList = await tabelaProduto.findAll()
    const usuarioList = await tabelaUsuario.findAll()
    usuarioProdutoList.forEach(prod => {
        usuarioList.forEach(user => {
            if(prod.userId == user.id ){
                produtoList.forEach(p => {
                    if(p.id == prod.produtoId){
                        produtoMP.push({
                            cliente: user.name,
                            cpf: user.cpf,
                            produto: p.nome,
                            valor: p.preco
                        })
                    }
                })
            }
        })
        
        
    });
    res.status(StatusCodes.OK).send(produtoMP)
})


usuarioProdutoRoute.get('/usuarioProduto/listagemClienteProdutoConsumidoQuantidade', async(req: Request, res: Response, next: NextFunction)=>{
    let userMP:any = []
    let userP:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioProdutoList = await usuarioProduto.findAll({ attributes: ['userId'] });
    const tabelaUsu = await tabelaUsuario.findAll();
    console.log(usuarioProdutoList);
    
    usuarioProdutoList.forEach(user => {
        n = user.userId
        
        if(n != n1){
            if(cont >= 1){
                userMP.push({
                    userId: n1,
                    consumo: cont
                })
            }
            n1 = n
            cont = 1
        }
        else{
            cont++
        }
        
    });
    userMP.push({
        userId: n,
        consumo: cont
    })

    tabelaUsu.forEach(usu => {
        userMP.forEach(cli => {
            if(usu.id == cli.userId){
                userP.push({
                    nome: usu.name,
                    cpf: usu.cpf,
                    consumo: cli.consumo
                })
            }
        })
    })
    res.status(StatusCodes.OK).send(userP)
})


usuarioProdutoRoute.get('/usuarioProduto/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await usuarioProduto.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioProduto n??o cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

usuarioProdutoRoute.post('/usuarioProduto/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newusuarioProduto = req.body
    await usuarioProduto.create(newusuarioProduto)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "usuarioProduto cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "usuarioProduto n??o cadastrado!"
        })
    })
})

usuarioProdutoRoute.put('/usuarioProduto/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedusuarioProduto = req.body;
    modifiedusuarioProduto.uuid = uuid
    await usuarioProduto.update(modifiedusuarioProduto, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "usuarioProduto atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "usuarioProduto n??o atualizado!"
        })
     })
})


usuarioProdutoRoute.delete('/usuarioProduto/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await usuarioProduto.destroy({
        where: {
            produtoId: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "usuarioProduto deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioProduto n??o deletado!"
        })
    })
})

usuarioProdutoRoute.delete('/usuarioProduto/deletar/usu/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await usuarioProduto.destroy({
        where: {
            userId: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "usuarioProduto deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioProduto n??o deletado!"
        })
    })
})

export default usuarioProdutoRoute;