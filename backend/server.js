import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import expensesRouter from './routes/expenses.routes.js';
import messagesRouter from './routes/messages.routes.js';
import usersRouter from './routes/users.routes.js';
import wishesRouter from './routes/wishes.routes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config({ quiet: true });
const app = express();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());
app.use(cors());

connectDB(DATABASE_URL);

app.use('/api', expensesRouter);
app.use('/api', messagesRouter);
app.use('/api', usersRouter);
app.use('/api', wishesRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));