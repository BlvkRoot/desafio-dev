import { AppDataSource } from "../../../../data-source";
import { ICreateTransactionsDTO } from "modules/transactions/dtos/ICreateTransactionsDTO";
import { Transactions } from "../entities/Transactions";
import { ITransactionsRepository } from "./ITransactionsRepository";

export class TransactionsRepository implements ITransactionsRepository {
    private repository = AppDataSource.getRepository(Transactions);
    public async save(data: ICreateTransactionsDTO): Promise<void> {
        try {
            const transaction = this.repository.create(data);
            await this.repository.save(transaction);
        } catch ({message}) {
            throw new Error(message);
        }
    }

    public async findAll(): Promise<Transactions[]> {
        try {
            return await this.repository.find();
        } catch ({message}) {
            throw new Error(message);
        }
    };

}