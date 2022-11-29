import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioTelefoneRoute = Router();
const usuarioTelefone = require('../models/usuarioTelefoneTable')



usuarioTelefoneRoute.get('/usuarioTelefone', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioTelefoneList = await usuarioTelefone.findAll();
    res.status(StatusCodes.OK).send(usuarioTelefoneList)
})

usuarioTelefoneRoute.get('/usuarioTelefone/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await usuarioTelefone.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioTelefone não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

usuarioTelefoneRoute.post('/usuarioTelefone/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newusuarioTelefone = req.body
    await usuarioTelefone.create(newusuarioTelefone)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "usuarioTelefone cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "usuarioTelefone não cadastrado!"
        })
    })
})

usuarioTelefoneRoute.put('/usuarioTelefone/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedusuarioTelefone = req.body;
    modifiedusuarioTelefone.uuid = uuid
    await usuarioTelefone.update(modifiedusuarioTelefone, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "usuarioTelefone atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "usuarioTelefone não atualizado!"
        })
     })
})


usuarioTelefoneRoute.delete('/usuarioTelefone/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await usuarioTelefone.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "usuarioTelefone deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioTelefone não deletado!"
        })
    })
})


export default usuarioTelefoneRoute;