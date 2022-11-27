import { TransactionsRepository } from "../infra/repositories/TransactionsRepository";
import { CreateTransactionController } from "../useCases/createTransaction/CreateTransactionController";
import { CreateTransactionUseCase } from "../useCases/createTransaction/CreateTransactionUseCase";

export const createTransactionFactory = () => {
    const transactionRepository = new TransactionsRepository();
    const transactionUseCase = new CreateTransactionUseCase(transactionRepository);
    const transactionController = new CreateTransactionController(transactionUseCase);
    return transactionController;
}