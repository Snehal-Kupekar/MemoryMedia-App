import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
  Box
} from "@material-ui/core";

import { useDispatch} from "react-redux";


import { getPosts } from "../actions/posts.js";
import Posts from "./Posts/Posts.js";
import Form from "./Form/Form.js";
import memories from "../images/memories.png";

import useStyle from "../styles.js";


// here we write function for updatePost button because this is the only component
// where both state is present POST as well as FORM which is required

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();

  const [user ,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate = useNavigate();

  const currUser = JSON.parse(localStorage.getItem('profile'));

  
  
  console.log("after login who is user =>",currUser.result._id);

  const logout = () =>{
    dispatch({type : "LOGOUT"});
    navigate('/register')
    setUser(null);
  }

  //pass here userId in getPost

  const currentUserId = currUser.result._id;

  // console.log("id",currentUserId);

  useEffect(() => {
    dispatch(getPosts(currentUserId));
  }, [dispatch]);

  
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Grid style={{marginTop:0}} container spacing={1}>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={6} md={6}>
          <div style={{display:"flex"}}>
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
          </div>
      
          </Grid>
          <Grid item xs={6} md={4} style={{display:"flex"}}>
            
          <Button color="secondary" className={classes.button} onClick={logout}>Login</Button>
          </Grid>

          </Grid>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Box>
  );
};

export default Home;
