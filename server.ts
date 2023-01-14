import App from "./index";
import RutasPublicas from "./public/routes/publicroutes";
import RutasProtegidas from "./protected/routes/protectedroutes";


const port = process.env.PORT || '3000';


App.use('/',RutasPublicas );
App.use('/app',RutasProtegidas );


App.listen(port)
console.log("Server started on port:" + port);
