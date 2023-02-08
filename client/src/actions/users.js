import * as api from '../api'

export const getUser = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchUser();

        dispatch({type : 'FETCH_ALL' , payload : data});

    } catch ( error){
        console.log(error.message);
    }
}

export const createUser = (users) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(users) ;
        console.log("data",data);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
}


