import React, { useState, useEffect } from 'react'
import { TextField, Button, Menu,
MenuItem,Card, RadioGroup, FormLabel, FormControl, FormControlLabel, IconButton, CardMedia, CardContent, Radio, Box, Checkbox, Avatar, Grid, Typography, Paper, Container, TableBody, TableRow, Switch, TableCell, TableContainer, TableHead, Table, } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from "./style";
import TopHeader from '../../Constant/TopHeader'
import Footer from '../../Constant/Footer'
import Stack from '@mui/material/Stack';
import { Row, Col, Form, Image } from "react-bootstrap";
import SendIcon from '@mui/icons-material/Send';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { v4 as uuidv4 } from 'uuid';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';import { TbNumber1 } from "react-icons/tb"
import { TbNumber2 } from "react-icons/tb"
import { TbNumber3 } from "react-icons/tb"
import { TbNumber4 } from "react-icons/tb"
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import FolderIcon from '@mui/icons-material/Folder';
import { green, pink } from '@mui/material/colors';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';
import { Api } from '../../Backened/Api';
import FileBase from "react-file-base64";



const New_Product_Evaluation = () => {
  //useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate('/login') }, []);




  const [postData, setPostData] = useState({
        NameN: "",})

  const [check_capcha, setCheck_capcha] = useState({
    check: false,
  })

  //legends
  const [Legend_1, setLegend_1] = useState(false)
  const [Legend_2, setLegend_2] = useState(false)
  const [Legend_3, setLegend_3] = useState(false)
  const [Legend_4, setLegend_4] = useState(false)
  const [Legend_5, setLegend_5] = useState(false)
  const [Legend_6, setLegend_6] = useState(false)
  const [Legend_7, setLegend_7] = useState(false)

  const [END_DATE, setEND_DATE] = useState('')
  const [START_DATE, setSTART_DATE] = useState('')
  const [Phase1, setPhase1] = useState(true)
  const [Phase2, setPhase2] = useState(false)
  const [Phase3, setPhase3] = useState(false)
  const [Phase4, setPhase4] = useState(false)
  const [Phase5, setPhase5] = useState(false)
  const [Phase6, setPhase6] = useState(false)
  const [Phase7, setPhase7] = useState(false)
  const [Phase8, setPhase8] = useState(false)
  const [Phase9, setPhase9] = useState(false)
  const [Phase10, setPhase10] = useState(false)
  const [HeadingPhase, setHeadingPhase] = useState(true)
  const [Color1, setColor1] = useState('primary')
  const [Color2, setColor2] = useState(' ')
  const [Tabs, setTabs] = useState(false)
  const [Color3, setColor3] = useState(' ')
  const [Color4, setColor4] = useState(' ')
  const [backroudColor1, setBackroudColor1] = useState('blue ')
  const [backroudColor2, setBackroudColor2] = useState(' ')
  const [backroudColor3, setBackroudColor3] = useState(' ')
  const [backroudColor4, setBackroudColor4] = useState(' ')
  const [HeaderTabsColor1, setHeaderTabsColor1] = useState(' ')
  const [HeaderTabsColor2, setHeaderTabsColor2] = useState(' ')
  const [HeaderTabsColor3, setHeaderTabsColor3] = useState(' ')
  const [HeaderTabsColor4, setHeaderTabsColor4] = useState(' ')
  const [HeaderTabsColor5, setHeaderTabsColor5] = useState(' ')
  const [HeaderTabsColor6, setHeaderTabsColor6] = useState(' ')
  const [HeaderTabsColor7, setHeaderTabsColor7] = useState('')
  const [HeaderTabsColor8, setHeaderTabsColor8] = useState('')
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

  const [description_phase2 = useState, setdescription_phase2 = useState] = useState('')
  const [AUSTRALIA = useState, setAUSTRALIA = useState] = useState(false)
  const [JAPAN = useState, setJAPAN = useState] = useState(false)
  const [BRAZIL = useState, setBRAZIL = useState] = useState(false)
  const [KOREA = useState, setKOREA = useState] = useState(false)
  const [CANADA = useState, setCANADA = useState] = useState(false)
  const [MEXICO = useState, setMEXICO = useState] = useState(false)
  const [CHINA = useState, setCHINA = useState] = useState(false)
  const [SAUDI_ARABIA = useState, setSAUDI_ARABIA = useState] = useState(false)
  const [DENMARK = useState, setDENMARK = useState] = useState(false)
  const [SINGAPORE = useState, setSINGAPORE = useState] = useState(false)
  const [EUROPEAN_UNION = useState, setEUROPEAN_UNION = useState] = useState(false)
  const [SWITZERLAND = useState, setSWITZERLAND = useState] = useState(false)
  const [UNITED_STATES = useState, setUNITED_STATES = useState] = useState(false)
  const [OTHER, setOTHER = useState] = useState('')
  const [DESCRIPTION_OF_PRODUCT_INTENDED_USE, setDESCRIPTION_OF_PRODUCT_INTENDED_USE] = useState('')
  const [Model_Number, setModel_Number] = useState('')
  const [Voltage, setVoltage] = useState('')
  const [Frequency, setFrequency] = useState('')
  const [Current_Power, setCurrent_Power] = useState('')
  const [Other, setOther] = useState('')
  const [Stationary, setStationary] = useState('')
  const [Portable, setPortable] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Class_I, setClass_I] = useState('')
  const [Fixed, setFixed] = useState('')
  const [Body_worn, setBody_worn] = useState('')
  const [Hand_held, setHand_held] = useState('')
  const [Class_II, setClass_II] = useState('')
  const [Internally, setInternally] = useState('')
  const [USB_Powered, setUSB_Powered] = useState('')
  const [NRTL_Listing_for_North_America, setNRTL_Listing_for_North_America] = useState(false)
  const [Field_Label_Evaluation, setField_Label_Evaluation] = useState(false)
  const [NRTL_Classification_for_North_America, setNRTL_Classification_for_North_America] = useState(false)
  const [Design_Review, setDesign_Review] = useState(false)
  const [NRTL_Recognition_for_North_America, setNRTL_Recognition_for_North_America] = useState(false)
  const [EMC_Testing, setEMC_Testing] = useState(false)
  const [FDA_ASCA_Pilot_Program, setFDA_ASCA_Pilot_Program] = useState(false)
  const [ROHS_Evaluation, setROHS_Evaluation] = useState(false)
  const [EU_Test_Reports, setEU_Test_Reports] = useState(false)
  const [Performance_Testing, setPerformance_Testing] = useState(false)
  const [IEC_Test_Reports, setIEC_Test_Reports] = useState(false)
  const [Witness_Manufacturer_s_Testing, setWitness_Manufacturer_s_Testing] = useState(false)
  const [CB_Scheme_Evaluation, setCB_Scheme_Evaluation] = useState(false)
  const [Testing_at_Manufacturer_s_Premises, setTesting_at_Manufacturer_s_Premises] = useState(false)
  const [Limited_Production_Certificate, setLimited_Production_Certificate] = useState(false)
  const [AUSTRALIA_Phase3, setAUSTRALIA_Phase3] = useState(false)
  const [JAPAN_Phase3, setJAPAN_Phase3] = useState(false)
  const [BRAZIL_Phase3, setBRAZIL_Phase3] = useState(false)
  const [KOREA_Phase3, setKOREA_Phase3] = useState(false)
  const [CANADA_Phase3, setCANADA_Phase3] = useState(false)
  const [MEXICO_Phase3, setMEXICO_Phase3] = useState(false)
  const [CHINA_Phase3, setCHINA_Phase3] = useState(false)
  const [SAUDI_ARABIA_Phase3, setSAUDI_ARABIA_Phase3] = useState(false)
  const [DENMARK_Phase3, setDENMARK_Phase3] = useState(false)
  const [SINGAPORE_Phase3, setSINGAPORE_Phase3] = useState(false)
  const [EUROPEAN_UNION_Phase3, setEUROPEAN_UNION_Phase3] = useState(false)
  const [SWITZERLAND_Phase3, setSWITZERLAND_Phase3] = useState(false)
  const [UNITED_STATES_Phase3, setUNITED_STATES_Phase3] = useState(false)
  const [OTHER_phase3_2_Phase3, setOTHER_phase3_2_Phase3] = useState('')
  const [SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT, setSPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT] = useState('')
  const [REQUESTED_STANDARDS_FOR_EVALUATION, setREQUESTED_STANDARDS_FOR_EVALUATION] = useState('')
  const [Other_phas3_1, setOther_phas3_1] = useState('')
  const [selectedValue, setSelectedValue] = React.useState('');
  const [Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition, setWould_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition] = useState(false)
  const [NRTL_Classification_for_North_America_Phase_3, setNRTL_Classification_for_North_America_Phase_3] = useState(false)
  const [Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971, setDo_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971] = useState(false)
  const [Has_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC, setHas_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC] = useState(false)
  const [Usability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015, setUsability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015] = useState(false)
  const [Ifto_a_usability_file_review_which_standard_would_you_like_DC_to_use, setIfto_a_usability_file_review_which_standard_would_you_like_DC_to_use] = useState(false)
  const [Does_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8, setDoes_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8] = useState(false)
  const [Will_your_product_be_used_in_a_home_health_care_environment_60601_1_11, setWill_your_product_be_used_in_a_home_health_care_environment_60601_1_11] = useState(false)
  const [Does_your_product_incorporate_the_use_of_a_laser_60825, setDoes_your_product_incorporate_the_use_of_a_laser_60825] = useState(false)
  const [Does_your_product_use_batteries_Ifwhat_kind_of_battery_is_used, setDoes_your_product_use_batteries_Ifwhat_kind_of_battery_is_used] = useState(false)
  const [Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471, setDoes_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471] = useState(false)
  const [Will_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12, setWill_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12] = useState(false)
  const [Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects, setIs_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects] = useState(false)
  const [Is_the_product_rated_IP_rated_for_protection_against_water, setIs_the_product_rated_IP_rated_for_protection_against_water] = useState(false)
  const [NRTL_Listing_for_North_America_Phase_3, setNRTL_Listing_for_North_America_Phase_3] = useState(false)
  const [Product_name_and_or_model_Phase_5, setProduct_name_and_or_model_Phase_5] = useState('')
  const [Type_of_equipment, setType_of_equipment] = useState('')
  const [Where_is_the_equipment_intended_to_be_used, setWhere_is_the_equipment_intended_to_be_used] = useState('')
  const [Does_the_equipment_have_wireless_transmit_capability_Phase_5, setDoes_the_equipment_have_wireless_transmit_capability_Phase_5] = useState('')
  const [Equipment_dimensions_and_weight_, setEquipment_dimensions_and_weight_] = useState('')

  const [Frequency_, setFrequency_] = useState(false)
  const [Dc, setDc] = useState(false)
  const [Voltage_phase4, setVoltage_phase4] = useState(false)
  const [Current_In_Phase, setCurrent_In_Phase] = useState(false)
  const [Services, setServices] = useState(false)

  const [Frequency_of_highest_clock_oscillator_in_your_system, setFrequency_of_highest_clock_oscillator_in_your_system] = useState('')
  const [Approximate_set_up_time_for_your_device__in_hours, setApproximate_set_up_time_for_your_device__in_hours] = useState('')
  const [List_all_AC_and_I_O_cables_that_your_equipment_uses, setList_all_AC_and_I_O_cables_that_your_equipment_uses] = useState('')
  const [Modes_of_Operation_1, setModes_of_Operation_1] = useState('')
  const [Modes_of_Operation_2, setModes_of_Operation_2] = useState('')
  const [REQUESTED_STANDARDS_FOR_EVALUATION_phase4, setREQUESTED_STANDARDS_FOR_EVALUATION_phase4] = useState('')

  const [one, setone] = useState('')
  const [two, settwo] = useState('')
  const [three, setthree] = useState('')
  const [other_radio_phase4_3, setother_radio_phase4_3] = useState('')

  const [Dc_radio_phase4, setDc_radio_phase4] = useState('')
  const [five_zero_Hz_radio_phase4, setfive_zero_Hz_radio_phase4] = useState('')
  const [Six_Zero_Hz_radio_phase4, setSix_Zero_Hz_radio_phase4] = useState('')
  const [other_radio_phase4_1, setother_radio_phase4_1] = useState('')

  // 2 RADIO ROW
  const [ONE_TWO_ZERO_V, setONE_TWO_ZERO_V] = useState('')
  const [TWO_FOUR_ZERO_V, setTWO_FOUR_ZERO_V] = useState('')
  const [FOUR_EIGHT_ZERO_V, setFOUR_EIGHT_ZERO_V] = useState('')
  const [other_radio_phase4_2, setother_radio_phase4_2] = useState('')
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ]);
  const [Air, setAir] = useState('')
  const [Gas, setGas] = useState('')
  const [Water, setWater] = useState('')
  const [other_raioend , setother_raioend] = useState('')
  const [Product_name_and_or_model, setProduct_name_and_or_model] = useState('')
  const [Type_of_equipment_Phase_5, setType_of_equipment_Phase_5] = useState('')
  const [Where_is_the_equipment_intended_be_used, setWhere_is_the_equipment_intended_be_used] = useState('')
  const [Does_the_equipment_have_wireless_transmit_capability_Phase_6, setDoes_the_equipment_have_wireless_transmit_capability_Phase_6] = useState('')
  const [Equipment_dimensions_and_weight, setEquipment_dimensions_and_weight] = useState('')
  const [Enter_product_classification, setEnter_product_classification] = useState('')
  const [Enter_length_of_the_product, setEnter_length_of_the_product] = useState('')
  const [Enter_width_of_the_product, setEnter_width_of_the_product] = useState('')
  const [Enter_height_of_the_product, setEnter_height_of_the_product] = useState('')
  const [Enter_weight_of_the_product, setEnter_weight_of_the_product] = useState('')
  const [Transit_Operable, setTransit_Operable] = useState('')
  const [Transport_and_S_rage_Between_Uses, setTransport_and_S_rage_Between_Uses] = useState('')
  const [Maximum_Ambient_Temperature, setMaximum_Ambient_Temperature] = useState('')
  const [Minimum_Ambient_Temperature, setMinimum_Ambient_Temperature] = useState('')
  const [Maximum_Humidity, setMaximum_Humidity] = useState('')
  const [Ambient_Temperature_Range, setAmbient_Temperature_Range] = useState('')
  const [Relative_Humidity_Range, setRelative_Humidity_Range] = useState('')
  const [Atmospheric_Pressure_Range, setAtmospheric_Pressure_Range] = useState('')
  const [Ambient_Temperature_Range1, setAmbient_Temperature_Range1] = useState('')
  const [Relative_Humidity_Range2, setRelative_Humidity_Range2] = useState('')
  const [Atmospheric_Pressure_Range3, setAtmospheric_Pressure_Range3] = useState('')
  const [Voltage_Range1A, setVoltage_Range1A] = useState('')
  const [Voltage_Range1B, setVoltage_Range1B] = useState('')
  const [Voltage_Range2A, setVoltage_Range2A] = useState('')
  const [Voltage_Range2B, setVoltage_Range2B] = useState('')
  const [Environmental_Operating_Conditions, setEnvironmental_Operating_Conditions] = useState(false)
  const [Environmental_Operating_Conditions_fortext, setEnvironmental_Operating_Conditions_fortext] = useState('')
  const [Laser_Manufacturer, setLaser_Manufacturer] = useState('')
  const [Laser_Classification, setLaser_Classification] = useState('')
  // const[Model_Number_phase7,setModel_Numbe_phase7]=useState('')
  const [Model_Number_phase7, setModel_Number_phase7] = useState('')
  const [FDA_Accession_Number, setFDA_Accession_Number] = useState('')
  const [Transport_and_Storage_Between_Uses, setTransport_and_Storage_Between_Uses] = useState('')
  const [Cooling_Means, setCooling_Means] = useState('')
  const [Gas_Connection, setGas_Connection] = useState('')
  const [Circular_1, setCircular_1] = useState(false)
  const [if_yes_Beam_Diameter_1, setif_yes_Beam_Diameter_1] = useState('')
  const [Rectangular_1, setRectangular_1] = useState(false)
  const [if_yes_Length_1, setif_yes_Length_1] = useState('')
  const [Width_1, setWidth_1] = useState('')
  const [Wavelength1, setWavelength1] = useState('')
  const [Maximum_Power1, setMaximum_Power1] = useState('')
  const [Duty_Cycle1, setDuty_Cycle1] = useState('')
  const [Maximum_Power_2, setMaximum_Power_2] = useState('')
  const [Circular, setCircular] = useState(false)
  const [if_yes_Beam_Diameter, setif_yes_Beam_Diameter] = useState('')
  const [Rectangular, setRectangular] = useState(false)
  const [if_yes_Length_, setif_yes_Length_] = useState('')
  const [Width_, setWidth_] = useState('')
  const [Wavelength, setWavelength] = useState('')
  const [Maximum_Energy_1, setMaximum_Energy_1] = useState('')
  const [Repetition_Rate, setRepetition_Rate] = useState('')
  const [Maximum_Energy, setMaximum_Energy] = useState('')
  const [Pulse_Width, setPulse_Width] = useState('')
  const [Duty_Cycle, setDuty_Cycle] = useState('')
  const [Maximum_Power_3, setMaximum_Power_3] = useState('')
  const [Optical_Density_for_Laser_Googles, setOptical_Density_for_Laser_Googles] = useState('')
  const [Beam_Divergence, setBeam_Divergence] = useState('')
  const [Maximum_Permissible_Exposure_Limit, setMaximum_Permissible_Exposure_Limit] = useState('')
  const [Focal_Distance, setFocal_Distance] = useState('')
  const [Nominal_Ocular_Hazard_Distance, setNominal_Ocular_Hazard_Distance] = useState('')
  const [Recommended_Beam_Dump, setRecommended_Beam_Dump] = useState('')
  const [Toxin_Hazards, setToxin_Hazards] = useState('')
  const [Carcinogens, setCarcinogens] = useState('')
  const [Flammable_Gases, setFlammable_Gases] = useState('')
  const [Asphyxiation, setAsphyxiation] = useState('')
  const [Explosion, setExplosion] = useState('')

  //scope/////
  const [Toxin_Hazards_scope, setToxin_Hazards_scope] = useState('')
  const [Carcinogens_scope, setCarcinogens_scope] = useState('')
  const [Flammable_Gases_scope, setFlammable_Gases_scope] = useState('')
  const [Asphyxiation_scope, setAsphyxiation_scope] = useState('')
  const [Explosion_scope, setExplosion_scope] = useState('')

  //spoce
  const [Coveralls, setCoveralls] = useState('')
  const [Eye, setEye] = useState('')
  const [Hearing, setHearing] = useState('')
  const [Respirator, setRespirator] = useState('')
  const [SCBA, setSCBA] = useState('')
  const [Skin, setSkin] = useState('')

  //type
  const [Coveralls_type, setCoveralls_type] = useState('')
  const [Eye_type, setEye_type] = useState('')
  const [Hearing_type, setHearing_type] = useState('')
  const [Respirator_type, setRespirator_type] = useState('')
  const [SCBA_type, setSCBA_type] = useState('')
  const [Skin_type, setSkin_type] = useState('')

  //type

  const [BCF_Power, setBCF_Power] = useState('')
  const [Foam, setFoam] = useState('')
  const [Carbon_Dioxide, setCarbon_Dioxide] = useState('')
  const [Nitrogen, setNitrogen] = useState('')
  const [Dry_Power, setDry_Power] = useState('')
  const [Water_phase7, setWater_phase7] = useState('')
  const [Location, setLocation] = useState('')
  const [Laser_Engineer_Level, setLaser_Engineer_Level] = useState('')
  const [Engineer, setEngineer] = useState('')
  const [Approved, setApproved] = useState(false)
  const [Signature, setSignature] = useState('')
  const [Date, setDate] = useState('')
  const [Approved_1, setApproved_1] = useState(false)
  const [Signature_1, setSignature_1] = useState('')
  const [Date_1, setDate_1] = useState('')
  const [RFQCategory, setRFQCategory] = useState('New  Product')

  const [Probe_Name, setProbe_Name] = useState('')
  const [System_Name, setSystem_Name] = useState('')
  const [Pulse_Type, setPulse_Type] = useState('')
  const [Acoustic_Radiation_Aperture, setAcoustic_Radiation_Aperture] = useState('')
  const [Diameter, setDiameter] = useState('')
  const [Focal_Location, setFocal_Location] = useState('')
  const [Pitch, setPitch] = useState('')
  const [Elevation_Height, setElevation_Height] = useState('')
  const [Evaluation_Focal_Location, setEvaluation_Focal_Location] = useState('')
  const [Description_phase_7, setDescription_phase_7] = useState('')
  const [Focal_Location_phase7, setFocal_Location_phase7] = useState('')
  const [Aperature_Area_1, setAperature_Area_1] = useState('')
  const [Lines_per_Image, setLines_per_Image] = useState('')
  const [Frame_Rate, setFrame_Rate] = useState('')
  const [Scan_Angle_, setScan_Angle_] = useState('')
  const [ROC_Apex_Distance, setROC_Apex_Distance] = useState('')
  const [Scan_Length, setScan_Length] = useState('')
  const [Number_of_Pulses_Types, setNumber_of_Pulses_Types] = useState('')
  const [Description_phase_7_1, setDescription_phase_7_1] = useState('')
  const [Nominal_Center_Frequency_, setNominal_Center_Frequency_] = useState('')
  const [Number_of_PW_Gate_Sizes, setNumber_of_PW_Gate_Sizes] = useState('')
  const [Range_of_PW_Gate_Sizes, setRange_of_PW_Gate_Sizes] = useState('')
  const [Number_of_Focal_Location, setNumber_of_Focal_Location] = useState('')
  const [Number_of_Element_Used, setNumber_of_Element_Used] = useState('')
  const [Focal_Depth, setFocal_Depth] = useState('')
  const [Aperature_Area_2, setAperature_Area_2] = useState('')
  const [notes, setnotes] = useState('')
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionradio2, setselectedOptionradio2] = useState(null);
  const [selectedOptionradio3, setselectedOptionradio3] = useState(null);
  const [selectedOptionradio4, setselectedOptionradio4] = useState(null);

  const [X_Ray_Source, setX_Ray_Source] = useState('')
  const [Model_Number_phase_8_1, setModel_Number_phase_8_1] = useState('')
  const [Detector, setDetector] = useState('')
  const [Model_Number_phase_8_2, setModel_Number_phase_8_2] = useState('')
  const [HV_Generator, setHV_Generator] = useState('')
  const [Model_Number_phase_8_3, setModel_Number_phase_8_3] = useState('')
  const [X_Ray_Type_Purpose, setX_Ray_Type_Purpose] = useState('')
  const [Product_phase_8, setProduct_phase_8] = useState('')
  const [Model_Number_phase_4, setModel_Number_phase_4] = useState('')
  const [Ratings, setRatings] = useState('')
  const [Cooling_Means_, setCooling_Means_] = useState('')
  const [Gas_Connection_phase_8, setGas_Connection_phase_8] = useState('')
  const [VolumetricInfusionPump, setVolumetricInfusionPump] = useState(false)
  const [Drip_rateInfusionPump, setDrip_rateInfusionPump] = useState(false)
  const [Type1_ContinuousInfusionFlowOnly, setType1_ContinuousInfusionFlowOnly] = useState(false)
  const [Type2_n_continuousFlowOnly, setType2_n_continuousFlowOnly] = useState(false)
  const [Type3_DiscreteDeliveryofaBolus, setType3_DiscreteDeliveryofaBolus] = useState(false)
  const [Type4_Type1CombinedWithType3and_orType2inSameEquipment, setType4_Type1CombinedWithType3and_orType2inSameEquipment] = useState(false)
  const [Type5_ProfilePump, setType5_ProfilePump] = useState(false)

  const [Minimum_phase_9, setMinimum_phase_9] = useState('')
  const [Intermediate_phase_9, setIntermediate_phase_9] = useState('')
  const [Maximum_phase_9, setMaximum_phase_9] = useState('')
  const [Minimum_phase_9_2, setMinimum_phase_9_2] = useState('')
  const [Maximum_phase_9_2, setMaximum_phase_9_2] = useState('')
  const [ofInfusionSetsUsedWithEquipmentUnderTest, setofInfusionSetsUsedWithEquipmentUnderTest] = useState('')

  const userTemplate = { descriptionrotate: "", filerotate: "" }
  const [user, setUser] = useState([userTemplate])
  const [user1, setUser1] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));


  const [to, setTo] = useState('')
  const [cc, setCc] = useState('')


  const [norfq, setNorfq] = useState(0)


  const addUser = () => {
    setUser([...user, userTemplate])
  }
  // const onChange = (e, index) => {


  //   const updatedUsers = user.map((user, i) =>
  //     index == i
  //       ? Object.assign(user, { [e.target.name]: e.target.value }) : user)
  //   setUser(updatedUsers)
  //   console.log(userTemplate)
  //   console.warn(userTemplate)
  // }
  const removeUser = (index) => {
    const filteredUser = [...user]
    filteredUser.splice(index, 1)
    setUser(filteredUser)
  }
  // const [Other_radio_phase4_4, setOther_radio_phase4_4] = useState(false)

   

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

  const classes = useStyles();
  const navigate = useNavigate()

 
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleDownload = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {

      if (user1.username !== "Admin") { navigate('/vendordashboard') }
    }

  }, [])
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  function createData1(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  function createData2(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  function createData3(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const theme = createTheme({
    overrides: {
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent"
        }
      }
    }
  });
  const rows = [
    createData("        AUSTRALIA :   ", "  JAPAN :        "),
    createData("        BRAZIL :  ", "  KOREA :       "),
    createData("        CANADA :    ", "  MEXICO :       "),
    createData("        CHINA :  ", "  SAUDI ARABIA :      "),
    createData("        DENMARK :    ", "  SINGAPORE :         "),
    createData("        EUROPEAN UNION :     ", "  SWITZERLAND :         "),




  ];
  const rows1 = [
    createData("Intertek   ", "Location Name", "      Medical, Laser, Safety   "),
    createData("Intertek Testing Services    ", "Location Name", "EMC        "),
    createData("  Intertek USA      ", "Location Name", "  Radio, Medical       "),
    createData("  Intertek India    ", "Location Name", "        EMC, Medical, Lighting "),
    createData("  Intertek Canada    ", "Location Name", "    Medical     "),
    createData("    Intertek China        ", "Location Name", "      ITAV   "),


  ];
  const rows2 = [
    createData("   NRTL Listing for North America: : ", "       Field Label Evaluation :     "),
    createData("NRTL Classification for North America :    ", " Design Review : "),
    createData("   NRTL Recognition for North America : ", "    EMC Testing :        "),
    createData("  FDA ASCA Pilot Program :   ", "      ROHS Evaluation :      "),
    createData("   EU Test Reports : ", "       Performance Testing :     "),
    createData("   IEC Test Reports : ", "         Witness Manufacturer's Testing :   "),
    createData("   CB Scheme Evaluation : ", "     Testing at Manufacturer's Premises:         "),



  ];
  const rows3 = [
    createData("             Would you like your product evaluated to the first amendment of 60601-1, Third Edition? "),
    createData("                     NRTL Classification for North America :       "),
    createData("                       Do you have a risk management file for your product that is compliant with the requirements of ISO 14971?    "),
    createData("                 Has your ISO 14971-1 Risk Management Process been reviewed by DC?           "),
    createData("                          Usability File - Would you like DC to evaluate your Usability Engineering File against IEC 62366-1: 2015? "),
    createData("                          If yes to a usability file review which standard would you like DC to use: "),
    createData("                          Does your product have alarms incorporated into the medical device 60601-1-8? "),
    createData("                       Will your product be used in a home health care environment 60601-1-11?    "),
    createData("                         Does your product incorporate the use of a laser 60825?  "),
    createData("                       Does your product use batteries? If yes what kind of battery is used:    "),
    createData("                        Does your product incorporate the use of LEDs as luminaires/lamp IEC 62471?  "),
    createData("                         Will your product be used in a emergency medical services environment 60601-1-12?  "),
    createData("                        Is the product rated IP rated for protection against solid foreign objects   "),
    createData("                       Is the product rated IP rated for protection against water    "),




  ];
  const [super_id, setsuper_id] = useState(0);


  const [counter, setCounter] = useState([]);
  const [counter_id, setcounter_id] = useState(0);
  
  // useEffect(() => {
  //   const fetchCounter = async () => {
  //     const response = await fetch(`${Api}/CounterNewProducts`);
  //     const data = await response.json();
  //     setCounter(data);
  //     console.log("hhhhhhhhhhhhhhhh8999999999",data)
  //     console.log("hhhhhhhhhhhhhhhh8999999999",data.counter_id)
  //     console.log("hhhhhhhhhhhhhhhh8999999999", counter )
  //   };
  //   fetchCounter();

  //   const result = fetch(`${Api}/CounterNewProducts`, {
  //     method: "post",
  //     body: JSON.stringify({counter_id:0}),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   // result = await result.json();
  //   if (result) {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });

  //     toast.info("added Succesfully!");
  //     navigate('/thankyou')
  //   }
  // }, []); 
  

  const data = {

    super_id: `super_id..${ counter}`,
    First_Name: First_Name,
    Last_Name: Last_Name,
    Company: Company,
    Email: Email,
    Phone_Number: Phone_Number,
    Address: Address,
    City: City,
    Zip: Zip,
    Address_2: Address_2,
    State_: State_,
    United_States: United_States,
    Agreement: Agreement,

    description_phase2: description_phase2,
    AUSTRALIA: AUSTRALIA,
    JAPAN: JAPAN,
    BRAZIL: BRAZIL,
    KOREA: KOREA,
    CANADA: CANADA,
    MEXICO: MEXICO,
    CHINA: CHINA,
    SAUDI_ARABIA: SAUDI_ARABIA,
    DENMARK: DENMARK,
    SINGAPORE: SINGAPORE,
    EUROPEAN_UNION: EUROPEAN_UNION,
    SWITZERLAND: SWITZERLAND,
    UNITED_STATES: UNITED_STATES,
    OTHER: OTHER,
    user: JSON.stringify(user),

    DESCRIPTION_OF_PRODUCT_INTENDED_USE: DESCRIPTION_OF_PRODUCT_INTENDED_USE,
    Model_Number: Model_Number,
    Voltage: Voltage,
    Frequency: Frequency,
    Current_Power: Current_Power,
    Other_phas3_1: Other_phas3_1,
    Stationary: Stationary,
    Portable: Portable,
    Mobile: Mobile,
    Class_I: Class_I,
    Fixed: Fixed,
    Body_worn: Body_worn,
    Hand_held: Hand_held,
    Class_II: Class_II,
    Internally: Internally,
    USB_Powered: USB_Powered,

    NRTL_Listing_for_North_America_Phase_3: NRTL_Listing_for_North_America_Phase_3,
    Field_Label_Evaluation: Field_Label_Evaluation,
    NRTL_Classification_for_North_America: NRTL_Classification_for_North_America,
    Design_Review: Design_Review,
    NRTL_Recognition_for_North_America: NRTL_Recognition_for_North_America,
    EMC_Testing: EMC_Testing,
    FDA_ASCA_Pilot_Program: FDA_ASCA_Pilot_Program,
    ROHS_Evaluation: ROHS_Evaluation,
    EU_Test_Reports: EU_Test_Reports,
    Performance_Testing: Performance_Testing,
    IEC_Test_Reports: IEC_Test_Reports,
    Witness_Manufacturer_s_Testing: Witness_Manufacturer_s_Testing,
    CB_Scheme_Evaluation: CB_Scheme_Evaluation,
    Testing_at_Manufacturer_s_Premises: Testing_at_Manufacturer_s_Premises,
    Limited_Production_Certificate: Limited_Production_Certificate,
    OTHER_phase3_2_Phase3: setOTHER_phase3_2_Phase3,


    AUSTRALIA_Phase3: AUSTRALIA_Phase3,
    JAPAN_Phase3: JAPAN_Phase3,
    BRAZIL_Phase3: BRAZIL_Phase3,
    KOREA_Phase3: KOREA_Phase3,
    CANADA_Phase3: CANADA_Phase3,
    MEXICO_Phase3: MEXICO_Phase3,
    CHINA_Phase3: CHINA_Phase3,
    SAUDI_ARABIA_Phase3: SAUDI_ARABIA_Phase3,
    DENMARK_Phase3: DENMARK_Phase3,
    SINGAPORE_Phase3: SINGAPORE_Phase3,
    EUROPEAN_UNION_Phase3: EUROPEAN_UNION_Phase3,
    SWITZERLAND_Phase3: SWITZERLAND_Phase3,
    UNITED_STATES_Phase3: UNITED_STATES_Phase3,


    SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT: SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT,
    REQUESTED_STANDARDS_FOR_EVALUATION: REQUESTED_STANDARDS_FOR_EVALUATION,



    inputFields:inputFields,

    Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition: Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition,
    NRTL_Classification_for_North_America_Phase_3: NRTL_Classification_for_North_America_Phase_3,
    Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971: Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971,
    Has_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC: Has_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC,
    Usability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015: Usability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015,
    Ifto_a_usability_file_review_which_standard_would_you_like_DC_to_use: Ifto_a_usability_file_review_which_standard_would_you_like_DC_to_use,
    Does_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8: Does_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8,
    Will_your_product_be_used_in_a_home_health_care_environment_60601_1_11: Will_your_product_be_used_in_a_home_health_care_environment_60601_1_11,
    Does_your_product_incorporate_the_use_of_a_laser_60825: Does_your_product_incorporate_the_use_of_a_laser_60825,
    Does_your_product_use_batteries_Ifwhat_kind_of_battery_is_used: Does_your_product_use_batteries_Ifwhat_kind_of_battery_is_used,
    Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471: Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471,
    Will_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12: Will_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12,
    Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects: Is_the_product_rated_IP_rated_for_protection_against_solid_foreign_objects,
    Is_the_product_rated_IP_rated_for_protection_against_water: Is_the_product_rated_IP_rated_for_protection_against_water,
    //phase4
    Frequency_: Frequency_,
    Dc: Dc,
    Voltage_phase4: Voltage_phase4,

    Current_In_Phase: Current_In_Phase,
    Services: Services,
    Product_name_and_or_model_Phase_5, Product_name_and_or_model_Phase_5,
    Type_of_equipment_Phase_5, Type_of_equipment_Phase_5,
    Where_is_the_equipment_intended_to_be_used, Where_is_the_equipment_intended_to_be_used,
    Does_the_equipment_have_wireless_transmit_capability_Phase_5, Does_the_equipment_have_wireless_transmit_capability_Phase_5,
    Equipment_dimensions_and_weight_, Equipment_dimensions_and_weight_,



    Frequency_of_highest_clock_oscillator_in_your_system, Frequency_of_highest_clock_oscillator_in_your_system,
    Approximate_set_up_time_for_your_device__in_hours, Approximate_set_up_time_for_your_device__in_hours,
    List_all_AC_and_I_O_cables_that_your_equipment_uses, List_all_AC_and_I_O_cables_that_your_equipment_uses,
    Modes_of_Operation_1, Modes_of_Operation_1,
    Modes_of_Operation_2, Modes_of_Operation_2,
    REQUESTED_STANDARDS_FOR_EVALUATION_phase4, REQUESTED_STANDARDS_FOR_EVALUATION_phase4,

    one: one,
    two: two,
    three: three,
    other_radio_phase4_3: other_radio_phase4_3,

    Dc_radio_phase4: Dc_radio_phase4,
    five_zero_Hz_radio_phase4: five_zero_Hz_radio_phase4,
    Six_Zero_Hz_radio_phase4: Six_Zero_Hz_radio_phase4,
    other_radio_phase4_1: other_radio_phase4_1,

    // 2 RADIO ROW
    ONE_TWO_ZERO_V: ONE_TWO_ZERO_V,
    TWO_FOUR_ZERO_V: TWO_FOUR_ZERO_V,
    FOUR_EIGHT_ZERO_V: FOUR_EIGHT_ZERO_V,
    other_radio_phase4_2: other_radio_phase4_2,

    Air: Air,
    Gas: Gas,
    Water: Water,
    // Other_radio_phase4_4: Other_radio_phase4_4,
    Product_name_and_or_model: Product_name_and_or_model,
    Type_of_equipment: Type_of_equipment,
    Where_is_the_equipment_intended_be_used: Where_is_the_equipment_intended_be_used,
    Does_the_equipment_have_wireless_transmit_capability_Phase_6: Does_the_equipment_have_wireless_transmit_capability_Phase_6,
    Equipment_dimensions_and_weight: Equipment_dimensions_and_weight,
    Enter_product_classification: Enter_product_classification,
    Enter_length_of_the_product: Enter_length_of_the_product,
    Enter_width_of_the_product: Enter_width_of_the_product,
    Enter_height_of_the_product: Enter_height_of_the_product,
    Enter_weight_of_the_product: Enter_weight_of_the_product,
    Transit_Operable: Transit_Operable,
    Transport_and_S_rage_Between_Uses: Transport_and_S_rage_Between_Uses,
    Maximum_Ambient_Temperature: Maximum_Ambient_Temperature,
    Minimum_Ambient_Temperature: Minimum_Ambient_Temperature,
    Maximum_Humidity: Maximum_Humidity,
    Ambient_Temperature_Range: Ambient_Temperature_Range,
    Relative_Humidity_Range: Relative_Humidity_Range,
    Atmospheric_Pressure_Range: Atmospheric_Pressure_Range,
    Ambient_Temperature_Range1: Ambient_Temperature_Range1,
    Relative_Humidity_Range2: Relative_Humidity_Range2,
    Atmospheric_Pressure_Range3: Atmospheric_Pressure_Range3,
    Voltage_Range1A: Voltage_Range1A,
    Voltage_Range1B: Voltage_Range1B,
    Voltage_Range2A: Voltage_Range2A,
    Voltage_Range2B: Voltage_Range2B,
    Environmental_Operating_Conditions: Environmental_Operating_Conditions,
    Environmental_Operating_Conditions_fortext: Environmental_Operating_Conditions_fortext,

    Laser_Manufacturer: Laser_Manufacturer,
    Laser_Classification: Laser_Classification,
    Model_Number_phase7: Model_Number_phase7,
    FDA_Accession_Number: FDA_Accession_Number,
    Transport_and_Storage_Between_Uses: Transport_and_Storage_Between_Uses,
    Cooling_Means: Cooling_Means,
    Gas_Connection: Gas_Connection,
    Circular_1: Circular_1,
    if_yes_Beam_Diameter_1: if_yes_Beam_Diameter_1,
    Rectangular_1: Rectangular_1,
    if_yes_Length_1: if_yes_Length_1,
    Width_1: Width_1,
    Wavelength1: Wavelength1,
    Maximum_Power1: Maximum_Power1,
    Duty_Cycle1: Duty_Cycle1,
    Maximum_Power_2: Maximum_Power_2,
    Circular: Circular,
    if_yes_Beam_Diameter: if_yes_Beam_Diameter,
    Rectangular: Rectangular,
    if_yes_Length_: if_yes_Length_,
    Width_: Width_,
    norfq: norfq,
    Wavelength: Wavelength,
    Maximum_Energy_1: Maximum_Energy_1,
    Repetition_Rate: Repetition_Rate,
    Maximum_Energy: Maximum_Energy,
    Pulse_Width: Pulse_Width,
    Duty_Cycle: Duty_Cycle,
    
    Maximum_Power_3: Maximum_Power_3,
    Optical_Density_for_Laser_Googles: Optical_Density_for_Laser_Googles,
    Beam_Divergence: Beam_Divergence,
     other_raioend :other_raioend, 


    Maximum_Permissible_Exposure_Limit: Maximum_Permissible_Exposure_Limit,
    Focal_Distance: Focal_Distance,
    Nominal_Ocular_Hazard_Distance: Nominal_Ocular_Hazard_Distance,
    Recommended_Beam_Dump: Recommended_Beam_Dump,
    Toxin_Hazards: Toxin_Hazards,
    Carcinogens: Carcinogens,
    Flammable_Gases: Flammable_Gases,
    Asphyxiation: Asphyxiation,
    Explosion: Explosion,

    //scope/////
    RFQCategory:RFQCategory,
    Toxin_Hazards_scope: Toxin_Hazards_scope,
    Carcinogens_scope: Carcinogens_scope,
    Flammable_Gases_scope: Flammable_Gases_scope,
    Asphyxiation_scope: Asphyxiation_scope,
    Explosion_scope: Explosion_scope,

    //spoce
    Coveralls: Coveralls,
    Eye: Eye,
    Hearing: Hearing,
    Respirator: Respirator,
    SCBA: SCBA,
    Skin: Skin,

    //type
    Coveralls_type: Coveralls_type,
    Eye_type: Eye_type,
    Hearing_type: Hearing_type,
    Respirator_type: Respirator_type,
    SCBA_type: SCBA_type,
    Skin_type: Skin_type,

    //type

    BCF_Power: BCF_Power,
    Foam: Foam,
    Carbon_Dioxide: Carbon_Dioxide,
    Nitrogen: Nitrogen,
    Dry_Power: Dry_Power,
    Water_phase7: Water_phase7,
    Location: Location,
    Laser_Engineer_Level: Laser_Engineer_Level,
    Engineer: Engineer,
    Approved: Approved,
    Signature: Signature,
    Date: Date,
    Approved_1: Approved_1,
    Signature_1: Signature_1,
    Date_1: Date_1,

    //phase 7
    Probe_Name: Probe_Name,
    System_Name: System_Name,
    Pulse_Type: Pulse_Type,
    Acoustic_Radiation_Aperture: Acoustic_Radiation_Aperture,
    Diameter: Diameter,
    Focal_Location_phase7: Focal_Location_phase7,
    Pitch: Pitch,
    Elevation_Height: Elevation_Height,
    Evaluation_Focal_Location: Evaluation_Focal_Location,
    Description_phase_7: Description_phase_7,
    Focal_Location: Focal_Location,
    Aperature_Area_1: Aperature_Area_1,
    Lines_per_Image: Lines_per_Image,
    Frame_Rate: Frame_Rate,
    Scan_Angle_: Scan_Angle_,
    ROC_Apex_Distance: ROC_Apex_Distance,
    Scan_Length: Scan_Length,
    Number_of_Pulses_Types: Number_of_Pulses_Types,
    Description_phase_7_1: Description_phase_7_1,
    Nominal_Center_Frequency_: Nominal_Center_Frequency_,
    Number_of_PW_Gate_Sizes: Number_of_PW_Gate_Sizes,
    Range_of_PW_Gate_Sizes: Range_of_PW_Gate_Sizes,
    Number_of_Focal_Location: Number_of_Focal_Location,
    Number_of_Element_Used: Number_of_Element_Used,
    Focal_Depth: Focal_Depth,
    Aperature_Area_2: Aperature_Area_2,
    notes: notes,

    X_Ray_Source: X_Ray_Source,
    Model_Number_phase_8_1: Model_Number_phase_8_1,
    Detector: Detector,
    Model_Number_phase_8_2: Model_Number_phase_8_2,
    HV_Generator: HV_Generator,
    Model_Number_phase_8_3: Model_Number_phase_8_3,
    X_Ray_Type_Purpose: X_Ray_Type_Purpose,
    Product_phase_8: Product_phase_8,
    Model_Number_phase_4: Model_Number_phase_4,
    Ratings: Ratings,
    Cooling_Means_: Cooling_Means_,
    Gas_Connection_phase_8: Gas_Connection_phase_8,

    Minimum_phase_9: Minimum_phase_9,
    Intermediate_phase_9: Intermediate_phase_9,
    Maximum_phase_9: Maximum_phase_9,
    Minimum_phase_9_2: Minimum_phase_9_2,
    Maximum_phase_9_2: Maximum_phase_9_2,
    ofInfusionSetsUsedWithEquipmentUnderTest: ofInfusionSetsUsedWithEquipmentUnderTest,
    START_DATE: START_DATE,
    END_DATE: END_DATE,

    Legend_1:Legend_1,
Legend_2:Legend_2,
Legend_3:Legend_3,
Legend_4:Legend_4,
Legend_5:Legend_5,
Legend_6:Legend_6,
Legend_7:Legend_7,






VolumetricInfusionPump:VolumetricInfusionPump,
Drip_rateInfusionPump:Drip_rateInfusionPump,
Type1_ContinuousInfusionFlowOnly:Type1_ContinuousInfusionFlowOnly,
Type2_n_continuousFlowOnly:Type2_n_continuousFlowOnly,
Type3_DiscreteDeliveryofaBolus:Type3_DiscreteDeliveryofaBolus,
Type4_Type1CombinedWithType3and_orType2inSameEquipment:Type4_Type1CombinedWithType3and_orType2inSameEquipment,
Type5_ProfilePump:Type5_ProfilePump,

selectedOption:selectedOption,
 
selectedOptionradio2:selectedOptionradio2,
selectedOptionradio3:selectedOptionradio3,
selectedOptionradio4:selectedOptionradio4,

  };
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
    const handleOptionChange1 = (event) => {
      setselectedOptionradio2(event.target.value);
    console.log(event.target.value);
  };
     const handleOptionChange2 = (event) => {
    setselectedOptionradio3(event.target.value);
    console.log(event.target.value);
  };
     const handleOptionChange3 = (event) => {
    setselectedOptionradio4(event.target.value);
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  const Clickchange1 = (() => {

    if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase2(false)
      setPhase3(false)
      setPhase4(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_5 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('primary')
      setHeaderTabsColor1('')


    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }


    else {

  
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }



  })
  const onChangeFile = (e, index, propName) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log("Selected file (base64):", base64String);
      setUser(prevUsers => {
        const newUsers = [...prevUsers];
        newUsers[index] = { ...prevUsers[index], [propName]: base64String };
        return newUsers;
      });
    };
    reader.readAsDataURL(file);
  };

  const onChange = (e, index) => {
    const { name, value } = e.target;
    const file = e.target.files ? e.target.files[0] : null;
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      const updatedUsers = user.map((user, i) => {
        if (index === i) {
          return { ...user, descriptionrotate: value, filerotate: base64String };
        }
        return user;
      });
      setUser(updatedUsers);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2= Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const Clickchange2 = (() => {


    if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_5 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('primary')
      setHeaderTabsColor1('')


    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }

  })
  const Clickchange3 = (() => {


    if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_5 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('primary')
      setHeaderTabsColor1('')


    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }


  })
  const Clickchange4 = (() => {

    if (Legend_5 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('primary')
      setHeaderTabsColor1('')


    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }

  })
  const Clickchange5 = (() => {

    if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }

  })

  const Clickchange67 = (() => {


    const result = fetch(`${Api}/newproducts`, {
      method: "post",
      body: JSON.stringify(data,),
      headers: { "Content-Type": "application/json" },
    });
    // result = await result.json();
    if (result) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      toast.info("added Succesfully!");
      navigate('/thankyou')
    }
  })
  const Clickchange679 = (() => {






  })

  const Clickchange6 = (() => {


    if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }

  })
  useEffect(() => {
   
  }, [ ])
  
  const Click1 = (() => {
    if (check_capcha.check === true) {
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
        window.scrollTo({ top: 0, behavior: "smooth" });
        setPhase2(true);
        setPhase1(false);
        setColor2("primary");
        setBackroudColor2("blue");
      }
    } else {
      toast.error("Please confirm the terms and conditions");
    }

  })
  const Back1 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(true)
    setPhase2(false)
  })
  const Click2 = (() => {
    if (Legend_1 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setTabs(true)
      setHeaderTabsColor1('primary')
      setHeadingPhase(false)
      setPhase2(false)
      setPhase1(false)
      setColor3('primary')
      setBackroudColor3('blue')
      setColor3('primary')
      setBackroudColor3('blue')

    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase2(false)
      setPhase3(false)
      setPhase4(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2('primary')
      setHeaderTabsColor1('')
      setColor3('primary')
      setBackroudColor3('blue')

    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_5 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('primary')
      setHeaderTabsColor1('')


    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('primary')
      setHeaderTabsColor1('')
    }
    else if (Legend_7 == true) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(false)
      setPhase3(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase1(false)
      setColor2('primary')
      setBackroudColor2('blue')
      setHeaderTabsColor2(' ')
      setHeaderTabsColor3('  ')
      setHeaderTabsColor4('  ')
      setHeaderTabsColor5('  ')
      setHeaderTabsColor6('  ')
      setHeaderTabsColor7('primary')
      setHeaderTabsColor1('')


    }
    else {
      const result = fetch(`${Api}/newproducts`, {
        method: "post",
        body: JSON.stringify(data,),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        toast.info("added Succesfully!");
        navigate('/thankyou')
      }

    }

  })

  const Back2 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(true)
    setPhase2(false)
    setColor2('')
    setBackroudColor2(' ')
    setColor1('primary')
    setBackroudColor1(' blue')
  })
  const BackTop = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(false)
    setPhase2(true)
    setPhase4(false)
    setPhase3(false)
    setColor3('')
    setTabs(false)
    setBackroudColor3('')
    setColor1('primary')
    setBackroudColor1(' blue')
  })
  const BackTop1 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPhase1(false)
    setPhase2(false)
    setPhase4(false)
    setPhase3(true)
    setColor3('primary')
    setHeaderTabsColor1('primary')
    setHeaderTabsColor2('')
    setBackroudColor3('blue')
    setColor1('primary')
    setBackroudColor1(' blue')
  })
  const Click3 = (() => {
    navigate('/thankyou')


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
    setColor3(' ')
    setBackroudColor3('  ')
  })


  const BackChange1 = (() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBackroudColor3('  ')
    setBackroudColor2(' blue')
    setColor3(' ')
    setColor2('primary')

    setPhase2(true)
    setPhase3(false)
  })
  const BackChange2 = (() => {
    if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)

      setPhase4(false)
    }
  })
  const BackChange3 = (() => {
    if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase1(false)

      setPhase4(false)
    }
  })
  const BackChange4 = (() => {
    if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })
  const BackChange5 = (() => {
    if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })
  const BackChange6 = (() => {
    if (Legend_5 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })


  const BackChange7 = (() => {
    if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_5 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })



  const BackChange8 = (() => {
    if (Legend_7 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_5 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })
  const BackChange9 = (() => {
    if (Legend_7 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_5 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })
  const BackChange92 = (() => {
    if (Legend_7 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(true)
      setPhase10(true)
    }
    else if (Legend_6 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(true)
      setPhase9(false)
    }
    else if (Legend_5 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(true)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_4 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(true)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_3 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase4(false)
      setPhase5(true)
      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else if (Legend_2 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase3(false)
      setPhase2(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)

      setPhase4(true)
    }
    else if (Legend_1 == true) {
      window.scrollTo({ top: 0, behavior: 'smooth' });


      setPhase3(true)
      setPhase2(false)
      setPhase4(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setPhase2(true)
      setPhase3(false)
      setPhase5(false)
      setColor3('primary')
      setBackroudColor3('blue')

      setPhase6(false)
      setPhase7(false)
      setPhase8(false)
      setPhase9(false)
      setPhase4(false)
    }
  })

  const SendEmail = () => {
    const result = fetch(`${Api}/newproducts/send`, {
      method: "post",
      body: JSON.stringify({
        to,
        cc,
        Company,

      }),
      headers: { "Content-Type": "application/json" },
    });
    // result = await result.json();
    if (result) {
      toast.info("Vendor is added Succesfully!")

    }


  }

  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      
     navigate('/login')
    }
    
 
 }, [])
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
  setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
}

const handleRemoveFields = id => {
  const values  = [...inputFields];
  values.splice(values.findIndex(value => value.id === id), 1);
  setInputFields(values);
}
  return (
    <ThemeProvider theme={theme}>
    <div>
      <TopHeader />
      
        <Container maxWidth="sm" >
          <Typography variant="h5" gutterBottom className={classes.MainHeading2}>
            New Product Evaluation
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            gutterBottom

            className={classes.MainHeading2}>
            Select this to get a quote to perform full product compliance evaluation from scratch to help launch your product to the market with no hassle.
          </Typography>
        </Container>
 
      {/* {Tabs ? <>
        <Container maxWidth='md'>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor1} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>MEDICAL SAFETY</Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor2} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>  MEDICAL EMC</Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor3} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>  HOME HEALTHCARE</Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor4} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>  LASER SAFETY</Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor5} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>   ULTRASOUND PROBE  </Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor6} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>     X-RAY   </Typography></u></Button>
          <Button variant="text" size='medium' > <u><Typography color={HeaderTabsColor7} sx={{ textDecoration: 'underline' }} display="inline" variant='caption'>          INFUSION PUMP  </Typography></u></Button>
        </Container>
      </> : null} */}
      <Container maxWidth="md" className={classes.stepping} >
        <Grid container justifyContent='center' >
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
            <Avatar className={classes.line1c} style={{ backgroundColor: backroudColor3 }}>
              <TbNumber3 />
            </Avatar>
            <Typography variant='h5' className={classes.line3} color={Color4}>___________</Typography>
            <Avatar className={classes.line1c} style={{ backgroundColor: backroudColor4 }}>
              <TbNumber4 />
            </Avatar>
            <Typography variant='h5'>___________</Typography>
          </Stack>

        </Grid>


      </Container>
      {Phase1 ? <>

        <Container maxWidth="lg" className={classes.form}>
          <Typography variant='h5' className={classes.heading}  > General Information</Typography>
          <Grid container justifyContent="center" >
            <Grid item xs={12} sm={12} md={6} className={classes.grid}>
              <div className={classes.textfield1} >
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small"   label="First Name" align="center" className={classes.textfield} value={First_Name} onChange={(e) => setFirst_Name(e.target.value,)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small"   label="Last Name" align="center" className={classes.textfield} value={Last_Name} onChange={(e) => setLast_Name(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Company*" align="center" fullWidth className={classes.fullWidth} value={Company} onChange={(e) => setCompany(e.target.value)} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.textfieald2} >
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Email*  " align="center" fullWidth className={classes.fullWidth1} value={Email} onChange={(e) => setEmail(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Phone Number*  " align="center" fullWidth className={classes.fullWidth1} value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" className={classes.form}>
        <br/>
          <Typography variant='h5' className={classes.headdding}  >  Address</Typography>
          <Grid container justifyContent="center" >
            <Grid item xs={12} sm={12} md={6} className={classes.grid}>
              <div className={classes.textfield1} >
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="  Address*" align="center" fullWidth className={classes.fullWidth} value={Address} onChange={(e) => setAddress(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="City*  " align="center" fullWidth className={classes.fullWidth} value={City} onChange={(e) => setCity(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="  Zip*" align="center" fullWidth className={classes.fullWidth} value={Zip} onChange={(e) => setZip(e.target.value)} />
              
                <div>

    </div>
    <br/>
      <label htmlFor="start-date">Start Date:</label>
      <input type="date" id="start-date" value={START_DATE}   onChange={handleStartDateChange} style={{marginLeft:"10px",height:"35px"}}/>
                <br />

              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.textfield2} >
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Address 2  " align="center" fullWidth className={classes.fullWidth1} value={Address_2} onChange={(e) => setAddress_2(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" State*  " align="center" fullWidth className={classes.fullWidth1} value={State_} onChange={(e) => setState_(e.target.value)} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" United States  " align="center" fullWidth className={classes.fullWidth1} value={United_States} onChange={(e) => setUnited_States(e.target.value)} />
                <div>

</div>
    <br/>
    
      <label htmlFor="end-date">End Date:</label>
      <input type="date" id="end-date" value={END_DATE}   min={START_DATE} onChange={handleEndDateChange} style={{marginLeft:"10px",height:"35px"}}/>

              </div>
            </Grid>
          </Grid>
            <br/>
          <Typography className={classes.caption} variant='caption'  >
          <Checkbox size="small" color="gray" checked={check_capcha.check} onChange={(e) => setCheck_capcha({ ...check_capcha, check: e.target.checked, })} />I agree to the Terms of Use and have read and accept the Privacy Policy. *</Typography>


          <Container maxWidth="lg" className={classes.centercontainer}>
            <Grid container spacing={3} direction="column" >
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>

                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={Click1} className={classes.leftbutton}>
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
          <Typography variant='body1' gutterBottom className={classes.MainHeading3} > Please describe scope of your work and the test/s you need as best you can. </Typography>
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} className={classes.grid}>
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="First Name" align="center" className={classes.textfield} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="First Name" align="center" className={classes.textfield} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="First Name" align="center" className={classes.textfield} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="First Name" align="center" className={classes.textfield} />
            </Grid>
          </Grid> */}
          <Grid container >
            <TextField
              className={classes.textarea}
              value={description_phase2} onChange={(e) => setdescription_phase2(e.target.value)}
               variant="filled"   style={{ backgroundColor: "transparent" }}  
              id="outlined-multiline-flexible"
              label="Description"
              placeholder="Description"
              fullWidth
              multiline
            />
          </Grid>
          <Typography variant='body1' className={classes.MainHeading4} >  Please select intended market countries.</Typography>
        </Container>
        <Container maxWidth="lg">
          <TableContainer   >
            <Grid container >
              <Table style={{ width: 1200 }}>
                <TableHead>
                  <TableRow>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row"> AUSTRALIA   </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={AUSTRALIA} onChange={(e) => setAUSTRALIA(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" >   JAPAN   </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={JAPAN} onChange={(e) => setJAPAN(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>



                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">   BRAZIL </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={BRAZIL} onChange={(e) => setBRAZIL(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" > KOREA     </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={KOREA} onChange={(e) => setKOREA(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">   CANADA </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={CANADA} onChange={(e) => setCANADA(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" >    MEXICO  </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={MEXICO} onChange={(e) => setMEXICO(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">  CHINA  </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={CHINA} onChange={(e) => setCHINA(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" >     SAUDI ARABIA  </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SAUDI_ARABIA} onChange={(e) => setSAUDI_ARABIA(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">   DENMARK </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={DENMARK} onChange={(e) => setDENMARK(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" >    SINGAPORE  </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SINGAPORE} onChange={(e) => setSINGAPORE(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">   EUROPEAN UNION </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={EUROPEAN_UNION} onChange={(e) => setEUROPEAN_UNION(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" >    SWITZERLAND  </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SWITZERLAND} onChange={(e) => setSWITZERLAND(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row"> UNITED STATES :</TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={UNITED_STATES} onChange={(e) => setUNITED_STATES(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>

                    <TableCell align="left" > OTHER :</TableCell>
                    <TableCell align="left"  >



                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={OTHER} onChange={(e) => setOTHER(e.target.value)} placeholder='.....................................' align="center" />






                    </TableCell>
                    {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
                
                
                
                  </TableRow>
          <Typography variant='body1' className={classes.MainHeading4} >  Please Choose the pages</Typography>

  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row"> MEDICAL SAFETY   </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Legend_1} onChange={(e) => setLegend_1(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>
                    <TableCell align="left" >   MEDICAL EMC   </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Legend_2} onChange={(e) => setLegend_2(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                  </TableRow>

                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">    HOME HEALTHCARE </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Legend_3} onChange={(e) => setLegend_3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>
                    <TableCell align="left" >    LASER SAFETY   </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Legend_4} onChange={(e) => setLegend_4(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">  ULTRASOUND PROBE   </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Legend_5} onChange={(e) => setLegend_5(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>
                    <TableCell align="left" >     X-RAY    </TableCell>
                    <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Legend_6} onChange={(e) => setLegend_6(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="left" className={classes.tablecell} component="th" scope="row">    INFUSION PUMP   </TableCell>
                    <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Legend_7} onChange={(e) => setLegend_7(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                    <TableCell align="left" component="th" scope="row" width='300px'> </TableCell>
                    <TableCell align="left" >       </TableCell>
                    <TableCell align="left"  ></TableCell>
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
            <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

          </TableContainer>

     
           
          <Box  >
            <Container maxWidth="lg" className={classes.cardgrid}>

              <br />
              <Typography style={{ color: "#004580" }} variant='body1'>Please upload user guide and other supporting documents to understand the product requirement.</Typography>


          

              { inputFields.map(inputField => (
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
                  
                     variant="filled"   style={{ backgroundColor: "transparent" }} 
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
                      disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}
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
<br/>
          <Container maxWidth="lg" className={classes.centercontainer}>
            <Grid container spacing={3} direction="column" >
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={Back2} className={classes.rightbutton}>
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={Click2} className={classes.leftbutton}>
                      Next
                    </Button>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>

        </Container>

      </> : null}

      {Legend_1 ? <>
        {Phase3 ? <>
          <Container maxWidth="lg" className={classes.cardgrid}>
            <Grid container style={{ padding: '16px' }}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                  Medical Safety
                </Typography>
              </Grid>
          
            </Grid>



            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} > DESCRIPTION OF PRODUCT / INTENDED USE</Typography>
            <Grid container >
              <TextField
                className={classes.textarea2}
                 variant="filled"   style={{ backgroundColor: "transparent" }}  
                id="outlined-multiline-flexible"
                label="Description"
                placeholder=" "
                fullWidth
                multiline
                value={DESCRIPTION_OF_PRODUCT_INTENDED_USE} onChange={(e) => setDESCRIPTION_OF_PRODUCT_INTENDED_USE(e.target.value,)}
              />
            </Grid>
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} > MODEL NUMBER</Typography>
            <Grid container >
              <TextField
                value={Model_Number} onChange={(e) => setModel_Number(e.target.value,)}
                className={classes.textarea2}
                 variant="filled"   style={{ backgroundColor: "transparent" }}  

                label="Model Number"
                placeholder=" "
                size='small'
                fullWidth

              />
            </Grid>


           
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >      ELECTRICAL RATINGS</Typography>
              <Grid container justifyContent="center" >
                <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                  <div className={classes.textfield1} >
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Voltage :*" align="center" fullWidth className={classes.fullWidth} value={Voltage} onChange={(e) => setVoltage(e.target.value,)} />
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Frequency :*" align="center" fullWidth className={classes.fullWidth} value={Frequency} onChange={(e) => setFrequency(e.target.value,)} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.textfield2} >
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Current/Power :*  " align="center" fullWidth className={classes.fullWidth1} value={Current_Power} onChange={(e) => setCurrent_Power(e.target.value,)} />
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Other :    " align="center" fullWidth className={classes.fullWidth1} value={Other_phas3_1} onChange={(e) => setOther_phas3_1(e.target.value,)} />
                  </div>
                </Grid>
              </Grid>
      <br/>
              <div className={classes.textfield1} >

            
              <TableContainer   >
<Grid container >
  <Table style={{ width: 1225 }}>
    <TableHead>
      <TableRow>

      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">NRTL Listing for North America:  </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_Listing_for_North_America_Phase_3} onChange={(e) => setNRTL_Listing_for_North_America_Phase_3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  > Field Label Evaluation :</TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Field_Label_Evaluation} onChange={(e) => setField_Label_Evaluation(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row"> NRTL Classification for North America : </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_Classification_for_North_America} onChange={(e) => setNRTL_Classification_for_North_America(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  > Design Review :</TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Design_Review} onChange={(e) => setDesign_Review(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row"> NRTL Recognition for North America : </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_Recognition_for_North_America} onChange={(e) => setNRTL_Recognition_for_North_America(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  > EMC Testing :    </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={EMC_Testing} onChange={(e) => setEMC_Testing(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">FDA ASCA Pilot Program :  </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={FDA_ASCA_Pilot_Program} onChange={(e) => setFDA_ASCA_Pilot_Program(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  >  ROHS Evaluation : </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={ROHS_Evaluation} onChange={(e) => setROHS_Evaluation(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">  EU Test Reports : </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={EU_Test_Reports} onChange={(e) => setEU_Test_Reports(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  >   Performance Testing : </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Performance_Testing} onChange={(e) => setPerformance_Testing(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">  IEC_Test_Reports:</TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={IEC_Test_Reports} onChange={(e) => setIEC_Test_Reports(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>


        <TableCell align="left"  > CB_Scheme_Evaluation</TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={CB_Scheme_Evaluation} onChange={(e) => setCB_Scheme_Evaluation(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>


      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   	Witness Manufacturer's Testing :</TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Witness_Manufacturer_s_Testing} onChange={(e) => setWitness_Manufacturer_s_Testing(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

                <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>



        <TableCell align="left"  >  Testing at Manufacturer's Premises:</TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Testing_at_Manufacturer_s_Premises} onChange={(e) => setTesting_at_Manufacturer_s_Premises(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>





      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   Limited Production Certificate :</TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Limited_Production_Certificate} onChange={(e) => setLimited_Production_Certificate(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>
      
        <TableCell align="left"  >  </TableCell>
        <TableCell align="left"  >   </TableCell>
                {/* <TableCell align="left" component="th" scope="row" width='200px'> </TableCell> */}

        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small"  checked={ EUROPEAN_UNION} onChange={(e) =>    setEUROPEAN_UNION    (e.target.checked)} /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >      SERVICES REQUESTED  </Typography>
      {/* <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >      SERVICES REQUESTED  </Typography> */}
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row"> AUSTRALIA   </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={AUSTRALIA_Phase3} onChange={(e) => setAUSTRALIA_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" >   JAPAN   </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={JAPAN_Phase3} onChange={(e) => setJAPAN_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   BRAZIL </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={BRAZIL_Phase3} onChange={(e) => setBRAZIL_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" > KOREA     </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={KOREA_Phase3} onChange={(e) => setKOREA_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   CANADA </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={CANADA_Phase3} onChange={(e) => setCANADA_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" >    MEXICO  </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={MEXICO_Phase3} onChange={(e) => setMEXICO_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>


      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">  CHINA  </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={CHINA_Phase3} onChange={(e) => setCHINA_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" >     SAUDI ARABIA  </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SAUDI_ARABIA_Phase3} onChange={(e) => setSAUDI_ARABIA_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>




      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   DENMARK </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={DENMARK_Phase3} onChange={(e) => setDENMARK_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" >    SINGAPORE  </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SINGAPORE_Phase3} onChange={(e) => setSINGAPORE_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row">   EUROPEAN UNION </TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={EUROPEAN_UNION_Phase3} onChange={(e) => setEUROPEAN_UNION_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" >    SWITZERLAND  </TableCell>
        <TableCell align="left"  ><span style={{ color: "black" }}  >No</span> <Switch size="small" checked={SWITZERLAND_Phase3} onChange={(e) => setSWITZERLAND_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
        {/* <TableCell align="left"  width="10%" ><span style={{color:"black"}}>No</span> <Switch   size="small" /><span style={{color:"black"}}>Yes</span></TableCell> */}
      </TableRow>

      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="left" className={classes.tablecell} component="th" scope="row"> UNITED STATES :</TableCell>
        <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={UNITED_STATES_Phase3} onChange={(e) => setUNITED_STATES_Phase3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>

        <TableCell align="left" component="th" scope="row" width='200px'> </TableCell>

        <TableCell align="left" > OTHER :</TableCell>
        <TableCell align="left"  >



          <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={OTHER_phase3_2_Phase3} onChange={(e) => OTHER_phase3_2_Phase3(e.target.value)} placeholder='.....................................' align="center" />






        </TableCell>
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
<TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

</TableContainer>


         
              </div>
            
              
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >   SPECIAL REQUIRMENTS FOR FUNCTIONALITLY/TESTING OF THE PRODUCT  </Typography>
              <Grid container >
                <TextField
                  className={classes.textarea1}
                   variant="filled"   style={{ backgroundColor: "transparent" }}  
                  value={SPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT} onChange={(e) => setSPECIAL_REQUIRMENTS_FOR_FUNCTIONALITLY_TESTING_OF_THE_PRODUCT(e.target.value)}

                  id="outlined-multiline-flexible"
                  label="Description"
                  placeholder=" "
                  fullWidth
                  multiline
                />
              </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >  REQUESTED STANDARDS FOR EVALUATION </Typography>
              <Grid container >
                <TextField
                  className={classes.textarea1}
                   variant="filled"   style={{ backgroundColor: "transparent" }}  
                  id="outlined-multiline-flexible"
                  label="Description"
                  placeholder=" "
                  fullWidth
                  multiline
                  value={REQUESTED_STANDARDS_FOR_EVALUATION} onChange={(e) => setREQUESTED_STANDARDS_FOR_EVALUATION(e.target.value)}

                />
              </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >  SERVICES REQUESTED </Typography>
              <div className={classes.textfield1} >

 
                  <TableContainer   >
                    <Grid container >
                      <Table style={{ width: 1235 }}>
                        <TableHead>
                          <TableRow>

                          </TableRow>
                        </TableHead>
                        <TableBody>

                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Would you like your product evaluated to the first amendment of 60601 1 Third Edition</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Would_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition} onChange={(e) => setWould_you_like_your_product_evaluated_to_the_first_amendment_of_60601_1_Third_Edition(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> NRTL Classification for North America Phase 3</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={NRTL_Classification_for_North_America_Phase_3} onChange={(e) => setNRTL_Classification_for_North_America_Phase_3(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Do you have a risk management file for your product that is compliant with the requirements of ISO 14971 </TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Do_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971} onChange={(e) => setDo_you_have_a_risk_management_file_for_your_product_that_is_compliant_with_the_requirements_of_ISO_14971(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Has your ISO 14971 1 Risk Management Process been reviewed by DC </TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Has_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC} onChange={(e) => setHas_your_ISO_14971_1_Risk_Management_Process_been_reviewed_by_DC(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Usability File   Would you like DC to evaluate your Usability Engineering File against IEC 62366 1 2015</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Usability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015} onChange={(e) => setUsability_File___Would_you_like_DC_to_evaluate_your_Usability_Engineering_File_against_IEC_62366_1_2015(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Ifto a usability file review which standard would you like DC to use </TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Ifto_a_usability_file_review_which_standard_would_you_like_DC_to_use} onChange={(e) => setIfto_a_usability_file_review_which_standard_would_you_like_DC_to_use(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Does your product have alarms incorporated into the medical device 60601 1 8</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Does_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8} onChange={(e) => setDoes_your_product_have_alarms_incorporated_into_the_medical_device_60601_1_8(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>

                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Will your product be used in a home health care environment 60601 1 11</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Will_your_product_be_used_in_a_home_health_care_environment_60601_1_11} onChange={(e) => setWill_your_product_be_used_in_a_home_health_care_environment_60601_1_11(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Does your product incorporate the use of a laser 60825</TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Does_your_product_incorporate_the_use_of_a_laser_60825} onChange={(e) => setDoes_your_product_incorporate_the_use_of_a_laser_60825(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row"> Does your product use batteries Ifwhat kind of battery is used</TableCell>
                            <TableCell align="left" component="th" scope="row" >
                            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownCircleOutlinedIcon/> 
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
                            </TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Does your product incorporate the use of LEDs as luminaires lamp IEC 62471 </TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Does_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471} onChange={(e) => setDoes_your_product_incorporate_the_use_of_LEDs_as_luminaires_lamp_IEC_62471(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Will your product be used in a emergency medical services environment 60601 1 12 </TableCell>
                            <TableCell align="left" component="th" scope="row" ><span style={{ color: "black" }}>No</span> <Switch size="small" checked={Will_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12} onChange={(e) => setWill_your_product_be_used_in_a_emergency_medical_services_environment_60601_1_12(e.target.checked)} /><span style={{ color: "black" }}>Yes</span></TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Is the product rated IP rated for protection against solid foreign objects </TableCell>
                            <TableCell align="left" component="th" scope="row" >
                            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open2 ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
      >
        <ArrowDropDownCircleOutlinedIcon/> 
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose2}>Profile</MenuItem>
        <MenuItem onClick={handleClose2}>My account</MenuItem>
        <MenuItem onClick={handleClose2}>Logout</MenuItem>
      </Menu>
    </div>
                            </TableCell>
                          </TableRow>
                          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="left" className={classes.tablecell} component="th" scope="row">Is the product rated IP rated for protection against water </TableCell>
                            <TableCell align="left" component="th" scope="row" >
                            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open1 ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
      >
        <ArrowDropDownCircleOutlinedIcon/> 
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose1}>Profile</MenuItem>
        <MenuItem onClick={handleClose1}>My account</MenuItem>
        <MenuItem onClick={handleClose1}>Logout</MenuItem>
      </Menu>
    </div>
                            </TableCell>
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
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

                  </TableContainer>


       
              </div>

            
            <br />
            <Container maxWidth="lg" className={classes.centercontainer}>
            <Container maxWidth="lg" className={classes.centercontainer}>
              <Grid container spacing={3} direction="column" >
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" onClick={BackChange1} className={classes.rightbutton}>
                        Back
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" onClick={Clickchange1} className={classes.leftbutton}>
                        Next
                      </Button>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            </Container>
          </Container>
        </> : null}
      </> : null}



      {Legend_2 ? <>
        {Phase4 ? <>
          <Container maxWidth="lg" className={classes.cardgrid}>
            <Grid container style={{ padding: '16px' }}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                  Medical EMC
                </Typography>
              </Grid>
             
            </Grid>
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   Product Information</Typography>



              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Product name and/or model #  :  " align="center" fullWidth className={classes.fullWidth1} value={Product_name_and_or_model} onChange={(e) => setProduct_name_and_or_model(e.target.value,)} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Type of equipment :    " align="center" fullWidth className={classes.fullWidth1} value={Type_of_equipment} onChange={(e) => setType_of_equipment(e.target.value,)} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="    Where is the equipment intended to be used?    " align="center" fullWidth className={classes.fullWidth1} value={Where_is_the_equipment_intended_to_be_used} onChange={(e) => setWhere_is_the_equipment_intended_to_be_used(e.target.value,)} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Does the equipment have wireless transmit capability?      " align="center" fullWidth className={classes.fullWidth1} value={Does_the_equipment_have_wireless_transmit_capability_Phase_5} onChange={(e) => setDoes_the_equipment_have_wireless_transmit_capability_Phase_5(e.target.value,)} />
              <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Equipment dimensions and weight :     " align="center" fullWidth className={classes.fullWidth1} value={Equipment_dimensions_and_weight_} onChange={(e) => setEquipment_dimensions_and_weight_(e.target.value,)} />

            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   Power Requirements and Equipment Setup  </Typography>
            <div className={classes.textfield1} >

             
                <TableContainer   >
                  <Grid container >
                    <Table style={{ width: 1160 }}>
                      <TableHead>
                        <TableRow>

                        </TableRow>
                      </TableHead>
                      <TableBody>

                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left" className={classes.tablecell} component="th" scope="row">Frequency : </TableCell>
                          <TableCell align="right" component="th" scope="row" >



 
                          <div style={{ display: "flex", flexDirection: "row" }}>
  <label style={{ marginRight: "42px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"
      value="DC"
      checked={selectedOption === "DC"}
      onChange={handleOptionChange}
    />
    DC
  </label>
  <label style={{ marginRight: "45px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"  
      value="50Hz"
      checked={selectedOption === "50Hz"}
      onChange={handleOptionChange}
    />
    50Hz
  </label>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio" 
      value="60Hz"
      checked={selectedOption === "60Hz"}
      onChange={handleOptionChange}
    />
    60Hz
  </label>
  <label>
    <input 
    style={{ marginRight: "10px" }}
      type="radio"
      value="other"
      checked={selectedOption === "other"}
      onChange={handleOptionChange}
    />
    other
  </label>
</div>


                         
  
 

                          </TableCell>
                        </TableRow>
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left" className={classes.tablecell} component="th" scope="row">Voltage :  </TableCell>
                          <TableCell align="left" component="th" scope="row" >





 
                          <div style={{ display: "flex", flexDirection: "row" }}>
  <label style={{ marginRight: "27.555px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"
      value="120V"
      checked={selectedOptionradio2 === "120V"}
      onChange={handleOptionChange1}
    />
    120V
  </label>
  <label style={{ marginRight: "44.555px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"  
      value="240V"
      checked={selectedOptionradio2 === "240V"}
      onChange={handleOptionChange1}
    />
    240V
  </label>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio" 
      value="480V"
      checked={selectedOptionradio2 === "480V"}
      onChange={handleOptionChange1}
    />
    480V
  </label>
  <label>
    <input 
    style={{ marginRight: "10px" }}
      type="radio"
      value="other"
      checked={selectedOptionradio2 === "other"}
      onChange={handleOptionChange1}
    />
    other
  </label>
</div>


                      
 

                          </TableCell>
                        </TableRow>

                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left" className={classes.tablecell} component="th" scope="row">Current : (In Phase)</TableCell>
                          <TableCell align="left" component="th" scope="row" >
                            <FormControl>
                               
                          <div style={{ display: "flex", flexDirection: "row" }}>
  <label style={{ marginRight: "20px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"
      value="Single"
      checked={selectedOptionradio3 === "Single"}
      onChange={handleOptionChange2}
    />
    Single
  </label>
  <label style={{ marginRight: "50px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"  
      value="Two"
      checked={selectedOptionradio3 === "Two"}
      onChange={handleOptionChange2}
    />
    Two
  </label>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio" 
      value="Three"
      checked={selectedOptionradio3 === "Three"}
      onChange={handleOptionChange2}
    />
    Three
  </label>
  <label>
    <input 
    style={{ marginRight: "10px" }}
      type="radio"
      value="other"
      checked={selectedOptionradio3 === "other"}
      onChange={handleOptionChange2}
    />
    other
  </label>
</div>


                      
 
                            
                            </FormControl>
                          </TableCell>
                        </TableRow>

                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left" className={classes.tablecell} component="th" scope="row">  Services : </TableCell>
                          <TableCell align="left" component="th" scope="row" >
                        
                          <div style={{ display: "flex", flexDirection: "row" }}>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"
      value="Air(PSI)"
      checked={selectedOptionradio4 === "Air(PSI)"}
      onChange={handleOptionChange3}
    />
    Air(PSI)
  </label>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio"  
      value="Gas(GPM)"
      checked={selectedOptionradio4 === "Gas(GPM)"}
      onChange={handleOptionChange3}
    />
    Gas(GPM)
  </label>
  <label style={{ marginRight: "10px" }}>
    <input
    style={{ marginRight: "10px" }}
      type="radio" 
      value="Water"
      checked={selectedOptionradio4 === "Water"}
      onChange={handleOptionChange3}
    />
    Water
  </label>
  <label>
    <input 
    style={{ marginRight: "10px" }}
      type="radio"
      value="other"
      checked={selectedOptionradio4 === "other"}
      onChange={handleOptionChange3}
    />
    other
  </label>
</div>

                        
                        
                        
                        
 

                          </TableCell>
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
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Applicable Standards " align="center" fullWidth className={classes.fullWidthBottom} /> */}

                </TableContainer>
                <br />
                <Grid container >
                  <TextField value={Frequency_of_highest_clock_oscillator_in_your_system} onChange={(e) => setFrequency_of_highest_clock_oscillator_in_your_system(e.target.value,)}
                    className={classes.fullWidth1}
                     variant="filled"   style={{ backgroundColor: "transparent" }}  
                    id="outlined-multiline-flexible"
                    label=" Frequency of highest clock oscillator in your system:"
                    placeholder=" "
                    fullWidth
                    size='small'

                  />
                </Grid>
                <Grid container >
                  <TextField
                    className={classes.fullWidth1}
                     variant="filled"   style={{ backgroundColor: "transparent" }}  
                    id="outlined-multiline-flexible"
                    label=" Approximate set-up time for your device (in hours): "
                    placeholder=" "
                    fullWidth
                    size='small' value={Approximate_set_up_time_for_your_device__in_hours} onChange={(e) => setApproximate_set_up_time_for_your_device__in_hours(e.target.value,)}

                  />
                </Grid>

            
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >   List all AC and I/O cables that your equipment uses. </Typography>
              <Grid container >
                <TextField
                  className={classes.fullWidth1}
                   variant="filled"   style={{ backgroundColor: "transparent" }}   value={List_all_AC_and_I_O_cables_that_your_equipment_uses} onChange={(e) => setList_all_AC_and_I_O_cables_that_your_equipment_uses(e.target.value,)}
                  id="outlined-multiline-flexible"
                  label=" "
                  placeholder=" "
                  fullWidth
                  multiline
                />
              </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >    Modes of Operation </Typography>
         

                <Typography variant='body2' gutterBottom className={classes.MainHeadsing3a} style={{ color: "red" ,marginRight:"10px"}}>   The estimated worst-case operating modes should be selected representing most typical functions of the equipment to be tested and fully exercise all components / systems.  </Typography>
            
              <Grid container >
                <TextField
                  className={classes.fullWidth1}
                   variant="filled"   style={{ backgroundColor: "transparent" }}  
                  id="outlined-multiline-flexible"
                  label=" "
                  placeholder=" " value={Modes_of_Operation_1} onChange={(e) => setModes_of_Operation_1(e.target.value,)}
                  fullWidth
                  size='small'

                />
              </Grid>
              <Grid container >
                <TextField
                  className={classes.fullWidth1}
                   variant="filled"   style={{ backgroundColor: "transparent" }}  
                  size='small' value={Modes_of_Operation_2} onChange={(e) => setModes_of_Operation_2(e.target.value,)}

                  id="outlined-multiline-flexible"
                  label=" "
                  placeholder=" "
                  fullWidth

                />
              </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >   REQUESTED STANDARDS FOR EVALUATION </Typography>
              <Grid container >
                <TextField
                  className={classes.fullWidth1}
                  style={{marginTop:"-5px"}}
                   variant="filled"   style={{ backgroundColor: "transparent" }}  
                  id="outlined-multiline-flexible"
                  label=" "
                  placeholder=" "
                  value={REQUESTED_STANDARDS_FOR_EVALUATION_phase4} onChange={(e) => setREQUESTED_STANDARDS_FOR_EVALUATION_phase4(e.target.value,)}
                  fullWidth
                  multiline
                />
              </Grid>
             

                <Typography variant='caption' gutterBottom className={classes.MainHeadsing3a} style={{ color: "red" }}>
                  If available, please include a product brochure, spec. sheet, or link to your website for the product you would like evaluated.
                </Typography>

              
            </div>

          </Container>
          <Container maxWidth="lg" className={classes.centercontainer}>
            <Grid container spacing={3} direction="column" >
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={BackChange2} className={classes.rightbutton}>
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={Clickchange2} className={classes.leftbutton}>
                      Next
                    </Button>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>

        </> : null}

      </> : null}

      {Legend_3 ? <>
        {

          Phase5 ? <>

            <Container maxWidth="lg" className={classes.cardgrid}>
              <Grid container style={{ padding: '16px' }}>
                <Grid item xs={12}>
                  <Typography variant="h4" style={{ textAlign: 'center' }}>
                    Home Healthcare
                  </Typography>
                </Grid>
               
              </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   GENERAL PRODUCT SPECIFICATIONS  </Typography>


                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Product name and/or model #  :  " align="center" fullWidth value={Product_name_and_or_model_Phase_5} onChange={(e) => setProduct_name_and_or_model_Phase_5(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Type of equipment :    " align="center" fullWidth value={Type_of_equipment_Phase_5} onChange={(e) => setType_of_equipment_Phase_5(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="    Where is the equipment intended to be used?    " align="center" fullWidth value={Where_is_the_equipment_intended_be_used} onChange={(e) => setWhere_is_the_equipment_intended_be_used(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Does the equipment have wireless transmit capability?      " align="center" fullWidth value={Does_the_equipment_have_wireless_transmit_capability_Phase_6} onChange={(e) => setDoes_the_equipment_have_wireless_transmit_capability_Phase_6(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Equipment dimensions and weight :     " align="center" fullWidth value={Equipment_dimensions_and_weight} onChange={(e) => setEquipment_dimensions_and_weight(e.target.value)} className={classes.fullWidth1} />

                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} >      Relative Humidity Range (%):  </Typography>
                <Grid container justifyContent="center" >
                  <Grid item xs={12} sm={12} md={6} className={classes.grid}>
                    <div className={classes.textfield1} >
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Enter product classification :*" align="center" fullWidth value={Enter_product_classification} onChange={(e) => setEnter_product_classification(e.target.value)} className={classes.fullWidth} />
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Enter length of the product :" align="center" fullWidth value={Enter_length_of_the_product} onChange={(e) => setEnter_length_of_the_product(e.target.value)} className={classes.fullWidth} />
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="   Enter width of the product    :" align="center" fullWidth value={Enter_width_of_the_product} onChange={(e) => setEnter_width_of_the_product(e.target.value)} className={classes.fullWidth} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <div className={classes.textfield2} >
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}  style={{marginRight:"100px"}} size="small" label=" Enter height of the product  " align="center" fullWidth value={Enter_height_of_the_product} onChange={(e) => setEnter_height_of_the_product(e.target.value)} className={classes.fullWidth12} />
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="Enter weight of the product     " align="center" fullWidth value={Enter_weight_of_the_product} onChange={(e) => setEnter_weight_of_the_product(e.target.value)} className={classes.fullWidth12} />
                      <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label=" Transit Operable:    " align="center" fullWidth value={Transit_Operable} onChange={(e) => setTransit_Operable(e.target.value)} className={classes.fullWidth12} />
                    </div>
                  </Grid>
                </Grid>
              <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   GENERAL PRODUCT SPECIFICATIONS  </Typography>


                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="   Transport and Storage Between Uses " align="center" fullWidth value={Transport_and_S_rage_Between_Uses} onChange={(e) => setTransport_and_S_rage_Between_Uses(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="   Maximum Ambient Temperature (°C): " align="center" fullWidth value={Maximum_Ambient_Temperature} onChange={(e) => setMaximum_Ambient_Temperature(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="    Minimum Ambient Temperature (°C):" align="center" fullWidth value={Minimum_Ambient_Temperature} onChange={(e) => setMinimum_Ambient_Temperature(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="   Maximum Humidity (%): " align="center" fullWidth value={Maximum_Humidity} onChange={(e) => setMaximum_Humidity(e.target.value)} className={classes.fullWidth1} />
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" label="   Environmental Operating Conditions " align="center" fullWidth value={Environmental_Operating_Conditions_fortext} onChange={(e) => setEnvironmental_Operating_Conditions_fortext(e.target.value)} className={classes.fullWidth1} />
                <br />
                <br />

                <Grid container style={{ alignItems: 'flex-end' }}>
                  <Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
                    <Typography> Environmental Operating Conditions</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                    <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Environmental_Operating_Conditions} onChange={(e) => setEnvironmental_Operating_Conditions(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                  </Grid>
                </Grid>



                <Grid container style={{ alignItems: 'flex-end' }}>
                  <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                    <Typography>Ambient Temperature Range (°C):</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Ambient_Temperature_Range} onChange={(e) => setAmbient_Temperature_Range(e.target.value)} align="center" className={classes.fullWidth145} />
                  </Grid>
                  <Grid item xs={12} sm={1  } style={{ alignItems: "center" }}>
                    <Typography style={{ marginLeft: "0px" }}> to</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
                    <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Ambient_Temperature_Range1} onChange={(e) => setAmbient_Temperature_Range1(e.target.value)} align="center" className={classes.fullWidth145} />
                  </Grid>
                </Grid>






                <Grid container style={{ alignItems: 'flex-end' }}>
<Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
  <Typography > Relative Humidity Range (%):</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Relative_Humidity_Range} onChange={(e) => setRelative_Humidity_Range(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
<Grid item xs={12} sm={1} style={{ alignItems: "center" }}>
  <Typography style={{ marginLeft: "0px" }}> to</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Relative_Humidity_Range2} onChange={(e) => setRelative_Humidity_Range2(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
</Grid>
<Grid container style={{ alignItems: 'flex-end' }}>
<Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
  <Typography> Atmospheric Pressure Range (hPa):</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Atmospheric_Pressure_Range} onChange={(e) => setAtmospheric_Pressure_Range(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
<Grid item xs={12} sm={1} style={{ alignItems: "center" }}>
  <Typography style={{ marginLeft: "0px" }}> to</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Atmospheric_Pressure_Range3} onChange={(e) => setAtmospheric_Pressure_Range3(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
</Grid>
<br />
<br />
<Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   SUPPLY MAINS CONDITIONS      </Typography>
<Grid container style={{ alignItems: 'flex-end' }}>
<Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
  <Typography > Voltage Range (Vac):</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Voltage_Range1A} onChange={(e) => setVoltage_Range1A(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
<Grid item xs={12} sm={1} style={{ alignItems: "center" }}>
  <Typography style={{ marginLeft: "0px" }}> to</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Voltage_Range1B} onChange={(e) => setVoltage_Range1B(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
</Grid>
<Grid container style={{ alignItems: 'flex-end' }}>
<Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
  <Typography> Voltage Range (Vdc):</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Voltage_Range2A} onChange={(e) => setVoltage_Range2A(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
<Grid item xs={12} sm={1} style={{ alignItems: "center" }}>
  <Typography style={{ marginLeft: "0px" }}> to</Typography>
</Grid>
<Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Voltage_Range2B} onChange={(e) => setVoltage_Range2B(e.target.value)} align="center" className={classes.fullWidth145} />
</Grid>
</Grid>
</Container>
<Container maxWidth="lg" className={classes.centercontainer}>
<Grid container spacing={3} direction="column" >
<Grid item xs={12}>
<Grid container spacing={3}>
  <Grid item xs={6}>
    <Button variant="contained" color="secondary" onClick={BackChange3} className={classes.rightbutton}>
      Back
    </Button>
  </Grid>
  <Grid item xs={6}>
    <Button variant="contained" color="primary" onClick={Clickchange3} className={classes.leftbutton}>
      Next
    </Button>

  </Grid>
</Grid>
</Grid> 
</Grid>
            </Container>
          </> : null
        }
      </> : null}

      {Legend_4 ? <>
        {Phase6 ? <>
          <Container maxWidth="lg" className={classes.cardgrid}>
            <Grid container style={{ padding: '16px' }}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                  Laser Safety
                </Typography>
              </Grid>
             
            </Grid>
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >               <br />  </Typography>
            

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>Laser Manufacturer: </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Laser_Manufacturer} onChange={(e) => setLaser_Manufacturer(e.target.value)} align="center" className={classes.fullWidth125} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}> Laser Classification:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Laser_Classification} onChange={(e) => setLaser_Classification(e.target.value)} align="center" className={classes.fullWidth125} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Model Number: </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Model_Number_phase7} onChange={(e) => setModel_Number_phase7(e.target.value)} align="center" className={classes.fullWidth125} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>    FDA Accession Number:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={FDA_Accession_Number} onChange={(e) => setFDA_Accession_Number(e.target.value)} align="center" className={classes.fullWidth125} />
                </Grid>
              </Grid>

            
            <br />
            <br />
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   GENERAL PRODUCT SPECIFICATIONS  </Typography>
        
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={5} style={{ alignItems: "center" }}>
                  <Typography> Transport and Storage Between Uses </Typography>
                </Grid>
                <Grid item xs={12} sm={7} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   fullWidth size="small" value={Transport_and_Storage_Between_Uses} onChange={(e) => setTransport_and_Storage_Between_Uses(e.target.value)} align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}> 
                <Grid item xs={12} sm={5} style={{ alignItems: "center" }}>
                  <Typography> Cooling Means:</Typography>
                </Grid>
                <Grid item xs={12} sm={7} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   fullWidth size="small" value={Cooling_Means} onChange={(e) => setCooling_Means(e.target.value)} align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={5} style={{ alignItems: "center" }}>
                  <Typography> Gas Connection:</Typography>
                </Grid>
                <Grid item xs={12} sm={7} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   fullWidth size="small" value={Gas_Connection} onChange={(e) => setGas_Connection(e.target.value)} align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>

            
            <br />
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   GENERAL PRODUCT SPECIFICATIONS  </Typography>
            <Typography variant='caption' gutterBottom className={classes.MainHeading3a} style={{ }} >   Is the beam?      </Typography>
    

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ }}>
                  <Typography> Circular:</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{   }}> 
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Circular_1} onChange={(e) => setCircular_1(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>
                <Grid item xs={12} sm={3} style={{   }}>
                  <Typography> <span style={{ color: "red" }}>if yes</span>  Beam Diameter:</Typography>
                </Grid>
                <Grid item xs={12} sm={5} style={{  }}>
                  <TextField name="creator" fullWidth  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={if_yes_Beam_Diameter_1} onChange={(e) => setif_yes_Beam_Diameter_1(e.target.value)} align="center" className={classes.fullWidth1451} />

                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> Rectangular</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Rectangular_1} onChange={(e) => setRectangular_1(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> <span style={{ color: "red" }}>if yes</span>     Length :</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={if_yes_Length_1} onChange={(e) => setif_yes_Length_1(e.target.value)} align="center" className={classes.fullWidth1} />

                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "40px" }}>  Width :</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Width_1} onChange={(e) => setWidth_1(e.target.value)} align="center" className={classes.fullWidt} />

                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>  Wavelength:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Wavelength1} onChange={(e) => setWavelength1(e.target.value)} align="center" className={classes.fullWisdt} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>    Maximum Power:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Power1} onChange={(e) => setMaximum_Power1(e.target.value)} align="center" className={classes.fullWisdt} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Duty Cycle:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Duty_Cycle1} onChange={(e) => setDuty_Cycle1(e.target.value)} align="center" className={classes.fullWisdt} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>    Maximum Power:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Power_2} onChange={(e) => setMaximum_Power_2(e.target.value)} align="center" className={classes.fullWisdt} />
                </Grid>
              </Grid>
            
            <br />
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >   PULSUED LASERS      </Typography>
            <Typography variant='caption' gutterBottom className={classes.MainHeading3a} style={{ }} >   Is the beam?      </Typography>
         

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> Circular:</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Circular} onChange={(e) => setCircular(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> <span style={{ color: "red" }}>if yes</span>  Beam Diameter:</Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{ alignItems: "center" }}>
                  <TextField name="creator" fullWidth  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={if_yes_Beam_Diameter} onChange={(e) => setif_yes_Beam_Diameter(e.target.value)} align="center" className={classes.fulslWisdt} />

                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> Rectangular</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Rectangular} onChange={(e) => setRectangular(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography> <span style={{ color: "red" }}>if yes</span>     Length :</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={if_yes_Length_} onChange={(e) => setif_yes_Length_(e.target.value)} align="center" className={classes.fullWidsth145} />

                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "40px" }}>  Width :</Typography>
                </Grid>
                <Grid LASERS item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Width_} onChange={(e) => setWidth_(e.target.value)} align="center" className={classes.fullWidsth145} />

                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>  Wavelength:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Wavelength} onChange={(e) => setWavelength(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>    Maximum Energy:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Energy_1} onChange={(e) => setMaximum_Energy_1(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Repetition Rate:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Repetition_Rate} onChange={(e) => setRepetition_Rate(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>       Maximum Energy:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Energy} onChange={(e) => setMaximum_Energy(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Pulse Width:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Pulse_Width} onChange={(e) => setPulse_Width(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Duty Cycle:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}> 
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Duty_Cycle} onChange={(e) => setDuty_Cycle(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Maximum Power:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Power_3} onChange={(e) => setMaximum_Power_3(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px", color: "red" }}>  (If Maximum Energy is Not Known)</Typography>
                </Grid>
              </Grid>
        
            <br />
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} >  BEAM HAZARDS    </Typography>
         
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Optical Density for Laser Googles:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Optical_Density_for_Laser_Googles} onChange={(e) => setOptical_Density_for_Laser_Googles(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Beam Divergence:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Beam_Divergence} onChange={(e) => setBeam_Divergence(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>Maximum Permissible Exposure Limit:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Maximum_Permissible_Exposure_Limit} onChange={(e) => setMaximum_Permissible_Exposure_Limit(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Focal Distance:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Focal_Distance} onChange={(e) => setFocal_Distance(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Nominal Ocular Hazard Distance:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Nominal_Ocular_Hazard_Distance} onChange={(e) => setNominal_Ocular_Hazard_Distance(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Recommended Beam Dump:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Recommended_Beam_Dump} onChange={(e) => setRecommended_Beam_Dump(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
        
              
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ alignItems: "center"}} >   NON-BEAM HAZARDS        </Typography>

                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>


                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ alignItems: "center"}} >  SCOPE   </Typography>


                </Grid>

              </Grid>
                <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Toxin Hazards:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Toxin_Hazards} onChange={(e) => setToxin_Hazards(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Toxin_Hazards_scope} onChange={(e) => setToxin_Hazards_scope(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Carcinogens:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Carcinogens} onChange={(e) => setCarcinogens(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Carcinogens_scope} onChange={(e) => setCarcinogens_scope(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Flammable Gases:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Flammable_Gases} onChange={(e) => setFlammable_Gases(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Flammable_Gases_scope} onChange={(e) => setFlammable_Gases_scope(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>   Asphyxiation:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Asphyxiation} onChange={(e) => setAsphyxiation(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Asphyxiation_scope} onChange={(e) => setAsphyxiation_scope(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>    Explosion:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Explosion} onChange={(e) => setExplosion(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Explosion_scope} onChange={(e) => setExplosion_scope(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
    
            <br />
            
              
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>  </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} > PERSONAL PROTECTIVE EQUIPMENT     </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} > TYPE    </Typography>
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Coveralls:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Coveralls} onChange={(e) => setCoveralls(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Coveralls_type} onChange={(e) => setCoveralls_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>  Eye:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Eye} onChange={(e) => setEye(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Eye_type} onChange={(e) => setEye_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>Hearing:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Hearing} onChange={(e) => setHearing(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Hearing_type} onChange={(e) => setHearing_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>    Respirator:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Respirator} onChange={(e) => setRespirator(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Respirator_type} onChange={(e) => setRespirator_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>     SCBA:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={SCBA} onChange={(e) => setSCBA(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={SCBA_type} onChange={(e) => setSCBA_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>      Skin:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Skin} onChange={(e) => setSkin(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Skin_type} onChange={(e) => setSkin_type(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>

              </Grid>
          
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} > FIRE EXTINGUISHER  </Typography>

            
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>BCF Power:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={BCF_Power} onChange={(e) => setBCF_Power(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Foam:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Foam} onChange={(e) => setFoam(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>Carbon Dioxide:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Carbon_Dioxide} onChange={(e) => setCarbon_Dioxide(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Nitrogen:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Nitrogen} onChange={(e) => setNitrogen(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography>Dry Power:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Dry_Power} onChange={(e) => setDry_Power(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography style={{ marginLeft: "25px" }}>      Water:</Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Water_phase7} onChange={(e) => setWater_phase7(e.target.value)} align="center" className={classes.fullWidth14s5} />
                </Grid>
              </Grid>
        
            <br />
            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} > RECOMMENDED SAFE OPERATION INSTRUCTIONS FOR FIRING LASER </Typography>
           
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={12} style={{ alignItems: "center" }}>
                  <TextField name="creator" fulWidth multiline  variant="filled"   style={{ backgroundColor: "transparent" }}   placeholder='Enter here' size="large" value={Location} className={classes.fullWidsth14s5}  onChange={(e) => setLocation(e.target.value)} align="center" />
                </Grid>
              </Grid>
        




            <Typography variant='h6' gutterBottom className={classes.MainHeading3a} style={{ }} > DC USE </Typography>

    

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <Typography>Location:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Location} onChange={(e) => setLocation(e.target.value)} fullWidth align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <Typography> Laser Engineer Level:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Laser_Engineer_Level} onChange={(e) => setLaser_Engineer_Level(e.target.value)} fullWidth align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <Typography> Engineer:</Typography>
                </Grid>
                <Grid item xs={12} sm={6} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Engineer} onChange={(e) => setEngineer(e.target.value)} fullWidth align="center" className={classes.fullWidth1} />
                </Grid>


              </Grid>
        
            <br />
            <Typography variant='body1' gutterBottom className={classes.MainHeading3a} style={{ }} > DLSO SIGN OFF (REQUIRED FOR ALL CLASSES OF LASERS)   </Typography>
            <Container maxWidth="lg" className={classes.form}>

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography>Approved:</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Approved} onChange={(e) => setApproved(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Signature:</Typography>
                </Grid>
                <Grid item xs={12} sm={9} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Signature} onChange={(e) => setSignature(e.target.value)} multiline fullWidth align="center" className={classes.fullWidasth14s5} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Date:</Typography>
                </Grid>
                <Grid item xs={12} sm={9} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Date} onChange={(e) => setDate(e.target.value)} fullWidth align="center" className={classes.fullWidasth14s5} />
                </Grid>


              </Grid>
            </Container>
            <br />
            <Typography variant='body1' gutterBottom className={classes.MainHeading3a} style={{ }} >  CLSO SIGN OFF (REQUIRED FOR CLASS 3B & 4 LASERS) </Typography>
    

              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <Typography>Approved:</Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{ alignItems: "center" }}>
                  <span style={{ color: "black" }}>No</span> <Switch size="small" checked={Approved_1} onChange={(e) => setApproved_1(e.target.checked)} /><span style={{ color: "black" }}>Yes</span>
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Signature:</Typography>
                </Grid>
                <Grid item xs={12} sm={9} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Signature_1} onChange={(e) => setSignature_1(e.target.value)} multiline fullWidth align="center" className={classes.fullWidasth14s5} />
                </Grid>


              </Grid>
              <Grid container style={{ alignItems: 'flex-end' }}>
                <Grid item xs={12} sm={3} style={{ alignItems: "center" }}>
                  <Typography> Date:</Typography>
                </Grid>
                <Grid item xs={12} sm={9} style={{ alignItems: "center" }}>
                  <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" value={Date_1} onChange={(e) => setDate_1(e.target.value)} fullWidth align="center" className={classes.fullWidasth14s5} />
                </Grid>


              </Grid>
            
            <br />
            <Container maxWidth="lg" className={classes.centercontainer}>
              <Grid container spacing={3} direction="column" >
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" onClick={BackChange4} className={classes.rightbutton}>
                        Back
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" onClick={Clickchange4} className={classes.leftbutton}>
                        Next
                      </Button>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Container>

        </> : null}
      </> : null}
      {Legend_5 ? <>
        {Phase7 ? <>
          <Grid container style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ textAlign: 'center' }}>
                Ultrasound Probe
              </Typography>
            </Grid>
          
          </Grid>
          <Container maxWidth="lg" className={classes.form}>
            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >    GENERAL PRODUCT SPECIFICATIONS</Typography>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>   Probe Name :</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Probe_Name} onChange={(e) => setProbe_Name(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>     System Name  :</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={System_Name} onChange={(e) => setSystem_Name(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>      Pulse Type :</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Pulse_Type} onChange={(e) => setPulse_Type(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>      Acoustic Radiation Aperture:</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Acoustic_Radiation_Aperture} onChange={(e) => setAcoustic_Radiation_Aperture(e.target.value)} />
              </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >        CLASSIFICATION</Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>     Diameter (mm):</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Diameter} onChange={(e) => setDiameter(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>    Focal Location (mm):</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Focal_Location_phase7} onChange={(e) => setFocal_Location_phase7(e.target.value)} />
              </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >        RECTANGULAR APERATURES</Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>       Pitch (mm):</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Pitch} onChange={(e) => setPitch(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}>
                <Typography variant='body1' className={classes.heading}  ><b>     Elevation Height (mm):</b></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Elevation_Height} onChange={(e) => setElevation_Height(e.target.value)} />
              </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>     Evaluation Focal Location (mm):</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Evaluation_Focal_Location} onChange={(e) => setEvaluation_Focal_Location(e.target.value)} /> </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >          OTHER APERTURES</Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Description: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Description_phase_7} onChange={(e) => setDescription_phase_7(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Focal Location (mm):  </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Focal_Location} onChange={(e) => setFocal_Location(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Aperature Area (mm2):  </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Aperature_Area_1} onChange={(e) => setAperature_Area_1(e.target.value)} /> </Grid>
            </Grid>

            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >          SCANNING FORMAT  </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Lines per Image: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Lines_per_Image} onChange={(e) => setLines_per_Image(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Frame Rate: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Frame_Rate} onChange={(e) => setFrame_Rate(e.target.value)} /> </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >          SECTOR FORMAT    </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Scan Angle (deg): </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Scan_Angle_} onChange={(e) => setScan_Angle_(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b> ROC/Apex Distance (mm): </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={ROC_Apex_Distance} onChange={(e) => setROC_Apex_Distance(e.target.value)} /> </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >        LINEAR FORMAT  </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Scan Length (mm): </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Scan_Length} onChange={(e) => setScan_Length(e.target.value)} /> </Grid>
            </Grid>

            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >        PULSE TYPES (ADD ADDITIONAL ROWS IF NEEDED)    </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Number of Pulses Types:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Number_of_Pulses_Types} onChange={(e) => setNumber_of_Pulses_Types(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Description: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Description_phase_7_1} onChange={(e) => setDescription_phase_7_1(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Nominal Center Frequency (MHz):</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Nominal_Center_Frequency_} onChange={(e) => setNominal_Center_Frequency_(e.target.value)} /> </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >      ADDITIONAL INFORMATION FOR DOPPLER PULSE TYPES   </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Number of PW Gate Sizes:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Number_of_PW_Gate_Sizes} onChange={(e) => setNumber_of_PW_Gate_Sizes(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Range of PW Gate Sizes: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Range_of_PW_Gate_Sizes} onChange={(e) => setRange_of_PW_Gate_Sizes(e.target.value)} /> </Grid>
            </Grid>
            <br />

            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >      FOCAL LOCATIONS (ADD ADDITIONAL ROWS IF NEEDED </Typography>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b> Number of Focal Location:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Number_of_Focal_Location} onChange={(e) => setNumber_of_Focal_Location(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Number of Element Used: </b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Number_of_Element_Used} onChange={(e) => setNumber_of_Element_Used(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b> Focal Depth (mm):</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Focal_Depth} onChange={(e) => setFocal_Depth(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Aperature Area (mm2):</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Aperature_Area_2} onChange={(e) => setAperature_Area_2(e.target.value)} /> </Grid>
            </Grid>
            <br />
            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >       NOTES</Typography>

 
          

                <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="large" multiline   fullWidth className={classes.fullWidth1changqe} value={notes} onChange={(e) => setnotes(e.target.value)} /> 
            <br />

            <Container maxWidth="lg" className={classes.centercontainer}>
              <Grid container spacing={3} direction="column" >
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" onClick={BackChange5} className={classes.rightbutton}>
                        Back
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" onClick={Clickchange5} className={classes.leftbutton}>
                        Next
                      </Button>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>






          </Container>
        </> : null}
      </> : null}
      {Legend_6 ? <>
        {Phase8 ? <>
          <Grid container style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ textAlign: 'center' }}>
                X-Ray
              </Typography>
            </Grid>
         
          </Grid>
          <Container maxWidth="lg" className={classes.form}>
            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >        GENERAL X-RAY INFORMATION</Typography>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   X-Ray Source:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={X_Ray_Source} onChange={(e) => setX_Ray_Source(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Model Number:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Model_Number_phase_8_1} onChange={(e) => setModel_Number_phase_8_1(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Detector:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Detector} onChange={(e) => setDetector(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Model Number:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Model_Number_phase_8_2} onChange={(e) => setModel_Number_phase_8_2(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   HV Generator:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={HV_Generator} onChange={(e) => setHV_Generator(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>  Model Number:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Model_Number_phase_8_3} onChange={(e) => setModel_Number_phase_8_3(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b> X-Ray Type/Purpose:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={X_Ray_Type_Purpose} onChange={(e) => setX_Ray_Type_Purpose(e.target.value)} /> </Grid>
            </Grid>
            <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >      RECTANGULAR APERATURES</Typography>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>  Product:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Product_phase_8} onChange={(e) => setProduct_phase_8(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>  Model Number:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Model_Number_phase_4} onChange={(e) => setModel_Number_phase_4(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>  Ratings:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Ratings} onChange={(e) => setRatings(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b> Cooling Means:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Cooling_Means_} onChange={(e) => setCooling_Means_(e.target.value)} /> </Grid>
            </Grid>
            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
              <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>Gas Connection:</b></Typography></Grid>
              <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Gas_Connection_phase_8} onChange={(e) => setGas_Connection_phase_8(e.target.value)} /> </Grid>
            </Grid>

            <br />

            <Container maxWidth="lg" className={classes.centercontainer}>
              <Grid container spacing={3} direction="column" >
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" onClick={BackChange6} className={classes.rightbutton}>
                        Back
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary" onClick={Clickchange6} className={classes.leftbutton}>
                        Next
                      </Button>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </> : null}
      </> : null}
      {
        Legend_7 ? <>
          {Phase9 ? <>
            <Grid container style={{ padding: '16px' }}>
              <Grid item xs={12}>
                <Typography variant="h4" style={{ textAlign: 'center' }}>
                  Infusion Pump
                </Typography>
              </Grid>
             
            </Grid>


            <Container maxWidth="lg" className={classes.form}>
              <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >TYPE OF INFUSION PUMP</Typography>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Volumetric Infusion Pump:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={VolumetricInfusionPump} onChange={(e) => setVolumetricInfusionPump(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Drip-rate Infusion Pump:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Drip_rateInfusionPump} onChange={(e) => setDrip_rateInfusionPump(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Type 1 - Continuous Infusion Flow Only:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Type1_ContinuousInfusionFlowOnly} onChange={(e) => setType1_ContinuousInfusionFlowOnly(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Type 2 - Non-continuous Flow Only:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Type2_n_continuousFlowOnly} onChange={(e) => setType2_n_continuousFlowOnly(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Type 3 - Discrete Delivery of a Bolus:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Type3_DiscreteDeliveryofaBolus} onChange={(e) => setType3_DiscreteDeliveryofaBolus(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>Type 4 - Type 1 Combined With Type 3 and/or Type 2 in Same Equipment:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Type4_Type1CombinedWithType3and_orType2inSameEquipment} onChange={(e) => setType4_Type1CombinedWithType3and_orType2inSameEquipment(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={7} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Type 5 - Profile Pump:</b></Typography></Grid>
                <Grid item xs={12} sm={12} md={5}>  <span style={{ color: "black" }}  >No</span> <Switch size="small" checked={Type5_ProfilePump} onChange={(e) => setType5_ProfilePump(e.target.checked)} /><span style={{ color: "black" }}>Yes</span> </Grid>
              </Grid>
              <br />
              <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >FLOW RATE</Typography>

              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>      Minimum:   </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Minimum_phase_9} onChange={(e) => setMinimum_phase_9(e.target.value)} /> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Intermediate:     </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Intermediate_phase_9} onChange={(e) => setIntermediate_phase_9(e.target.value)} /> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>   Maximum:      </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Maximum_phase_9} onChange={(e) => setMaximum_phase_9(e.target.value)} /> </Grid>
              </Grid>
              <br />
              <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >BOLUS  </Typography>

              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Minimum:     </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Minimum_phase_9_2} onChange={(e) => setMinimum_phase_9_2(e.target.value)} /> </Grid>
              </Grid>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    Maximum:     </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={Maximum_phase_9_2} onChange={(e) => setMaximum_phase_9_2(e.target.value)} /> </Grid>
              </Grid>
              <Typography variant='h5' className={classes.headingchange} style={{ color: "#004580" }} >BOLUS  </Typography>
              <Grid container style={{ alignItems: "center", marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={5} className={classes.grid}><Typography variant='body1' className={classes.heading}  ><b>    No. of Infusion Sets Used With Equipment Under Test:   </b></Typography></Grid>
                <Grid item xs={12} sm={12} md={7}> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   size="small" align="center" fullWidth className={classes.fullWidth1change} label="Enter Here" value={ofInfusionSetsUsedWithEquipmentUnderTest} onChange={(e) => setofInfusionSetsUsedWithEquipmentUnderTest(e.target.value)} /> </Grid>
              </Grid>

              <Container maxWidth="lg" className={classes.centercontainer}>
                <Grid container spacing={3} direction="column" >
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Button variant="contained" color="secondary" onClick={BackChange8} className={classes.rightbutton}>
                          Back
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={Clickchange67} className={classes.leftbutton}>
                          Next
                        </Button>

                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <br />
              </Container>
            </Container>

          </> : null}
        </> : null

      }
      {Phase10 ? <>









        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom className={classes.MainHeading2}>
            Submit Your Quote Request
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Paper className={classes.Paper}>
            <form className={classes.form}>
              <Typography variant="body2" color="initial" style={{ textAlign: "center", color: "black" }}>Please use separate email accounts for each vendor to send the request.</Typography>

            </form>
          </Paper>
        </Container>
        <br />
        <Container maxWidth="lg" className={classes.centercontainer}>

          <Grid container style={{ alignItems: "center", marginTop: "20px" }}>

            <Grid item xs={12} sm={12} md={5}> <Typography variant="body2" style={{ color: "blue" }} >Email</Typography> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   value={to} onChange={(e) => setTo(e.target.value)} style={{ width: "500px" }} size="small" align="center" placeholder="To" fullWidth className={classes.fullWidth1change} label="" /> </Grid>
            <Grid item xs={12} sm={12} md={5}> <Typography variant="body2" style={{ color: "blue" }}>Email</Typography> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   value={cc} onChange={(e) => setCc(e.target.value)} size="small" align="center" placeholder="Cc" fullWidth className={classes.fullWidth1change} label="" /> </Grid>
            <Grid item xs={12} sm={12} md={2} className={classes.grid}>
              <Button variant="contained" style={{ color: "x", marginTop: "14px", marginLeft: "20px" }} onClick={SendEmail} endIcon={<SendIcon />}> Send </Button>
            </Grid>
          </Grid>
        </Container>

        {/* {user.map((user, index) => (
        <>
          <Container maxWidth="lg" className={classes.centercontainer}>

            <Grid container style={{ alignItems: "center", marginTop: "20px" }}>

              <Grid item xs={12} sm={12} md={5}> <Typography variant="body2" style={{ color: "blue" }} >Email</Typography> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   value={to} onChange={(e) => setTo(e.target.value)} style={{ width: "500px" }} size="small" align="center" placeholder="To" fullWidth className={classes.fullWidth1change} label="" /> </Grid>
              <Grid item xs={12} sm={12} md={5}> <Typography variant="body2" style={{ color: "blue" }}>Email</Typography> <TextField name="creator"  variant="filled"   style={{ backgroundColor: "transparent" }}   value={cc} onChange={(e) => setCc(e.target.value)} size="small" align="center" placeholder="Cc" fullWidth className={classes.fullWidth1change} label="" /> </Grid>
              <Grid item xs={12} sm={12} md={2} className={classes.grid}>
                <Button variant="contained" style={{ color: "x", marginTop: "14px", marginLeft: "20px" }} onClick={SendEmail} endIcon={<SendIcon />}> Send </Button>
              </Grid>
            </Grid>
          </Container>

        </>

      ))} */}

        {/* <IconButton aria-label="delete" size="small" className={classes.addmorebottom}>
        <Avatar sx={{ bgcolor: '#DDDDDD' }} onClick={addUser} className={classes.addmorebottomicon} onClick={SendEmail}  style={{ width: 24, height: 24, backgroundColor: "#DDDDDD", color: "black" }}>
          <AddIcon />
        </Avatar>
      </IconButton> */}
        <br />
        <br />

        <Container maxWidth="lg" className={classes.centercontainer}>
          <Grid container spacing={3} direction="column" >
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary" onClick={BackChange92} className={classes.rightbutton}>
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" onClick={Clickchange679} className={classes.leftbutton}>
                    Next
                  </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
        </Container>
      </> : null}


      <Footer />
    </div>
    <ToastContainer />

    </ThemeProvider>
  )
}

export default  New_Product_Evaluation 
 