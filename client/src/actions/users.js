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
        const {signRes} = await api.createUser(user) ;
        console.log("signRes- response from createuser",signRes.data);
        return signRes;
       
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const loginUser = (user) => async (dispatch) =>{
    try{
        const {login_data} = await api.loginUser(user)
        console.log("loginRes- response from loginUser",login_data);
        dispatch({type: 'CREATE', payload: login_data});

        return login_data;
    }
    catch(error){
        
        console.log(error.message);
    }
}


