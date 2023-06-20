import React,{useState,useEffect} from 'react'
import {
  TextField, Button, Card, IconButton,
  CardMedia,
  CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table,
} from "@material-ui/core";
import { Link,useNavigate } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
  import { ToastContainer, toast } from 'react-toastify';
  import { Api } from '../../../Backened/Api';
import { v4 as uuidv4 } from 'uuid';

  import 'react-toastify/dist/ReactToastify.css';
import {TbNumber1} from "react-icons/tb"
import {TbNumber2} from "react-icons/tb"
import {TbNumber3} from "react-icons/tb"
import {TbNumber4} from "react-icons/tb"
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import TopHeader from "../../../Constant/TopHeader";
import useStyles from "./style";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Footer from '../../../Constant/Footer'
import PublishIcon from '@mui/icons-material/Publish';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import FileBase from "react-file-base64";
import AddIcon from '@mui/icons-material/Add';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  function createData1(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData("EMC  "         ),
    createData("SAFETY    "        ),
    createData("LASER SAFETY      "    ),
    createData("MEDICAL SAFETY    "     ),
    createData("IP TESTING    "    ),
    createData("EMC 3m CHAMBER TIME      "  ),
    createData("  EMC 10m CHAMBER TIME    "    ),
    createData("  ENVIRONMENTAL CHAMBER TIME    "    ),


  ];
    const rows1 = [
    createData("Intertek   "    ,"Location Name",             "      Medical, Laser, Safety   "     ),
    createData("Intertek Testing Services    "      ,"Location Name",             "EMC        "  ),
    createData("  Intertek USA      "  ,"Location Name",             "  Radio, Medical       "  ),
    createData("  Intertek India    "   ,"Location Name",             "        EMC, Medical, Lighting "  ),
    createData("  Intertek Canada    "  ,"Location Name",             "    Medical     "  ),
    createData("    Intertek China        " ,"Location Name",             "      ITAV   " ),


  ];


const Body = () => {
  
const theme = createTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "transparent"
      }
    }
  }
});

  const [check_capcha, setCheck_capcha] = useState({
    check: false,
  })
  //////useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);
  const [inputFields3, setInputFields3] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);
  const handleAddFields1 = () => {
    setInputFields3([...inputFields3, { id: uuidv4(), firstName: '', lastName: '' }])
  }
  
  const handleRemoveFields1 = id => {
    const values = [...inputFields3];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields3(values);
  }
  const handleChangeInput1 = (id, event) => {
    const newInputFields = inputFields3.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
  
    setInputFields3(newInputFields);}
    const [Phase1, setPhase1] = useState(true)
    const [Phase2, setPhase2] = useState(false)
    const [Phase3, setPhase3] = useState(false)
    const [Phase4, setPhase4] = useState(false)
    const [Color1, setColor1] = useState('primary')
    const [Color2, setColor2] = useState(' ')
    const [Color3, setColor3] = useState(' ')
    const [Color4, setColor4] = useState(' ')
    const [backroudColor1, setBackroudColor1] = useState('  blue') 
    const [backroudColor2, setBackroudColor2] = useState('  ')
    const [backroudColor3, setBackroudColor3] = useState('  ')
    const [backroudColor4, setBackroudColor4] = useState('  ')
    const [Company, setCompany] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone_Number, setPhone_Number] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [Zip, setZip] = useState('')
    const [Address_2, setAddress_2] = useState('')
    const [State_, setState_] = useState('')
    const [United_States, setUnited_States] = useState('')
    const [Agreement, setAgreement] = useState('')
    const [First_Name, setFirst_Name] = useState("")
    const [Last_Name, setLast_Name] = useState("")
    const classes = useStyles();
    const navigate=useNavigate()
    const [RFQCategory, setRFQCategory] = useState('Pre Compliance Quote')
    const [norfq, setNorfq] = useState(0)
    const [END_DATE, setEND_DATE] = useState('')
    const [START_DATE, setSTART_DATE] = useState('')
    const[Description__PreCompliance,setDescription__PreCompliance]=useState('')
