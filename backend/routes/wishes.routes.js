import express from 'express';
import { wishesReq, wishesRes } from '../controllers/wishes.controller.js';

const router = express.Router();

router.post('/wishes', wishesReq);
router.get('/wishes', wishesRes);

export default router;