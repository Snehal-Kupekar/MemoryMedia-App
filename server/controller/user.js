
import { default as dotenv } from "dotenv"; 
dotenv.config({ path: '../.env' });
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}



export const signup = async (req, res) => {
   const {name,email,password ,passwordConf} = req.body;
    
    try {

        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({message:"User already exists."});

        if(password !== passwordConf) return res.status(400).json({message:"Passwords does not match"});

        const hashPassword = await bcrypt.hash(password,10);

        const result = await User.create({name,email,password:hashPassword});

        const token = jwt.sign({email:result.email , id: result._id} , process.env.SECRETE , {expiresIn:'1h'});

        res.status(200).json({result,token});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const signin = async (req,res) => {
    
    try{
            const {email,password} = req.body;

            const existingUser = await User.findOne({email})

            if(!existingUser) return res.status(404).json({message: "User doesn't exist"});
            
            const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

            if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credential"});


            const token = jwt.sign({email:existingUser.email , id: existingUser._id} , process.env.SECRETE ,{expiresIn: "1h"});
            // console.log("signin done");
            res.status(202).json({result: existingUser ,token});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

