import { IUploadParams } from "./CreateTransactionUseCase";

export interface ICreateTransactionUseCase {
    execute(path: IUploadParams): Promise<void>;
}