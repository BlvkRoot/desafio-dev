import { TransactionsRepository } from "../infra/repositories/TransactionsRepository";
import { FindAllTransactionsController } from "../useCases/findAllTransactions/FindAllTransactionsController";
import { FindAllTransactionsUseCase } from "../useCases/findAllTransactions/FindAllTransactionsUseCase";

export const findAllTransactionsFactory = () => {
    const transactionRepository = new TransactionsRepository();
    const transactionUseCase = new FindAllTransactionsUseCase(transactionRepository);
    const transactionController = new FindAllTransactionsController(transactionUseCase);
    return transactionController;
}