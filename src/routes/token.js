import { Router } from 'express';
import Token from '../controllers/Token.js';

const router = new Router();

router.post('/', Token.store);

export default router;
