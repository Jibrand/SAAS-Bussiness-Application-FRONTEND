import React, { useState } from 'react';
import { Container, Grid, TextField, Paper, Button, Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import TopHeader from '../../Constant/TopHeader';
import Footer from '../../Constant/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import useStyles from "./style";
import { Api } from '../../Backened/Api';



function App() {
  const [input1Name, setInput1Name] = useState('');
  const [input1Email, setInput1Email] = useState('');
  const [input1Name2, setInput1Name2] = useState('');
  const [input1Email2, setInput1Email2] = useState('');
  const [input1Name3, setInput1Name3] = useState('');
  const [input1Email3, setInput1Email3] = useState('');
  const [input1Name4, setInput1Name4] = useState('');
  const [input1Email4, setInput1Email4] = useState('');
  const [input1Name5, setInput1Name5] = useState('');
  const [input1Email5, setInput1Email5] = useState('');
 

  const [to, setto] = useState('')
  const [name, setName] = useState('')
  const [rfq_name, Setrfq_name] = useState('')
  const [rfq_id, Setrfq_id] = useState('')
  const [START_DATE, setSTART_DATE] = useState("");
  const [END_DATE, setEND_DATE] = useState("");
  const [IsVendorAddedQuote, setIsVendorAddedQuote] = useState('')
  const [data, setData] = useState([])

  const [buttonColor, setButtonColor] = useState('primary');
  const classes = useStyles();
  const params = useParams()
  const [inputFields1, setInputFields1] = useState([
    { id: uuidv4(), to: '', name: '' },
  ]);

  const handleChangeInput1 = (id, event) => {
    const newInputFields = inputFields1.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields1(newInputFields);
  }

  const handleAddFields1 = () => {
    setInputFields1([...inputFields1, { id: uuidv4(), to: '', name: '' }])
  }

  const handleRemoveFields1 = id => {
    const values = [...inputFields1];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields1(values);
  }
 
 
  const handleClick1 = async () => {
    if (input1Email != "" && input1Name != "") {
      let result = await fetch(`${Api}/newproducts/${params.id}`); result = await result.json();
      const result1 = fetch(`${Api}/userRFQ`, { method: "post", body: JSON.stringify({ to: input1Email, rfq_id: params.id, IsVendorAddedQuote, rfq_name: result.First_Name, START_DATE: result.START_DATE, END_DATE: result.END_DATE, name: input1Name }), headers: { "Content-Type": "application/json" }, });
      const result2 = await fetch(`${Api}/newproducts/${params.id}`, { method: "Put", body: JSON.stringify({ norfq: result.norfq + 1 }), headers: { "Content-Type": "Application/json" }, })
      if (result) {
        toast.info("Added Succesfully!");
    
        const textField = document.getElementById("n1"); textField.disabled = true;
        const textField1 = document.getElementById("e1"); textField1.disabled = true;
        const Button = document.getElementById("b1"); Button.disabled = true; Button.value = 'Sen'; Button.innerHTML = "Sended"; Button.style.color = "black";Button.style.backgroundColor = "grey";
      }
    } else { toast.error("Feilds Are Required") }
  };

  const handleClick2 = async () => {
    if (input1Email2 != "" && input1Name2 != "") {
      let result = await fetch(`${Api}/newproducts/${params.id}`); result = await result.json();
      const result1 = fetch(`${Api}/userRFQ`, { method: "post", body: JSON.stringify({ to: input1Email2, rfq_id: params.id, IsVendorAddedQuote, rfq_name: result.First_Name, START_DATE: result.START_DATE, END_DATE: result.END_DATE, name: input1Name2 }), headers: { "Content-Type": "application/json" }, });
      const result2 = await fetch(`${Api}/newproducts/${params.id}`, { method: "Put", body: JSON.stringify({ norfq: result.norfq + 1 }), headers: { "Content-Type": "Application/json" }, })
      if (result) {
        toast.info("Added Succesfully!");
        
        const textField = document.getElementById("n2"); textField.disabled = true;
        const textField1 = document.getElementById("e2"); textField1.disabled = true;
        const Button = document.getElementById("b2"); Button.disabled = true; Button.value = 'Sen'; Button.innerHTML = "Sended";Button.style.color = "black";Button.style.backgroundColor = "grey";
      }
    } else { toast.error("Feilds Are Required") }
  };

  const handleClick3 = async () => {
    if (input1Email3 != "" && input1Name3 != "") {
      let result = await fetch(`${Api}/newproducts/${params.id}`); result = await result.json();
      const result1 = fetch(`${Api}/userRFQ`, { method: "post", body: JSON.stringify({ to: input1Email3, rfq_id: params.id, IsVendorAddedQuote, rfq_name: result.First_Name, START_DATE: result.START_DATE, END_DATE: result.END_DATE, name: input1Name3 }), headers: { "Content-Type": "application/json" }, });
      const result2 = await fetch(`${Api}/newproducts/${params.id}`, { method: "Put", body: JSON.stringify({ norfq: result.norfq + 1 }), headers: { "Content-Type": "Application/json" }, })
      if (result) {
        toast.info("Added Succesfully!");
  
        const textField = document.getElementById("n3"); textField.disabled = true;
        const textField1 = document.getElementById("e3"); textField1.disabled = true;
        const Button = document.getElementById("b3"); Button.disabled = true; Button.value = 'Sen'; Button.innerHTML = "Sended";Button.style.color = "black";Button.style.backgroundColor = "grey";
      }
    } else { toast.error("Feilds Are Required") }
  };

  const handleClick4 = async () => {
    if (input1Email4 != "" && input1Name4 != "") {
      let result = await fetch(`${Api}/newproducts/${params.id}`); result = await result.json();
      const result1 = fetch(`${Api}/userRFQ`, { method: "post", body: JSON.stringify({ to: input1Email4, rfq_id: params.id, IsVendorAddedQuote, rfq_name: result.First_Name, START_DATE: result.START_DATE, END_DATE: result.END_DATE, name: input1Name4 }), headers: { "Content-Type": "application/json" }, });
      const result2 = await fetch(`${Api}/newproducts/${params.id}`, { method: "Put", body: JSON.stringify({ norfq: result.norfq + 1 }), headers: { "Content-Type": "Application/json" }, })
      if (result) {
        toast.info("Added Succesfully!");
  
        const textField = document.getElementById("n4"); textField.disabled = true;
        const textField1 = document.getElementById("e4"); textField1.disabled = true;
        const Button = document.getElementById("b4"); Button.disabled = true; Button.value = 'Sen'; Button.innerHTML = "Sended";Button.style.color = "black";Button.style.backgroundColor = "grey";
      }
    } else { toast.error("Feilds Are Required") }
  };

  const handleClick5 = async () => {
    if (input1Email5 != "" && input1Name5 != "") {
      let result = await fetch(`${Api}/newproducts/${params.id}`); result = await result.json();
      const result1 = fetch(`${Api}/userRFQ`, { method: "post", body: JSON.stringify({ to: input1Email5, rfq_id: params.id, IsVendorAddedQuote, rfq_name: result.First_Name, START_DATE: result.START_DATE, END_DATE: result.END_DATE, name: input1Name5 }), headers: { "Content-Type": "application/json" }, });
      const result2 = await fetch(`${Api}/newproducts/${params.id}`, { method: "Put", body: JSON.stringify({ norfq: result.norfq + 1 }), headers: { "Content-Type": "Application/json" }, })
      if (result) {
        toast.info("Added Succesfully!");
  
        const textField = document.getElementById("n5"); textField.disabled = true;
        const textField1 = document.getElementById("e5"); textField1.disabled = true;
        const Button = document.getElementById("b5"); Button.disabled = true; Button.value = 'Sen'; Button.innerHTML = "Sended";Button.style.color = "black";Button.style.backgroundColor = "grey";
      }
    } else { toast.error("Feilds Are Required") }
  };

 
 

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
      <TopHeader />
      <h2 style={{ textAlign: "center", color: "#004580", margin: "1rem 0" }}>
        Submit Your Quote Request
      </h2>

      <Container maxWidth="md">
        <Paper className={classes.Paper}>

          <Typography variant='h6' align='center' style={{ color: "black", alignContent: "center" }}>   Please use separate email accounts for each vendor to send the request.</Typography>

        </Paper>
      </Container>
      <Container maxWidth="md" style={{ paddingTop: 30 }}>

        <Grid container spacing={2} justifyContent='center' style={{ marginLeft: "0px" }} >
          <Grid item xs={12} sm={5}>
            <TextField
              id='n1'
              label="Name"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Name}
              onChange={(e) => setInput1Name(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='e1'
              label="Email"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Email}
              onChange={(e) => setInput1Email(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color={buttonColor}
              style={{ marginTop: "20px" }}
              id='b1'
              onClick={handleClick1}
              value="Send"
            >
              Send
            </Button>
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              id='n2'
              label="Name"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Name2}
              onChange={(e) => setInput1Name2(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='e2'
              label="Email"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Email2}
              onChange={(e) => setInput1Email2(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color={buttonColor}
              style={{ marginTop: "20px" }}
              id='b2'
              onClick={handleClick2}
              value="Send"
            >
              Send
            </Button>
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              id='n3'
              label="Name"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Name3}
              onChange={(e) => setInput1Name3(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='e3'
              label="Email"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Email3}
              onChange={(e) => setInput1Email3(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color={buttonColor}
              style={{ marginTop: "20px" }}
              id='b3'
              onClick={handleClick3}
              value="Send"
            >
              Send
            </Button>
          </Grid>


          <Grid item xs={12} sm={5}>
            <TextField
              id='n4'
              label="Name"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Name4}
              onChange={(e) => setInput1Name4(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='e4'
              label="Email"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Email4}
              onChange={(e) => setInput1Email4(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color={buttonColor}
              style={{ marginTop: "20px" }}
              id='b4'
              onClick={handleClick4}
              value="Send"
            >
              Send
            </Button>
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              id='n5'
              label="Name"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Name5}
              onChange={(e) => setInput1Name5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              id='e5'
              label="Email"
              variant="filled" style={{ backgroundColor: "transparent" }}
              fullWidth
              value={input1Email5}
              onChange={(e) => setInput1Email5(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color={buttonColor}
              style={{ marginTop: "20px" }}
              id='b5'
              onClick={handleClick5}
              value="Send"
            >
              Send
            </Button>
          </Grid>

          









{/*        


          {inputFields1.map(inputField => (
  <>
    <Grid item xs={12} sm={5} key={inputField.id}>
      <TextField
        label="Name"
        variant="filled" style={{ backgroundColor: "transparent" }}
        fullWidth
        value={inputField.to}
        onChange={event => handleChangeInput1(inputField.id, event)}
        name="to"
        id={inputField.id} // Add id property
      />
    </Grid>
    <Grid item xs={12} sm={5}>
      <TextField
        label="Email"
        variant="filled" style={{ backgroundColor: "transparent" }}
        fullWidth
        value={inputField.name}
        onChange={event => handleChangeInput1(inputField.id, event)}
        name="name"
        id={inputField.id} // Add id property
      />
    </Grid>
    <Grid item xs={12} sm={2}>
      <Button
        variant="contained"
        style={{ marginTop: "20px" }}
        color="primary"
        onClick={handleClick4}
        id={`b${inputField.id}`} // Add id property
      >
        Send
      </Button>
    </Grid>
  </>
))} */}

{/* 
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              color="primary"
              onClick={handleAddFields1}
            >
              Add +
            </Button>
          </Grid> */}
        </Grid>
      </Container>

      <ToastContainer />

    </ThemeProvider>
  );
}

export default App;
