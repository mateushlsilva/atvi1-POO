import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rgRoute = Router();
const rg = require('../models/rgTable')



rgRoute.get('/rg', async(req: Request, res: Response, next: NextFunction)=>{
    const rgList = await rg.findAll();
    res.status(StatusCodes.OK).send(rgList)
})

rgRoute.get('/rg/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await rg.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "rg não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

rgRoute.post('/rg/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newrg = req.body
    await rg.create(newrg)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "rg cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "rg não cadastrado!"
        })
    })
})

rgRoute.put('/rg/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedrg = req.body;
    modifiedrg.uuid = uuid
    await rg.update(modifiedrg, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "rg atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "rg não atualizado!"
        })
     })
})


rgRoute.delete('/rg/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await rg.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "rg deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "rg não deletado!"
        })
    })
})


export default rgRoute;