// debug library
import debug = require('debug');
// defintion of a logging descriptor
const protectedEndpointLog = debug('HelloWorldAPI:protectedEndpoints'); 
   
   export default class publicController {

    public maindashboard = (req: any) => { 
          return new Promise <any> ( (resolve,reject) => {
          
            protectedEndpointLog('Got body:', req.body);
            protectedEndpointLog("Entering maindashboard: ")
          try {
            //Make this true to enable session confirmation on this route
            if (true){
              let session=req.session;
              
              if(session.user){
                resolve ({message:"protected dashboard, User: " + session.user});
              } else
                resolve ({message:"Unathorized Access"});
            }
            
            resolve ({message:"protected dashboard"});

          }
          catch{


            reject ({error:"Login unexpected error"});

          }
          })
    };

    public module1 = (req: any) => { 
      return new Promise <any> ( (resolve,reject) => {
      
        protectedEndpointLog('Got body:', req.body);
        protectedEndpointLog("Entering Module 1: ")
      try {
        resolve ({message:"protected Module 1"});
      }
      catch{
        reject ({error:"Login unexpected error"});
      }
      })

    };

    public module2 = (req: any) => { 
      return new Promise <any> ( (resolve,reject) => {
      
        protectedEndpointLog('Got body:', req.body);
        protectedEndpointLog("Entering Module 2: ")
      try {
        resolve ({message:"protected Module 2"});
      }
      catch{
        reject ({error:"Login unexpected error"});
      }
      })

    };
    

}
