import { createReadStream } from "fs";
import { unlink } from "fs/promises";
import { ITransactionsRepository } from "modules/transactions/infra/repositories/ITransactionsRepository";
import { ICreateTransactionUseCase } from "./ICreateTransactionUseCase";

export interface IUploadParams {
    path: string | undefined;
}
export class CreateTransactionUseCase implements ICreateTransactionUseCase {

    constructor(protected readonly transactionRepo: ITransactionsRepository) { }
    public async execute({ path }: IUploadParams): Promise<void> {
        let data = '';
        const dataReader = createReadStream(`${path}`);
        dataReader.on('data', chunk => data += chunk); // Append all chunks to data
        dataReader.on('end', async () => {
            const transactions = data.split('\n');
            for (const transaction of transactions) {
                const transactionType = transaction.slice(0, 1);
                const transactionOccurrenceDate = transaction.slice(1, 9);
                const transactionValue = transaction.slice(9, 19);
                const transactionCPF = transaction.slice(19, 30);
                const transactionCard = transaction.slice(30, 42);
                const transactionTime = transaction.slice(42, 48);
                const transactionStoreOwner = transaction.slice(48, 62);
                const transactionStoreName = transaction.slice(62, 81);
                try {
                    await this.transactionRepo.save({
                        transactionType,
                        transactionOccurrenceDate,
                        transactionValue,
                        transactionCPF,
                        transactionCard,
                        transactionTime,
                        transactionStoreOwner,
                        transactionStoreName,
                    });
                } catch ({ message }) {
                    console.warn(`Error uploading file: ${message}`);
                }
            }
            await unlink(`${path}`); // Remove file from temp
        });
        dataReader.on('error', err => { throw new Error(`${err.stack}`) });
    }
}