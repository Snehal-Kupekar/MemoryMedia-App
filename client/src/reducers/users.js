const users = (users = [], action) => {
  switch (action.type) {
    //read ./action/posts to get the return type
    case "FETCH_ALL":
      return action.payload;


    //all users adding current user in array .. it will return 
    case "CREATE":
      return [...users, action.payload];

    default:
      return users;
  }
};

export default users;

