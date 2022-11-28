import { ICreateTransactionsDTO } from "../../../dtos/ICreateTransactionsDTO";
import { Transactions } from "../../entities/Transactions";
import { ITransactionsRepository } from "../ITransactionsRepository";

export class TransactionInMemoryRepository implements ITransactionsRepository {
    private transactions: Transactions[] = [];
    public async save(data: ICreateTransactionsDTO): Promise<void> {
        this.transactions.push(data);
    }

    public async findAll(): Promise<Transactions[]> {
        return this.transactions;
    }
}