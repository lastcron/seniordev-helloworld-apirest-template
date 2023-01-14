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
dotenv_1.default.config();
const app = (0, express_1.default)();
// Treblle API Monitoring enabling , check https://treblle.com
(0, treblle_1.useTreblle)(app, {
    apiKey: process.env.TREBLLE_APIKEY,
    projectId: process.env.TREBLLE_PROJECTID,
});
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.default = app;
