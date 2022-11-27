import { Request, Response, Router } from "express";
import { createTransactionFactory } from "./modules/transactions/factory/createTransactionFactory";
import { findAllTransactionsFactory } from "./modules/transactions/factory/findAllTransactionsFactory";
import multer from "multer";
import uploadConfig from './config/upload';

const route = Router();
const upload = multer(uploadConfig);

route.get('/', (req: Request, res: Response) => {
    return res.json({
        message: "Welcome to CNAB API!",
        success: true,
    });
});

route.post('/upload-transaction', upload.single('upload-file'), async (request: Request, response: Response) => {
    await createTransactionFactory().handle(request, response)
});

route.get('/transactions', async (request: Request, response: Response) => {
    await findAllTransactionsFactory().handle(request, response)
});

export { route };