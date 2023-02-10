import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "./promotion.module.css";
import { Button, Grid } from "@mui/material";
import Footer from "../../../components/DashboardAssets/Footer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import Tooltip from "@mui/material/Tooltip";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { useFormik, Field, useFormikContext, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Head from "next/head";
import { ThemeContext } from "../../../contexts/theme-context";

// countries
const selectOptions = [
  { value: "AD", label: "Andorra", phone: "376" },
  {
    value: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { value: "AF", label: "Afghanistan", phone: "93" },
  {
    value: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { value: "AI", label: "Anguilla", phone: "1-264" },
  { value: "AL", label: "Albania", phone: "355" },
  { value: "AM", label: "Armenia", phone: "374" },
  { value: "AO", label: "Angola", phone: "244" },
  { value: "AQ", label: "Antarctica", phone: "672" },
  { value: "AR", label: "Argentina", phone: "54" },
  { value: "AS", label: "American Samoa", phone: "1-684" },
  { value: "AT", label: "Austria", phone: "43" },
  {
    value: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { value: "AW", label: "Aruba", phone: "297" },
  { value: "AX", label: "Alland Islands", phone: "358" },
  { value: "AZ", label: "Azerbaijan", phone: "994" },
  {
    value: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { value: "BB", label: "Barbados", phone: "1-246" },
  { value: "BD", label: "Bangladesh", phone: "880" },
  { value: "BE", label: "Belgium", phone: "32" },
  { value: "BF", label: "Burkina Faso", phone: "226" },
  { value: "BG", label: "Bulgaria", phone: "359" },
  { value: "BH", label: "Bahrain", phone: "973" },
  { value: "BI", label: "Burundi", phone: "257" },
  { value: "BJ", label: "Benin", phone: "229" },
  { value: "BL", label: "Saint Barthelemy", phone: "590" },
  { value: "BM", label: "Bermuda", phone: "1-441" },
  { value: "BN", label: "Brunei Darussalam", phone: "673" },
  { value: "BO", label: "Bolivia", phone: "591" },
  { value: "BR", label: "Brazil", phone: "55" },
  { value: "BS", label: "Bahamas", phone: "1-242" },
  { value: "BT", label: "Bhutan", phone: "975" },
  { value: "BV", label: "Bouvet Island", phone: "47" },
  { value: "BW", label: "Botswana", phone: "267" },
  { value: "BY", label: "Belarus", phone: "375" },
  { value: "BZ", label: "Belize", phone: "501" },
  {
    value: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    value: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    value: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    value: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    value: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { value: "CH", label: "Switzerland", phone: "41" },
  { value: "CI", label: "Cote d'Ivoire", phone: "225" },
  { value: "CK", label: "Cook Islands", phone: "682" },
  { value: "CL", label: "Chile", phone: "56" },
  { value: "CM", label: "Cameroon", phone: "237" },
  { value: "CN", label: "China", phone: "86" },
  { value: "CO", label: "Colombia", phone: "57" },
  { value: "CR", label: "Costa Rica", phone: "506" },
  { value: "CU", label: "Cuba", phone: "53" },
  { value: "CV", label: "Cape Verde", phone: "238" },
  { value: "CW", label: "Curacao", phone: "599" },
  { value: "CX", label: "Christmas Island", phone: "61" },
  { value: "CY", label: "Cyprus", phone: "357" },
  { value: "CZ", label: "Czech Republic", phone: "420" },
  {
    value: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { value: "DJ", label: "Djibouti", phone: "253" },
  { value: "DK", label: "Denmark", phone: "45" },
  { value: "DM", label: "Dominica", phone: "1-767" },
  {
    value: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { value: "DZ", label: "Algeria", phone: "213" },
  { value: "EC", label: "Ecuador", phone: "593" },
  { value: "EE", label: "Estonia", phone: "372" },
  { value: "EG", label: "Egypt", phone: "20" },
  { value: "EH", label: "Western Sahara", phone: "212" },
  { value: "ER", label: "Eritrea", phone: "291" },
  { value: "ES", label: "Spain", phone: "34" },
  { value: "ET", label: "Ethiopia", phone: "251" },
  { value: "FI", label: "Finland", phone: "358" },
  { value: "FJ", label: "Fiji", phone: "679" },
  {
    value: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    value: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { value: "FO", label: "Faroe Islands", phone: "298" },
  {
    value: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { value: "GA", label: "Gabon", phone: "241" },
  { value: "GB", label: "United Kingdom", phone: "44" },
  { value: "GD", label: "Grenada", phone: "1-473" },
  { value: "GE", label: "Georgia", phone: "995" },
  { value: "GF", label: "French Guiana", phone: "594" },
  { value: "GG", label: "Guernsey", phone: "44" },
  { value: "GH", label: "Ghana", phone: "233" },
  { value: "GI", label: "Gibraltar", phone: "350" },
  { value: "GL", label: "Greenland", phone: "299" },
  { value: "GM", label: "Gambia", phone: "220" },
  { value: "GN", label: "Guinea", phone: "224" },
  { value: "GP", label: "Guadeloupe", phone: "590" },
  { value: "GQ", label: "Equatorial Guinea", phone: "240" },
  { value: "GR", label: "Greece", phone: "30" },
  {
    value: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { value: "GT", label: "Guatemala", phone: "502" },
  { value: "GU", label: "Guam", phone: "1-671" },
  { value: "GW", label: "Guinea-Bissau", phone: "245" },
  { value: "GY", label: "Guyana", phone: "592" },
  { value: "HK", label: "Hong Kong", phone: "852" },
  {
    value: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { value: "HN", label: "Honduras", phone: "504" },
  { value: "HR", label: "Croatia", phone: "385" },
  { value: "HT", label: "Haiti", phone: "509" },
  { value: "HU", label: "Hungary", phone: "36" },
  { value: "ID", label: "Indonesia", phone: "62" },
  { value: "IE", label: "Ireland", phone: "353" },
  { value: "IL", label: "Israel", phone: "972" },
  { value: "IM", label: "Isle of Man", phone: "44" },
  { value: "IN", label: "India", phone: "91" },
  {
    value: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { value: "IQ", label: "Iraq", phone: "964" },
  {
    value: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { value: "IS", label: "Iceland", phone: "354" },
  { value: "IT", label: "Italy", phone: "39" },
  { value: "JE", label: "Jersey", phone: "44" },
  { value: "JM", label: "Jamaica", phone: "1-876" },
  { value: "JO", label: "Jordan", phone: "962" },
  {
    value: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { value: "KE", label: "Kenya", phone: "254" },
  { value: "KG", label: "Kyrgyzstan", phone: "996" },
  { value: "KH", label: "Cambodia", phone: "855" },
  { value: "KI", label: "Kiribati", phone: "686" },
  { value: "KM", label: "Comoros", phone: "269" },
  {
    value: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    value: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { value: "KR", label: "Korea, Republic of", phone: "82" },
  { value: "KW", label: "Kuwait", phone: "965" },
  { value: "KY", label: "Cayman Islands", phone: "1-345" },
  { value: "KZ", label: "Kazakhstan", phone: "7" },
  {
    value: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { value: "LB", label: "Lebanon", phone: "961" },
  { value: "LC", label: "Saint Lucia", phone: "1-758" },
  { value: "LI", label: "Liechtenstein", phone: "423" },
  { value: "LK", label: "Sri Lanka", phone: "94" },
  { value: "LR", label: "Liberia", phone: "231" },
  { value: "LS", label: "Lesotho", phone: "266" },
  { value: "LT", label: "Lithuania", phone: "370" },
  { value: "LU", label: "Luxembourg", phone: "352" },
  { value: "LV", label: "Latvia", phone: "371" },
  { value: "LY", label: "Libya", phone: "218" },
  { value: "MA", label: "Morocco", phone: "212" },
  { value: "MC", label: "Monaco", phone: "377" },
  {
    value: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { value: "ME", label: "Montenegro", phone: "382" },
  {
    value: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { value: "MG", label: "Madagascar", phone: "261" },
  { value: "MH", label: "Marshall Islands", phone: "692" },
  {
    value: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { value: "ML", label: "Mali", phone: "223" },
  { value: "MM", label: "Myanmar", phone: "95" },
  { value: "MN", label: "Mongolia", phone: "976" },
  { value: "MO", label: "Macao", phone: "853" },
  {
    value: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { value: "MQ", label: "Martinique", phone: "596" },
  { value: "MR", label: "Mauritania", phone: "222" },
  { value: "MS", label: "Montserrat", phone: "1-664" },
  { value: "MT", label: "Malta", phone: "356" },
  { value: "MU", label: "Mauritius", phone: "230" },
  { value: "MV", label: "Maldives", phone: "960" },
  { value: "MW", label: "Malawi", phone: "265" },
  { value: "MX", label: "Mexico", phone: "52" },
  { value: "MY", label: "Malaysia", phone: "60" },
  { value: "MZ", label: "Mozambique", phone: "258" },
  { value: "NA", label: "Namibia", phone: "264" },
  { value: "NC", label: "New Caledonia", phone: "687" },
  { value: "NE", label: "Niger", phone: "227" },
  { value: "NF", label: "Norfolk Island", phone: "672" },
  { value: "NG", label: "Nigeria", phone: "234" },
  { value: "NI", label: "Nicaragua", phone: "505" },
  { value: "NL", label: "Netherlands", phone: "31" },
  { value: "NO", label: "Norway", phone: "47" },
  { value: "NP", label: "Nepal", phone: "977" },
  { value: "NR", label: "Nauru", phone: "674" },
  { value: "NU", label: "Niue", phone: "683" },
  { value: "NZ", label: "New Zealand", phone: "64" },
  { value: "OM", label: "Oman", phone: "968" },
  { value: "PA", label: "Panama", phone: "507" },
  { value: "PE", label: "Peru", phone: "51" },
  { value: "PF", label: "French Polynesia", phone: "689" },
  { value: "PG", label: "Papua New Guinea", phone: "675" },
  { value: "PH", label: "Philippines", phone: "63" },
  { value: "PK", label: "Pakistan", phone: "92" },
  { value: "PL", label: "Poland", phone: "48" },
  {
    value: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { value: "PN", label: "Pitcairn", phone: "870" },
  { value: "PR", label: "Puerto Rico", phone: "1" },
  {
    value: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { value: "PT", label: "Portugal", phone: "351" },
  { value: "PW", label: "Palau", phone: "680" },
  { value: "PY", label: "Paraguay", phone: "595" },
  { value: "QA", label: "Qatar", phone: "974" },
  { value: "RE", label: "Reunion", phone: "262" },
  { value: "RO", label: "Romania", phone: "40" },
  { value: "RS", label: "Serbia", phone: "381" },
  { value: "RU", label: "Russian Federation", phone: "7" },
  { value: "RW", label: "Rwanda", phone: "250" },
  { value: "SA", label: "Saudi Arabia", phone: "966" },
  { value: "SB", label: "Solomon Islands", phone: "677" },
  { value: "SC", label: "Seychelles", phone: "248" },
  { value: "SD", label: "Sudan", phone: "249" },
  { value: "SE", label: "Sweden", phone: "46" },
  { value: "SG", label: "Singapore", phone: "65" },
  { value: "SH", label: "Saint Helena", phone: "290" },
  { value: "SI", label: "Slovenia", phone: "386" },
  {
    value: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { value: "SK", label: "Slovakia", phone: "421" },
  { value: "SL", label: "Sierra Leone", phone: "232" },
  { value: "SM", label: "San Marino", phone: "378" },
  { value: "SN", label: "Senegal", phone: "221" },
  { value: "SO", label: "Somalia", phone: "252" },
  { value: "SR", label: "Suriname", phone: "597" },
  { value: "SS", label: "South Sudan", phone: "211" },
  {
    value: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { value: "SV", label: "El Salvador", phone: "503" },
  {
    value: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    value: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { value: "SZ", label: "Swaziland", phone: "268" },
  {
    value: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { value: "TD", label: "Chad", phone: "235" },
  {
    value: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { value: "TG", label: "Togo", phone: "228" },
  { value: "TH", label: "Thailand", phone: "66" },
  { value: "TJ", label: "Tajikistan", phone: "992" },
  { value: "TK", label: "Tokelau", phone: "690" },
  { value: "TL", label: "Timor-Leste", phone: "670" },
  { value: "TM", label: "Turkmenistan", phone: "993" },
  { value: "TN", label: "Tunisia", phone: "216" },
  { value: "TO", label: "Tonga", phone: "676" },
  { value: "TR", label: "Turkey", phone: "90" },
  {
    value: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { value: "TV", label: "Tuvalu", phone: "688" },
  {
    value: "TW",
    label: "Taiwan, Province of China",
    phone: "886",
  },
  {
    value: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { value: "UA", label: "Ukraine", phone: "380" },
  { value: "UG", label: "Uganda", phone: "256" },
  {
    value: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { value: "UY", label: "Uruguay", phone: "598" },
  { value: "UZ", label: "Uzbekistan", phone: "998" },
  {
    value: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    value: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { value: "VE", label: "Venezuela", phone: "58" },
  {
    value: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    value: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { value: "VN", label: "Vietnam", phone: "84" },
  { value: "VU", label: "Vanuatu", phone: "678" },
  { value: "WF", label: "Wallis and Futuna", phone: "681" },
  { value: "WS", label: "Samoa", phone: "685" },
  { value: "XK", label: "Kosovo", phone: "383" },
  { value: "YE", label: "Yemen", phone: "967" },
  { value: "YT", label: "Mayotte", phone: "262" },
  { value: "ZA", label: "South Africa", phone: "27" },
  { value: "ZM", label: "Zambia", phone: "260" },
  { value: "ZW", label: "Zimbabwe", phone: "263" },
];

//

const validationSchema = Yup.object({
  // email: Yup.string()
  //   .required("Email is required")
  //   .email("Invalid Email Format"),
  // // firstName: Yup.string()
  // //   .required("Name is reqiured")
  // //   .max(12, "Name length is not valid"),
  // // lastName: Yup.string()
  // //   .required("Name is reqiured")
  // //   .max(12, "Name length is not valid"),
  // displayName: Yup.string()
  //   .required("Name is reqiured")
  //   .max(12, "Name length is not valid"),
  //   password: Yup.string()
  //   .required("Password is required")
  //   .min(8, "Password length is not valid")
  //   .matches(
  //     /^(?=.*[A-Z]).(?=.*[a-z]).(?=.*[0-9]).(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/,
  //     "Invalid format"
  //   ),
  //   rePassword: Yup.string()
  //   .required("Confirm password is reqiured")
  //   .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Finance = () => {
  const [myValues, setMyValues] = useState(null);

  // redux
  const { user, loading } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //end redux

  // formik
  const initialValues = {
    firstName: ``,
    lastName: "",
    displayName: "",
    email: "",
    des: "",
    personalWeb: "",
    discord: "",
    twitter: "",
    telegram: "",
    instagram: "",
    currentPassword: "",
    password: "",
    rePassword: "",
    address: "",
    country: "",
  };

  useEffect(() => {
    setMyValues(user?.user);
  }, [user]);

  const onSubmit = (values) => {
    const result = {};
    Object.entries(values).forEach((key) => {
      const last = key[key.length - 1];
      if (last.length !== 0) result[key[0]] = last;
    });

    const {
      email,
      displayName,
      firstName,
      lastName,
      des,
      personalWeb,
      discord,
      twitter,
      telegram,
      instagram,
      currentPassword,
      password,
      rePassword,
      address,
      country,
    } = result;
    // console.log(email,firstName,lastName,displayName);
    axios
      .put(
        "https://vp.megaverse.today/api/v1/user/updateProfile",
        {
          email,
          displayName,
          firstName,
          lastName,
          des,
          personalWeb,
          discord,
          twitter,
          telegram,
          instagram,
          currentPassword,
          password,
          rePassword,
          address,
          country,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `identifier ${localStorage.getItem("identifier")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, {
          duration: 4000,
          icon: "👏",
        });
        dispatch(fetchUsers());
      })
      .catch((err) => {
        console.log(err);

        const result = err?.response?.data?.data;
        if (Array.isArray(result)) {
          result.forEach((e) => toast.error(e));
          return;
        }
        console.log(result);

        toast.error(err?.response?.data?.message, {
          duration: 4000,
          icon: "👎",
        });
      });
  };

     // FOR LIGHT THEME
     const { theme, setTheme } = React.useContext(ThemeContext);
     const [viewMode, setViewMode] = useState(theme);
     useEffect(() => {
       const getLocalTheme = localStorage.getItem("theme");
       setViewMode(getLocalTheme === "dark" ? true : false);
     }, [viewMode, theme]);
   
     //

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Navbar viewMode={viewMode} />
      <Sidebar viewMode={viewMode} />
      <Formik
        initialValues={myValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <div className={viewMode?style.promo:style.promoLight}>
                <div className={style.promoHead}>
                  <h2 style={{color:viewMode ? "white":"black"}}>Settings</h2>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          flexGrow: 0,
                          display: "flex",
                          flexDirection: "row-reverse",
                          color: "white",
                          // paddingRight: "20rem",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <IconButton sx={{ p: 0, pr: 2 }}>
                            <Avatar
                              alt="Remy Sharp"
                              src={user?.user?.avatar}
                              style={{
                                width: "130px",
                                height: "auto",
                              }}
                              className={style.avtMobuke}
                            />
                          </IconButton>

                          <h3 style={{ marginRight: "10px",color:viewMode?"white":"black" }}>Welcome</h3>
                          <h3 style={{ color: viewMode?"#1CD6CE":"#0E72CC", fontSize: "20px" }}>
                            {user?.user?.displayName}
                          </h3>
                        </div>
                      </Box>
                    </Grid>
                    <Grid
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingLeft: "10rem",
                      }}
                    >
                      {/* <DownloadPlayButton
                    title="change Avatar"
                    color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                  /> */}
                    </Grid>
                  </Grid>
                </div>

                {/* form */}

                <div className={style.myStats}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>First Name</label>
                        <input
                          name="firstName"
                          className={
                            formik.errors.firstName && formik.touched.firstName
                              ? `${style.myStatsInputerror}`
                              : `${style.myStatsInput}`
                          }
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          type="text"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.firstName &&
                          formik.touched.firstName && (
                            <div style={{ color: "red" }}>
                              {formik.errors.firstName}
                            </div>
                          )}
                      </div>
                    </Grid>

                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>Last Name</label>
                        <input
                          name="lastName"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          className={
                            formik.errors.lastName && formik.touched.lastName
                              ? `${style.myStatsInputerror}`
                              : `${style.myStatsInput}`
                          }
                          type="text"
                        />
                        {formik.errors.lastName && formik.touched.lastName && (
                          <div style={{ color: "red" }}>
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div className={style.Games_performance}>
                  <Grid container>
                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          Email Address
                        </label>
                        <input
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          className={
                            formik.errors.email && formik.touched.email
                              ? `${style.myStatsInputerror}`
                              : `${style.myStatsInput}`
                          }
                          type="email"
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          ِDisplayName
                        </label>
                        <input
                          name="displayName"
                          value={formik.values.displayName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          className={
                            formik.errors.displayName &&
                            formik.touched.displayName
                              ? `${style.myStatsInputerror}`
                              : `${style.myStatsInput}`
                          }
                          type="text"
                        />
                        {formik.errors.displayName &&
                          formik.touched.displayName && (
                            <div style={{ color: "red" }}>
                              {formik.errors.displayName}
                            </div>
                          )}
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div className={style.The_Global}>
                  <Grid container>
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className={style.inputControl}
                        style={{
                          marginRight: "30px",
                        }}
                      >
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          Description
                        </label>
                        <textarea
                        style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          name="des"
                          value={formik.values.des}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={
                            formik.errors.des && formik.touched.des
                              ? `${style.myStatsTextAreaError}`
                              : `${style.myStatsTextArea}`
                          }
                          type="text"
                        />
                        {formik.errors.des && formik.touched.des && (
                          <div style={{ color: "red" }}>
                            {formik.errors.des}
                          </div>
                        )}
                      </div>
                    </Grid>

                    {/* address */}

                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className={style.inputControl}
                        style={{
                          marginRight: "30px",
                        }}
                      >
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>Address</label>
                        <textarea
                        style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          name="address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={
                            formik.errors.address && formik.touched.address
                              ? `${style.myStatsTextAreaError}`
                              : `${style.myStatsTextArea}`
                          }
                          type="text"
                        />
                        {formik.errors.address && formik.touched.address && (
                          <div style={{ color: "red" }}>
                            {formik.errors.address}
                          </div>
                        )}
                      </div>
                    </Grid>

                    {/* end address */}
                    <div className={style.Games_performance}>
                      <Grid container>
                        <Grid
                          xs={6}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem",
                          }}
                        >
                          {/* <div
                            className={style.inputControl}
                            style={{
                              marginRight: "27rem",
                            }}
                          >
                            <label className={style.myStatsLabel}>
                              Personal Web
                            </label>
                            <input
                              name="personalWeb"
                              value={formik.values.personalWeb}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={
                                formik.errors.personalWeb &&
                                formik.touched.personalWeb
                                  ? `${style.myStatsInputerror}`
                                  : `${style.myStatsInput}`
                              }
                              type="text"
                            />
                            {formik.errors.personalWeb &&
                              formik.touched.personalWeb && (
                                <div style={{ color: "red" }}>
                                  {formik.errors.personalWeb}
                                </div>
                              )}
                          </div> */}
                        </Grid>

                        {/* country*/}
                        <Grid
                          xs={6}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem",
                          }}
                        >
                          {/* <div>
                            <label className="signup-form__label">
                              Country:
                            </label>
                            <select
                              className={
                                formik.errors.country && formik.touched.country
                                  ? "signup-form_inputError"
                                  : "signup-form__input"
                              }
                              placeholder="Country of origin"
                              onBlur={formik.handleBlur}
                              value={formik.values.country}
                              onChange={formik.handleChange}
                              name="country"
                            >
                              {selectOptions.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                            {formik.errors.country &&
                              formik.touched.country && (
                                <div className="error-signup">
                                  {formik.errors.country}
                                </div>
                              )}
                          </div> */}
                        </Grid>

                        {/* end country */}
                      </Grid>
                    </div>
                  </Grid>
                </div>







                <div className={style.Games_performance}>
                  <Grid container alignItems="center">
                    <Grid xs={12} md={6}>
                    <div
                            className={style.inputControl}
                            style={{
                              marginRight: "0rem",
                            }}
                          >
                            <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                              Personal Web
                            </label>
                            <input
                            style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                              name="personalWeb"
                              value={formik.values.personalWeb}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={
                                formik.errors.personalWeb &&
                                formik.touched.personalWeb
                                  ? `${style.myStatsInputerror}`
                                  : `${style.myStatsInput}`
                              }
                              type="text"
                            />
                            {formik.errors.personalWeb &&
                              formik.touched.personalWeb && (
                                <div style={{ color: "red" }}>
                                  {formik.errors.personalWeb}
                                </div>
                              )}
                          </div>
                    </Grid>

                    <Grid xs={12} md={6}>
                    <div>
                            <label className="signup-form__label">
                              Country:
                            </label>
                            <select
                            style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                             className={
                              formik.errors.country &&
                              formik.touched.country
                                ? `${style.myStatsInputerror}`
                                : `${style.myStatsInput}`
                            }
                              placeholder="Country of origin"
                              onBlur={formik.handleBlur}
                              value={formik.values.country}
                              onChange={formik.handleChange}
                              name="country"
                            >
                              {selectOptions.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                            {formik.errors.country &&
                              formik.touched.country && (
                                <div className="error-signup">
                                  {formik.errors.country}
                                </div>
                              )}
                          </div>
                    


                    </Grid>
                  </Grid>
                </div>






                <div className={style.Games_performance}>
                  <Grid container>
                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                      <label style={{marginLeft:"50px"}} className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                              Discord
                            </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img className={style.imgHidden} src={viewMode?"/assets/images/discord.svg":"/assets/images/discordbl.svg"} />
                       
                          <input
                          style={{width: "350px ",backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                            name="discord"
                            value={formik.values.discord}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                              formik.errors.discord && formik.touched.discord
                                ? `${style.myStatsInputerror}`
                                : `${style.myStatsInput}`
                            }
                            type="text"
                          
                          />
                        </div>
                        {formik.errors.discord && formik.touched.discord && (
                          <div style={{ color: "red", marginLeft: "5.2rem" }}>
                            {formik.errors.discord}
                          </div>
                        )}
                        <label className={style.myStatsLabel2}>
                          Enter your Discord user#id
                        </label>
                      </div>
                    </Grid>

                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                      <label style={{marginLeft:"50px"}} className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                      Telegram
                            </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img className={style.imgHidden} src={viewMode?"/assets/images/paper-plane.svg":"/assets/images/paper-planebl.svg"} />

                          <input
                          style={{width: "350px ",backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                            name="telegram"
                            value={formik.values.telegram}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                              formik.errors.telegram && formik.touched.telegram
                                ? `${style.myStatsInputerror}`
                                : `${style.myStatsInput}`
                            }
                            type="text"
                         
                          />
                        </div>
                        {formik.errors.telegram && formik.touched.telegram && (
                          <div style={{ color: "red", marginLeft: "5.2rem" }}>
                            {formik.errors.telegram}
                          </div>
                        )}
                        <label className={style.myStatsLabel2}>
                          Enter your Telegram account id
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </div>




























             

                <div className={style.Games_performance}>
                  <Grid container>
                    <Grid xs={12} md={6}>
                    <label style={{marginLeft:"50px"}} className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                    Twitter
                            </label>
                      <div className={style.inputControl}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img className={style.imgHidden} src={viewMode?"/assets/images/twitter.svg":"/assets/images/twitterbl.svg"} />

                          <input
                          style={{ width: "350px ",backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                            name="twitter"
                            value={formik.values.twitter}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                              formik.errors.twitter && formik.touched.twitter
                                ? `${style.myStatsInputerror}`
                                : `${style.myStatsInput}`
                            }
                          
                            type="text"
                          />
                        </div>
                        {formik.errors.twitter && formik.touched.twitter && (
                          <div style={{ color: "red", marginLeft: "5.2rem" }}>
                            {formik.errors.twitter}
                          </div>
                        )}
                        <label className={style.myStatsLabel2}>
                          Enter your Twitter Handle
                        </label>
                      </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                      <div className={style.inputControl}>
                      <label style={{marginLeft:"50px"}} className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                      Instagram
                            </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img className={style.imgHidden} src={viewMode?"/assets/images/instagram.svg":"/assets/images/instagrambl.svg"} />

                          <input
                          style={{width:"350px",backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                            name="instagram"
                            value={formik.values.instagram}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                              formik.errors.instagram &&
                              formik.touched.instagram
                                ? `${style.myStatsInputerror}`
                                : `${style.myStatsInput}`
                            }
                            type="text"
                         
                          />
                        </div>
                        {formik.errors.instagram &&
                          formik.touched.instagram && (
                            <div style={{ color: "red", marginLeft: "5.2rem" }}>
                              {formik.errors.instagram}
                            </div>
                          )}
                        <label className={style.myStatsLabel2}>
                          Enter your Instagram account id
                        </label>
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <div
                  className={style.Games_performance}
                  style={{
                    marginLeft: "-1rem",
                  }}
                >
                  <Grid container>
                    <Grid xs={12} sm={6} md={4}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          Current Password
                        </label>
                        <input
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          name="currentPassword"
                          value={formik.values.currentPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={
                            formik.errors.currentPassword &&
                            formik.touched.currentPassword
                              ? `${style.myStatsInputError}`
                              : `${style.myStatsInput3}`
                          }
                          type="text"
                        />
                      </div>
                      {formik.errors.currentPassword &&
                        formik.touched.currentPassword && (
                          <div style={{ color: "red", marginLeft: "4.5rem" }}>
                            {formik.errors.currentPassword}
                          </div>
                        )}
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          New Password
                        </label>
                        <input
                         style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={
                            formik.errors.password && formik.touched.password
                              ? `${style.myStatsInputError}`
                              : `${style.myStatsInput3}`
                          }
                          type="text"
                        />
                      </div>
                      {formik.errors.password && formik.touched.password && (
                        <div style={{ color: "red", marginLeft: "4.5rem" }}>
                          {formik.errors.password}
                        </div>
                      )}
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                      <div className={style.inputControl}>
                        <label className={viewMode?style.myStatsLabel:style.myStatsLabelLight}>
                          Re-enter New Password
                        </label>
                        <input
                          style={{backgroundColor:viewMode?"#303140":"#F0EFEF",color:viewMode?"white":"black"}}
                          name="rePassword"
                          value={formik.values.rePassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={
                            formik.errors.rePassword &&
                            formik.touched.rePassword
                              ? `${style.myStatsInputError}`
                              : `${style.myStatsInput3}`
                          }
                          type="text"
                        />
                      </div>
                      {formik.errors.rePassword &&
                        formik.touched.rePassword && (
                          <div style={{ color: "red", marginLeft: "4.5rem" }}>
                            {formik.errors.rePassword}
                          </div>
                        )}
                    </Grid>
                  </Grid>
                </div>
                <div className={style.Games_performance}>
                  <Grid container>
                    <Grid
                      xs={12}
                      sx={{
                        display: "flex",
                        // marginLeft: "36rem",
                      }}
                      item
                    >
                      <DownloadPlayButton
                        title="Update"
                        color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                        type="submit"
                      />
                    </Grid>
                  </Grid>
                </div>

                {/* form */}
              </div>
            </Form>
          );
        }}
      </Formik>
      <Footer viewMode={viewMode}  />
    </>
  );
};

export default Finance;
