import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "./promotion.module.css";
import { Button, Container, Grid } from "@mui/material";
import Footer from "../../../components/DashboardAssets/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import axios from "axios";
import FormDialog from "../../../components/popup/Popup";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { ThemeContext } from "../../../contexts/theme-context";


const Finance = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const [userToken, setUserToken] = React.useState();
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

       // FOR LIGHT THEME
       const { theme, setTheme } = React.useContext(ThemeContext);
       const [viewMode, setViewMode] = useState(theme);
       
       useEffect(() => {
         const getLocalTheme = localStorage.getItem("theme");
         setViewMode(getLocalTheme === "dark" ? true : false);
       }, [viewMode, theme]);
     
       //

  //  getting chips eth gold and vpp
  useEffect(() => {
    axios
      .get("https://vp.megaverse.today/api/v1/user/me", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => {
        setData(res.data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://vp.megaverse.today/api/v1/user/me", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => {
        setUserToken(res.data);
        dispatch(fetchUsers());
        console.log(userToken, "Tokens");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>
      <Navbar viewMode={viewMode} />
      <Sidebar viewMode={viewMode} />

      <div className={viewMode?style.promo:style.promoLight}>
        <Container>

        <div className={style.promoHead}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv}>
                <img src="/assets/images/eth-diamond-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>ETH</p>
                  <h2>{userToken?.transactions?.ethBalance}</h2>
                  {/* <p>199.86 USD</p> */}
                  <button className={style.promoBtn}>
                    <FormDialog />
                  </button>
                  <button className={style.promoBtn}>Withdraw</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv2}>
                <img src="/assets/images/poker-chip-1 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>CHIPS</p>
                  <h2>{userToken?.transactions?.chipsBalance}</h2>

                  {/* <p>199.86 USD</p> */}
                  <button className={style.promoBtn}>
                    <FormDialog />
                  </button>
                  <button className={style.promoBtn}>Withdraw</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv3}>
                <img src="/assets/images/vp-icon-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>VPP</p>
                  <h2>{userToken?.transactions?.vppBalance}</h2>

                  {/* <p>199.86 USD</p> */}
                  <button className={style.promoBtn}>
                    <FormDialog />
                  </button>
                  <button className={style.promoBtn}>Withdraw</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv4}>
                <img src="/assets/images/vp-icon-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>GOLD</p>

                  <h2>{userToken?.transactions?.goldBalance}</h2>

                  {/* <p>199.86 USD</p> */}
                  <button className={style.promoBtn}>
                    <FormDialog />
                  </button>
                  <button className={style.promoBtn}>Withdraw</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div> 

        <div className={style.Games_performance}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={viewMode?style.promoBodyDiv:style.promoBodyDivLight}>
                <img src={viewMode?"/assets/images/image 1.png":"/assets/images/lightsta.png"} />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={viewMode?style.promoBodyDiv:style.promoBodyDivLight}>
                <img src={viewMode?"/assets/images/image 2.png":"/assets/images/lightline.png"} />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={style.The_Global}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={style.The_GlobalDiv}>
                <div
                  style={{
                    marginLeft: "-20rem",
                    marginTop: "-3rem",
                  }}
                >
                  <h3>The Global Home of Web 3.0 Poker</h3>
                  <p>
                    Were building the most diverse selection of Web 3.0 poker
                    games. Powered
                  </p>
                  <p>
                    by a Global Network of Players. Play for free and start
                    earning today.
                  </p>
                  <DownloadPlayButton
                    title="Play Now"
                    size="35%"
                    icon={faPlay}
                    color="#20212C"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "-5rem",
                    right: "0",
                  }}
                >
                  <img src="/assets/images/ivey-background 2.png" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        
      </Container>
      </div>

      <Footer viewMode={viewMode}  />
    </>
  );
};

export default Finance;
