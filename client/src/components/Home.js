import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";


import { useDispatch } from "react-redux";


import { getPosts } from "../actions/posts.js";
import Posts from "./Posts/Posts.js";
import Form from "./Form/Form.js";
import memories from "../images/memories.png";

import useStyle from "../styles.js";


// here we write function for updatePost button because this is the only component
// where both state is present POST as well as FORM which is required

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyle();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate = useNavigate();

  const currUser = JSON.parse(localStorage.getItem('profile'));
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  console.log("after login who is user =>", currUser.result._id);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/')
    setUser(null);
  }

  //pass here userId in getPost

  const currentUserId = currUser.result._id;

  const currentUser = currUser.result.name;

  useEffect(() => {
    dispatch(getPosts(currentUserId));
  }, [dispatch]);






  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Grid style={{ marginTop: 0 }} container spacing={1}>
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={6} md={6}>
            <div style={{ display: "flex" }}>
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



          <Grid item xs={6} md={4} style={{ display: "flex" }}>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Dashboard
            </Button>


            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Hello, <span style={{ color: '#00b7ff' }}> {currentUser} </span></MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
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
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
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

// const MenuItems = () => {
//   return (
//   );
// }

export default Home;
