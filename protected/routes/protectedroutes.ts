import express from 'express';
import jwtconfirmation from '../services/jwtconfirmation';

const routesProtected = express.Router();

// Route for Global Dashboard - Protected by the JWT Middleware
routesProtected.get("/", jwtconfirmation , function (req, res) {
   
  console.log("Entering protected route ")
    res.json({
      message:"protected dashboard"
    });

  });
  
// Route for Module 1 Dashboard - Protected by the JWT Middleware
routesProtected.get("/module1", jwtconfirmation , function (req, res) {
    
    res.json({
      message:"Module 1"
    });

  });

// Route for Module 2 Dashboard - Protected by the JWT Middleware
routesProtected.get("/module2",jwtconfirmation, function (req, res) {
    
    res.json({
      message:"Module 2"
    });

  });
  
  export default routesProtected;