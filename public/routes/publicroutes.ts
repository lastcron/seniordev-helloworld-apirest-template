
import express from 'express';
import dotenv from 'dotenv';
import generateAccessToken from '../services/loginservice';
//import loging from '../controllers/login';


const routesPublic = express.Router();

// Get config vars
dotenv.config();


routesPublic.get("/", function (req, res) {
  
  res.json({
    message:"API ALIVE - CHECK DOCUMENTATION FOR PROPER USAGE"
  });

});


routesPublic.post("/login", function (req, res) {
  
  console.log('Got body:', req.body);
  console.log("Entering login: " + req.body.username)
  const token = generateAccessToken({ username: req.body.username });
  console.log("Token: " + token)
  res.json({
    token:token
  });

});
  
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", function (req, res) {

  res.json({
    message:"Recover Password"
  });
    
  });

// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/otprecover", function (req, res) {
    
  res.json({
    message:"OTPRecover"
  });

  });
  
  export default routesPublic;