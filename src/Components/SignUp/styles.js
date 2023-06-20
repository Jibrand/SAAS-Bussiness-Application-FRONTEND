import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    boxShadow:' 5px 10px  40px  5px #888888',
    paddingTop:"10px",
    borderRadius: "20px",
    transform: "translateY(100px)",
  },

  Heading:{
    marginBottom:"10px",
    fontFamily:['Lato', 'sans-serif']

  },
  textfield:{
    marginBottom:"8px",
    marginTop:"20px",
    width: "42%",
   marginLeft:"30px"
 
  },
  textfieldFullWidth:{
    width: "90%",
    marginTop:"10px",
    marginBottom:"8px",

    marginLeft:"30px"

  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    width: "90%",
    marginTop:"10px",

    marginBottom:"20px",
    marginLeft:"30px"

  },
  Link:{
    marginLeft:"260px",
    marginBottom:"10px",

  },
}));
