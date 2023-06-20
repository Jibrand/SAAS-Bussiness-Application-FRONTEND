import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login'
import Login_Vendor from './Components/Login/Login_Vendor'
import ForgotPassword from './Components/Login/ForgetPassword'
import EmailSent from './Components/EmailSent'
import SignUp from './Components/SignUp/SignUp';
import SignupVendor from './Components/SignUp/SignupVendor';
import Footer from "./Constant/Footer";
import TopHeader from "./Constant/TopHeader";
import Home from './Components/Home/Home'
import Table from './Components/Table/Table'
import Thankyou from "./Components/Thankyou/Thankyou";
import Consulting from "./Components/Consulting/Consulting";
import Body from "./Components/Pre-Compliance/Body/Body";
import Evaluated_product from "./Components/Existing Certified/Evaluated product/Existing Certified/Evaluated_product";
import CCheck from "./Components/New Product Evaluation/CCheck"
import New_Product_Evaluation from "./Components/New Product Evaluation/New_Product_Evaluation";
import View_Prdoduct from "./Components/New Product Evaluation/View_Prdoduct";
import AddUser from './Components/AddUser/AddUser';
 import UserRfq from './Components/User_RFQ/UserRfq'
 import Index from './Components/Vendor Dashboard/Index'
import VendorQuote from "./Components/VendorQuote/VendorQuote";
import VendorQuoteVIew from "./Components/VendorQuote/VendorQuoteVIew";
import VendorQuoteView_From_Admin from "./Components/VendorQuote/VendorQuoteView_From_Admin";
import VendorQuoteUpdate from "./Components/VendorQuote/VendorQuoteUpdate";
import CV from './Change/CV'
import ASS from "./Components/ASS";
import ASS2 from "./Components/ASS2";
import ForgotForVendor from "./Components/ForgotForVendor";
import Token from "./Components/Token";
import Indexq from "./Change/FG";
function App() {
  return (
     <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/nm" element={<CCheck />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/loginv" element={<Login />}/> 
        <Route path="/signup" element={<SignUp />}/> 
        <Route path="/S321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendor" element={<SignupVendor />}/> 
        <Route path="/topheader" element={<TopHeader />}/> 
        <Route path="/footer" element={<Footer />}/> 
        <Route path="/home" element={<Home />}/> 
        <Route path="/table" element={<Table />}/> 
        <Route path="/thankyou" element={<Thankyou />}/> 
        <Route path="/consulting" element={<Consulting />}/> 
        <Route path="/precompliance" element={<Body />}/> 
        <Route path="/Evaluatedproduct" element={< Evaluated_product/>}/> 
        <Route path="/new_product_evaluation" element={< New_Product_Evaluation/>}/> 
        <Route path="/adduser/:id" element={< AddUser/>}/> 
        <Route path="/CCheck/:id" element={< CCheck/>}/> 
        <Route path="/ASS" element={< ASS/>}/> 
        <Route path="/ASS2" element={< ASS2/>}/> 
        <Route path="/s" element={< Indexq/>}/> 
        <Route path="/z" element={< CV/>}/> 
        <Route path="/VendorQuote/:id" element={< VendorQuote/>}/> 
        <Route path="/VendorQuoteUpdate/:id" element={< VendorQuoteUpdate/>}/> 
        <Route path="/VendorQuoteVIew/:id" element={< VendorQuoteVIew/>}/> 
        <Route path="/vendoradmin/:id" element={< VendorQuoteView_From_Admin/>}/> 
        <Route path="/vendorlist/:id" element={< UserRfq/>}/> 
        <Route path="/vendordashboard" element={< Index/>}/> 
        <Route path="/viewproduct/:id" element={< View_Prdoduct/>}/> 
        <Route path="/logS321yweQHWGEJHignu4234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbpVendorin312kjnv32hkendore"  element={< Login_Vendor/>}/> 
        <Route path="/forgotPassword"  element={< ForgotPassword/>}/> 
        <Route path="/ForSDSgo34234234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbnv32ghdatForVendor"  element={< ForgotForVendor/>}/> 
        <Route path="/34234234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbnv32ghda"  element={< Token/>}/> 
        <Route path="/34234234Tvcvokvxcv34234ensdddsafd232344sasda4234243sdasdasvcvcvaD131sasdkbehj12h124hj12f3g4f3hjvbnv32ghda"  element={< EmailSent/>}/> 

      </Routes>
    </BrowserRouter>


     </>
  );
}

export default App;
