import { ICreateTransactionsDTO } from "modules/transactions/dtos/ICreateTransactionsDTO";
import { Transactions } from "../entities/Transactions";

export interface ITransactionsRepository {
    save(data: ICreateTransactionsDTO): Promise<void>;
    findAll(): Promise<Transactions[]>;
}