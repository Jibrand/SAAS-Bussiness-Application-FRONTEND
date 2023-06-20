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
  const [password1, setPassword1] = useState('')
  const [name, setName] = useState('')
  const [name1, setName1] = useState('')

  const data = {

    name: name,
    email: email,
    password: password,
  }

  useEffect(() => {
    getproductdetail()

  }, [])


  const [jk, setjk] = useState([])

  const getproductdetail = async () => {
    let result = await fetch(`http://localhost:5005/uservendor/dsa`)
    result = await result.json()
    setjk(result)
    console.log("i am here with name",result.name)
    setName1(result.name)
    setPassword1(result.password)
    console.log("i am here with name variable", name1)
    console.log("i am here with name variable",password1 )
 
  }

  useEffect(() => {
    getproductdetail()

  }, [])


  const handleSubmit = async (id) => {
    console.log("i am here again",email)

    getproductdetail()
    console.log("i am here again",jk)
    console.log("i am here again",name1)
    console.log("i am here again",password1)

    let result = await fetch(`http://localhost:5005/uservendor/${email}`)
    result = await result.json()
    setjk(result)

    setPassword1(result.password);
    setName1(result.name);
    // let result1 = await fetch(`${Api}/uservendor/${email} `, {
    //   method: "Delete",
    // });
    setName(name1)
    setPassword(password1)
    // const result2 = fetch(`${Api}/userVendor`, {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // });



    //   let result3 =await fetch (`${Api}/uservendor/${email}`)
    //   result =await result.json()

    //   console.log("here is rrrrrrrrrrrrrrrrresult",result._id)
    //   console.log("here is rrrrrrrrrrrrrrrrresult",result)


    // result = await result.json();
    if (result) {
   
      navigate("/vendordashboard");
    }

  };

  useEffect(() => {



  }, [])
  //   useEffect(() => { //already login
  //     console.warn(user)
  //     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2))
  //     alert('You are already Logged in')
  //       console.log("you are already login ")
  //   }, []);



  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2);
  //   if (isLoggedIn) {
  //     navigate('/vendordashboard');
  //   }
  // }, []);


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 12,
            mx: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{ mr: 6 }}
            style={{ marginTop: "90px", fontFamily: ["Lusitana", "serif"] }}
            className=" ">
            Reset Password
          </Typography>
          <Box
            component="form"
            noValidate

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
              <InputLabel htmlFor="component-simple">Email</InputLabel>
              <Input id="component-simple" style={{ width: 300 }} name="username" placeholder="Write your email" value={email} onChange={(e) => setEmail(e.target.value,)} />
            </FormControl>


            <FormControl variant="standard" style={{ marginLeft: "20px" }}>

              <Button

                onClick={handleSubmit}
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                Send
              </Button>
            </FormControl>
            <Grid container>
              <div style={{ marginLeft: 210, marginTop: 10 }}>
                <Grid item>
                  <Link to="/login312kjnv32hkendore" variant="caption">
                    {"back to login"}
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
