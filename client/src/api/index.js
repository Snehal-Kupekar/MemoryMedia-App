import axios from "axios";

//axios.get(url) can be replaced with API.get('/posts)
// const url = "http://localhost:5000/posts";
// const userUrl = "http://localhost:5000/users";

const API = axios.create({baseURL:'http://localhost:5000/'});



export const fetchPosts = () => {
  return API.get('/posts').catch((e) => console.log(e));
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

export const createUser =  (newUser) => {
  console.log("inside client",newUser);
  return API.post('/users/signup', newUser).catch((e) => console.log(e));
   
  
};

export const loginUser = async (user)   =>{
  try{
    const loginRes = await API.post('/users/signin',user);
    console.log("loginRes from axios",loginRes.data.result);
    return loginRes.data.token;
  }
  catch(error){
    console.log(error);
  }
  
}