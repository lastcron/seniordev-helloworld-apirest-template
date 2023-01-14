"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtconfirmation_1 = __importDefault(require("../services/jwtconfirmation"));
const routesProtected = express_1.default.Router();
// Route for Global Dashboard - Protected by the JWT Middleware
routesProtected.get("/", jwtconfirmation_1.default, function (req, res) {
    console.log("Entering protected route ");
    res.json({
        message: "protected dashboard"
    });
});
// Route for Module 1 Dashboard - Protected by the JWT Middleware
routesProtected.get("/module1", jwtconfirmation_1.default, function (req, res) {
    res.json({
        message: "Module 1"
    });
});
// Route for Module 2 Dashboard - Protected by the JWT Middleware
routesProtected.get("/module2", jwtconfirmation_1.default, function (req, res) {
    res.json({
        message: "Module 2"
    });
});
exports.default = routesProtected;
