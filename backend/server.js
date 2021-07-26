
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbUrl= config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/products', productRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '/../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/build'))
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = config.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
