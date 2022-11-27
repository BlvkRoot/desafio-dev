import { AppDataSource } from "../../../../data-source";
import { ICreateTransactionsDTO } from "modules/transactions/dtos/ICreateTransactionsDTO";
import { Transactions } from "../entities/Transactions";
import { ITransactionsRepository } from "./ITransactionsRepository";

export class TransactionsRepository implements ITransactionsRepository {
    private repository = AppDataSource.getRepository(Transactions);
    public async save(data: ICreateTransactionsDTO): Promise<void> {
        this.validateTransactionFields(data);
        data.transactionValue = String(Number(data.transactionValue) / Number(100.00));
        const transaction = this.repository.create(data);
        await this.repository.save(transaction);
    }

    public async findAll(): Promise<Transactions[]> {
        try {
            return await this.repository.find();
        } catch ({ message }) {
            throw new Error(message);
        }
    };

    private validateTransactionFields(data: ICreateTransactionsDTO): void {
        if (data.transactionType.length !== 1) throw new Error('Invalid transaction type');
        if (data.transactionOccurrenceDate.length !== 8) throw new Error('Invalid occurrence date');
        if (data.transactionValue.length !== 10) throw new Error('Invalid transaction value');
        if (data.transactionCPF.length !== 11) throw new Error('Invalid CPF');
        if (data.transactionCard.length !== 12) throw new Error('Invalid transaction card');
        if (data.transactionTime.length !== 6) throw new Error('Invalid transaction time');
        if (data.transactionStoreOwner.length !== 14) throw new Error('Invalid store owner');
        if (data.transactionStoreName.length > 19) throw new Error('Invalid store name');
    }

}