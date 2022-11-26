import { Request, Response, Router } from "express";
import multer from "multer";
import FileUploadController from "./useCases/fileUpload/FileUploadController";
import uploadConfig from './config/upload';

const route = Router();
const upload = multer(uploadConfig);

route.get('/', (req: Request, res: Response) => {
    return res.json({
        message: "Welcome to CNAB APIiii!",
        success: true,
    });
});

route.post('/upload', upload.single('upload-file'), FileUploadController.handle);

export { route };