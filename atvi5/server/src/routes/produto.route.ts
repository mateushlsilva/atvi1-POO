import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const produtoRoute = Router();
const produto = require('../models/produtoTable')



produtoRoute.get('/produto', async(req: Request, res: Response, next: NextFunction)=>{
    const produtoList = await produto.findAll();
    res.status(StatusCodes.OK).send(produtoList)
})

produtoRoute.get('/produto/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await produto.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "produto não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

produtoRoute.post('/produto/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newproduto = req.body
    const nome = req.body.nome
    newproduto.nome = nome[0].toUpperCase() + nome.slice(1,nome.length).toLowerCase()
    await produto.create(newproduto)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "produto cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "produto não cadastrado!"
        })
    })
})

produtoRoute.put('/produto/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedproduto = req.body;
    modifiedproduto.uuid = uuid
    const nome = req.body.nome
    modifiedproduto.nome = nome[0].toUpperCase() + nome.slice(1,nome.length).toLowerCase()
    await produto.update(modifiedproduto, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "produto atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "produto não atualizado!"
        })
     })
})


produtoRoute.delete('/produto/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await produto.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "produto deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "produto não deletado!"
        })
    })
})


export default produtoRoute;