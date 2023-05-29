
import { Application } from "express";
import  express from "express";
import indexrouters from "./user/Infrestructure/index.rutes";
import Posrutes from "./user/Infrestructure/post.routes";
// Sepuso router para mejorar la interaccion
export class App{
   private app: Application;
    constructor(private port?:number | string) {
       this.app = express();
       this.settings();
       this.router();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    router(){
        this.app.use(indexrouters);
        this.app.use("/POST",Posrutes);
    }


   async Listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Puerto activado en',3000)
    }
}