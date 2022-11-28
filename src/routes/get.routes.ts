
import { Router } from "express";

import {
    getLuces,
    getLote,
    getCalle,
    getManzano
} from '../controllers/get.controllers'

const route = Router();
route.get('/getLuces',getLuces);
route.get('/getLote',getLote);
route.get('/getCalle',getCalle);
route.get('/getManzano',getManzano);


export default route;
