import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './api.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3001);

app.use('/api', apiRouter);
