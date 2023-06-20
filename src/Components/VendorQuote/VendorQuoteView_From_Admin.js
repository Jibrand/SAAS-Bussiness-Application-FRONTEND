import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Typography, Box, Avatar, IconButton, Paper, Button, Checkbox, TextField, Grid } from "@material-ui/core";
import TopHeader from '../../Constant/TopHeader';
import useStyles from "./style";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Api } from '../../Backened/Api'
import { v4 as uuidv4 } from 'uuid';
import { DownhillSkiing, Download } from '@mui/icons-material';

const VendorQuoteView_From_Admin = () => {
  //////useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);

    const [First_Name, setFirst_Name] = useState(' ')
    const [Last_Name, setLast_Name] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone_Number, setPhone_Number] = useState('')
    const [Legal_Entity_Name_for_PO, setLegal_Entity_Name_for_PO] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Zip, setZip] = useState('')
    const [Country, setCountry] = useState('')
    const [Total_Quote_Amount, setTotal_Quote_Amount] = useState('')
    const [Quote_Expiration_Date, setQuote_Expiration_Date] = useState('')
    const [check_capcha, setCheck_capcha] = useState({ check: false, })
    const classes = useStyles();
    
    const navigate = useNavigate()
    const params = useParams()
    const [VendorRFQId, setVendorRFQId] = useState(params.id)
    const userTemplate = { descriptionrotate: "", filerotate: "" }
    const [user, setUser] = useState([userTemplate])
    const [IsVendorAddedQuote, setIsVendorAddedQuote] = useState('yes added')
    const [inputFields, setInputFields] = useState([{ id: uuidv4(), firstName: '', lastName: '' }]);


    // useEffect(() => {
    //     getproductdetail()
    // }, [])


    // const getproductdetail = async () => {
    //     console.warn('here is params', params.id)
    //     let result = await fetch(`http://localhost:5005/userRFQ/12/${params.id}`)
    //     result = await result.json()
    //     console.log("balwrwerwrwerwerwerwerwerwerwerwerwerwerwerewrewrrwerwereerwewerwewerreebal", result[0].Last_Name)
    //     setFirst_Name(result[0].First_Name);
    //     setLast_Name(result[0].Last_Name);
    //     setEmail(result[0].Email);
    //     setPhone_Number(result[0].Phone_Number);
    //     setLegal_Entity_Name_for_PO(result[0].Legal_Entity_Name_for_PO);
    //     setAddress(result[0].Address);
    //     setCity(result[0].City);
    //     setState(result[0].State);
    //     setZip(result[0].Zip);
    //     setCountry(result[0].Country);
    //     setTotal_Quote_Amount(result[0].Total_Quote_Amount);
    //     setQuote_Expiration_Date(result[0].Quote_Expiration_Date);
    // }
    






    // const addUser = () => { setUser([...user, userTemplate]) }

    // const removeUser = (index) => {
    //     const filteredUser = [...user]
    //     filteredUser.splice(index, 1)
    //     setUser(filteredUser)
    // }

  
 

    // useEffect(() => {
    //     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          
    //      navigate('/login')
    //     }
        
     
    //  }, [])












    useEffect(() => {
        getproductdetafil()
    }, [])

    const getproductdetafil = async () => {
        let result = await fetch(`${Api}/userRFQ/12/${params.id}`)
        result = await result.json()
       
        setInputFields(result[0].inputFields)
        setFirst_Name(result[0].First_Name);
        setLast_Name(result[0].Last_Name);
        setEmail(result[0].Email);
        setPhone_Number(result[0].Phone_Number);
        setLegal_Entity_Name_for_PO(result[0].Legal_Entity_Name_for_PO);
        setAddress(result[0].Address);
        setCity(result[0].City);
        setState(result[0].State);
        setZip(result[0].Zip);
        setCountry(result[0].Country);
        setTotal_Quote_Amount(result[0].Total_Quote_Amount);
        setQuote_Expiration_Date(result[0].Quote_Expiration_Date);
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

    const handleAddFields = () => {
        const newInputFields = [...inputFields, { id: uuidv4(), firstName: '', lastName: '' }];
        setInputFields(newInputFields);
    }

    const handleRemoveFields = (id) => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    return (
        <>
            <TopHeader />
            <Typography variant="h4" className={classes.MainHeading} > {" "} Quote Request Details </Typography>
            <br />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="             First Name                                               " fullWidth value={First_Name} onChange={(e) => setFirst_Name(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="        Last Name                                                 " fullWidth value={Last_Name} onChange={(e) => setLast_Name(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="  Email                                                          " fullWidth value={Email} onChange={(e) => setEmail(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="   Phone Number                                                         " fullWidth value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>
                <br />
                <Typography variant="body1" align="left"> <b>
                    Details for PO</b>
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="   Legal Entity Name for PO                                                          " fullWidth value={Legal_Entity_Name_for_PO} onChange={(e) => setLegal_Entity_Name_for_PO(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="      Address                                                      " fullWidth value={Address} onChange={(e) => setAddress(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="     City                                                       " fullWidth value={City} onChange={(e) => setCity(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="               State                                                  " fullWidth value={State} onChange={(e) => setState(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="                       Zip                                    " fullWidth value={Zip} onChange={(e) => setZip(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="         Country                                                   " fullWidth value={Country} onChange={(e) => setCountry(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="        Total Quote Amount                                                    " fullWidth value={Total_Quote_Amount} onChange={(e) => setTotal_Quote_Amount(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  disabled    label="          Quote Expiration Date                                                  " fullWidth value={Quote_Expiration_Date} onChange={(e) => setQuote_Expiration_Date(e.target.value)} variant="standard" />
                    </Grid>
                </Grid>

                <Box  >
                    <Container maxWidth="md" className={classes.cardgrid}>


                        <Typography style={{ color: "#004580" }} variant='caption'>Please upload user guide and other supporting documents to understand the product requirement.</Typography>


                        {inputFields.map((inputField, index) => (
              <>   <div key={inputField.id}>
                <Paper className={classes.paper}>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    className={classes.addmorebottom}
                  >

 
 
                    
                   
                       
                 
                  </IconButton>
                  <TextField
                    variant="standard"
                    name="firstName"
                    value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
           
                    size="small"
                    label="Description"
                    disabled
                    align="center"
                    className={classes.bottomdescription}
                  />

                  {/* <Button variant="contained" startIcon={<CloudUploadIcon />} component="label" className={classes.bottomdragndrop}   >
                    
                    <FileBase
  type="file"
  multiple={""}
  defaultName="Custom Choose File Name"
  onDone={({ base64 }) =>
    handleChangeInput(inputField.id, { target: { name: "lastName", value: base64 } })
  }
/>
                  </Button> */}
                        <a href={ inputField.lastName } download>   
                        <IconButton
                     
                      aria-label="download"
                      size="small"
                      className={classes.addmorebottommultiple}
                    >
                      <FileDownloadOutlinedIcon
                        className={classes.addmorebottommultiple}
                        style={{ color: "red" ,marginTop:"10px",marginLeft:"3px"}}
                      />
                    </IconButton> </a>
                  {/* <Avatar
                      disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}
                        sx={{ bgcolor: '#DDDDDD' }}
                       
                        className={classes.addmorebottomicon}
                        style={{ width: 24, height: 24, backgroundColor: "#DDDDDD", color: "black" }}
                      > <DeleteOutlineOutlinedIcon size="small" />
                       
                      </Avatar> */}
                      
                </Paper>
                <br />
                </div>
              </>
            ))}



                    </Container>

                </Box>
                {/* <Container maxWidth='lg'>
                    <Typography className={classes.captixon} variant='caption'  ><Checkbox size="small" color="gray" checked={check_capcha.check} onChange={(e) => setCheck_capcha({ ...check_capcha, check: e.target.checked, })} /> I agree to the Terms of Use and have read and accept the Privacy Policy. </Typography>
                </Container> */}

                {/* <Container maxWidth="md" className={classes.centercontainer}>
                    <Grid container spacing={3} direction="column" >
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" className={classes.rightbutton}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="succes"   className={classes.leftbutton}>
                                        SAVE
                                    </Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container> */}
            </Container>
        </>
    )
}

export default VendorQuoteView_From_Admin
 

 