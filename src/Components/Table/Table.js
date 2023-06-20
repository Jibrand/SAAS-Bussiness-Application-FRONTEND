import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Api } from '../../Backened/Api'
import { TextField, Card, RadioGroup, InputLabel, Input, InputAdornment, FormLabel, FormControl, FormControlLabel, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table, Collapse, } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './MyModal.css'; // import the CSS file
import Badge from 'react-bootstrap/Badge';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TopHeader from "../../Constant/TopHeader";
import AccountCircle from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import useStyles from "./style";
import Footer from '../../Constant/Footer'
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';

export default function BasicTable() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [modalShow, setModalShow] = React.useState(false);
    const deleteproduct = async (id, norfqa) => {
        let result = await fetch(`${Api}/newproducts/${id}  `, {
            method: "Delete",
        });
        const result1 = await fetch(`${Api}/newproducts/${id}`, {
            method: "Put",
            body: JSON.stringify({ norfq: norfqa - 1 }),
            headers: { "Content-Type": "Application/json" },
        })

        result = await result.json();
        if (result) {

            getproducts();
            setShow(false)
        }
    };
    // Modal open state
    const [modal, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    useEffect(() => {
        getproducts();
    }, []);
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const [vendorCount, setVendorCount] = useState(null);
    useEffect(() => {
        const getVendorCount = async (id) => {
            try {
                const response = await axios.get(`${Api}/products/vendor-count/${id}`);
                const count = response.data.count;
                setVendorCount(count);
                console.log("asdfasdasdasdasdasd", vendorCount)
            } catch (error) {
                console.error(error.message);
            }
        };
    }, [])
    const [productsWithSerialNumbers, setProductsWithSerialNumbers] = useState([]);
    useEffect(() => {
        const productsWithSerialNumbers = data.map((product, index) => {
          return { ...product, serialNumber: index + 1 };
        });
    
        setProductsWithSerialNumbers(productsWithSerialNumbers);
      }, [data]);
    
    

    const getproducts = async () => {
        let result = await fetch(`${Api}/newproducts`);
        result = await result.json();
        setData(result);
    };
    useEffect(() => {
        getproducts();
      }, []);
    console.warn("results", data);

    const AddUser = (id) => { navigate(`/adduser/${id}`) }
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const statusCircle = {
        width: 20,
        height: 20,
        borderRadius: '50%',
        display: 'inline-block',
    };

    const greenCircle = {
        ...statusCircle,
        backgroundColor: 'green',
        Text: "circle"
    };
    const [searchTerm, setsearchTerm] = useState([]);
    const [query, setQuery] = useState('');
    const [model, setmodel] = useState(false)

    //
    const [to, setto] = useState('')
    const [name, setName] = useState('')
    const [rfq_name, Setrfq_name] = useState('')
    const [rfq_id, Setrfq_id] = useState('')
    const [START_DATE, setSTART_DATE] = useState("");
    const [END_DATE, setEND_DATE] = useState("");
const [IsVendorAddedQuote, setIsVendorAddedQuote] = useState('')
    const handleSubmit = async (id, date, end, namse, norfqa) => {
        // Setrfq_id:id
        console.log(id)
        console.log(rfq_id)
        const result = fetch(`${Api}/userRFQ`, {
            method: "post",
            body: JSON.stringify({
                to,
                rfq_id: id,
                IsVendorAddedQuote,

                rfq_name: namse,
                START_DATE: date,
                END_DATE: end,
                name
            }),
            headers: { "Content-Type": "application/json" },
        });

        const result1 = await fetch(`${Api}/newproducts/${id}`, {
            method: "Put",
            body: JSON.stringify({ norfq: norfqa + 1 }),
            headers: { "Content-Type": "Application/json" },
        })




        // result = await result.json();
        if (result) {


            toast.info("Added Succesfully!");
            setModalShow(false)
            getproducts()

        }

    };




    const [show, setShow] = useState(false);

    const handleClosed = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                <TableCell>S.no</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell > Start Date</TableCell>
                                <TableCell > End Date</TableCell>
                                <TableCell >   Category</TableCell>
                                <TableCell >Status  </TableCell>
                                <TableCell >   </TableCell>
                                <TableCell >   </TableCell>
                                <TableCell >   </TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
























                            {productsWithSerialNumbers.filter((item) => {

                                if (searchTerm == "") {
                                    return item
                                } else if (item.First_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    item.Last_Name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return item
                                }
                            }).map((item, key) => {

                                return (
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={{ width: "20%" }}  key={item.id} >
                                            <Link to={`/vendorlist/${item._id}`} >


                                            {item.serialNumber}
                                            </Link>
                                            {/* {item.id} */}
                                        </TableCell>
                                        <TableCell align="">

                                            {item.First_Name + " " + item.Last_Name}

                                        </TableCell>
                                        <TableCell >{item.START_DATE}  </TableCell>
                                        <TableCell >  {item.END_DATE} </TableCell>
                                        <TableCell >  {item.RFQCategory}</TableCell>
                                        <TableCell>

                                            {item.norfq == 0 ? (
                                                <Badge bg="warning" text="dark">
                                                    Pending
                                                </Badge>
                                            ) : (
                                                <Badge bg="primary">
                                                    Approved
                                                </Badge>
                                            )}






                                        </TableCell>

                                        <TableCell style={{ width: 10 }}  > 
                                        <Link to ={"/CCheck/" + item._id}>
                                        <IconButton aria-label="delete"  size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }} > <PersonAddAltOutlinedIcon color='primary' />  </Avatar> </IconButton>
                                        </Link>



                                        </TableCell>
                                        <TableCell style={{ width: 10 }} > 
                                        <Link to ={"/viewproduct/" + item._id}>
                                        <IconButton aria-label="delete" size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }}> < RemoveRedEyeOutlinedIcon color='primary' /> 
                                         </Avatar> 
                                         </IconButton></Link>
                                         </TableCell>






                                        {/* <TableCell style={{ width: 10 }} > <IconButton aria-label="delete" onClick={() => deleteproduct(item._id,item.norfq)} size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }}> <DeleteOutlineOutlinedIcon color='secondary' />  </Avatar> </IconButton> */}
                                        <TableCell style={{ width: 10 }} > <IconButton aria-label="delete" onClick={handleShow} size="small" className={classes.addmorsebottom}><Avatar sx={{ backgroundColor: "transparent" }} className={classes.addmorsebottomicon} style={{ width: 24, height: 24, backgroundColor: "transparent", color: "black" }}> <DeleteOutlineOutlinedIcon color='secondary' />  </Avatar> </IconButton>




                                            <Modal show={show} onHide={handleClose}>
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
                                                    <Button variant="danger" onClick={() => deleteproduct(item._id, item.norfq)} >
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
            <ToastContainer />
        </>
    );
}
