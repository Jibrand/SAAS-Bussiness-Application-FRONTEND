import { makeStyles } from "@material-ui/core/styles";
import { fontSize } from "@mui/system";

export default makeStyles((theme) => ({
  //Top Header
  TopHeader: {
    backgroundColor: "#C1C1C1",
    height: "48px",
  },
  grow: {
    flexGrow: 1,
  },
 
  TopHeader2: {
    backgroundColor: "#C1C1C1",
    marginTop: "5px",
    height: "35px",
  },
  typo: {
    // marginTop: "-15px",
    
    fontSize: "20px",
  },

  accounticon: {
    marginTop: "-58px",

    // marginLeft: "1100px",
    textAlign:'center',
    alignItems:"center",
    color: "white",
    alignContent:"center",
    justifyItems:"center",
    justifyContent:"center",
    marginLeft:"1200px",
  },

   //footer
   footer:{
    height: "95px",
    backgroundColor:"  #130C0E",
   
    marginTop:'calc(5% + 60px)',
 
   },
   footertypo:{
    marginLeft:"90px"
   },
   SecondText:{
    marginLeft:"460px"

   },
}));
