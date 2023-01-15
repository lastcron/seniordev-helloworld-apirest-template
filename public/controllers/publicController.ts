import generateAccessToken from '../services/loginservice';

interface loginResponse {
    token: string;
  }
  
  export default class publicController {

    public async login(req: any): Promise<loginResponse> {

      console.log('Got body:', req.body);
      console.log("Entering login: " + req.body.username)
      const token = generateAccessToken({ username: req.body.username });
      console.log("Token: " + token)

      return {
        token:token
      };
    }

    public async recover(req: any): Promise <any> {

      console.log('Got body:', req.body);
      console.log("Entering recover: ");

      return {
        message:"Recover Password"
      }
    };

    public async Register(req: any): Promise <any> {

      console.log('Got body:', req.body);
      console.log("Entering Register: ");

      return {
        message:"Register"
      }
  };


}
