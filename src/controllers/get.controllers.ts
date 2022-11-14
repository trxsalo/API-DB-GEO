
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
        const con = await connet(); 
        const lote:QueryResult = await con.query('SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM (SELECT ST_AsGeoJSON(lg.area)::json As geometry, row_to_json((loteid, name_code)) As properties FROM lote As lg) As f) As fc');
        return res.status(200).json(lote.rows)
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}