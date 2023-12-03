import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import morgan from 'morgan';
import todoRouter from './todo/todo.routes.js';
import { connectDB } from './db.js';

connectDB();

config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(todoRouter);

app.listen(port, () => {
	console.log(`http://localhost:${port}/`);
});
