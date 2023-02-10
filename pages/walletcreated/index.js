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
        <title>WalletCreated</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      <CloseIcon
        onClick={() => {
          window.location.href = "/dashboard";
        }}
        className="vrify-cancel-icon"
        sx={{ color: "white" }}
      />

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
            <img className="verify-pro-img-coin" src="/images/600.png" />
          </div>

          <div className="mobile-pro-view">
            <img className="verify-pro-img-coin" src="/images/600.png" />
          </div>
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12} style={{ padding: "40px" }}>
          <h1 className="wlt-connect-heading">Wallet connected!</h1>
          <p className="wallet-created-text">
            Play now with the chips you’ve earned
          </p>
          <span className="or">or</span>

          <p className="wlt-created-text2">Select your Avatar</p>

          <button
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            className="acc-created-btn"
          >
            Start Playing
          </button>
          <br />

          <Link href="/avatar">
            <a>
              <button className="slt-avt-btn2">Select your Avatar</button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountCreated;