const[EMC__PreCompliance ,setEMC__PreCompliance]=useState(false)
const[EMC__PreCompliance1,setEMC__PreCompliance1]=useState('') 
const[SAFETY__PreCompliance ,setSAFETY__PreCompliance]=useState(false)
const[SAFETY__PreCompliance1,setSAFETY__PreCompliance1]=useState('')
const[LASER_SAFETY__PreCompliance ,setLASER_SAFETY__PreCompliance]=useState(false)
const[LASER_SAFETY__PreCompliance1,setLASER_SAFETY__PreCompliance1]=useState('')
const[MEDICAL_SAFETY__PreCompliance ,setMEDICAL_SAFETY__PreCompliance]=useState(false)
const[MEDICAL_SAFETY__PreCompliance1,setMEDICAL_SAFETY__PreCompliance1]=useState('')
const[IP_TESTING__PreCompliance ,setIP_TESTING__PreCompliance]=useState(false)
const[IP_TESTING__PreCompliance1,setIP_TESTING__PreCompliance1]=useState('')
const[EMC_3m_CHAMBER_TIME__PreCompliance ,setEMC_3m_CHAMBER_TIME__PreCompliance]=useState(false)
const[EMC_3m_CHAMBER_TIME__PreCompliance1,setEMC_3m_CHAMBER_TIME__PreCompliance1]=useState('')
const[EMC_10m_CHAMBER_TIME__PreCompliance ,setEMC_10m_CHAMBER_TIME__PreCompliance]=useState(false)
const[EMC_10m_CHAMBER_TIME__PreCompliance1,setEMC_10m_CHAMBER_TIME__PreCompliance1]=useState('')
const[ENVIRONMENTAL_CHAMBER_TIME__PreCompliance ,setENVIRONMENTAL_CHAMBER_TIME__PreCompliance]=useState(false)
const[ENVIRONMENTAL_CHAMBER_TIME__PreCompliance1,setENVIRONMENTAL_CHAMBER_TIME__PreCompliance1]=useState('')
const[Pleaseselectintendedmarketcountries__PreCompliance,setPleaseselectintendedmarketcountries__PreCompliance]=useState('')


    function handleStartDateChange(event) {
      const { value } = event.target;
      setSTART_DATE(value);
      setEND_DATE(value); // Set end date to start date when start date changes
      console.log('Start date:', value);
    }
    
    function handleEndDateChange(event) {
      const { value } = event.target;
      setEND_DATE(value);
      console.log('End date:', value);
    }




