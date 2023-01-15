
import express from 'express';
import dotenv from 'dotenv';
import publicController from '../controllers/publicController';


const routesPublic = express.Router();
const controller = new publicController();


// Get config vars
dotenv.config();


routesPublic.get("/", function (req, res) {

  res.json({
    message:"API ALIVE - CHECK DOCUMENTATION FOR PROPER USAGE"
  });

});


routesPublic.post("/login", async function (req, res) {
  
  const response = await controller.login(req)
  
  res.json({
    response
  });

});
  
// recover password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/recover", async function (req, res) {

  const response = await controller.recover(req)
  
  res.json({
    response
  });
    
  });

// OTP password. ( Needs to be a Post instead of a GET - It is intentionally a GET for Testing Purposes only)
routesPublic.get("/register", async function (req, res) {
    
  const response = await controller.Register(req)
  
  res.json({
    response
  });

  });
  
  export default routesPublic;