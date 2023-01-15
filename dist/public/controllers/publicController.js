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
const loginservice_1 = __importDefault(require("../services/loginservice"));
class publicController {
    login(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Got body:', req.body);
            console.log("Entering login: " + req.body.username);
            const token = (0, loginservice_1.default)({ username: req.body.username });
            console.log("Token: " + token);
            return {
                token: token
            };
        });
    }
    recover(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Got body:', req.body);
            console.log("Entering recover: ");
            return {
                message: "Recover Password"
            };
        });
    }
    ;
    Register(req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Got body:', req.body);
            console.log("Entering Register: ");
            return {
                message: "Register"
            };
        });
    }
    ;
}
exports.default = publicController;
