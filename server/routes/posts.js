import express from 'express';

import { createPost, getPosts, updatePost, deletePost } from '../controller/posts.js';

const router = express.Router();

router.get('/:id', getPosts);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;



/* 
--> app.use('/posts' , postRoutes);< --
this means that all the routrs on post.js will start with prefix posts instead of 
http://localhost:5000.
They will start like below url 
http://localhost:5000/posts 

*/