import {Router,  Request, Response} from 'express'
import { getUserGL, getUsersGL, saveUserGL, updateUserGL, entregueJogo, removeUserGL} from './controller/UserController'
import { getUsrGL, getGL, saveGL, updateGL, removeGL} from './controller/UserController'


const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json( {message: 'hello Word!'})
}) 

routes.get('/UsersGL',getUsersGL)
routes.get('/UserGL/:id',getUserGL)
routes.post('/UserGL',saveUserGL)
routes.put('/UserGL/:id',updateUserGL)
routes.patch('/UserGL/:id',entregueJogo)
routes.delete('/UserGL/:id',removeUserGL)

routes.get('/GL',getUsrGL)
routes.get('/GL/:id',getGL)
routes.post('/GL',saveGL)
routes.put('/GL/:id',updateGL)
routes.delete('/GL/:id',removeGL)

export default routes