const authReducer = (state = {authData : null}, action) => {
  switch (action.type) {
    //read ./action/posts to get the return type
    case "AUTH":
      localStorage.setItem('profile',JSON.stringify({...action?.data}));

      return {...state , authData: action?.data};
    case "LOGOUT":
      localStorage.clear();

      return {...state, authData:action?.data};

    case "LOGIN" :
      return {...state, authData:action?.data};
    //all users adding current user in array .. it will return 
    default:
      return state;
  }
};

export default authReducer;

