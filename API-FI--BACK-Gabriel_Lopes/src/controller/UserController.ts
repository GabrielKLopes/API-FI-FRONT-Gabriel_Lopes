import { UserGL } from "../entity/UserGL"
import { GL } from "../entity/GL"
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"
import { request } from "http"



export const getUsersGL = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(UserGL).find()
return response.json (users)
};


export const getUserGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).findOneBy(id)
    return response.json (user)
};

export const saveUserGL = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(UserGL).save(request.body)
    return response.json(user)
}

export const updateUserGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserGL).findOneBy(id)
       return response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeUserGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserGL).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};


export const entregueJogo = async (request:Request, response: Response) => {
    const id = request.params
    const entregue = await AppDataSource.getRepository(UserGL).update(id,{
        entregue: true
    })
    if(entregue.affected == 1){
        const userUpdated = await AppDataSource.getRepository(UserGL).findOneBy(id)
        return response.json(userUpdated)
    }
    return response.status(404).json({message: 'Entega não encontrada'})
};
   



export const getUsrGL = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(GL).find()
return response.json (users)
};


export const getGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(GL).findOneBy(id)
    return response.json (user)
};

export const saveGL = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(GL).save(request.body)
return response.json(user)
}

export const updateGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(GL).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(GL).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeGL = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(GL).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(GL).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};
