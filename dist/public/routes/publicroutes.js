"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const loginservice_1 = __importDefault(require("../services/loginservice"));
//import loging from '../controllers/login';
const routesPublic = express_1.default.Router();
// Get config vars
dotenv_1.default.config();
routesPublic.get("/", function (req, res) {
    res.json({
        message: "API ALIVE - CHECK DOCUMENTATION FOR PROPER USAGE"
    });
});
routesPublic.post("/login", function (req, res) {
    console.log('Got body:', req.body);
    console.log("Entering login: " + req.body.username);
    const token = (0, loginservice_1.default)({ username: req.body.username });
    console.log("Token: " + token);
    res.json({
        token: token
    });
});
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", function (req, res) {
    res.json({
        message: "Recover Password"
    });
});
// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/otprecover", function (req, res) {
    res.json({
        message: "OTPRecover"
    });
});
exports.default = routesPublic;
