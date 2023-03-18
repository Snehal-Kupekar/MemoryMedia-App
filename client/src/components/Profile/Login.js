import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
import useStyle from "../Form/styles";
import { loginUser } from "../../actions/users";

import { useNavigate } from "react-router-dom";

// import { useDispatch} from "react-redux";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const switchMode = () =>{
    navigate("/register");
  }
  const handleLogin = async (e) =>{
    
    e.preventDefault();
    
    const login_data = await dispatch(loginUser(userData));

    
    

    if(login_data)
      navigate('/home');
    else
      alert("Check credential");
  }

  const handleClickShowPassword = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
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
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleLogin}
          >
            <Typography varient="h6">{"Login"}</Typography>

            <TextField
              required
              name="email"
              variant="outlined"
              id="filled-required"
              label="Email"
              fullWidth
              value={userData.email}
              onChange={(e)=>
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
              onChange={(e)=>
                setUserData({...userData,password:e.target.value})
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

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              fullWidth
            >
              Login
            </Button>
            <Grid container justifyContent="flex">
                <Grid item>
                    <Button onClick={switchMode}>
                       Dont have an account? Sign Up
                    </Button>
                </Grid>

            </Grid>
          
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
