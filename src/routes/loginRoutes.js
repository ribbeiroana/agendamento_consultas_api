import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
    res.send('ola');
});

export default router;
