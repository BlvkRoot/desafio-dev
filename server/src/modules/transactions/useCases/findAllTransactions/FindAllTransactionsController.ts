import { Request, Response } from "express";
import { IFindAllTransactionsUseCase } from "./IFindAllTransactionsUseCase";

export class FindAllTransactionsController {
    constructor(private findAllTransactions: IFindAllTransactionsUseCase) {};
    public async handle(request: Request, response: Response): Promise<Response> {
        const transactions = await this.findAllTransactions.execute();
        return response.json({
            success: true,
            data: transactions
        });
    }
}