import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';
import fs from 'fs';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(tmpFolder, { recursive: true })
      cb(null, tmpFolder)
    },
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
  currDir: resolve(__dirname, '..', '..')
};
