import axios from "axios";

//axios.get(url) can be replaced with API.get('/posts)
// const url = "http://localhost:5000/posts";
// const userUrl = "http://localhost:5000/users";

const API = axios.create({baseURL:'http://localhost:5000/'});
// const API = axios.create({baseURL:'https://memoriesappbackend.onrender.com/'});



export const fetchPosts = (id) => {
  console.log("in axios of fetch post:=> ",id);
  return API.get(`/posts/${id}`).catch((e) => console.log(e));
};

export const createPost = (newPost) => {
  return API.post('/posts', newPost);
};

// specifically if we want to add part of url i.e {id} then we use patch insteed of post

export const updatePost = (id, updatedPost) =>
    API.put(`/posts/${id}`, updatedPost);

export const deletePost = (id, post) => API.delete(`/posts/${id}`, post);

// user connection
export const fetchUser = () => {
  return API.get('/users').catch((e) => console.log(e));
};

export const createUser = (newUser) => {
  const data = API.post('/users/signup',newUser)
  console.log("axios side respond -> ",data);
  return data;
  
};

export const loginUser = (user)   =>{
  const loginRes = API.post('/users/signin',user);
  console.log("axios login side respond -> ",loginRes);
  return loginRes;
  
}