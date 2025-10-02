import express from 'express';
import giftController from '../controllers/gift.js';


const router = express.Router();

router.get('/', giftController.getGifts);

router.get('/:giftId', giftController.getGiftById)
export default router;