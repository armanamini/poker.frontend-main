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
        <title>ProfileCompleted</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      <CloseIcon
        onClick={() => {
          router.push("/dashboard");
          // window.location.href = "/dashboard";
        }}
        className="vrify-cancel-icon"
        sx={{ color: "white" }}
      />

      <Grid container>
        <Grid
          className="grid-col-for-pro-img"
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
        >
          <div className="desktop-pro-view">
            <img
              className="verify-pro-img-acc"
              src="/images/pro-complete.png"
            />
          </div>

          <div className="mobile-pro-view">
            <img
              className="verify-pro-img-acc"
              src="/images/pro-complete-mobile.png"
            />
          </div>
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12} style={{ padding: "40px" }}>
          <h1 className="acc-created-headings">Profile Completed!</h1>
          <p className="acc-created-text">
            Play now with the chips you’ve earned
          </p>
          <span className="or">or</span>
          <p className="acc-created-text2">
            Earn <span style={{ fontWeight: "bold" }}>200 chips</span> by
            connecting your <span style={{ fontWeight: "bold" }}>Wallet</span>{" "}
            now
          </p>

          <button
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            className="acc-created-btn"
          >
            Continue
          </button>
          <div className="flex-links-acc">
            <Link href="/wallet">
              <a>
                <p className="wallet-link">Connect your wallet</p>
              </a>
            </Link>
            <span>or</span>
            <Link href="/avatar">
              <a>
                <p className="acc-avt">Select Avatar</p>
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountCreated;
