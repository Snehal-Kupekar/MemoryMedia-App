import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Grid , InputAdornment, IconButton  } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import useStyle from "../Form/styles";
import { createUser } from "../../actions/users";

import { useDispatch} from "react-redux";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// import Home from "../Home";

const Profile = () => {

  const [userData , setUserData] = useState({
    name : "",
    password : "",
    passwordConf : "",
    showPassword : false
  });

  const handleClickShowPassword = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };
  

  const dispatch = useDispatch();

  const classes = useStyle();

  const navigate = useNavigate();
  
  const handleSubmit = async(e) =>{
    e.preventDefault() ;
    console.log("inside createpost",userData);
    
    if(userData.password===userData.passwordConf){
      dispatch(createUser(userData));
      navigate("/home");
    }
    else
      alert('Please Check the password');

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
            onSubmit={handleSubmit}
          >
            <Typography varient="h6">{"Register Page"}</Typography>

            <TextField
              required
              name="name"
              variant="outlined"
              id="filled-required"
              label="Name"
              fullWidth
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />

            <TextField
              name="password"
              variant="outlined"
              label="Password"
              fullWidth
              type={userData.showPassword ? "text" : "password"}
              value={userData.password}
              required
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }

              InputProps={{ 
              endAdornment : (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {userData.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
              }}

            />
            <TextField
            required
              name="Cpassword"
              variant="outlined"
              label="Confirm Password"
              fullWidth
              type={userData.showPassword ? "text" : "password"}
              value={userData.passwordConf}  
              onChange={(e) =>
                setUserData({ ...userData, passwordConf: e.target.value })
              }
              
              
            
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              fullWidth
              
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
