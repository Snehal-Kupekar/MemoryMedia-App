

import mongoose from "mongoose";
import UserModel from "../models/userModel.js";


export const getUser = async (req, res) => {
    try {
        const UserModel = await UserModel.find();

        res.status(200).json(userModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new userModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


