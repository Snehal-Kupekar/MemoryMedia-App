import axios from 'axios';


const url = 'http://localhost:5000/posts';
const userUrl = 'http://localhost:5000/users'

export const fetchPosts = () => {
    return (axios.get(url)
        .catch(e => console.log(e)))
};


export const createPost = (newPost) => {
    return (
        axios.post(url, newPost)
    );
}

// specifically if we want to add part of url i.e {id} then we use patch insteed of post

export const updatePost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);

export const deletePost = (id, post) => axios.delete(`${url}/${id}`, post);



// user connection 
 export const fetchUser = () =>{
    return (axios.get(userUrl)
    .catch(e => console.log(e)))
 };

 export const createUser = () =>{
    return (axios.post(userUrl))
    .catch(e=> console.log(e));
 }
