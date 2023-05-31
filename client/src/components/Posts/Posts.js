import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

// useSelector is for fetching the posts stored in store
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const [isFetched, setIsFetched] = useState(false);
  const [postData, setPostData] = useState(null); // for storing the posts from the store
  const classes = useStyles();

  console.log("posts-outer", posts);
  useEffect(() => {
    if (postData != null) {
      setIsFetched(true);
    }
    setPostData(posts.length);
  }, [posts]);

  if (!isFetched) {
    return <CircularProgress />;
  } else {
    if (posts.length === 0) {
      return (
        <Typography
          style={{
            marginTop: "60px",
            fontWeight: 400,
            fontSize: "30px",
            color: '#025464'
            // lineHeight:'82px'
          }}
        >
          Unleash your creativity and turn this empty space into a stunning showcase
          for your cherished{" "}
          <strong style={{ color: "#E57C23", fontSize: "40px" }}>MemOries</strong>!
        </Typography>
      );
    } else {
      return (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      );
    }
  }
};

export default Posts;

/* In react for every child component along with parent component we have to pass prop
    <Post post={post} setCurrentId={setCurrentId} />
    like this , here {post} prop is already passed in App.js (Post state)
    but still here again we have to pass it 

    but in redux there is no need of passing the props again again 
    
 */
