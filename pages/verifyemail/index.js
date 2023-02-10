import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import ReactInputVerificationCode from "react-input-verification-code";
import axios from "axios";
import toast from "react-hot-toast";
import Head from "next/head";

const VerifyEmail = () => {
  const [value, setValue] = useState("");
  const clearValue = () => setValue("");
  const router = useRouter();

// disabling back btn in browser
  useEffect(() => { 
    if (router.asPath === '/?step=2') {
      window.onpopstate = () => { 
        history.go(1);
      };
    }
  }, [router]);
  //

  // FUNCTION FOR RESEND EMAIL CODE VRF
  const resendCodeHandler = () => {
    axios
      .get("https://vp.megaverse.today/api/v1/auth/reSendEmail", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => {
        res.status === 200
          ? toast.success(res.data.message)
          : toast.error("Error");
        console.log(res);
      })
      .catch((error) => {});
  };

  // SUBMITFORM HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    // WITH FETCH
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `identifier ${localStorage.getItem("identifier")}`
    );
    var raw = JSON.stringify({
      emailCode: value,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };
    fetch("https://vp.megaverse.today/api/v1/auth/verifyEmail", {
      ...requestOptions,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        result.success
          ? toast.success(result.message)
          : toast.error(result.message);
        result.success ? router.push("/accountcreated") : null;
        document.cookie = `verify=${result.verify}`
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });

    setValue("");
  };

  const wrongEmailHandler = ()=>{
    const token = document?.cookie;
    const verify = document?.cookie;
    document.cookie = `identifier=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `verify=${verify}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    localStorage.removeItem("identifier");
   window.location.href="/signup"
 

  }

  return (
    <div className="sign-up-form-container" style={{ paddingBottom: "5rem" }}>
      <Head>
        <title>VerifyEmail</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      <CloseIcon className="vrify-cancel-icon" sx={{ color: "white" }} />
      {/* <KeyboardArrowLeftIcon
        className="vrify-back-icon"
        sx={{ color: "white" }}
      /> */}
      <Grid container>
        <Grid className="grid-col-for-pro-img" item lg={4} md={4} sm={12}>
          <div className="desktop-pro-view">
            <img className="verify-pro-img" src="/images/pro.png" />
          </div>

          <div className="mobile-pro-view">
            <img className="verify-pro-img" src="/images/pro-mobile.png" />
          </div>
        </Grid>

        <Grid item lg={8} md={8} sm={12}>
          <h1 className="verify-headings">Verify email</h1>
          <p className="verify-text">
            You should receive an email from us with a verification code
          </p>

          <p className="verify-enter-code">Enter code:</p>

          <form onSubmit={submitHandler}>
            <div className="custom-styles">
              <ReactInputVerificationCode
                onChange={setValue}
                value={value}
                length={5}
              />
            </div>

            <div className="text-box-email">
              <div>
                <p className="vrify-email-resend-text">
                  Not seeing your verification code?
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <CachedIcon sx={{ color: "white", fontSize: "25px" }} />
                <div onClick={resendCodeHandler}>
                  <Link href="#">
                    <a>
                      <span className="new-code-email">Send New Code</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <p className="emailWrongText">If your email does <span style={{color:"red"}}>not exist</span> click <span className="here" onClick={wrongEmailHandler}>here</span> to change your email address</p>
         

            <button type="submit" className="verify-email-btn">
              Verify
            </button>
          </form>
        
        </Grid>
      </Grid>
    </div>
  );
};

export default VerifyEmail;
