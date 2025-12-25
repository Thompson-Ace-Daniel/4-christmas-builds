import express from 'express';
import { users } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/users', users);

export default router;