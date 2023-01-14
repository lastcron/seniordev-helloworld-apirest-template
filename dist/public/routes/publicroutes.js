"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import loging from '../controllers/login';
const routesPublic = express_1.default.Router();
// login. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/", function (req, res) {
    res.json({
        message: "Hello Login"
    });
});
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", function (req, res) {
    res.send("Recover Password");
});
// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/otprecover", function (req, res) {
    res.send("OTPRecover");
});
exports.default = routesPublic;
