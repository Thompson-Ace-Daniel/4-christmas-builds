import express from 'express';

const app = express();
const PORT = process.env.PORT || 7000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/reportCard";


app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));