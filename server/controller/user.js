

import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// export const getUsers = async (req, res) => {
//     try {
//         const UserModel = await UserModel.find();

//         res.status(200).json(UserModel);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

const saltRounds = 10;

export const createUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    user.password = hashedPwd;
    

    const newUser = new User(user);
    
    // console.log(newUser.name);

    try {
        const check = await User.findOne({email : newUser.email});

        if(check){
            console.log("exist");
            res.json("exist");
        }

        else {
            console.log("not exist");
            await newUser.save();
            res.status(201).json(newUser);
        }


    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const loginUser = async (req,res) => {
    try{

            const user = await User.findOne({
                email : req.body.email,
                password: req.body.password,

            })

            if(user){
                console.log(user);
                console.log("got the user");
                res.status(201).json(user);
            }
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}

