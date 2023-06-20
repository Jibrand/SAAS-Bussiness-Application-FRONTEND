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
import Image from "../../src/Images/q.jpg";
 
import useStyles from "../Components/Login/style";
 
import { useNavigate } from "react-router-dom";
import { Api } from "../Backened/Api";
import { Alert } from "@mui/material";
 const ForgotForVendor = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [name, setName] = useState('')
  const [name1, setName1] = useState('')
  const [jk, setjk] = useState([])
  const[_id,set_id]=useState('')
  const [show, setShow] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show1, setShow1] = useState(true)
  const [token, setToken] = useState('')
  const [newpasswoord, setNewpasswoord] = useState('')
  
  useEffect(() => {
    getproductdetail()

  }, [])

  const data = {
    name: name1,
    email: email,
    password: password1,
  }

    const getproductdetail = async () => {}
    // let result = await fetch(`${Api}/uservendor/${email}`)
    // result = await result.json()
    // setjk(result)
    // console.log("i am here with 1",result)
    // console.log("i am here with 2",result[2].name)
    // console.log("i am here with 3",result[2].password)



    // setName1(result[2].name)
    // setPassword1(result[2].password)
    // console.log("i am here with name variable 1", name1)
    // console.log("i am here with name variable 2",password1 )

    const getProductDetails = async (email) => {
      try {
        const response = await    fetch(`${Api}/uservendor/${email}`)
        const data = await response.json();
  
 
        set_id(data[0]._id)
        console.log(data[0]._id)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      
      fetch(`${Api}/uservendor/${email}`)
        .then(response => response.json())
        .then(data => {
          // Update the state with the product data

 

          setName1(data[0].name);
          setPassword1(data[0].password);
          console.log(name1)
          console.log(data[0].name)
          console.log(password1)
          console.log(data[0].password)
        })
        .catch(error => console.error(error));
    }, [email]);



 
 

  useEffect(() => {
    getproductdetail()

  }, [])



  const handleCheckProduct = async ( ) => {
    if(token.length<24){
    alert("token is incorrect")
    }
    else{
        const response = await fetch(`${Api}/uservendor/products/${token}`);
        const data = await response.json();
        if (response.status === 200 && data) {
            setShow(true)
     
            setShow1(false)
    
          console.log('Product exists:', data);
          const result =   fetch(`${Api}/uservendor/${token}`, {
            method: "Put",
            body: JSON.stringify({password}),
            headers: { "Content-Type": "Application/json" },
        })
        alert("password updated")
        navigate("/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore")
          
        } 
        
        else {
          console.log('Product does not exist');
          alert('Product does not exist');
          setShow4(true)
        
        }
    }
   
  };










  const handleSubmit = async (id) => {
    // getproductdetail()




    console.log("i am here again ))",jk)
    console.log("i am here again ))",name1)
    console.log("i am here again ))",password1)
    // let result = await fetch(`${Api}/uservendor/${email}`)
    // result = await result.json()
    // setjk(result)
    // console.log("i am here with 1",result)
    // // console.log("i am here with 2",result[].name)
    // console.log("i am here with 3",result[2].password)



    // setName1(result[2].name)
    // setPassword1(result[2].password)
    // let result = await fetch(`http://localhost:5005/uservendor/${email}`)
    // result = await result.json()
    // setjk(result)
    // setPassword1(result.password);
    // setName1(result.name);

    let result1 = await fetch(`${Api}/uservendor/${email}`, {
      method: "Delete",
    });

    // setName(name1)
    // setPassword(password1)
    const result2 = fetch(`${Api}/userVendor`, {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });



    getProductDetails(email)

    //   console.log("here is rrrrrrrrrrrrrrrrresult",result._id)
    //   console.log("here is rrrrrrrrrrrrrrrrresult",result)


    // result = await result.json();
    if (result1) {
   alert("JSHJSA")
      // navigate("/vendordashboard");
    }

  };
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
            Enter Token
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
              <InputLabel htmlFor="component-simple">Token</InputLabel>
            {show ? <>
             
              <Input id="component-simple" style={{ width: 300 }}  inputProps={{
        maxLength: 24, // Limit to 12 characters
        pattern: '\\d{0,24}', // Only allow digits up to 12 characters
      }} name="username" disabled placeholder="Enter the required Token" value={token} onChange={(e) => setToken(e.target.value,)} />
             </>:null}

            {show1 ? <>
              <Input id="component-simple" style={{ width: 300 }}  inputProps={{
        maxLength: 24, // Limit to 12 characters
        pattern: '\\d{0,24}', // Only allow digits up to 12 characters
      }} name="username" placeholder="Enter the required Token" value={token} onChange={(e) => setToken(e.target.value,)} />
</>:null}
            </FormControl>
            <br/>
            <br/>
            {show4 ? <>

            <Typography
            variant="caption"
            sx={{ mr: 1 }}
            style={{ marginTop: "90px", fontFamily: ["Lusitana", "serif"] , marginLeft:"20px",color:"red"}}
            className=" ">
              Token is incorrect
          </Typography>
</>:null}

            {show ? <>
            <FormControl variant="standard" style={{ marginLeft: "20px" }} >
              <InputLabel htmlFor="component-simple">New Password</InputLabel>
              <Input id="component-simple" style={{ width: 300 }} name="username" placeholder="Enter the new password  " value={password} onChange={(e) => setPassword(e.target.value,)} />
            </FormControl>
</>:null}

            <FormControl variant="standard" style={{ marginLeft: "20px" }}>
            {show1 ? <>

              <Button

                onClick={handleCheckProduct}
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                Next
              </Button>
              </>:null}
                     {show ? <>

              <Button

                onClick={handleCheckProduct}
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, width: 150 }}>
                Next
              </Button>
              </>:null}
            </FormControl>
            <Grid container>
               
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
   )
 }
 
 export default ForgotForVendor
 