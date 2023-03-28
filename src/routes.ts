import { Router } from 'express';
import { scanCookiesController, manageCookiesController } from './controllers/cookieController';
import authMiddleware from './authMiddleware';

const router = Router();

router.post('/scan', authMiddleware, scanCookiesController);
router.post('/manage', authMiddleware, manageCookiesController);

export default router;