
import { Router } from "express";

import {
    getConsulta
} from '../controllers/get.controllers'

const route = Router();

route.get('/get',getConsulta);

export default route;