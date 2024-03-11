import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import Container from 'typedi';
import clientRoute from './routes/clientRoute';
import { AsyncError } from './middlewares/asyncError';
import { testDBConnection } from './db/connection';

dotenv.config();

const asyncError = Container.get(AsyncError);

const port = process.env.PORT || 30100;

const app = express();

app.use(
  cors({
    exposedHeaders: ['Content-Disposition'],
  }),
);
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());

testDBConnection();

app.use('/clients', clientRoute);

app.use(asyncError.errorHandling);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
