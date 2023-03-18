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
        const {data,token} = await api.createUser(user) ;

        
        console.log("client/action-createuser,data=>",data);
        console.log("client/action-createuser,token=>",token);


        return data;
       
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const loginUser = (user) => async (dispatch) =>{
    try{
        const {data} = await api.loginUser(user)

        console.log("action login user",data);
        dispatch({type: 'CREATE', payload: data});

        return data;
    }
    catch(error){
        
        console.log(error.message);
    }
}


