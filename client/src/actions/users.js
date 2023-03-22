import * as api from '../api'

export const getUser = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchUser();

        // dispatch({type : 'FETCH_ALL' , payload : data});

    } catch ( error){
        console.log(error.message);
    }
}

export const createUser = (user) => async (dispatch) =>{
    try {
        const {data} = await api.createUser(user) ;

        console.log("signRes - response from action/createuser=>",data);
        
        return data;
       
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const loginUser = (user) => async (dispatch) =>{
    try{
        const {data} = await api.loginUser(user)

        console.log("loginRes - response from action => ",data.token);

        
        return data;
    }
    catch(error){
        
        console.log(error.message);
    }
}


