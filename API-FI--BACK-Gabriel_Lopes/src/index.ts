import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors'
import routes from "./routes"
import { AppDataSource } from "./data-source"


const app = express()
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()

    app.use(cors())
    app.use(bodyParser.json()) //Tipo da dados enviados
    app.use(routes)

    app.listen(3333) //Determina qual porta a aplicação vai rodar
})
