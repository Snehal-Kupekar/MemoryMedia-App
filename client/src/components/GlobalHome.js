import React from "react";
import useStyle from "../styles.js";
import memories from "../images/memories.png";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Container,
  AppBar,
  Typography,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

const GlobalHome = () => {
const classes = useStyle();
const dispatch = useDispatch();
const navigate = useNavigate();

const signup = () =>{
  dispatch({type : "LOGOUT"});
  navigate('/')
}

const signin = () =>{
  navigate('/login')
}

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
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
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6} >
         <Typography variant="h2" component="h2" className={classes.home_heading}>
            Pool Your Memory Media..!
          </Typography>
          <Button color="secondary" variant="contained" onClick={signup} style={{marginTop:30}}>
            Sign Up 
          </Button>
          <Button color="secondary" variant="contained" onClick={signin} style={{marginTop:30,marginLeft:10}}>
            login
          </Button>
        </Grid>

        <Grid item xs={4}>

        </Grid>
      </Grid>
    </Container>
  );
};

export default GlobalHome;
