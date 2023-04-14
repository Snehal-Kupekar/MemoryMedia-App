import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';


// useSelector is for fetching the posts stored in store   
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log("post length",posts.length);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;


/* In react for every child component along with parent component we have to pass prop
    <Post post={post} setCurrentId={setCurrentId} />
    like this , here {post} prop is already passed in App.js (Post state)
    but still here again we have to pass it 

    but in redux there is no need of passing the props again again 
    
 */