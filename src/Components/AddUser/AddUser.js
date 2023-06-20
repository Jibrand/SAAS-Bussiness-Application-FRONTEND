import React, { useState,useEffect } from 'react'
import { TextField, Button, Card, RadioGroup, FormLabel, FormControl, FormControlLabel, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table, } from "@material-ui/core";
import TopHeader from '../../Constant/TopHeader'
import Footer from '../../Constant/Footer'
import { useNavigate,Link,useParams } from 'react-router-dom';
import useStyles from "./style";
import {Api} from '../../Backened/Api'
import { withAuthenticationRequired } from '@auth0/auth0-react';

const AddUser = () => {
  //////useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);
    const [to, setto] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [rfq_name, Setrfq_name] = useState('')
    const [rfq_id, Setrfq_id] = useState('')
 
    const [START_DATE, setSTART_DATE] = useState("");
    const [END_DATE, setEND_DATE] = useState("");
    const [First_Name, setFirst_Name] = useState("");
    const [Last_Name, setLast_Name] = useState("");
    const [data, setData] = useState("");
    const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
 
  const getproductdetail = async () => {
    console.warn(params);
    let result = await fetch(`${Api}/newproducts/${params.id}`);
    result = await result.json();
    Setrfq_name(result.First_Name +result.Last_Name );
    Setrfq_id(result._id)
    setSTART_DATE(result.START_DATE)
    setEND_DATE(result.END_DATE)

    console.log(result.First_Name);
    
  };
 
  
  const getproductdetailf = async () => {
    console.warn(params);
    let result = await fetch(`${Api}/newproducts/${params.id}`);
    result = await result.json();
    setData(result);
    Setrfq_name(result.name);
    console.log(result.name);
    console.log(data.name);
  };
  useEffect(() => {
    getproductdetailf();
  }, []);


  useEffect(() => {
    getproductdetail();
  }, []);

  const handleSubmit = async (id) => {

    Setrfq_id(id)
    const result = fetch(`${Api}/userRFQ`, {
        method: "post",
        body: JSON.stringify({
      to,
    rfq_id ,
      rfq_name,
      START_DATE,
      END_DATE,
      name
        }),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        alert("Vendor is added Succesfully!")
  
        navigate("/");
      }
  
    };
 
    useEffect(() => {
      if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        
       navigate('/login')
      }
      
   
   }, [])
    return (
        <div>
          <Container maxWidth="sm" style={{ marginTop: "10px" }}>
            <Paper className={classes.paper}>
              <form className={classes.form}  onSubmit={(event) => handleSubmit(event)}>
                <Typography variant="h3" align="center" gutterBottom className={classes.Heading} >   Add Vendor </Typography>
                <TextField   variant="outlined" label="to" align="center"  className={classes.textfieldFullWidth}  name="to" value={to} onChange={(e) => setto(e.target.value)} />
                <TextField   variant="outlined" label="  Name"  align="center" className={classes.textfieldFullWidth}  name="name" value={name} onChange={(e) => setName(e.target.value)}  />
                <TextField   variant="outlined" label="  RFQ"  align="center"disabled className={classes.textfieldFullWidth}  name="name" value={rfq_name} onChange={(e) => Setrfq_name(e.target.value)}  />
                <Button className={classes.buttonSubmit} variant="contained"  color="primary" onClick={handleSubmit} size="large" type="submit" fullWidth> Add </Button>
              </form>
            </Paper>
          </Container>
        </div>
      );
}

export default AddUser 
// export default withAuthenticationRequired(AddUser, {
//   onRedirecting: () => <div>Loading...</div>,
//   loginOptions: {
//     screen_hint: 'signup',
//   },
// });