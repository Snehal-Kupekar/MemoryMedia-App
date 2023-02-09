const posts = (posts = [], action) => {
  switch (action.type) {
    //read ./action/posts to get the return type
    case "UPDATE":
      // here action. payload is updated post of id = _id
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
export default posts;
