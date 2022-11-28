
import { Request, Response } from "express"
import {connet} from '../database/db.database';
import { QueryResult } from "pg";

/**
 * 
 * Aqui se consulta a las base de datos para regresar la  informacion en un formato json
 *  
 */
export const getLote = async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta 

        const con = await connet();
        const lote:QueryResult = await con.query('SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM (SELECT ST_AsGeoJSON(ST_Transform(lg.area,4326))::json As geometry, row_to_json((loteid,estado,calleid)) As properties FROM lote As lg) As f) As fc');
        //const lote:QueryResult = await con.query('SELECT * FROM public.lote ORDER BY loteid ASC');
        //const prueba:QueryResult= await con.query('SELECT * FROM prueba');
        return res.status(200).json(lote.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}

export const getPrueba = async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta
        const con = await connet();

        const prueba:QueryResult= await con.query('SELECT * FROM prueba');
        return res.status(200).json(prueba.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}

export const getManzano = async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta

        const con = await connet();
        const manzano:QueryResult = await con.query('SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM (SELECT ST_AsGeoJSON(ST_Transform(lg.area,4326))::json As geometry, row_to_json((manzanoid,name_code)) As properties FROM manzano As lg) As f) As fc');
        //const lote:QueryResult = await con.query('SELECT * FROM public.lote ORDER BY loteid ASC');
        //const prueba:QueryResult= await con.query('SELECT * FROM prueba');
        return res.status(200).json(manzano.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}

export const getCalle = async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta

        const con = await connet();
        const lote:QueryResult = await con.query('SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM (SELECT ST_AsGeoJSON(ST_Transform(lg.longitud,4326))::json As geometry, row_to_json((calleid,name)) As properties FROM calle As lg) As f) As fc');
        //const lote:QueryResult = await con.query('SELECT * FROM public.lote ORDER BY loteid ASC');
        //const prueba:QueryResult= await con.query('SELECT * FROM prueba');
        return res.status(200).json(lote.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}

export const getLuces = async (req:Request, res:Response):Promise<Response>=>{

    try{ //Con el try realizamos que si alla un error devuelve una respuesta para que no se quede esperado una respuesta

        const con = await connet();
        const lote:QueryResult = await con.query('SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM (SELECT ST_AsGeoJSON(ST_Transform(lg.punto,4326))::json As geometry, row_to_json((lucesid,estado,tipo)) As properties FROM luces As lg) As f) As fc');
        //const lote:QueryResult = await con.query('SELECT * FROM public.lote ORDER BY loteid ASC');
        //const prueba:QueryResult= await con.query('SELECT * FROM prueba');
        return res.status(200).json(lote.rows);
    }

    catch(e){
        return res.status(500).json({
            message:'Error interno'
        })
    }

}
