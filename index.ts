import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { useTreblle } from 'treblle';

//loads the environment files
dotenv.config();

//creates an instance of the express server
const app = express();


// Treblle API Monitoring enabling , check https://treblle.com. You need to create an account and generate your 
// apikey and project id. Make sure you create an .env file in the root of your project to add these constants.
useTreblle(app, {
  apiKey: process.env.TREBLLE_APIKEY,
  projectId: process.env.TREBLLE_PROJECTID,
  });

//instantiating the use of CORS globally for all endpoint responses
app.use(cors());
//instantiating the use of GZIP compression globally for all resposnses
app.use (compression());
//defining bodyparser json
app.use(bodyParser.json());
//defining bodyparser json
app.use(bodyParser.urlencoded({ extended: true }));



export default app;