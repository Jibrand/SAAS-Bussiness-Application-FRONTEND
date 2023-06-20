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

const VendorQuote = () => {
  const [First_Name, setFirst_Name] = useState('')
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




useEffect(() => {
   
 
  getproductdetail()
}, [ ])


const getproductdetail=async ()=>{
  console.warn('here is params',params.id)
  let result =await fetch (`${Api}/vendorquoten/1/${params.id}`)
  result =await result.json()
  console.log("dsadbsabdmnas",result)
setFirst_Name(result.First_Name);
setLast_Name(result.Last_Name);
setEmail(result.Email);
setPhone_Number(result.Phone_Number);
setLegal_Entity_Name_for_PO(result.Legal_Entity_Name_for_PO);
setAddress(result.Address);
setCity(result.City);
setState(result.State);
setZip(result.Zip);
setCountry(result.Country);
setTotal_Quote_Amount(result.Total_Quote_Amount);
setQuote_Expiration_Date(result.Quote_Expiration_Date);
}









  const addUser = () => { setUser([...user, userTemplate]) }

  const removeUser = (index) => {
    const filteredUser = [...user]
    filteredUser.splice(index, 1)
    setUser(filteredUser)
  }

  useEffect(() => {
    console.log(params)
  }, [])
  const data = {First_Name:First_Name,
    Last_Name:Last_Name,
    VendorRFQId:VendorRFQId,
    Email:Email,
    Phone_Number:Phone_Number,
    Legal_Entity_Name_for_PO:Legal_Entity_Name_for_PO,
    Address:Address,
    City:City,
    State:State,
    Zip:Zip,
    Country:Country,
    Total_Quote_Amount:Total_Quote_Amount,
    Quote_Expiration_Date:Quote_Expiration_Date,}


    const HandleSubmit =   (( ) => {
   
    
    const result1 =   fetch(`${Api}/VendorQuoteN/${params.id}`, {
      method: "Put",
      body: JSON.stringify(data),
      headers: { "Content-Type": "Application/json" },
  })

     
    // result = await result.json();
    if (  result1) {

      alert("added Succesfully!");
      navigate('/vendordashboard')
       
    }
  })

  return (
    <>
      <TopHeader />
      <Typography variant="h4" className={classes.MainHeading} > {" "} Quote Request Details </Typography>
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="             First Name                                               " fullWidth  value ={   First_Name  }  onChange={(e) =>      setFirst_Name       (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="        Last Name                                                 " fullWidth  value ={   Last_Name  }  onChange={(e) =>       setLast_Name      (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="  Email                                                          " fullWidth  value ={    Email }  onChange={(e) =>   setEmail          (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="   Phone Number                                                         " fullWidth  value ={   Phone_Number  }  onChange={(e) =>        setPhone_Number     (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>
        <br />
        <Typography variant="body1" align="left"> <b>
          Details for PO</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="   Legal Entity Name for PO                                                          " fullWidth  value ={   Legal_Entity_Name_for_PO  }  onChange={(e) =>       setLegal_Entity_Name_for_PO      (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="      Address                                                      " fullWidth  value ={   Address  }  onChange={(e) =>      setAddress       (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="     City                                                       " fullWidth  value ={   City  }  onChange={(e) =>        setCity     (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="               State                                                  " fullWidth  value ={   State  }  onChange={(e) =>       setState      (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="                       Zip                                    " fullWidth  value ={   Zip  }  onChange={(e) =>       setZip      (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="         Country                                                   " fullWidth  value ={  Country   }  onChange={(e) =>          setCountry   (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="        Total Quote Amount                                                    " fullWidth  value ={  Total_Quote_Amount   }  onChange={(e) =>    setTotal_Quote_Amount         (e.target.value,)}  variant="filled" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="          Quote Expiration Date                                                  " fullWidth  value ={  Quote_Expiration_Date   }  onChange={(e) =>        setQuote_Expiration_Date      (e.target.value,)}  variant="filled" />
          </Grid>
        </Grid>

        <Box  >
          <Container maxWidth="md" className={classes.cardgrid}>


            <Typography style={{ color: "#004580" }} variant='caption'>Please upload user guide and other supporting documents to understand the product requirement.</Typography>


            {user.map((user, index) => (
              <>
                <Paper className={classes.paper}>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    className={classes.addmorebottom}
                  >
                    {index === 0 ? (
                      <Avatar
                        sx={{ bgcolor: '#DDDDDD' }}
                        onClick={addUser}
                        className={classes.addmorebottomicon}
                        style={{ width: 24, height: 24, backgroundColor: "#DDDDDD", color: "black" }}
                      >
                        <AddIcon />
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{ bgcolor: '#DDDDDD' }}
                        onClick={removeUser}
                        className={classes.addmorebottomicon}
                        style={{ width: 20, height: 20, backgroundColor: "transparent", color: "red" }}
                      >
                        <DeleteOutlineOutlinedIcon size="small" />
                      </Avatar>
                    )}
                  </IconButton>
                  <TextField
                    variant="standard"
                    name="descriptionrotate"

                    size="small"
                    label="Description"
                    align="center"
                    className={classes.bottomdescription}
                  />

                  <Button variant="contained" startIcon={<CloudUploadIcon />} component="label" className={classes.bottomdragndrop}   >
                    Drag n' Drop or Browse
                    <input
                      hidden
                      accept="*"
                      multiple
                      type="file"

                    />
                  </Button>

                  <IconButton
                    aria-label="download"
                    size="small"
                    className={classes.addmorebottommultiple}
                  >
                    <FileDownloadOutlinedIcon
                      className={classes.addmorebottommultiple}
                      style={{ color: "#007D99" }}
                    />
                  </IconButton>
                </Paper>
                <br />
              </>
            ))}



          </Container>

        </Box>
        <Container maxWidth='lg'>
          <Typography className={classes.captixon} variant='caption'  ><Checkbox size="small" color="gray" checked={check_capcha.check} onChange={(e) => setCheck_capcha({ ...check_capcha, check: e.target.checked, })} /> I agree to the Terms of Use and have read and accept the Privacy Policy. </Typography>
        </Container>

        <Container maxWidth="md" className={classes.centercontainer}>
          <Grid container spacing={3} direction="column" >
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" className={classes.rightbutton}>
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="succes" onClick={ HandleSubmit } className={classes.leftbutton}>
                    SAVE
                  </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default VendorQuote
