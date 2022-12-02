import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();
const users = require('../models/userTable')


usersRoute.get('/users', async(req: Request, res: Response, next: NextFunction)=>{
    const usersList = await users.findAll();
    res.status(StatusCodes.OK).send(usersList)
})

usersRoute.get('/users/masculino', async(req: Request, res: Response, next: NextFunction)=>{
    const usersList = await users.findAll({ where: { genero: 'Masculino' } });
    res.status(StatusCodes.OK).send(usersList)
})

usersRoute.get('/users/feminino', async(req: Request, res: Response, next: NextFunction)=>{
    const usersList = await users.findAll({ where: { genero: 'Feminino' } });
    res.status(StatusCodes.OK).send(usersList)
})

/*
usersRoute.get('/users/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await users.findOne({ where: { email: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})*/

usersRoute.get('/users/id/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await users.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

usersRoute.post('/users/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newUser = req.body
    const genero = req.body.genero
    const nome = req.body.name
    const nameSocial = req.body.nameSocial
    newUser.name = nome[0].toUpperCase() + nome.slice(1,nome.length).toLowerCase()
    newUser.nameSocial = nameSocial[0].toUpperCase() + nameSocial.slice(1,nameSocial.length).toLowerCase()
    
    if(genero[0].toUpperCase() == 'M'){
        newUser.genero = "Masculino"
    }else if(genero[0].toUpperCase() == 'F'){
        newUser.genero = "Feminino"
    }else{
        newUser.genero = null
    }
    
    await users.create(newUser)
    .then((test) =>{
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        })
    })
})

usersRoute.put('/users/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid

    const genero = req.body.genero
    const nome = req.body.name
    const nameSocial = req.body.nameSocial
    modifiedUser.name = nome[0].toUpperCase() + nome.slice(1,nome.length).toLowerCase()
    modifiedUser.nameSocial = nameSocial[0].toUpperCase() + nameSocial.slice(1,nameSocial.length).toLowerCase()
    
    if(genero[0].toUpperCase() == 'M'){
        modifiedUser.genero = "Masculino"
    }else if(genero[0].toUpperCase() == 'F'){
        modifiedUser.genero = "Feminino"
    }else{
        modifiedUser.genero = null
    }
    await users.update(modifiedUser, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "Usuario atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "Usuario não atualizado!"
        })
     })
})


usersRoute.delete('/users/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await users.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Usuario deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não deletado!"
        })
    })
})


export default usersRoute;