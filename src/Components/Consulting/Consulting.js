import React, { useState, useEffect } from 'react'
import { TextField, Button, Card, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import TopHeader from "../../Constant/TopHeader";
import Footer from "../../Constant/Footer";
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./style";
import { Api } from "../../Backened/Api";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { TbNumber1 } from "react-icons/tb"
import { TbNumber2 } from "react-icons/tb"
import { TbNumber3 } from "react-icons/tb"
import { TbNumber4 } from "react-icons/tb"
const Consulting = () => {
  //useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);

  const [check_capcha, setCheck_capcha] = useState({
    check: false,
  })
  const [user1, setUser1] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {

      if (user.username !== "Admin") { navigate('/vendordashboard') }
    }

  }, [])
  const [Phase1, setPhase1] = useState(true)
  const [First_Name, setFirst_Name] = useState('')
  const [Last_Name, setLast_Name] = useState('')
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

  const [Description__Consulting, setDescription__Consulting] = useState('')
  const [NRTL_CB_Scheme_Certification_Support__Consulting, setNRTL_CB_Scheme_Certification_Support__Consulting] = useState(false)
  const [EMC_Troubleshooting_Design_Review__Consulting, setEMC_Troubleshooting_Design_Review__Consulting] = useState(false)
  const [Electrical_Safety_Test_Plan_Preparation__Consulting, setElectrical_Safety_Test_Plan_Preparation__Consulting] = useState(false)
  const [FDA_510k_Premarket_Notification_Regulatory_Submission__Consulting, setFDA_510k_Premarket_Notification_Regulatory_Submission__Consulting] = useState(false)
  const [EMC_Test_Plan_Preparation__Consulting, setEMC_Test_Plan_Preparation__Consulting] = useState(false)
  const [FDA_De_Novo_Program_Regulatory_Submission__Consulting, setFDA_De_Novo_Program_Regulatory_Submission__Consulting] = useState(false)
  const [Preliminary_Design___Construction_Review_PDR__Consulting, setPreliminary_Design___Construction_Review_PDR__Consulting] = useState(false)
  const [FDA_Pre_Submission_Request_for_Feedback__Consulting, setFDA_Pre_Submission_Request_for_Feedback__Consulting] = useState(false)
  const [Prepare_or_Review_Insulation_Isolation_Diagram__Consulting, setPrepare_or_Review_Insulation_Isolation_Diagram__Consulting] = useState(false)
  const [FDA_513g_Request_for_Classification__Consulting, setFDA_513g_Request_for_Classification__Consulting] = useState(false)
  const [Risk_Management_File_Review_and_Checklist_Completion__Consulting, setRisk_Management_File_Review_and_Checklist_Completion__Consulting] = useState(false)
  const [EU_MDR_Technical_Documentation_Assessment__Consulting, setEU_MDR_Technical_Documentation_Assessment__Consulting] = useState(false)
  const [Software_Lifecycle_Document_Review_and_Checklist_Completion__Consulting, setSoftware_Lifecycle_Document_Review_and_Checklist_Completion__Consulting] = useState(false)
  const [EU_IVDR_Technical_Documentation_Assessment__Consulting, setEU_IVDR_Technical_Documentation_Assessment__Consulting] = useState(false)
  const [Usability_File_Review_and_Checklist_Completion__Consulting, setUsability_File_Review_and_Checklist_Completion__Consulting] = useState(false)
  const [UK_Medical_Device_Technical_Documentation_Assessment__Consulting, setUK_Medical_Device_Technical_Documentation_Assessment__Consulting] = useState(false)
  const [Accompanying_Documents_Review_and_Checklist_Completion__Consulting, setAccompanying_Documents_Review_and_Checklist_Completion__Consulting] = useState(false)
  const [UK_IVD_Technical_Documentation_Assessment__Consulting, setUK_IVD_Technical_Documentation_Assessment__Consulting] = useState(false)
  const [NRTL_Recognition_for_North_America__Consulting, setNRTL_Recognition_for_North_America__Consulting] = useState(false)
  const [Global_Market_Access__Regulatory_Requirements_Definition__Consulting, setGlobal_Market_Access__Regulatory_Requirements_Definition__Consulting] = useState(false)
  const [Coexistence_Risk_Assessment_Test_Plan__Consulting, setCoexistence_Risk_Assessment_Test_Plan__Consulting] = useState(false)
  const [Global_Market_Access__Radio_Registration__Consulting, setGlobal_Market_Access__Radio_Registration__Consulting] = useState(false)
  const [Cybersecurity_Risk_Assessment_Test_Plan__Consulting, setCybersecurity_Risk_Assessment_Test_Plan__Consulting] = useState(false)
  const [Laboratory_Findings_Report_Review_Remediation__Consulting, setLaboratory_Findings_Report_Review_Remediation__Consulting] = useState(false)
  const [Training__Medical_Device_Industry_Overview__Consulting, setTraining__Medical_Device_Industry_Overview__Consulting] = useState(false)
  const [Training__Risk_Management_per_ISO_14971__Consulting, setTraining__Risk_Management_per_ISO_14971__Consulting] = useState(false)
  const [Training__Medical_Electrical_Standards_including_AIM_7351731__Consulting, setTraining__Medical_Electrical_Standards_including_AIM_7351731__Consulting] = useState(false)
  const [Training__Software_Lifecycle_FDA_Requirements__Consulting, setTraining__Software_Lifecycle_FDA_Requirements__Consulting] = useState(false)
  const [Performance_Test_Method_Development_Validation__Consulting, setPerformance_Test_Method_Development_Validation__Consulting] = useState(false)
  const [Design_Verification_Support__Plans_and_Protocols__Consulting, setDesign_Verification_Support__Plans_and_Protocols__Consulting] = useState(false)
  const [Biological_Evaluation_Plans__Consulting, setBiological_Evaluation_Plans__Consulting] = useState(false)
  const [Formative_Usability_Study__Consulting, setFormative_Usability_Study__Consulting] = useState(false)
  const [Summative_Usability_Study__Consulting, setSummative_Usability_Study__Consulting] = useState(false)
  const [Global_Market_Access_Brazil_INMETRO_Certification__Consulting, setGlobal_Market_Access_Brazil_INMETRO_Certification__Consulting] = useState(false)
  const [RFQCategory, setRFQCategory] = useState('Consulting')
  const [norfq, setNorfq] = useState(0)
  const [Phase2, setPhase2] = useState(false)
  const [Phase3, setPhase3] = useState(false)
  const [Color1, setColor1] = useState('primary')
  const [Color2, setColor2] = useState('')
  const [Color3, setColor3] = useState('')
  const [backroudColor1, setBackroudColor1] = useState('blue ')
  const [backroudColor2, setBackroudColor2] = useState('')
  const [backroudColor3, setBackroudColor3] = useState('')
  const classes = useStyles();
  const navigate = useNavigate()
  const userTemplate = { description: "" }
  const [user, setUser] = useState([userTemplate])
  const [END_DATE, setEND_DATE] = useState('')
  const [START_DATE, setSTART_DATE] = useState('')


  const handleAddFields = () => {
    setInputFields4([...inputFields4, { id: uuidv4(), firstName: '', lastName: '' }])
  }
  const [inputFields4, setInputFields4] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);

  const handleRemoveFields = id => {
    const values = [...inputFields4];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields4(values);
  }
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields4.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields4(newInputFields);
  }

  //1
  const handleAddFields1 = () => {
    setInputFields5([...inputFields5, { id: uuidv4(), firstName: '', lastName: '' }])
  }
  const [inputFields5, setInputFields5] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);

  const handleRemoveFields1 = id => {
    const values = [...inputFields5];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields5(values);
  }
  const handleChangeInput1 = (id, event) => {
    const newInputFields = inputFields5.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields5(newInputFields);
  }


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







  const addUser = () => {
    setUser([...user, userTemplate])
  }
  const onChange = (e, index) => {
    const updatedUsers = user.map((user, i) =>
      index == i
        ? Object.assign(user, { [e.target.name]: e.target.value }) : user)
    setUser(updatedUsers)
    console.log(userTemplate)
    console.warn(userTemplate)
  }
  const removeUser = (index) => {
    const filteredUser = [...user]
    filteredUser.splice(index, 1)
    setUser(filteredUser)
  }
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  function createData1(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("NRTL/CB Scheme Certification Support  ", " EMC Troubleshooting & Design Review        ", " NRTL_CB_Scheme_Certification_Support "),
    createData("  Electrical Safety Test Plan Preparation  ", "     FDA 510(k) Premarket Notification Regulatory Submission   "),
    createData("     ", "       "),
    createData("  ", "      "),
    createData("    ", "        "),
    createData("   ", "    "),
    createData("      ", "        "),
    createData("     ", "        "),
    createData("      ", "   "),
    createData("   ", "          "),
    createData("    ", "        "),
    createData("     ", "       "),
    createData("    ", "          "),
    createData("     ", "         "),
    createData("    ", "       "),
    createData("  Formative Usability Study     ", "        "),

  ];
  const rows1 = [
    createData("Intertek   ", "Location Name", "      Medical, Laser, Safety   "),
    createData("Intertek Testing Services    ", "Location Name", "EMC        "),
    createData("  Intertek USA      ", "Location Name", "  Radio, Medical       "),
    createData("  Intertek India    ", "Location Name", "        EMC, Medical, Lighting "),
    createData("  Intertek Canada    ", "Location Name", "    Medical     "),
    createData("    Intertek China        ", "Location Name", "      ITAV   "),


  ];
  const Click1 = (() => {
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

        setPhase2(true)
        setPhase1(false)
        setColor2('primary')
        setBackroudColor2('blue')
      }
    }
    else { toast.error("please confirm the terms and conditions") }

  })
  const Back1 = (() => {
    setPhase1(true)
    setPhase2(false)
  })
  const Click2 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase3(true)
    setPhase2(false)
    setPhase1(false)
    setColor3('primary')
    setBackroudColor3('blue')

  })
  const Back2 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(true)
    setPhase2(false)
    setColor2('')
    setBackroudColor2('')
    setColor1('primary')
    setBackroudColor1(' blue')
  })
  const data = {
    norfq:norfq,
    RFQCategory:RFQCategory,
    user: JSON.stringify(user),
    First_Name: First_Name,
    Last_Name: Last_Name,
    Company: Company,
    Email: Email,
    Phone_Number: Phone_Number,
    Address: Address,
    City: City,
    Zip: Zip,
    Address_2: Address_2,


    //array

    Description__Consulting: Description__Consulting,
    NRTL_CB_Scheme_Certification_Support__Consulting: NRTL_CB_Scheme_Certification_Support__Consulting,
    EMC_Troubleshooting_Design_Review__Consulting: EMC_Troubleshooting_Design_Review__Consulting,
    Electrical_Safety_Test_Plan_Preparation__Consulting: Electrical_Safety_Test_Plan_Preparation__Consulting,
    FDA_510k_Premarket_Notification_Regulatory_Submission__Consulting: FDA_510k_Premarket_Notification_Regulatory_Submission__Consulting,
    EMC_Test_Plan_Preparation__Consulting: EMC_Test_Plan_Preparation__Consulting,
    FDA_De_Novo_Program_Regulatory_Submission__Consulting: FDA_De_Novo_Program_Regulatory_Submission__Consulting,
    Preliminary_Design___Construction_Review_PDR__Consulting: Preliminary_Design___Construction_Review_PDR__Consulting,
    FDA_Pre_Submission_Request_for_Feedback__Consulting: FDA_Pre_Submission_Request_for_Feedback__Consulting,
    Prepare_or_Review_Insulation_Isolation_Diagram__Consulting: Prepare_or_Review_Insulation_Isolation_Diagram__Consulting,
    FDA_513g_Request_for_Classification__Consulting: FDA_513g_Request_for_Classification__Consulting,
    Risk_Management_File_Review_and_Checklist_Completion__Consulting: Risk_Management_File_Review_and_Checklist_Completion__Consulting,
    EU_MDR_Technical_Documentation_Assessment__Consulting: EU_MDR_Technical_Documentation_Assessment__Consulting,
    Software_Lifecycle_Document_Review_and_Checklist_Completion__Consulting: Software_Lifecycle_Document_Review_and_Checklist_Completion__Consulting,
    EU_IVDR_Technical_Documentation_Assessment__Consulting: EU_IVDR_Technical_Documentation_Assessment__Consulting,
    Usability_File_Review_and_Checklist_Completion__Consulting: Usability_File_Review_and_Checklist_Completion__Consulting,
    UK_Medical_Device_Technical_Documentation_Assessment__Consulting: UK_Medical_Device_Technical_Documentation_Assessment__Consulting,
    Accompanying_Documents_Review_and_Checklist_Completion__Consulting: Accompanying_Documents_Review_and_Checklist_Completion__Consulting,
    UK_IVD_Technical_Documentation_Assessment__Consulting: UK_IVD_Technical_Documentation_Assessment__Consulting,
    NRTL_Recognition_for_North_America__Consulting: NRTL_Recognition_for_North_America__Consulting,
    Global_Market_Access__Regulatory_Requirements_Definition__Consulting: Global_Market_Access__Regulatory_Requirements_Definition__Consulting,
    Coexistence_Risk_Assessment_Test_Plan__Consulting: Coexistence_Risk_Assessment_Test_Plan__Consulting,
    Global_Market_Access__Radio_Registration__Consulting: Global_Market_Access__Radio_Registration__Consulting,
    Cybersecurity_Risk_Assessment_Test_Plan__Consulting: Cybersecurity_Risk_Assessment_Test_Plan__Consulting,
    Laboratory_Findings_Report_Review_Remediation__Consulting: Laboratory_Findings_Report_Review_Remediation__Consulting,
    Training__Medical_Device_Industry_Overview__Consulting: Training__Medical_Device_Industry_Overview__Consulting,
    Training__Risk_Management_per_ISO_14971__Consulting: Training__Risk_Management_per_ISO_14971__Consulting,
    Training__Medical_Electrical_Standards_including_AIM_7351731__Consulting: Training__Medical_Electrical_Standards_including_AIM_7351731__Consulting,
    Training__Software_Lifecycle_FDA_Requirements__Consulting: Training__Software_Lifecycle_FDA_Requirements__Consulting,
    Performance_Test_Method_Development_Validation__Consulting: Performance_Test_Method_Development_Validation__Consulting,
    Design_Verification_Support__Plans_and_Protocols__Consulting: Design_Verification_Support__Plans_and_Protocols__Consulting,
    Biological_Evaluation_Plans__Consulting: Biological_Evaluation_Plans__Consulting,
    Formative_Usability_Study__Consulting: Formative_Usability_Study__Consulting,
    Summative_Usability_Study__Consulting: Summative_Usability_Study__Consulting,
    Global_Market_Access_Brazil_INMETRO_Certification__Consulting: Global_Market_Access_Brazil_INMETRO_Certification__Consulting,
    inputFields4:inputFields4,
    inputFields5:inputFields5,
  };
  const Click3 = (() => {
    const result = fetch(`${Api}/newproducts`, {
      method: "post",
      body: JSON.stringify(data,),
      headers: { "Content-Type": "application/json" },
    });
    // result = await result.json();
    if (result) {
      console.log(user)
      toast.info("added Succesfully!");
      window.scrollTo({ top: 0, behavior: 'smooth' });

      navigate('/thankyou')
    }
  })
  const Back3 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(false)
    setPhase2(true)
    setPhase3(false)
    setColor1('primary')
    setBackroudColor1(' blue')
    setColor2('primary')
    setBackroudColor2(' blue')
    setColor3('')
    setBackroudColor3('  ')
  })





  const theme = createTheme({
    overrides: {
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent"
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopHeader />
        <Container maxWidth="sm" >
          <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
            CONSULTING
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Typography
            variant="body2"
            gutterBottom
            className={classes.MainHeading2}>
            Consulting helps you connect to an expert to get your product in compliance with product regulatory requirement from the design phase till it’s launch.        </Typography>
        </Container>
        <Container maxWidth="md" className={classes.stepping} >
          <Grid container justify="center">
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
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="First Name" align="center" className={classes.textfield} value={First_Name} onChange={(e) => setFirst_Name(e.target.value,)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="Last Name" align="center" className={classes.textfield} value={Last_Name} onChange={(e) => setLast_Name(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="Company*" align="center" fullWidth className={classes.fullWidth} value={Company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.textfieald2} >
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="Email*  " align="center" fullWidth className={classes.fullWidth1} value={Email} onChange={(e) => setEmail(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="Phone Number*  " align="center" fullWidth className={classes.fullWidth1} value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} />
                </div>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.form}>
            <br />
            <Typography variant='h5' className={classes.headingq}  >  Address</Typography>
            <Grid container justifyContent="center" >
              <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                <div className={classes.textfield1} >
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="  Address*" align="center" fullWidth className={classes.fullWidth} value={Address} onChange={(e) => setAddress(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="City*  " align="center" fullWidth className={classes.fullWidth} value={City} onChange={(e) => setCity(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label="  Zip*" align="center" fullWidth className={classes.fullWidth} value={Zip} onChange={(e) => setZip(e.target.value)} />

                  <div>

                  </div>
                  <br />
                  <label htmlFor="start-date">Start Date:</label>
                  <input type="date" id="start-date" value={START_DATE} onChange={handleStartDateChange} style={{ marginLeft: "10px", height: "35px" }} />
                  <br />

                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div className={classes.textfield2} >
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label=" Address 2  " align="center" fullWidth className={classes.fullWidth1} value={Address_2} onChange={(e) => setAddress_2(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label=" State*  " align="center" fullWidth className={classes.fullWidth1} value={State_} onChange={(e) => setState_(e.target.value)} />
                  <TextField name="creator" variant="filled" style={{ backgroundColor: "transparent" }} size="small" label=" United States  " align="center" fullWidth className={classes.fullWidth1} value={United_States} onChange={(e) => setUnited_States(e.target.value)} />
                  <div>

                  </div>
                  <br />

                  <label htmlFor="end-date">End Date:</label>
                  <input type="date" id="end-date" value={END_DATE} min={START_DATE} onChange={handleEndDateChange} style={{ marginLeft: "10px", height: "35px" }} />

                </div>
              </Grid>
            </Grid>
            <br />
            <Typography className={classes.caption} variant='caption'  >
              <Checkbox size="small" color="gray" checked={check_capcha.check} onChange={(e) => setCheck_capcha({ ...check_capcha, check: e.target.checked, })} />I agree to the Terms of Use and have read and accept the Privacy Policy. *</Typography>


            <Container maxWidth="lg" className={classes.centercontainer}>
              <Grid container spacing={3} direction="column" >
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" onClick={Click1} className={classes.ButtonBack}>
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
          <Container maxWidth="lg"    >
            <Typography variant='body2' gutterBottom className={classes.MainHeading3} > Please describe scope of your work.</Typography>
            {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} className={classes.grid}>
          <TextField name="creator"     variant="filled"      style={{ backgroundColor: "transparent" }}      size="small" label="First Name" align="center" className={classes.textfield} />
          <TextField name="creator"     variant="filled"      style={{ backgroundColor: "transparent" }}      size="small" label="First Name" align="center" className={classes.textfield} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField name="creator"     variant="filled"      style={{ backgroundColor: "transparent" }}      size="small" label="First Name" align="center" className={classes.textfield} />
          <TextField name="creator"     variant="filled"      style={{ backgroundColor: "transparent" }}      size="small" label="First Name" align="center" className={classes.textfield} />
        </Grid>
      </Grid> */}
            <Grid container>
              <TextField
                className={classes.textarea}
                variant="filled" style={{ backgroundColor: "transparent" }}
                id="outlined-multiline-flexible"
                label="Description"
                placeholder="Description"
                value={Description__Consulting} onChange={(e) => setDescription__Consulting(e.target.value)}
                fullWidth
                multiline
              />
            </Grid>
            <Typography variant='body2' className={classes.MainHeading4} > Please select consulting services.</Typography>
          </Container>
          <Container maxWidth="lg">
            <TableContainer   >
              <Grid container>
                <Table style={{ width: 1200 }}>
                  <TableHead>
                    <TableRow>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">NRTL/CB Scheme Certification Support </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_CB_Scheme_Certification_Support__Consulting} onChange={(e) => setNRTL_CB_Scheme_Certification_Support__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > EMC Troubleshooting & Design Review  </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={EMC_Troubleshooting_Design_Review__Consulting} onChange={(e) => setEMC_Troubleshooting_Design_Review__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">   Electrical Safety Test Plan Preparation</TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Electrical_Safety_Test_Plan_Preparation__Consulting} onChange={(e) => setElectrical_Safety_Test_Plan_Preparation__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >   FDA 510(k) Premarket Notification Regulatory Submission </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={FDA_510k_Premarket_Notification_Regulatory_Submission__Consulting} onChange={(e) => setFDA_510k_Premarket_Notification_Regulatory_Submission__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> EMC Test Plan Preparation  </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={EMC_Test_Plan_Preparation__Consulting} onChange={(e) => setEMC_Test_Plan_Preparation__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >   FDA De Novo Program Regulatory Submission   </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={FDA_De_Novo_Program_Regulatory_Submission__Consulting} onChange={(e) => setFDA_De_Novo_Program_Regulatory_Submission__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">   Preliminary Design / Construction Review (PDR) </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Preliminary_Design___Construction_Review_PDR__Consulting} onChange={(e) => setPreliminary_Design___Construction_Review_PDR__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >    FDA Pre-Submission Request for Feedback    </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={FDA_Pre_Submission_Request_for_Feedback__Consulting} onChange={(e) => setFDA_Pre_Submission_Request_for_Feedback__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">Prepare or Review Insulation/Isolation Diagram  </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Prepare_or_Review_Insulation_Isolation_Diagram__Consulting} onChange={(e) => setPrepare_or_Review_Insulation_Isolation_Diagram__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >   FDA 513(g) Request for Classification   </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={FDA_513g_Request_for_Classification__Consulting} onChange={(e) => setFDA_513g_Request_for_Classification__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">    Risk Management File Review and Checklist Completion</TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Risk_Management_File_Review_and_Checklist_Completion__Consulting} onChange={(e) => setRisk_Management_File_Review_and_Checklist_Completion__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >    EU MDR Technical Documentation Assessment </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={EU_MDR_Technical_Documentation_Assessment__Consulting} onChange={(e) => setEU_MDR_Technical_Documentation_Assessment__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>

                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Software Lifecycle Document Review and Checklist Completion    </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Software_Lifecycle_Document_Review_and_Checklist_Completion__Consulting} onChange={(e) => setSoftware_Lifecycle_Document_Review_and_Checklist_Completion__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > EU IVDR Technical Documentation Assessment          </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={EU_IVDR_Technical_Documentation_Assessment__Consulting} onChange={(e) => setEU_IVDR_Technical_Documentation_Assessment__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">  Usability File Review and Checklist Completion </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Usability_File_Review_and_Checklist_Completion__Consulting} onChange={(e) => setUsability_File_Review_and_Checklist_Completion__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > UK Medical Device Technical Documentation Assessment      </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={UK_Medical_Device_Technical_Documentation_Assessment__Consulting} onChange={(e) => setUK_Medical_Device_Technical_Documentation_Assessment__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Accompanying Documents Review and Checklist Completion   </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Accompanying_Documents_Review_and_Checklist_Completion__Consulting} onChange={(e) => setAccompanying_Documents_Review_and_Checklist_Completion__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > UK IVD Technical Documentation Assessment      </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={UK_IVD_Technical_Documentation_Assessment__Consulting} onChange={(e) => setUK_IVD_Technical_Documentation_Assessment__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> NRTL Recognition for North America :  </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_Recognition_for_North_America__Consulting} onChange={(e) => setNRTL_Recognition_for_North_America__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >    Global Market Access - Regulatory Requirements Definition   </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Global_Market_Access__Regulatory_Requirements_Definition__Consulting} onChange={(e) => setGlobal_Market_Access__Regulatory_Requirements_Definition__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Coexistence Risk Assessment & Test Plan     </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Coexistence_Risk_Assessment_Test_Plan__Consulting} onChange={(e) => setCoexistence_Risk_Assessment_Test_Plan__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > Global Market Access - Radio Registration    </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Global_Market_Access__Radio_Registration__Consulting} onChange={(e) => setGlobal_Market_Access__Radio_Registration__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">  Cybersecurity Risk Assessment & Test Plan   </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Cybersecurity_Risk_Assessment_Test_Plan__Consulting} onChange={(e) => setCybersecurity_Risk_Assessment_Test_Plan__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >  Global Market Access - Brazil INMETRO Certification     </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Global_Market_Access_Brazil_INMETRO_Certification__Consulting} onChange={(e) => setGlobal_Market_Access_Brazil_INMETRO_Certification__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Laboratory Findings Report Review & Remediation    </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Laboratory_Findings_Report_Review_Remediation__Consulting} onChange={(e) => setLaboratory_Findings_Report_Review_Remediation__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > Training - Medical Device Industry Overview       </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Training__Medical_Device_Industry_Overview__Consulting} onChange={(e) => setTraining__Medical_Device_Industry_Overview__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Training - Risk Management per ISO 14971:2019    </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Training__Risk_Management_per_ISO_14971__Consulting} onChange={(e) => setTraining__Risk_Management_per_ISO_14971__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > Training - Medical Electrical Standards including AIM 7351731    </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Training__Medical_Electrical_Standards_including_AIM_7351731__Consulting} onChange={(e) => setTraining__Medical_Electrical_Standards_including_AIM_7351731__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">  Training - Software Lifecycle & FDA Requirements  </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Training__Software_Lifecycle_FDA_Requirements__Consulting} onChange={(e) => setTraining__Software_Lifecycle_FDA_Requirements__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" >   Performance Test Method Development & Validation   </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Performance_Test_Method_Development_Validation__Consulting} onChange={(e) => setPerformance_Test_Method_Development_Validation__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Design Verification Support - Plans and Protocols    </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Design_Verification_Support__Plans_and_Protocols__Consulting} onChange={(e) => setDesign_Verification_Support__Plans_and_Protocols__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>

                      <TableCell align="left" > Biological Evaluation Plans       </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Biological_Evaluation_Plans__Consulting} onChange={(e) => setBiological_Evaluation_Plans__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                    </TableRow>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="left" className={classes.tablecell} component="th" scope="row">  Formative Usability Study     </TableCell>
                      <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Formative_Usability_Study__Consulting} onChange={(e) => setFormative_Usability_Study__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                      <TableCell align="left" component="th" scope="row" width='75px'> </TableCell>
                      <TableCell align="left" > Summative Usability Study     </TableCell>
                      <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Summative_Usability_Study__Consulting} onChange={(e) => setSummative_Usability_Study__Consulting(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                      {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
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
        <TextField name="creator"     variant="filled"      style={{ backgroundColor: "transparent" }}      size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

            </TableContainer>
            <Box  >


              <Typography style={{ color: "#004580" }} variant='body1'> Applicable Standards. <span style={{ color: 'red' }}> </span></Typography>







              <Typography style={{ color: "#004580" }} variant='caption'>Please upload instrument’s user guide and other supporting documents.</Typography>

              {inputFields4.map(inputField => (
                <>   <div key={inputField.id}>

                  <Paper className={classes.paper}>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      className={classes.addmorebottom}
                    >





                      <Avatar
                        sx={{ bgcolor: '#DDDDDD' }}
                        onClick={handleAddFields}
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
                      onChange={event => handleChangeInput(inputField.id, event)}

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
                          handleChangeInput(inputField.id, { target: { name: "lastName", value: base64 } })
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
                      disabled={inputFields4.length === 1} onClick={() => handleRemoveFields(inputField.id)}
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

                </div>
                </>
              ))}


              <Typography style={{}} variant='caption' className={classes.MainHeading3a}>  Please upload user guide and other supporting documents to understand the changes (comparison between current & future state) to the existing design.</Typography>
              {/* <Typography   variant='body1'  className={classes.MainHeading3a}>Please upload user guide and other supporting documents to understand the product requirement.</Typography> */}

              <Box  >
                <Container maxWidth="lg" className={classes.cardgrid}>






                  {inputFields5.map(inputField => (
                    <>   <div key={inputField.id}>

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
                          disabled={inputFields5.length === 1} onClick={() => handleRemoveFields1(inputField.id)}
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




                </Container>

              </Box>



              <Button variant="contained" color="primary" size="medium" className={classes.ButtonBack} onClick={Click3} type="submit"> Next </Button>
              <Button variant="contained" color="secondary" size="medium" className={classes.Buttonnext} onClick={Back2} type="submit"> Back </Button>
            </Box>

          </Container>

        </> : null}
        <Footer />
      </div>
      <ToastContainer />

    </ThemeProvider>

  )
}

export default Consulting
