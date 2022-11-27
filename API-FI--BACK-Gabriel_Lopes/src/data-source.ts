import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserGL} from "./entity/UserGL"
import { GL } from "./entity/GL"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserGL,GL],
    migrations: [],
    subscribers: [],
})
