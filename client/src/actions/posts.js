import * as api from '../api'

export const getPosts = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts();

        dispatch({type : 'FETCH_ALL' , payload : data});

    } catch ( error){
        console.log(error.message);
    }
}

export const createPost = (posts) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(posts) ;
        console.log(data);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}


//  const {data} => implies you r destructing a data got from api 
export const updatePost = (id,post) => async (dispatch) =>{
    try {
        const {data} = await api.updatePost(id,post);

        dispatch({type: 'UPDATE' , payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
};  