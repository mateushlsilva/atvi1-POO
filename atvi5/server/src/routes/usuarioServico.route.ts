import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioServicoRoute = Router();
const usuarioServico = require('../models/usuarioServicoTable')



usuarioServicoRoute.get('/usuarioServico', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioProdutoList = await usuarioServico.findAll();
    res.status(StatusCodes.OK).send(usuarioProdutoList)
})

usuarioServicoRoute.get('/usuarioServico/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await usuarioServico.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioServico não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

usuarioServicoRoute.get('/usuarioServico/listagemServicoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let servico:any = []
    let cont = 1
    let n1 = 0
    let n = 0
    const usuarioServicoList = await usuarioServico.findAll({ attributes: ['servicoId'] });
    usuarioServicoList.forEach(serv => {
        n = serv.servicoId
        if(n != n1){
            if(cont > 1){
                servico.push({
                    servicoId: n1,
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
    servico.push({
        servicoId: n,
        consumo: cont
    })
    res.status(StatusCodes.OK).send(servico)
})

usuarioServicoRoute.post('/usuarioServico/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newusuarioServico = req.body
    await usuarioServico.create(newusuarioServico)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "usuarioServico cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "usuarioServico não cadastrado!"
        })
    })
})

usuarioServicoRoute.put('/usuarioServico/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedusuarioServico = req.body;
    modifiedusuarioServico.uuid = uuid
    await usuarioServico.update(modifiedusuarioServico, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "usuarioServico atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "usuarioServico não atualizado!"
        })
     })
})


usuarioServicoRoute.delete('/usuarioServico/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await usuarioServico.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "usuarioServico deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "usuarioServico não deletado!"
        })
    })
})


export default usuarioServicoRoute;