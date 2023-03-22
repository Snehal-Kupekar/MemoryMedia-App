import express  from 'express';
import auth from '../middleware/auth.js';
import {signup,signin,getUsers} from "../controller/user.js"

const router = express.Router();

    router.get('/' , getUsers) ;
    router.post('/signup',signup);
    router.post('/signin',signin);

export default router;