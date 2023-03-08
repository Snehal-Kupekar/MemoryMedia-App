import express  from 'express';
// import { loginUser } from "../../client/src/actions/users.js";


import {createUser , loginUser} from "../controller/user.js"

const router = express.Router();

// const encrypt = bcrypt();

// router.get('/', getUsers);
router.post('/', loginUser);
router.post('/', createUser);
// router.post('/' ,loginUser);

export default router;