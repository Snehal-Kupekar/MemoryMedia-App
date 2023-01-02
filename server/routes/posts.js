import express from 'express';

import { createPost, getPosts ,updatePost } from '../controller/posts.js';

const router = express.Router();

router.get('/' , getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost);

export default router;



/* 
--> app.use('/posts' , postRoutes);< --
this means that all the routrs on post.js will start with prefix posts instead of 
http://localhost:5000.
They will start like below url 
http://localhost:5000/posts 

*/