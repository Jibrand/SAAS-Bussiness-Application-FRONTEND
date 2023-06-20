// import React from "react";
// import Lfow from '../Images/lfo.png'

// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Container,
//   AppBar, 
//   Menu,
//   MenuItem,
//   Toolbar,
//   IconButton,
// } from "@material-ui/core";
// import MenuIcon from "@mui/icons-material/Menu";

// import useStyles from "./style";

// const Footer = () => {
//   const classes = useStyles();

//   return (
//    <>    <AppBar position="static" className={classes.footer}>
//    <Toolbar>
//    <img src={Lfow} height="300px" width='300px' style={{marginLeft:"-100px"}}/>
//    <Typography variant="paragraph" className={classes.footertypo}>
// DC Group plc - Copyright © 2008-2010 - All Rights Reserved </Typography>      
//    <Typography variant="paragraph" className={classes.SecondText}>Contact Us | Terms & Conditions </Typography>
//    </Toolbar>
//  </AppBar></>
//   )
// }
import React from "react";
import logo from "../Images/lfo.png";

const Footer = () => {
  return (
    <div
      style={{
        minHeight: "10vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        marginTop:"10px",
        backgroundColor: "#130C0E",
        borderTop: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" style={{ width: "100px", height: "auto", marginRight: "10px" }} />
        <p style={{color: "#fff", fontSize: "16px"}}>
          DC Group plc - Copyright © 2008-2010 - All Rights
          Reserved
        </p>
      </div>
      <div>
        <p style={{color: "#fff", fontSize: "16px"}}>Contact Us | Terms &amp; Conditions</p>
      </div>
    </div>
  );
};

export default Footer;

