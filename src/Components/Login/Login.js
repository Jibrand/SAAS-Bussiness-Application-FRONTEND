import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../../Images/q.jpg";
import useStyles from "./style";
import "../../App.css";
import "../../index.css";
import { loginRoute } from "../../Backened/APIRoutes";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {

  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      alert("Email and Password is required."  );
      return false;
    } else if (password === "") {
      alert("Email and Password is required."  );
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        alert(data.msg  );
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        if(username==="Admin")
        {
          navigate("/");
        }
      else  if(username !=="Admin")
        {
           navigate ("/vendordashboard");
        }
          
     
      }
    }
  };

  // useEffect(() => { //already login
  //   console.warn(user)
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  //   alert('You are already Logged in')
  //     console.log("you are already login ")
  // }, []);


 
    useEffect(() => {
      const isLoggedIn = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
      if (isLoggedIn) {
        navigate('/');
      }
    }, []);


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ mr: 6 }}
            style={{ marginTop: "90px", fontFamily: ["Lusitana", "serif"] }}
            className=" ">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>
            {/* <TextField
  helperText="Please enter your name"
  id="demo-helper-text-aligned"
  label="Email Address"
    margin="normal"
                name="email"
                fullWidth

/> */}
            <FormControl variant="standard" style={{ marginLeft: "20px" }} >
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Input id="component-simple" style={{ width: 300 }}    name="username"   onChange={(e) => handleChange(e)}/>
            </FormControl>
            <FormControl
              variant="standard"
              style={{ marginTop: "25px", marginLeft: "20px" }}>
              <InputLabel full htmlFor="component-simple">
                Password
              </InputLabel>
              <Input
                id="component-simple"
                onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                style={{ width: 300 }}
              />
            </FormControl>

            <FormControl variant="standard" style={{ marginLeft: "20px" }}>
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                Sign In
              </Button>
            </FormControl>
            <Grid container>
              {/* <div style={{ marginLeft: 90, marginTop: 10 }}>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </div> */}
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
