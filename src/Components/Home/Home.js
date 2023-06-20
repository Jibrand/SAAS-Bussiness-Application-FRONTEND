import React,{useEffect,useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Grid,
  CardContent,
  CardMedia,
  Card,
  CardActions,
} from "@material-ui/core";
import TopHeader from "../../Constant/TopHeader";
import Footer from "../../Constant/Footer";
import useStyles from "./style";
import { Link, useNavigate } from "react-router-dom";
import Button1 from '../Button1'
import Logout from '../Logout'
import { Api } from "../../Backened/Api";

const Home = () => {
  //useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate =useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const send=()=>{navigate('/table')}
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  const [counter, setCounter] = useState([]);
  
  useEffect(() => {
    const fetchCounter = async () => {
      const response = await fetch(`${Api}/CounterNewProducts`);
      const data = await response.json();
      setCounter(data);
      console.log("hhhhhhhhhhhhhhhh8999999999",data)
      console.log("hhhhhhhhhhhhhhhh8999999999",data.counter_id)
      console.log("hhhhhhhhhhhhhhhh8999999999", counter )
    };
    fetchCounter();
  }, []);
  
 
 
  const classes = useStyles();

  // useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);
  // useEffect(() => {
  //    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
       
  //     navigate('/login')
  //    }
     
  
  // }, [])

  return (
    <div>
      <TopHeader />

    <Typography variant="h4" className={classes.MainHeading}>
        {" "}
        REQUEST LAB TEST QUOTATION{" "}
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={send}
          className={classes.RequestedquotesButton}>
          {" "}
          Requested quotes{" "}
        </Button>
      </Typography>
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          gutterBottom
          className={classes.MainHeading2}>
          We provide personalized service for every client and every project
          with our worldwide network of labs and facilities. Please make
          selection for your <span className={classes.span}> work order.</span>{" "}
        </Typography>
      </Container>
     
     
      <Container maxWidth="md" className={classes.cardgrid}>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardmedia}
                image="https://source.unsplash.com/random"
                title="green iguana"
              />
              <CardContent className={classes.cardcontent}>
        <Link to ='/new_product_evaluation'>
                <Typography gutterBottom variant="h6" component="div">
                  New Product Evaluation
                </Typography>
        </Link>
                <Typography variant="body2" color="text.secondary">
                  Select this to get a quote to perform{" "}
                  <span className={classes.span}>
                    full product compliance evaluation{" "}
                  </span>
                  from scratch to help launch your product to the market with no
                  hassle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardmedia}
                image="https://source.unsplash.com/random"
                title="green iguana"
              />
              <CardContent className={classes.cardcontent}>
              <Link to ='/Evaluatedproduct'>
                <Typography gutterBottom variant="h6" component="div">
                  Existing Product Evaluation
                </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  This will help you provide a test quote from lab for any
                  technical changes whether it be a{" "}
                  <span className={classes.span}> end of life component </span>
                  or adding an alternate component to the existing certified
                  product.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardmedia}
                image="https://source.unsplash.com/random"
                title="green iguana"
              />
              <CardContent className={classes.cardcontent}>
              <Link to ='/precompliance'>

                <Typography gutterBottom variant="h6" component="div">
                  Pre-Compliance/ Engineering Quote
                </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  Select this option to get a quote for performing
                  pre-compliance testing to ensure that your prototype meets{" "}
                  <span className={classes.span}>
                    intended market regulatory product standard’s requirements.
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardmedia}
                image="https://source.unsplash.com/random"
                title="green iguana"
              />
              <CardContent className={classes.cardcontent}>
              <Link to='/consulting' >
                <Typography gutterBottom variant="h6" component="div">
                  Consulting
                </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  Consulting helps you connect to an expert to get your product
                  in compliance with product regulatory requirement from the
                  design phase till it’s launch.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
 
      <Footer />
    </div>
  );
};

export default Home
// export default withAuthenticationRequired(Home, {
//   onRedirecting: () => <div>Loading...</div>,
//   loginOptions: {
//     screen_hint: 'signup',
//   },
// });