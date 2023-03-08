import * as api from '../api'

// export const getUser = () => async (dispatch) =>{
//     try {
//         const {data} = await api.fetchUser();

//         dispatch({type : 'FETCH_ALL' , payload : data});

//     } catch ( error){
//         console.log(error.message);
//     }
// }

export const createUser = (user) => async (dispatch) =>{
    try {
        const {data} = await api.createUser(user) ;
        console.log("data exist or not:",data);
        dispatch({type: 'CREATE', payload: data});
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const loginUser = (user) => async (dispatch) =>{
    try{
        const {data} = await api.loginUser(user)
        dispatch({type: 'CREATE', payload: data});
        console.log("login data",data);
    }
    catch(error){
        console.log(error.message);
    }
}


