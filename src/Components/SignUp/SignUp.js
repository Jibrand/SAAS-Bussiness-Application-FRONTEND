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

const SignUp = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
alert('You are already Logged in')
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      alert(
        "Password and confirm password should be same."
      );
      return false;
    } else if (username.length < 3) {
      alert(
        "Username should be greater than 3 characters."

      );
      return false;
    } else if (password.length < 8) {
      alert(
        "Password should be equal or greater than 8 characters."

      );
      return false;
    } else if (email === "") {
      alert("Email is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        alert(data.msg,);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        
        navigate("/ ");
      }
    }
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
    if (isLoggedIn) {
      navigate('/ ');
    }
  }, []);
  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "10px" }}>
        <Paper className={classes.paper}>
          <form className={classes.form}  onSubmit={(event) => handleSubmit(event)}>
            <Typography variant="h3" align="center" gutterBottom className={classes.Heading} > Sign Up </Typography>
            <TextField variant="outlined" label="Full Name" align="center" className={classes.textfield}  name="username" onChange={(e) => handleChange(e)}/>
            <TextField   variant="outlined" label="Email" align="center" className={classes.textfield} name="email" onChange={(e) => handleChange(e)}/>
            <TextField   variant="outlined" label="Password" align="center" type='password' className={classes.textfieldFullWidth}  name="password" onChange={(e) => handleChange(e)} />
            <TextField   variant="outlined" label="Confirm Password" type='password' align="center" className={classes.textfieldFullWidth}  name="confirmPassword" onChange={(e) => handleChange(e)}/>
            <div className={classes.Link} > <Link className={classes.textfieldFullWidth} to="/login" variant="body2" > {"Already have an Account? Login"} </Link></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Sign Up </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default SignUp;
