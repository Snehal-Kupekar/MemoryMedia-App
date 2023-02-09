

import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
    try {
        const UserModel = await UserModel.find();

        res.status(200).json(UserModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const saltRounds = 10;

export const createUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    user.password = hashedPwd;
    

    const newUser = new UserModel(user);
   

    try {
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


