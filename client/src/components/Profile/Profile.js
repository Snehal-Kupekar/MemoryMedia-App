import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useStyle from "../Form/styles";

// import Home from "../Home";

const Profile = () => {

  const [userData , setUserData] = useState({
    name : "",
    password : "",
    passwordConf : "",
  });


  const classes = useStyle();

  const navigate = useNavigate();

  const profilePage = () =>{
    navigate("/home");
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault() ;

    
  }
    
  

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={4}>
        <Paper
          className={classes.paper}
          variant="outlined"
          square
          elevation={3}
        >
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
          >
            <Typography varient="h6">{"Register Page"}</Typography>

            <TextField
              name="name"
              variant="outlined"
              label="Name"
              fullWidth
              value={0}
              required
              onChange={0}
            />

            <TextField
              name="password"
              variant="outlined"
              label="Password"
              fullWidth
              value={0}
              required
              onChange={0}
            />
            <TextField
              name="Cpassword"
              variant="outlined"
              label="Confirm Password"
              fullWidth
              value={0}
              required  
              onChange={0}
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              fullWidth
              onClick={profilePage}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
