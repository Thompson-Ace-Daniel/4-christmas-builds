import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/db';

dotenv.config({ quiet: true });
const app = express();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());
app.use(cors());

connectDB(DATABASE_URL);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));