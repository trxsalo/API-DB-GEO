
import { Pool } from 'pg'
import {PROCESS_ENV} from '../../environments/env'
export async function connet() {

    const con = await new Pool({
        user: PROCESS_ENV.USER_DB,
        host: PROCESS_ENV.HOST_DB,
        database: PROCESS_ENV.DATABSE,
        password: '4444',
        port: PROCESS_ENV.SERVER_PORT
    })
    return con;
}