const data = {

  norfq:norfq,
    RFQCategory:RFQCategory,
    First_Name  : First_Name,
    Last_Name  : Last_Name  ,
    Company: Company,
    Email: Email,
    Phone_Number: Phone_Number,
    Address: Address,
    City: City,
    Zip: Zip,
    Address_2: Address_2,
    State_: State_,
    United_States: United_States,
    Description__PreCompliance : Description__PreCompliance,
EMC__PreCompliance :EMC__PreCompliance,
EMC__PreCompliance1 : EMC__PreCompliance1, 
SAFETY__PreCompliance :SAFETY__PreCompliance,
SAFETY__PreCompliance1 : SAFETY__PreCompliance1,
LASER_SAFETY__PreCompliance: LASER_SAFETY__PreCompliance,
LASER_SAFETY__PreCompliance1 : LASER_SAFETY__PreCompliance1,
MEDICAL_SAFETY__PreCompliance: MEDICAL_SAFETY__PreCompliance,
MEDICAL_SAFETY__PreCompliance1 : MEDICAL_SAFETY__PreCompliance1,
IP_TESTING__PreCompliance :IP_TESTING__PreCompliance,
IP_TESTING__PreCompliance1 : IP_TESTING__PreCompliance1,
EMC_3m_CHAMBER_TIME__PreCompliance: EMC_3m_CHAMBER_TIME__PreCompliance,
EMC_3m_CHAMBER_TIME__PreCompliance1 : EMC_3m_CHAMBER_TIME__PreCompliance1,
EMC_10m_CHAMBER_TIME__PreCompliance: EMC_10m_CHAMBER_TIME__PreCompliance,
EMC_10m_CHAMBER_TIME__PreCompliance1 : EMC_10m_CHAMBER_TIME__PreCompliance1,
ENVIRONMENTAL_CHAMBER_TIME__PreCompliance :ENVIRONMENTAL_CHAMBER_TIME__PreCompliance,
ENVIRONMENTAL_CHAMBER_TIME__PreCompliance1 : ENVIRONMENTAL_CHAMBER_TIME__PreCompliance1,
Pleaseselectintendedmarketcountries__PreCompliance : Pleaseselectintendedmarketcountries__PreCompliance,
inputFields3:inputFields3,
 
}





    const handleAddFields = () => {
      setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
    }
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), firstName: '', lastName: '' },
    ]);
    
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }
    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
        if (id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
    
      setInputFields(newInputFields);
    }
    const Click3 = (() => {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toast.info("added Succesfully!");
        navigate('/thankyou')
      }
    })
    const onCLick1=(()=>{
        if (check_capcha.check == true) {
          if (First_Name === "") {
            toast.error("Name is required");
          }
          if (Last_Name === "") {
            toast.error("Last name is required");
          }
          if (START_DATE === "") {
            toast.error("Start date is required");
          }
          if (END_DATE === "") {
            toast.error("End date is required");
          } else {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

        setPhase1(false)
        setPhase2(true)
        setColor2("primary")
        setBackroudColor2("blue")}}
    else { toast.error("please confirm the terms and conditions") }

    })
      const Back1=(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

          setPhase1(true)
        setPhase2(false)
        setColor2(" ")
        setBackroudColor2(" ")
    })
     const onCLick2=(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

        setPhase1(false)
        setPhase2(false)
        setPhase3(true)
        setColor2("primary")
        setColor3("primary")
        setBackroudColor2("blue")
        setBackroudColor3("blue")
    })
    const Back2=(()=>{
        setPhase1(false)
        setPhase2(true)
        setPhase3(false)
        setColor2("primary")
        setColor3(" ")
        setBackroudColor2("blue")
        setBackroudColor3(" ")
  })
    const onCLick3=(()=>{
        setPhase1(false)
        setPhase2(false)
        setPhase3(false)
        setPhase4(true)
        setColor2("primary")
        setColor3("primary")
        setColor4("primary")
        setBackroudColor2("blue")
        setBackroudColor3("blue")
        setBackroudColor4("blue")
    })

     const Back3=(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

        setPhase1(false)
        setPhase2(true)
        setPhase3(false)
        
        setColor2(" primary")
        setColor3(" ")
        setColor4(" ")
        setBackroudColor2("blue ")
        setBackroudColor3(" ")
        setBackroudColor4(" ")
      }) 
      const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
      useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
           
             if (user.username !== "Admin") { navigate('/vendordashboard') }
        }
    
     }, [])
     useEffect(() => {
      if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        
       navigate('/login')
      }
      
   
   }, [])

    return (
      <ThemeProvider theme={theme}>
        <div>
            <TopHeader />
            <Container maxWidth="sm" >
        <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
        Pre Compliance/Engineering Quote
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="body2"
          gutterBottom
          className={classes.MainHeading2}>
          This will help you provide a test quote from lab for any technical changes whether it be a end of life component or adding an alternate component to the existing certified product.
        </Typography>
      </Container>
      <Container maxWidth="md" className={classes.stepping} >
        <Grid container justifyContent='center' >
          <Stack direction="row" >
            <Typography variant='h5' color={Color1}>___________</Typography>
            <Avatar className={classes.line1a} style={{ backgroundColor: backroudColor1 }}>
 
              <TbNumber1 />
           
            </Avatar>
            <Typography variant='h5' className={classes.line2} color={Color2}>___________</Typography>
            <Avatar className={classes.line1b} style={{ backgroundColor: backroudColor2 }}>
              <TbNumber2 />
            </Avatar >
            <Typography variant='h5' className={classes.line3} color={Color3}>___________</Typography>
          
      

          </Stack>

        </Grid>
    
        
        </Container>
        {Phase1 ? <>

<Container maxWidth="lg" className={classes.form}>
  <Typography variant='h5' className={classes.heading}  > General Information</Typography>
  <Grid container justifyContent="center" >
    <Grid item xs={12} sm={12} md={6} className={classes.grid}>
      <div className={classes.textfield1} >
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small"   label="First Name" align="center" className={classes.textfield} value={First_Name} onChange={(e) => setFirst_Name(e.target.value,)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small"   label="Last Name" align="center" className={classes.textfield} value={Last_Name} onChange={(e) => setLast_Name(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Company*" align="center" fullWidth className={classes.fullWidth} value={Company} onChange={(e) => setCompany(e.target.value)} />
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div className={classes.textfieald2} >
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Email*  " align="center" fullWidth className={classes.fullWidth1} value={Email} onChange={(e) => setEmail(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Phone Number*  " align="center" fullWidth className={classes.fullWidth1} value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} />
      </div>
    </Grid>
  </Grid>
</Container>
<Container maxWidth="lg" className={classes.form}>
<br/>
  <Typography variant='h5' className={classes.headingq}  >  Address</Typography>
  <Grid container justifyContent="center" >
    <Grid item xs={12} sm={12} md={6} className={classes.grid}>
      <div className={classes.textfield1} >
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="  Address*" align="center" fullWidth className={classes.fullWidth} value={Address} onChange={(e) => setAddress(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="City*  " align="center" fullWidth className={classes.fullWidth} value={City} onChange={(e) => setCity(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="  Zip*" align="center" fullWidth className={classes.fullWidth} value={Zip} onChange={(e) => setZip(e.target.value)} />
      
        <div>

</div>
<br/>
<label htmlFor="start-date">Start Date:</label>
<input type="date" id="start-date" value={START_DATE}   onChange={handleStartDateChange} style={{marginLeft:"10px",height:"35px"}}/>
        <br />

      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <div className={classes.textfield2} >
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Address 2  " align="center" fullWidth className={classes.fullWidth1} value={Address_2} onChange={(e) => setAddress_2(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" State*  " align="center" fullWidth className={classes.fullWidth1} value={State_} onChange={(e) => setState_(e.target.value)} />
        <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" United States  " align="center" fullWidth className={classes.fullWidth1} value={United_States} onChange={(e) => setUnited_States(e.target.value)} />
        <div>

</div>
<br/>

<label htmlFor="end-date">End Date:</label>
<input type="date" id="end-date" value={END_DATE}   min={START_DATE} onChange={handleEndDateChange} style={{marginLeft:"10px",height:"35px"}}/>

      </div>
    </Grid>
  </Grid>
    <br/>
  <Typography className={classes.caption} variant='caption'  >
  <Checkbox size="small" color="gray" checked={check_capcha.check} onChange={(e) => setCheck_capcha({ ...check_capcha, check: e.target.checked, })} />I agree to the Terms of Use and have read and accept the Privacy Policy. *</Typography>


  <Container maxWidth="lg" className={classes.centercontainer}>
    <Grid container spacing={3} direction="column" >
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>

          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={onCLick1} className={classes.ButtonBack}>
              Next
            </Button>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
</Container>
</> : null}

{Phase2 ? <>
    <Container maxWidth='lg'>
      <Typography variant='body2' gutterBottom className={classes.MainHeading3a} > Please describe scope of your work and changes to your instrument as best you can.</Typography>
      <Grid container  >
      <  TextField  value={  Description__PreCompliance   } onChange={(e) => setDescription__PreCompliance  (e.target.value)}  
          className={classes.textarea}
          variant="filled" style={{ backgroundColor: "transparent" }}
          id="outlined-multiline-flexible"
          label="Description"
          placeholder="Description"
          fullWidth
          multiline
        />
      </Grid>
    </Container>
    <Container maxWidth="lg">
      <br />
      <Typography variant='body2' className={classes.MainHeading4a} >  Please select applicable changes and upload current & future state comparison document.</Typography>
      <TableContainer   >
        <Grid container >
          <Table style={{ width: 1100 }}>
            <TableHead>
              <TableRow>

              </TableRow>
            </TableHead>
            <TableBody>
            
                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    EMC       </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    EMC__PreCompliance       } onChange={(e) => setEMC__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  EMC__PreCompliance1    } onChange={(e) => setEMC__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                  <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    SAFETY       </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    SAFETY__PreCompliance       } onChange={(e) => setSAFETY__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  SAFETY__PreCompliance1    } onChange={(e) => setSAFETY__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    LASER SAFETY       </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    LASER_SAFETY__PreCompliance       } onChange={(e) => setLASER_SAFETY__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  LASER_SAFETY__PreCompliance1    } onChange={(e) => setLASER_SAFETY__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    MEDICAL SAFETY        </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    MEDICAL_SAFETY__PreCompliance       } onChange={(e) => setMEDICAL_SAFETY__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  MEDICAL_SAFETY__PreCompliance1    } onChange={(e) => setMEDICAL_SAFETY__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    IP TESTING        </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    IP_TESTING__PreCompliance       } onChange={(e) => setIP_TESTING__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  IP_TESTING__PreCompliance1    } onChange={(e) => setIP_TESTING__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                  <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">    EMC 3m CHAMBER TIME        </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    EMC_3m_CHAMBER_TIME__PreCompliance       } onChange={(e) => setEMC_3m_CHAMBER_TIME__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  EMC_3m_CHAMBER_TIME__PreCompliance1    } onChange={(e) => setEMC_3m_CHAMBER_TIME__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">  EMC 10m CHAMBER TIME     </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    EMC_10m_CHAMBER_TIME__PreCompliance       } onChange={(e) => setEMC_10m_CHAMBER_TIME__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  EMC_10m_CHAMBER_TIME__PreCompliance1    } onChange={(e) => setEMC_10m_CHAMBER_TIME__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                <TableRow  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className={classes.tablecell} component="th" scope="row">   ENVIRONMENTAL CHAMBER TIME        </TableCell>
                  <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" /><span style={{ color: "black" }} checked={    ENVIRONMENTAL_CHAMBER_TIME__PreCompliance       } onChange={(e) => setENVIRONMENTAL_CHAMBER_TIME__PreCompliance         (e.target.checked)}  size="small" /><span style={{ color: "black" }}>Yes</span></TableCell>
                  <TableCell align="left"   >                <TextField name="creator" className={classes.textfiledtable} variant="filled" style={{ backgroundColor: "transparent" }}  value={  ENVIRONMENTAL_CHAMBER_TIME__PreCompliance1    } onChange={(e) => setENVIRONMENTAL_CHAMBER_TIME__PreCompliance1      (e.target.value)}   size="small" label=" Name of components  affected" align="center" /><Typography className={classes.hrs} variant="caption"> </Typography> </TableCell>
                  <TableCell align="left"    >
                 </TableCell>
                </TableRow>

                 
            </TableBody>
          </Table>
        </Grid>

        {/* <Typography variant='body1'   className={classes.MainHeading5} >Applicable Standards
         <Avatar className={classes.PlusIcons}  style={{ backgroundColor: 'grey' ,     height: 25, width:25}}>
        <AddIcon   style={{     height: 20, width:30}}/>
      </Avatar>
      </Typography>
      <Typography variant='caption'   className={classes.MainHeading6}  style={{color:'red' }} >* Click[+] to add some Standards</Typography>
      <TextField name="creator"  variant="filled"      style={{ backgroundColor: "transparent" }}     size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

      </TableContainer>
      <br />
      <Typography variant='body2' gutterBottom className={classes.MainHeading3a} > Please select intended market countries.</Typography>
      <Grid container >
        <TextField
          className={classes.textarea}
     value={  Pleaseselectintendedmarketcountries__PreCompliance   } onChange={(e) => setPleaseselectintendedmarketcountries__PreCompliance  (e.target.value)}  
          variant="filled" style={{ backgroundColor: "transparent" }}
          id="outlined-multiline-flexible"
          label=""
          placeholder="USA, CANADA, EUROPE, UK, UNITED KINGDOM, AUSTRALIA, KOREA, ASIA, Middle EAST, JAPAN, BRAZIL, OTHER"
          fullWidth
          multiline
        />
      </Grid>
      <Box  >




        <br />
        <Typography style={{}} className={classes.MainHeading3a} variant='body1'>Please upload existing test reports including particular/collateral standard reports if any applicable.</Typography>

        {inputFields3.map(inputField => (
          <>   <div   >

            <Paper className={classes.paper}>
              <IconButton
                aria-label="delete"
                size="small"
                className={classes.addmorebottom}
              >





                <Avatar
                  sx={{ bgcolor: '#DDDDDD' }}
                  onClick={handleAddFields1}
                  className={classes.addmorebottomicon}
                  style={{ width: 20, height: 20, backgroundColor: "transparent", color: "red" }}
                >
                  <AddIcon />
                </Avatar>

              </IconButton>
              <TextField

                variant="filled" style={{ backgroundColor: "transparent" }}
                name="firstName"
                value={inputField.firstName}
                onChange={event => handleChangeInput1(inputField.id, event)}

                size="small"
                label="Description"
                align="center"
                className={classes.bottomdescription}
              />

              <Button variant="contained" startIcon={<CloudUploadIcon />} component="label" className={classes.bottomdragndrop}   >

                <FileBase
                  type="file"
                  multiple={""}
                  defaultName="Custom Choose File Name"
                  onDone={({ base64 }) =>
                    handleChangeInput1(inputField.id, { target: { name: "lastName", value: base64 } })
                  }
                />
              </Button>
              {/* <Avatar
                disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}
                  sx={{ bgcolor: '#DDDDDD' }}
                 
                  className={classes.addmorebottomicon}
                  style={{ width: 24, height: 24, backgroundColor: "#DDDDDD", color: "black" }}
                > <DeleteOutlineOutlinedIcon size="small" />
                 
                </Avatar> */}
              <IconButton
                disabled={inputFields.length === 1} onClick={() => handleRemoveFields1(inputField.id)}
                aria-label="download"
                size="small"
                className={classes.addmorebottommultiple}
              >
                <DeleteOutlineOutlinedIcon
                  className={classes.addmorebottommultiple}
                  style={{ color: "red" }}
                />
              </IconButton>
            </Paper>
            <br />
          </div>
          </>
        ))}








      </Box>
      <Box  >



     

        <Button variant="contained" color="primary" size="medium" className={classes.ButtonBack} onClick={Click3} type="submit"> Next </Button>
        <Button variant="contained" color="secondary" size="medium" className={classes.Buttonnext} onClick={Back1} type="submit"> Back </Button>
      </Box>

    </Container>
  </> : null}
      {Phase3 ? <>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
            Submit Your Quote Request
          </Typography>
        </Container>

        <Container maxWidth="md">
          <Paper className={classes.Paper}>
            <form className={classes.form}>
              <TextField
                name="creator"
                 variant="filled"      style={{ backgroundColor: "transparent" }}  
                label="Test Lab Name"
                placeholder='Intertek'
                align="center"
                size="small"
                className={classes.textfieldlast}
              />
              <TextField
                name="creator"
                 variant="filled"      style={{ backgroundColor: "transparent" }}  
                placeholder='Enter Your Location, e.g. San Jose, San Francisco'
                label="Location  "
                align="center"
                size="small"
                className={classes.textfieldlast}
              />
              <Button className={classes.buttonFind} variant="contained" color="primary" size="large" type="submit"> Search </Button>
            </form>
          </Paper>
        </Container>

        <Container maxWidth="lg">
          <TableContainer component={Paper} className={classes.Table}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> Lab Name</TableCell>
                  <TableCell align="left">Location</TableCell>
                  <TableCell align="left"> Services</TableCell>
                  <TableCell align="right"> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="right" width='600px'><Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" > Request for quote </Button> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        <Container maxWidth="lg">
          <Grid container >
          <Typography variant="caption" className={classes.showingtotalrows} >Showing 6 of 269 results</Typography>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container >
            <Button className={classes.loadmore} variant="contained" color="primary" size="small" type="submit"  > Load more..     </Button>
          </Grid>
             <Button variant="contained" color="primary" size="medium" className={classes.ButtonBack} onClick={Click3} type="submit"> Submit </Button>
            <Button variant="contained" color="secondary" size="medium" className={classes.Buttonnext} onClick={Back3} type="submit"> Back </Button>
         
        </Container>

      </> : null}
            <Footer />
        </div>
     <ToastContainer />
        
        </ThemeProvider>

    )
}

export default Body 
 