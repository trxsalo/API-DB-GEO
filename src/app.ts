
import express,{ Application} from "express";
import morgan from "morgan";
import Inicio from './routes/inicio.routes'
import get from './routes/get.routes'
import {PROCESS_ENV} from '../environments/env' //variables de entorno

export class App{

    private app:Application;
    
    constructor( private port?: number |string){ //inicializacion
        this.app=express(); //usa express
        this.configuracion(); //inicializa la configuracion para port
        this.middleware(); //mensaje por consola y otras ayuda
        this.router();
    }

    middleware(){
        this.app.use(morgan('dev')); 
        this.app.use(express.json());
    }
    configuracion(){

        this.app.set('port', this.port || PROCESS_ENV.PORT_SERVE || 3000 );
    }
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Puerto en el server', this.app.get('port'));
    }

    router(){
        this.app.use('/',Inicio);
        this.app.use(get);

    }
}
