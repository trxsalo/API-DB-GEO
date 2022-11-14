
import { Router } from "express";

import {
    getLote,
    getPrueba
} from '../controllers/get.controllers'

const route = Router();

route.get('/getLote',getLote);
route.get('/getPrueba',getPrueba);


export default route;
