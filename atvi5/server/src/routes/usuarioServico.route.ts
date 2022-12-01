import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usuarioServicoRoute = Router();
const usuarioServico = require('../models/usuarioServicoTable')
const tabelaUsuario = require('../models/userTable')
const tabelaServico = require('../models/servicoTable')


usuarioServicoRoute.get('/usuarioServico', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioServicoList = await usuarioServico.findAll();
    res.status(StatusCodes.OK).send(usuarioServicoList)
})

usuarioServicoRoute.get('/usuarioServico/generoMasculino', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioMasList = await tabelaUsuario.findAll({ where: { genero: "Masculino" } })
    const servicoList = await tabelaServico.findAll()
    const usuarioServicoList = await usuarioServico.findAll();

    let listServM:any ={}
    let servi:any = []
    let cont = -1

    usuarioServicoList.forEach(dados => {
        let servId = dados.servicoId
        let userId = dados.userId
        usuarioMasList.forEach(mas => {
            if(mas.id == userId){
                servicoList.forEach(serv => {
                    if(serv.id == servId){
                        servi.push(serv.id)
                    }
                })
            }
        })
    })
    
    servi.forEach((count) => {
        listServM[count] = (listServM[count] || 0) + 1
    })
    servi = []
    servicoList.forEach(s => {
        Object.keys(listServM).forEach((id) => {
            if(s.id == id){
                cont++
                servi.push({
                    nome: s.nome,
                    quantidade: Object.values(listServM)[cont]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(servi)
})

usuarioServicoRoute.get('/usuarioServico/generoFeminino', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioFemList = await tabelaUsuario.findAll({ where: { genero: "Feminino" } })
    const servicoList = await tabelaServico.findAll()
    const usuarioServicoList = await usuarioServico.findAll();

    let listServF:any ={}
    let servi:any = []
    let cont = -1

    usuarioServicoList.forEach(dados => {
        let serId = dados.servicoId
        let userId = dados.userId
        usuarioFemList.forEach(mas => {
            if(mas.id == userId){
                servicoList.forEach(ser => {
                    if(ser.id == serId){
                        servi.push(ser.id)
                    }
                })
            }
        })
    })
    servi.forEach((count) => {
        listServF[count] = (listServF[count] || 0) + 1
    })
    servi = []
    servicoList.forEach(s => {
        Object.keys(listServF).forEach((id) => {
            if(s.id == id){
                cont++
                servi.push({
                    nome: s.nome,
                    quantidade: Object.values(listServF)[cont]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(servi)
})

usuarioServicoRoute.get('/usuarioServico/listagemServicoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let servico:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioServicoList = await usuarioServico.findAll({ attributes: ['servicoId'] });
    usuarioServicoList.forEach(serv => {
        n = serv.servicoId
        if(n != n1){
            if(cont >= 1){
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

usuarioServicoRoute.get('/usuarioServico/listagemClienteServicoConsumidoQuantidade', async(req: Request, res: Response, next: NextFunction)=>{
    let userMP:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioServicoList = await usuarioServico.findAll({ attributes: ['userId'] });
    usuarioServicoList.forEach(user => {
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
    res.status(StatusCodes.OK).send(userMP)
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