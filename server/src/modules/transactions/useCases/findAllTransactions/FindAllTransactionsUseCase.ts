import { ICreateTransactionsDTO } from "modules/transactions/dtos/ICreateTransactionsDTO";
import { ITransactionsRepository } from "modules/transactions/infra/repositories/ITransactionsRepository";
import { IFindAllTransactionsUseCase } from "./IFindAllTransactionsUseCase";

export class FindAllTransactionsUseCase implements IFindAllTransactionsUseCase {
    constructor(private readonly transactionRepo: ITransactionsRepository) { };
    public async execute(): Promise<ICreateTransactionsDTO[]> {
        try {
            return await this.transactionRepo.findAll();
        } catch ({ message }) {
            throw new Error(message)
        }
    }
}