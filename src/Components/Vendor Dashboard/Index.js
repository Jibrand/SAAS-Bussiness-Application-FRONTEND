import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Api } from '../../Backened/Api'
import "./Modal.css";
import { TextField, Card, RadioGroup, InputLabel, Input, InputAdornment, FormLabel, FormControl, FormControlLabel, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table, } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TOpHeaderV from "../../Constant/TOpHeaderV";
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import useStyles from "./style";
import Footer from '../../Constant/Footer'
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import FileBase from "react-file-base64";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
 


const BasicTable = () => {
  const { userq, isAuthenticated, isLoading } = useAuth0();
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
  const [VendorRFQId, setVendorRFQId] = useState('') 

  const classes = useStyles();
  const [model, setmodel] = useState(false)
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2)));
  const [show, setShow] = useState(false);
  const [postData, setPostData] = useState({ file: "", fileName: "" })
  const [vendorCount, setVendorCount] = useState(null);
  const [userName, setUserName] = useState("");        
  const [searchTerm, setsearchTerm] = useState([]);
  const [IsVendorAddedQuote, setIsVendorAddedQuote] = useState('')

  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2)) {
      
     navigate('/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore')
    }
    
 
 }, [])

  const dataa = {First_Name:First_Name,
    IsVendorAddedQuote:IsVendorAddedQuote,
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


  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY2)) {
      
      navigate('/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore')
     }
    getproducts();
 
    }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  useEffect(() => {
    const getVendorCount = async (id) => {
      try {
        const response = await axios.get(`  ${Api}/products/vendor-count/${id}`);
        const count = response.data.count;
        setVendorCount(count);
        console.log("asdfasdasdasdasdasd", vendorCount)
      } catch (error) {
        console.error(error.message);
      }
    };
  }, [])


  const getproducts = async () => {
    //  console.log("the puran user",user?.result.email)

    console.log("the user isjhjhjhjhjhj ", userName);
    let result = await fetch(
      `${Api}/userrfq/search/${user.email}`
    );
    result = await result.json();
    setData(result);
  };

  console.warn("results", data);
  console.warn("results", data);

  const AddUser = (id) => { navigate(`/adduser/${id}`) }

  const deleteproduct = async (id) => {

    let result = await fetch(`${Api}/userrfq/${id} `, {
      method: "Delete",
    });

    // getproductdetail()

    result = await result.json();
    if (result) {
      
      getproducts();
    }
  };


  const [query, setQuery] = useState('');

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleSubmit = async (id) => {
    // Setrfq_id:id 
    console.log(id)
    let result = await fetch(`${Api}/userrfq/${id}`, {
      method: "Put",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" }
    })
    result = await result.json()
    console.warn(result)
    setModalShow(false)

    getproducts()



    // result = await result.json();


  };

  const handleClosed = () => setShow(false);
  const handleShow = () => setShow(true);

  const [datee, setDatee] = useState([])

  const updatequote = async (id) => {
    navigate (`/VendorQuoteUpdate/${id}`)
  }




  const deleteQuote =   ((id ) => {
   
    const result =   fetch(`${Api}/userRFQ/${id}`, {
        method: "Put",
        body: JSON.stringify(dataa),
        headers: { "Content-Type": "Application/json" },
    })
  
    //   const result1 =   fetch(`${Api}/userRFQ/${params.id}`, {
    //     method: "Put",
    //     body: JSON.stringify({  IsVendorAddedQuote}),
    //     headers: { "Content-Type": "Application/json" },
    // })
      // result = await result.json();
      if (result ) {
  
        setShow(false);
        navigate('/vendordashbodard')
        navigate('/vendordashboard')
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        getproducts()
        // alert(" Deleted Succesfully!");
         
      }
    })






  //   const  = async (id) => {
  //   let result = await fetch(`${Api}/VendorQuoteN/${id}`);
  //   result = await result.json();
  //   setDatee(result);
  //   const { _id } = result[0];
  //   console.log("sdasdasdasdasdassacserewr", _id)


  //   const result2 = fetch(`${Api}/userRFQ/${id}`, {
  //     method: "Put",
  //     body: JSON.stringify({ IsVendorAddedQuote: "" }),
  //     headers: { "Content-Type": "Application/json" },
  //   })
  //   let result1 = await fetch(`${Api}/VendorQuoteN/${_id}  `, {
  //     method: "Delete",
  //   });
  //   if (result && result1) {

  //     alert("done")
  //     navigate("/vendordashboard"
  //     )
  //   }

  // };





  return (
    <>
<TOpHeaderV/>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
          Quote Request Details
        </Typography>
      </Container>
      <br />
      <Container maxWidth="lg">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "10px" }}>
          <TextField
            onChange={event => { setsearchTerm(event.target.value) }}
            size='small'
            placeholder='Search here'
            label=""
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch', alignSelf: 'flex-end' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"> <SearchIcon /></InputAdornment>,
            }}
          />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>I.D</TableCell>
                <TableCell >RFQ</TableCell>
                {/* <TableCell >Name</TableCell> */}
                <TableCell > Start Date</TableCell>
                <TableCell > End Date</TableCell>
                {/* <TableCell >  </TableCell> */}
                <TableCell >Po </TableCell>
                <TableCell >Quote </TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {data.filter((item) => {
                if (searchTerm == "") {
                  return item
                } else if (item.rfq_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return item
                }
              }).map((item, key) => {
                return (
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell style={{ width: "20%" }}  >

                      {item._id}

                      {/* {item.id} */}
                    </TableCell>
                    {/* <TableCell align="">
                                            {item.rfq_name }
                                        </TableCell> */}
                    <TableCell align="">
                      {item.rfq_name}
                    </TableCell>
                    <TableCell >{item.START_DATE}  </TableCell>
                    {/* <TableCell >{item.IsVendorAddedQuote}  </TableCell> */}
                    <TableCell >  {item.END_DATE} </TableCell>
                    <TableCell> <span onClick={() => setModalShow(true)} style={{ color: "blue" }} >Add PO</span>
                      <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            Attach PO
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                          <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                              <FileBase
                                type="file"
                                multiple={""}
                                onDone={({ base64 }) =>
                                  setPostData({
                                    ...postData,
                                    file: base64,
                                  })
                                }
                              />
                              <Form.Text className="text-muted">
                              </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" value={postData.fileName}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    fileName: e.target.value,
                                  })
                                } />
                            </Form.Group>

                            <Button variant="primary" onClick={() => handleSubmit(item._id)}>
                              Submit
                            </Button>
                          </Form>
                        </Modal.Body>

                      </Modal>
                    </TableCell>
                    <TableCell style={{ color: "#007D99" }}>

                      {item.IsVendorAddedQuote == '' ? (
                        <Link to={`/VendorQuote/${item._id}`} style={{ color: "#007D99" }}>

                          Submit Qu <FileUploadOutlinedIcon style={{ color: "#007D99" }} />
                        </Link>) : (
                          <span >
                        <span onClick={() => updatequote(item._id)}>
                       
                            UpdateQu
                           
                          </span>
                          <DeleteOutlineOutlinedIcon
                            fontSize='small'
                            onClick={ handleShow}
                            style={{ color: "#007D99", marginLeft: "8px" }}
                          />
                        <Modal show={show} onHide={handleClosed}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Modal.Header  >
                          <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to Delete</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClosed}>
                            Close
                          </Button>
                          <Button variant="danger" onClick={() => deleteQuote(item._id)} >
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                        </span>
                        
                        
                        
                        
                        
                        )
                        
                        }
                     
                    </TableCell>
                   
                  </TableRow>
                )
              })}

            </TableBody>
          </Table>
        </TableContainer>

      </Container>




      {/* <IconButton aria-label="delete" size="small" className={classes.addmorebottom}>
                <Avatar sx={{ bgcolor: '#DDDDDD' }} className={classes.addmorebottomicon} style={{ width: 24, height: 24, backgroundColor: "#DDDDDD", color: "black" }}>
                    <AddIcon />
                </Avatar>
            </IconButton> */}





      {/* <Container maxWidth="md">
                <Paper className={classes.Paper}>
                    <form className={classes.form}>
                        <Typography variant="body2" color="initial" style={{ textAlign: "center", color: "black" }}>Please use separate email accounts for each vendor to send the request.</Typography>

                    </form>
                </Paper>
            </Container> */}

      <Footer />

    </>
  );
}
export default BasicTable
 