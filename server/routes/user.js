import express  from "express";


import {createUser , getUser } from "../controller/user.js"

const router = express.Router();

// const encrypt = bcrypt();

router.get('/', getUser);
router.post('/', createUser);

export default router;