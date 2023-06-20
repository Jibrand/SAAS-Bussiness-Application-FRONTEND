import {
    TextField,
    Button,
    Typography,
    Paper,
    Container,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import useStyles from "./styles";
  import { useNavigate } from 'react-router-dom';
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { registerRoute } from "../../Backened/APIRoutes";
  import { Api } from "../../Backened/Api";
  
  const SignUp = () => {
  
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Confirmpassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    
    const classes = useStyles();
    const navigate = useNavigate();
    
  
    const data = {

        name:    name,
        email :   email,
        password    :password,
      }
    
      const handleCheck   = async ( ) => {

        if (password !== Confirmpassword) {
            alert(
              "Password and confirm password should be same."
            );}
      }
        const handleSubmit = async (id) => {

    
   

    const result = fetch(`${Api}/userVendor`, {
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

           
 
   
 
     useEffect(() => {
      const isLoggedIn = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2);
      if (isLoggedIn) {
        navigate('/vendordashboard');
      }
    }, []);

    return (
      <div>
        <Container maxWidth="sm" style={{ marginTop: "10px" }}>
          <Paper className={classes.paper}>
            <form className={classes.form} >
              <Typography variant="h3" align="center" gutterBottom className={classes.Heading} > Sign Up </Typography>
              <TextField variant="outlined" label="Full Name" align="center" className={classes.textfield}  name="username"    value={name} onChange={(e) => setName(e.target.value,)}/>
              <TextField   variant="outlined" label="Email" align="center" className={classes.textfield} name="email"  value={email} onChange={(e) => setEmail(e.target.value,)}/>
              <TextField   variant="outlined" label="Password" type='password' align="center" className={classes.textfieldFullWidth}  name="password"   value={password} onChange={(e) => setPassword(e.target.value,)}/>
              <TextField   variant="outlined" label="ConfirmPassword" align="center" type='password' className={classes.textfieldFullWidth}  name="confirmPassword"  />
              <div className={classes.Link} > <Link className={classes.textfieldFullWidth} to="/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore" variant="body2" > {"Already have an Account? Login"} </Link></div>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth> Sign Up </Button>
            </form>
          </Paper>
        </Container>
      </div>
    );
  };
  
  export default SignUp;
  