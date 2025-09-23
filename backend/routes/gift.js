import express from 'express';
import { fileURLToPath } from "url";
import path from 'path';
import gift from '../data/gift.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(gift);
});

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })
export default router;