"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const dotenv_1 = __importDefault(require("dotenv"));
const publicroutes_1 = __importDefault(require("./public/routes/publicroutes"));
const protectedroutes_1 = __importDefault(require("./protected/routes/protectedroutes"));
dotenv_1.default.config();
const port = process.env.PORT || '3000';
index_1.default.use('/', publicroutes_1.default);
index_1.default.use('/app', protectedroutes_1.default);
index_1.default.listen(port);
console.log("Server started on port:" + port);
