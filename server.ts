import App from "./index";
import RutasPublicas from "./public/routes/publicroutes";
import RutasProtegidas from "./protected/routes/protectedroutes";

// Defines the port where the API is going to be served. It looks up first if there is a env variable named PORT 
// available , otherwise defaults to port 3000. Change it accoring to your needs.
const port = process.env.PORT || '3000';

//Imports the files with routes definitions
App.use('/',RutasPublicas );
App.use('/app',RutasProtegidas );

//Starts the express server
App.listen(port)

console.log("Server started on port:" + port);
