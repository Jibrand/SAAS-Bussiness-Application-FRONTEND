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
import { AddVendorUser } from "../../Backened/APIRoutes";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Backened/Api";

export default function SignInSide() {

  const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
 
  const data = {

    name:    name,
    email :   email,
    password    :password,
  }


  const handleSubmit = async (id) => {
    const result = fetch(`${Api}/check/userVendor`, {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
 
        localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY2,
            JSON.stringify(data))
        navigate("/vendordashboard");
      }
  
    };
 
//   useEffect(() => { //already login
//     console.warn(user)
//     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2))
//     alert('You are already Logged in')
//       console.log("you are already login ")
//   }, []);


 
    useEffect(() => {
      const isLoggedIn = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2);
      if (isLoggedIn) {
        navigate('/vendordashboard');
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
              <Input id="component-simple" style={{ width: 300 }}    name="username"    value={email} onChange={(e) => setEmail(e.target.value,)} />
            </FormControl>
            <FormControl
              variant="standard"
              style={{ marginTop: "25px", marginLeft: "20px" }}>
              <InputLabel full htmlFor="component-simple">

                Password
              </InputLabel>
              <Input
                id="component-simple"
                value={password} onChange={(e) => setPassword(e.target.value,)}
                type="password"
                name="password"
                style={{ width: 300 }}
              />
            </FormControl>

            <FormControl variant="standard" style={{ marginLeft: "20px" }}>
            <div style={{ marginLeft:  0, marginTop: 10, color:"red" }}>
                <Grid item>
                  <Link to="/ForSDSgo34234234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbnv32ghdatForVendor" variant="caption"  style={{  color:"blue" ,fontSize:"13px" }}>
                    {"forget password"}
                  </Link>
                </Grid>
              </div>
              <Button
                type="submit"
                
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                Sign In
              </Button>
            </FormControl>
            <Grid container>
              <div style={{ marginLeft: 90, marginTop: 10 }}>
                <Grid item>
                  <Link to="/S321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendor" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </div>
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
