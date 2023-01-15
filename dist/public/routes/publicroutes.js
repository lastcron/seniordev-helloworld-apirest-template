"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const publicController_1 = __importDefault(require("../controllers/publicController"));
const routesPublic = express_1.default.Router();
const controller = new publicController_1.default();
// Get config vars
dotenv_1.default.config();
routesPublic.get("/", function (req, res) {
    res.json({
        message: "API ALIVE - CHECK DOCUMENTATION FOR PROPER USAGE"
    });
});
routesPublic.post("/login", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield controller.login(req);
        res.json({
            response
        });
    });
});
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield controller.recover(req);
        res.json({
            response
        });
    });
});
// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/register", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield controller.Register(req);
        res.json({
            response
        });
    });
});
exports.default = routesPublic;
