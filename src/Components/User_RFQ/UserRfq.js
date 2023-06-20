import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Api } from '../../Backened/Api'
import { TextField,  Card, RadioGroup, InputLabel, Input, InputAdornment, FormLabel, FormControl, FormControlLabel, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table, } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TopHeader from "../../Constant/TopHeader";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import useStyles from "./style";
import Footer from '../../Constant/Footer'
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import VendorQuote from './../VendorQuote/VendorQuoteVIew';

export default function BasicTable() {
  //////////useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);

    const classes = useStyles();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const params = useParams();
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

    const deleteproduct = async (id,norfqa) => {

        let result = await fetch(`${Api}/userRFQ/${id}  `, {
          method: "Delete",
        });
console.log('thisssssssssssssss',norfqa)
        result = await result.json();
        if (result) {
            getproductdetail();
            setShow(false)
        }




        let result2 = await fetch(` ${Api}/newproducts/${norfqa}`);
        result2 = await result2.json();
        setData2(result2);
        
        console.log("balbalbal",result2.norfq)
        console.log("this is your real value",norfqa-1  )


        let result3 = await fetch(`${Api}/newproducts/${norfqa}`, {
            method: "Put",
            body: JSON.stringify( {norfq: result2.norfq-1}),
            headers: { "Content-Type": "Application/json" },
          })
          if(result3 )
          {
        
           
        getproductdetail()
        
          }
      };
    // const deleteproduct = async (id,norfqa) => {
    //     let result = await fetch(`${Api}/userRFQ/${id}  `, {
    //         method: "Delete",
    //     });
    //     console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb",norfqa )

    //     let result2 = await fetch(`${Api}/newproducts/${norfqa}`);
    // console.log('ccccccccdacassssssssss', result2)

    //     result2 = await result.json();
    //     setData2(result2)
    //     const data2s=data2.map(u=>u.rfq_id).toString();
    // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb",data2s )
    // console.log('ccccccccdacassssssssss', result2)
    //    console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", data2.map((tn) => tn._id));


    //     const result1 = await fetch(`${Api}/newproducts/${norfqa}`, {
    //         method: "Put",
    //         body: JSON.stringify( {norfq: result2.norfq -1}),
    //         headers: { "Content-Type": "Application/json" },
    //       })
    //     result = await result.json();
    //     if (result) {
    //         getproductdetail();
    //     }
    // };
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {

            if (user.username !== "Admin") { navigate('/vendordashboard') }
        }

    }, [])
    useEffect(() => {
        getproductdetail();
    }, []);
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }


    const [datee, setDatee] = useState([])

    const updatequote = async (id) => {


      //  let result = await fetch(`${Api}/userrfq/12/${id}`);
       // result = await result.json();
      //  setDatee(result);console.log("sdasdasdasdasdassacserewr", result)
      console.log("fsdufsdfuisdyfuisdyfuyuysduifsudyfuidysksysyufyusd",id)
        navigate (`/vendoradmin/${id}`)
      }

    const deleteQuote = async () => {}

    const getproductdetail = async () => {
        console.warn(params);
        let result = await fetch(`${Api}/userRFQ/${params.id}`);
        result = await result.json();
        setData(result);
        console.warn(result);

    };

    const handleClosed = () => setShow(false);
    const handleShow = () => setShow(true);
    console.warn("results", data);
    const [searchTerm, setsearchTerm] = useState([]);


    const AddUser = (id) => { navigate(`/adduser/${id}`) }
    useEffect(() => {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          
         navigate('/login')
        }
        
     
     }, [])

    return (
        <>
            <TopHeader />
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
                    Vendor List                </Typography>
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
                                <TableCell >Name</TableCell>
                                <TableCell > RFQ</TableCell>
                                <TableCell >  PO </TableCell>
                                <TableCell >  Quote </TableCell>
                                <TableCell >   </TableCell>
                                


                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {data.filter((item) => {

                                if (searchTerm == "") {
                                    return item
                                } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return item
                                }
                            }).map((item, key) => {

                                return (

                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={{ width: "20%" }}  >
                                          


                                                {item._id}
                                          
                                            {/* {item.id} */}
                                        </TableCell>
                                        <TableCell align="">

                                            {item.name}

                                        </TableCell>
                                        <TableCell >{item.rfq_name}  </TableCell>
                                        <TableCell > 
                                        {item.file==null  ? (
                                         <Typography   variant="caption" style={{color:"red"}}> Not Uploaded</Typography>  
      ) : (
        <Typography   variant="caption" style={{color:"blue"}}>   Uploaded<a href={item.file} download>  <FileDownloadOutlinedIcon  style={{color:"blue",size:"2px"}}/></a> </Typography> 
      )}</TableCell>
                                        <TableCell >    {item.IsVendorAddedQuote == '' ? (
                        
                        <Typography   variant="caption" style={{color:"red"}}>    Not Submited </Typography> 
                         
                       ) : (
                          <span >
                        <span onClick={() => updatequote(item._id)}>
                       
                          Submited
                           
                          </span>
                       
                     
                        </span>
                        
                        
                        
                        
                        
                        )
                        
                        }  </TableCell>
                                    
                                        {/* <TableCell style={{ width: 10 }} > <IconButton aria-label="delete" onClick={() => deleteproduct(item._id,item.rfq_id)} size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }}> <DeleteOutlineOutlinedIcon color='secondary' />  </Avatar> </IconButton> */}
                                        <TableCell style={{ width: 10 }} > <IconButton aria-label="delete" onClick={ handleShow} size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }}> <DeleteOutlineOutlinedIcon color='secondary' />  </Avatar> </IconButton>
                                        <Modal show={show} onHide={handleClosed}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
        <Modal.Header  >
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
             Close
          </Button>
          <Button variant="danger" onClick={() => deleteproduct(item._id,item.rfq_id)} >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
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
// https://www.copycat.dev/blog/material-ui-table/
