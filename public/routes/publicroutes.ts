
import express from 'express';

const routesPublic = express.Router();

// login. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/", function (req, res) {
    res.send("Login");
  });
  
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", function (req, res) {
    res.send("Recover Password");
  });

// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/otprecover", function (req, res) {
    res.send("OTPRecover");
  });
  
  export default routesPublic;