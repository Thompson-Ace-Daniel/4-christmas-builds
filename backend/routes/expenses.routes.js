import express from 'express';
import { expenses } from '../controllers/expenses.controller.js';

const router = express.Router();

router.post('/expenses', expenses);

export default router;