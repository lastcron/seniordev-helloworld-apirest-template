"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// debug library
const debug = require("debug");
// defintion of a logging descriptor
const protectedEndpointLog = debug('HelloWorldAPI:protectedEndpoints');
class publicController {
    constructor() {
        this.maindashboard = (req) => {
            return new Promise((resolve, reject) => {
                protectedEndpointLog('Got body:', req.body);
                protectedEndpointLog("Entering maindashboard: ");
                try {
                    //Make this true to enable session confirmation on this route
                    if (true) {
                        let session = req.session;
                        if (session.user) {
                            resolve({ message: "protected dashboard, User: " + session.user });
                        }
                        else
                            resolve({ message: "Unathorized Access" });
                    }
                    resolve({ message: "protected dashboard" });
                }
                catch (_a) {
                    reject({ error: "Login unexpected error" });
                }
            });
        };
        this.module1 = (req) => {
            return new Promise((resolve, reject) => {
                protectedEndpointLog('Got body:', req.body);
                protectedEndpointLog("Entering Module 1: ");
                try {
                    resolve({ message: "protected Module 1" });
                }
                catch (_a) {
                    reject({ error: "Login unexpected error" });
                }
            });
        };
        this.module2 = (req) => {
            return new Promise((resolve, reject) => {
                protectedEndpointLog('Got body:', req.body);
                protectedEndpointLog("Entering Module 2: ");
                try {
                    resolve({ message: "protected Module 2" });
                }
                catch (_a) {
                    reject({ error: "Login unexpected error" });
                }
            });
        };
    }
}
exports.default = publicController;
