import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const servicoRoute = Router();
const servico = require('../models/servicoTable')



servicoRoute.get('/servico', async(req: Request, res: Response, next: NextFunction)=>{
    const servicoList = await servico.findAll();
    res.status(StatusCodes.OK).send(servicoList)
})

servicoRoute.get('/servico/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await servico.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "servico não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

servicoRoute.post('/servico/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newservico = req.body
    await servico.create(newservico)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "servico cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "servico não cadastrado!"
        })
    })
})

servicoRoute.put('/servico/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedservico = req.body;
    modifiedservico.uuid = uuid
    await servico.update(modifiedservico, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "servico atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "servico não atualizado!"
        })
     })
})


servicoRoute.delete('/servico/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await servico.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "servico deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "servico não deletado!"
        })
    })
})


export default servicoRoute;