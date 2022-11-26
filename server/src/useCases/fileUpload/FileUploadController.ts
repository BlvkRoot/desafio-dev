import { Request, Response } from "express";
import { FileUploadUseCase } from "./FileUploadUseCase";

class FileUploadController {
    public async handle(request: Request, response: Response): Promise<any> {
        await FileUploadUseCase.execute({ path: request.file?.path});
        return response.json({
            message: "Upload successfully made",
            success: true,
        });
    }
}

export default new FileUploadController();