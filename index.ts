import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(
  cors({
    exposedHeaders: ['Content-Disposition', 'x-new-token'],
  }),
);
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

const port = process.env.PORT || 30100;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
