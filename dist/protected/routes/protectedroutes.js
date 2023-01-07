"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routesProtected = express_1.default.Router();
// login. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesProtected.get("/", function (req, res) {
    res.send("protected dashboard");
});
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesProtected.get("/module1", function (req, res) {
    res.send("Module 1");
});
// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesProtected.get("/module2", function (req, res) {
    res.send("Module 2");
});
exports.default = routesProtected;
