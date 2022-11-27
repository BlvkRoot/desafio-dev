import { Request, Response } from "express";
import { ICreateTransactionUseCase } from "./ICreateTransactionUseCase";

export class CreateTransactionController {
    constructor(private readonly createTransaction: ICreateTransactionUseCase) { };
    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.createTransaction.execute({ path: request.file?.path });
            console.log('data::: ', data);
            return response.json({
                message: "Transactions created successfully",
                success: true,
            });
        } catch ({ message }) {
            return response.json({
                message,
                success: false,
            });
        }
    }
}