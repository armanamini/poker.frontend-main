import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { useWeb3 } from "@3rdweb/hooks";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Wallet = () => {
  const router = useRouter();
  const { address, chainId, connectWallet } = useWeb3();

  const connectMetaHandler = () => {
    connectWallet("injected");
  };

  const connectAnyHandler = () => {
    connectWallet("walletconnect");
  };

  if (address) {
    fetch("https://vp.megaverse.today/api/v1/user/addWalletAddress", {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ walletAddress: address, kind: "metamask" }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `identifier ${localStorage.getItem("identifier")}`,
      },

      credentials: "include",
    })
      .then(async (res) => {
        console.log(await res.json());
        router.push("/walletcreated");
      })
      .catch((err) => {
        console.log(err);
      });

    // return(
    //   <div>
    //     <p>Address:{address}</p>
    //     <p>ChainId:{chainId}</p>

    //   </div>
    // )
  } else {
    return (
      <div className="sign-up-form-container">
        <Head>
          <title>Wallet</title>
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
          <Grid className="grid-col-for-pro-img" item lg={4} md={4} sm={12}>
            <div className="desktop-pro-view">
              <img className="verify-pro-img" src="/images/pro-wlt.png" />
            </div>

            <div className="mobile-pro-view">
              <img
                className="verify-pro-img"
                src="/images/pro-wlt-mobile.png"
              />
            </div>
          </Grid>

          <Grid item lg={8} md={8} sm={12}>
            <div className="wlt-flex">
              <img src="/images/wallet.png" />
              <p>My Wallet</p>
            </div>
            <p className="wallet-connect-text">Connect or create a wallet</p>
            <div className="wallet-container">
              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      <img src="/images/wlt.png" />
                    </div>
                    <p>Metamask</p>
                  </div>
                  <button onClick={connectMetaHandler} className="wlt-btn-cnt">
                    Connect
                  </button>
                </div>
              </div>
              <hr className="hr-wlt" />

              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      <img src="/images/wltc.png" />
                    </div>
                    <p>Walletconnect</p>
                  </div>
                  <button onClick={connectAnyHandler} className="wlt-btn-cnt">
                    Connect
                  </button>
                </div>
              </div>
              <hr className="hr-wlt" />

              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      {/* <img src="/images/wlt.png" /> */}
                    </div>
                    <p>Lorem</p>
                  </div>
                  <button className="wlt-btn-cnt">Connect</button>
                </div>
              </div>
              <hr className="hr-wlt" />

              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      {/* <img src="/images/wlt.png" /> */}
                    </div>
                    <p>Lorem</p>
                  </div>
                  <button className="wlt-btn-cnt">Connect</button>
                </div>
              </div>
              <hr className="hr-wlt" />

              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      {/* <img src="/images/wlt.png" /> */}
                    </div>
                    <p>Lorem</p>
                  </div>
                  <button className="wlt-btn-cnt">Connect</button>
                </div>
              </div>
              <hr className="hr-wlt" />

              <div className="wallet-item">
                <div className="wlt-with-btn-flex">
                  <div className="wlt-item-flex">
                    <div className="wallet-item-img-container">
                      {/* <img src="/images/wlt.png" /> */}
                    </div>
                    <p>Lorem</p>
                  </div>
                  <button className="wlt-btn-cnt">Connect</button>
                </div>
              </div>
              <hr className="hr-wlt" />
            </div>

            {/* {continiue ? (
              <button className="continue-btn-wlt">Continue</button>
            ) : (
              )} */}
            <button
              onClick={() => {
                router.push("/avatar");
              }}
              className="do-avt-btn"
            >
              Select your avatar
            </button>
            <br />
            <Link href="/dashboard">
              <a>
                <p className="wlt-avt">Do this later</p>
              </a>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Wallet;
