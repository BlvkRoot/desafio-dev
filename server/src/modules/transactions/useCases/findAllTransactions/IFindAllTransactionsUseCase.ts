import { ICreateTransactionsDTO } from "modules/transactions/dtos/ICreateTransactionsDTO";


export interface IFindAllTransactionsUseCase {
    execute(): Promise<ICreateTransactionsDTO[]>;
}