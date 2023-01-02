import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {return ( axios.get(url)
    .catch(e => console.log(e)))};


export const createPost = (newPost) =>{
    return (
        axios.post(url,newPost)
    );
} 

// specifically if we want to add part of url i.e {id} then we use patch insteed of post

export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id} , updatedPost`);