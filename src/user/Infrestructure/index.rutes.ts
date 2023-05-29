import {Router} from 'express';
import {controladores} from './controladores';
const indexrouters = Router();

indexrouters.route('/')
.get(controladores);

export default indexrouters;