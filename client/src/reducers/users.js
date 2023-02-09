const users = (users = [], action) => {
  switch (action.type) {
    //read ./action/posts to get the return type
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...users, action.payload];

    default:
      return users;
  }
};

export default users;
