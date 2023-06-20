import React ,{useEffect}from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useStyles from "./style";
import { useNavigate } from 'react-router-dom';
import Lfow from '../Images/lfo.png'


const TopHeader = () => {

  
  const { user, isAuthenticated, isLoading } = useAuth0();

  const navigate =useNavigate();
  const Send =(()=>{
 navigate('/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore')
  })
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = async () => {
    setAnchorEl(null);
         

};
const handleClick1 = async () => {
         
  localStorage.clear();
  navigate("/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore");

};
  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const { logout } = useAuth0();
 
 
  return (
    <>
    {/* First App Bar */}
    <AppBar
      position="static"
      style={{ backgroundColor: "#C1C1C1", height: "48px" }}
    >
      <Toolbar>
        <img
          src={Lfow}
          alt="Logo"
          style={{ height: "auto" ,width:"220px", marginLeft :"-60px",marginTop:"10px"}}
        />
      </Toolbar>
    </AppBar>

    {/* Second App Bar */}
    <AppBar
      position="static"
      style={{ backgroundColor: "#C1C1C1", height: "40px" ,marginTop:"5px"}}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 ,marginBottom:"20px"}}>
          Request for Quote
        </Typography>
        <IconButton
        style={{marginBottom:"22px"}}
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
       
          <AccountCircle/>
{/* 
<img src={user.picture} alt={user.name} style={{ borderRadius: '50%', width: '35px', height: '35px' }} />  */}

 
       </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}> </MenuItem>
      
          <MenuItem    onClick={ handleClick1} >Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  </>
  );
};

export default TopHeader;
