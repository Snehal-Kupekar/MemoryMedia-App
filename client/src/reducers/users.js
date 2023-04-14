const INITIAL_STATE = {
  isSignedIn: null,
  authData: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //read ./action/posts to get the return type
    case "AUTH":
      localStorage.setItem('profile',JSON.stringify({...action?.data}));
     
      return {...state,isSignedIn:true,authData:action?.data};

    case "LOGOUT":
      localStorage.clear();

      return {...state,isSignedIn:false, authData : null};

    //all users adding current user in array .. it will return 
    default:
      return state;
  }
};

export default authReducer;

