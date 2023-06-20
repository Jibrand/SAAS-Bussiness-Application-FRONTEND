import React,{useEffect,useState} from 'react'
import TopHeader from '../../Constant/TopHeader'
import Footer from '../../Constant/Footer'
import { TextField, Button, Box, Grid, Typography, Paper, Container, TableBody, TableRow, TableCell, TableContainer, TableHead, Table,} from "@material-ui/core";
import { Link ,useNavigate} from "react-router-dom";
import useStyles from "./style";
import IMage from "../../Images/png-clipart-flatjoy-circle-icons-success-white-check-icon-art-thumbnail-removebg-preview.png"

const Thankyou = () => {
  //////////useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);

  const classes = useStyles();
  const navigate=useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

 
 useEffect(() => {
  if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
    
   navigate('/login')
  }
  

}, [])
  return (
    <div>
      <TopHeader/>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
        Request a Quote
        </Typography>
      </Container>
      <Container maxWidth="sm">

      <Grid container justify="center">
      <Box
        component="img"
        className={classes.succesIcon}
        sx={{
          marginTop:100,
          height: 100,
          width: 425,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={IMage}
      />
        </Grid>

      </Container>
     <Typography variant="h5" gutterBottom className={classes.underIconHeading}> Thank you for your request! </Typography>
     <Typography variant="body1" gutterBottom className={classes.underIconHeading1}> What's Next? </Typography>
     <Typography variant="body2" gutterBottom className={classes.underIconHeading2}> Lab will reach out to you to provide you a quote. </Typography>
     <Typography variant="body2" gutterBottom className={classes.underIconHeading2}> <Link to ='/home'> Back to the Dashboard </Link></Typography>
      <Footer/>
    </div>
  )
}

export default Thankyou
