import express from 'express';
import { messages } from '../controllers/messages.controller.js';

const router = express.Router();

router.post('/messages', messages);

export default router;