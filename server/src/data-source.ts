import { Transactions } from "./modules/transactions/infra/entities/Transactions";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    // host: process.env.DB_HOST || "localhost",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME,
    synchronize: true,
    // logging: true,
    entities: [Transactions],
    subscribers: [],
    migrations: [],
})