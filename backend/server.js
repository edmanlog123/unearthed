import express from 'express';
import cors from 'cors'
import './config/dotenv.js';
import { fileURLToPath } from "url";
import path from 'path';
import giftRoutes from './routes/gift.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors())


app.use('/gifts', giftRoutes);


app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})