import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const telefoneRoute = Router();
const telefone = require('../models/telefoneTable')



telefoneRoute.get('/telefone', async(req: Request, res: Response, next: NextFunction)=>{
    const telefoneList = await telefone.findAll();
    res.status(StatusCodes.OK).send(telefoneList)
})

telefoneRoute.get('/telefone/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await telefone.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "telefone não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

telefoneRoute.post('/telefone/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newtelefone = req.body
    await telefone.create(newtelefone)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "telefone cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "telefone não cadastrado!"
        })
    })
})

telefoneRoute.put('/telefone/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedtelefone = req.body;
    modifiedtelefone.uuid = uuid
    await telefone.update(modifiedtelefone, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "telefone atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "telefone não atualizado!"
        })
     })
})


telefoneRoute.delete('/telefone/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await telefone.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "telefone deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "telefone não deletado!"
        })
    })
})


export default telefoneRoute;