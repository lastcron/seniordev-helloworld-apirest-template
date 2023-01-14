"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const treblle_1 = require("treblle");
//loads the environment files
dotenv_1.default.config();
//creates an instance of the express server
const app = (0, express_1.default)();
// Treblle API Monitoring enabling , check https://treblle.com. You need to create an account and generate your 
// apikey and project id. Make sure you create an .env file in the root of your project to add these constants.
(0, treblle_1.useTreblle)(app, {
    apiKey: process.env.TREBLLE_APIKEY,
    projectId: process.env.TREBLLE_PROJECTID,
});
//instantiating the use of CORS globally for all endpoint responses
app.use((0, cors_1.default)());
//instantiating the use of GZIP compression globally for all resposnses
app.use((0, compression_1.default)());
//defining json format for all responses
app.use(body_parser_1.default.json());
//defining urlencoding with extended format
app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.default = app;
