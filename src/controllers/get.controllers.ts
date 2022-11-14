
import { Request, Response } from "express"
import {connet} from '../database/db.database';
import { QueryResult } from "pg";

/**
 * 
 * Aqui se consulta a las base de datos para regresar la  informacion en un formato json
 *  
 */

export const getConsulta= async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta 
        
        
        return res.status(200);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}