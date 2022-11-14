import { Router } from "express";

import {getInicio} from '../controllers/index.controllers'


const route = Router();

route.get('/', getInicio);

export default route;