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

usuarioServicoRoute.get('/usuarioServico/ClienteConsumoValor', async(req: Request, res: Response, next: NextFunction)=>{
    const usuarioList = await tabelaUsuario.findAll()
    const servicoList = await tabelaServico.findAll()
    const usuarioServicoList = await usuarioServico.findAll();

    let listSerM:any = []
    let serv:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    let s = 0
    let v = 0
    let v1 = 0
    let c = 0

    usuarioServicoList.sort(function(a,b){
        return a.userId - b.userId
    })
    usuarioServicoList.forEach(dados => {
        let serId = dados.servicoId
        let userId = dados.userId
        servicoList.forEach(serve => {
            if(serve.id == serId){
                serv.push({
                    nome: userId,
                    valor: serve.preco
                })
            }
        })
    })
    serv.forEach(cli => {
        n = cli.nome
        v = cli.valor
        if(n != n1){
            if(cont >= 1){
                listSerM.push({
                    nome: n1,
                    consumo: s
                })
            }
            s = v
            n1 = n
            cont = 1
            c++
        }
        else{
            v1 = v
            if(serv.length >= c){
                s = s + v
            }else{
                s = v + v1
            }
            cont++
            c++
        }
   
    });
    listSerM.push({
        nome: n,
        consumo: s
    })
    serv = []
    usuarioList.forEach(user => {
        listSerM.forEach(cli =>{
            if(user.id == cli.nome){
                serv.push({
                    nome: user.name,
                    cpf: user.cpf,
                    valor: cli.consumo
                })
            }
        })
    });
    listSerM = []
    res.status(StatusCodes.OK).send(serv)
})


usuarioServicoRoute.get('/usuarioServico/listagemServicoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let servico:any = []
    let ser:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioServicoList = await usuarioServico.findAll({ attributes: ['servicoId'] });
    const servicoList = await tabelaServico.findAll()
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
    servicoList.forEach(usu => {
        servico.forEach(s => {
            if(usu.id == s.servicoId){
                ser.push({
                    nome: usu.nome,
                    consumo: s.consumo
                })
            }
        })
    })
    res.status(StatusCodes.OK).send(ser)
})


usuarioServicoRoute.get('/usuarioServico/listagemServicoPedidos', async(req: Request, res: Response, next: NextFunction)=>{
    let produtoMP:any = []
    const usuarioProdutoList = await usuarioServico.findAll();
    const servicoList = await tabelaServico.findAll()
    const usuarioList = await tabelaUsuario.findAll()
    usuarioProdutoList.forEach(prod => {
        usuarioList.forEach(user => {
            if(prod.userId == user.id ){
                servicoList.forEach(s => {
                    if(s.id == prod.servicoId){
                        produtoMP.push({
                            cliente: user.name,
                            cpf: user.cpf,
                            produto: s.nome,
                            valor: s.preco
                        })
                    }
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(produtoMP)
})


usuarioServicoRoute.get('/usuarioServico/listagemClienteServicoConsumidoQuantidade', async(req: Request, res: Response, next: NextFunction)=>{
    let userMP:any = []
    let userP:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const usuarioServicoList = await usuarioServico.findAll({ attributes: ['userId'] });
    const tabelaUsu = await tabelaUsuario.findAll();
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