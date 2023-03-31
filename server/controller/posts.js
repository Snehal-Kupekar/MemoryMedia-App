//this file is made so that all the routes ca kept here and there is no complexity in /routes/post.js
//import this all function in routes/post.js 

import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
       
        const {id} = req.params;

        console.log("current user /getpost :", id);

        const postMessages = await PostMessage.find({userId : id});

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {userId,title,message ,creator , selectedFile,createdAt} = req.body;
    
    // const newPost = new PostMessage(post);
    // console.log("create post data", newPost.userId);

    try {
        const result = await PostMessage.create({userId,title,message ,creator , selectedFile,createdAt});
        console.log("create post from server:" , result);
        result.save();
        res.status(201).json(result);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// -- > https://www.memories/post/123
//  here 123 = id 

export const updatePost = async (req, res) => {
    //object destructuring , rename it to _id
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this post');

    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatePost);
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this post');

    const deletePost = await PostMessage.findByIdAndDelete(_id, post);

    res.status(201).json(deletePost);
}