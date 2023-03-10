"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateAccessToken(user) {
    //****************** */
    //Extract user objet parameters
    // Implement sequalize or mongodb
    //Check if the username is authorized against your database
    //***************** */
    return jsonwebtoken_1.default.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10m' });
}
exports.generateAccessToken = generateAccessToken;
function generateRefreshToken(user) {
    //****************** */
    //Extract user objet parameters
    // Implement sequalize or mongodb
    //Check if the username is authorized against your database
    //***************** */
    return jsonwebtoken_1.default.sign(user, process.env.REFRESH_SECRET, { expiresIn: '1d' });
}
exports.generateRefreshToken = generateRefreshToken;
