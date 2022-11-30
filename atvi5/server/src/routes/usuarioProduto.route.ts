import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioProdutoRoute = Router();
const usuarioProduto = require('../models/usuarioProdutoTable')



usuarioProdutoRoute.get('/usuarioProduto', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioProdutoList = await usuarioProduto.findAll();
    res.status(StatusCodes.OK).send(usuarioProdutoList)
})

usuarioProdutoRoute.get('/usuarioProduto/listagemProdutoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let produtoMP:any = []
    let cont = 1
    let n1 = 0
    let n = 0
    const usuarioProdutoList = await usuarioProduto.findAll({ attributes: ['produtoId'] });
    usuarioProdutoList.forEach(prod => {
        // produto.append(prod.produtoId)
        n = prod.produtoId
        if(n != n1){
            if(cont > 1){
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
    res.status(StatusCodes.OK).send(produtoMP)
})

usuarioProdutoRoute.get('/usuarioProduto/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await usuarioProduto.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioProduto não cadastrado!"
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
            mensagem: "usuarioProduto não cadastrado!"
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
             mensagem: "usuarioProduto não atualizado!"
        })
     })
})


usuarioProdutoRoute.delete('/usuarioProduto/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await usuarioProduto.destroy({
        where: {
            id: uuid
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
            mensagem: "usuarioProduto não deletado!"
        })
    })
})


export default usuarioProdutoRoute;