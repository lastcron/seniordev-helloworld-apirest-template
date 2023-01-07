import express from 'express';

const routesProtected = express.Router();

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
  
  export default routesProtected;