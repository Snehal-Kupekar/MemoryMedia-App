import React, { useState} from "react";


import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import useStyle from "../Form/styles";
import { createUser } from "../../actions/users";

import { useDispatch } from "react-redux";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// import Home from "../Home";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };

  
 

  const dispatch = useDispatch();

  const classes = useStyle();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    try{

      console.log("inside createpost", userData);

      if (userData.password === userData.passwordConf) {
     
      const user_data = await dispatch(createUser(userData));

      console.log('login_daata ~ profile ~ ',user_data);
 
      
      if(user_data)
        navigate("/home");
      else
        alert("Email already in use");
      
      
    } else alert("Please Check the password");
    } 
    catch(error){console.log(error);}
    
  };

  const switchMode = () => {
    navigate("/login");
  };

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
            Validate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography varient="h6">{"Register Page"}</Typography>

            <TextField
              required
              name="name"
              variant="outlined"
              id="filled-required"
              label="UserName"
              fullWidth
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />

            <TextField
              required
              name="email"
              variant="outlined"
              id="filled-required"
              label="email"
              fullWidth
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
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
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {userData.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex">
              <Grid item>
                <Button onClick={switchMode}>
                  Already have account? Sign In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
