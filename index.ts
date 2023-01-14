import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { useTreblle } from 'treblle';

dotenv.config();
const app = express();


// Treblle API Monitoring enabling , check https://treblle.com

useTreblle(app, {
  apiKey: process.env.TREBLLE_APIKEY,
  projectId: process.env.TREBLLE_PROJECTID,
  });

app.use(cors());
app.use (compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



export default app;