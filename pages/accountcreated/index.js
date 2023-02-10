import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const AccountCreated = () => {
  const router = useRouter();
  return (
    <div className="sign-up-form-container">
      <Head>
        <title>AccountCreated</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "35px",
        }}
      >
        <KeyboardArrowLeftIcon
          sx={{
            color: "white",
            border: "2px solid white",
            borderRadius: "100%",
            visibility: "hidden",
          }}
        />
        <CloseIcon
          onClick={() => {
            window.location.href = "/dashboard";
          }}
          sx={{ color: "white", cursor: "pointer" }}
        />
      </div>

      <Grid container>
        <Grid
          className="grid-col-for-pro-img-acc"
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <div className="desktop-pro-view">
            <img className="verify-pro-img-acc" src="/images/pro-acc.png" />
          </div>

          <div className="mobile-pro-view">
            <img
              className="verify-pro-img-acc"
              src="/images/pro-acc-mobile.png"
            />
          </div>
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12} style={{ padding: "40px" }}>
          <h1 className="acc-created-headings">Account Created!</h1>
          <p className="acc-created-text">
            Play now with the chips you’ve earned
          </p>
          <span className="or">or</span>
          <p className="acc-created-text2">
            Earn <span style={{ fontWeight: "bold" }}>350 chips</span> by
            completing your <span style={{ fontWeight: "bold" }}>Profile</span>{" "}
            now
          </p>

          <button
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            className="acc-created-btn"
          >
            PLAY NOW
          </button>
          <Link href="/completeprofile">
            <a>
              <p className="acc-cerated-link">Complete Profile</p>
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountCreated;
