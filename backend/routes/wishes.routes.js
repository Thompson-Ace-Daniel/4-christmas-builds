import express from 'express';
import { wishes } from '../controllers/wishes.controller.js';

const router = express.Router();

router.post('/wishes', wishes);

export default router;