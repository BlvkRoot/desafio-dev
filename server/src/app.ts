import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { route } from './routes';
import cors from 'cors';
import './infra/database'

const app = express();

app.use(express.json());
app.use(cors())
app.use(route);

export { app };