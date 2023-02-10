import React, { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchUsers } from "../../../redux/counterSlice";
import Link from "next/link";
import Head from "next/head";
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ThemeContext } from "../../../contexts/theme-context";

const Finance = () => {
  const { user, loading } = useSelector((state) => state.counter);
  const [userDataa, setUserDataa] = React.useState("");

  const router = useRouter();

  useEffect(() => {
    setUserDataa(user?.user?.displayName);
    console.log(user);
  }, []);
  const dispatch = useDispatch();
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
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar viewMode={viewMode} />
      <Sidebar viewMode={viewMode} />
      <div className={viewMode?style.promo:style.promoLight}>
        <div className={style.promoHead}>
          <h2 className={style.myprofileMob} style={{color:viewMode?"white":"black"}}>My Profile</h2>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
            item
              md={6}
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
                  paddingRight: "20rem",
                }}
                className={style.BoxMobile}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    marginTop: "40px",
                    width: "380px",
                  }}
                  className={style.divvMobile}
                >
                  <h3 className={style.mobCNETER} style={{color:viewMode?"white":"black"}} >
                    {user?.user?.firstName} {user?.user?.lastName}
                  </h3>
                  <h3 className={style.mobCNETER} style={{ fontWeight: "bolder",fontSize:"20px", color: viewMode?"#32E4BF":"#0E72CC" }}>
                    {userDataa || user?.user?.displayName}
                  </h3>
                  <h3 className={style.mobCNETER} style={{color:viewMode?"white":"black"}}>email : {user?.user?.email}</h3>
                  <h3 className={style.mobCNETER} style={{color:viewMode?"white":"black"}}>Address : {user?.user?.address}</h3>
                  <h3 className={style.mobCNETER} style={{color:viewMode?"white":"black"}}>Country : {user?.user?.country}</h3>
                  <h3  className={style.ethADDmOB} style={{color:viewMode?"white":"black",width:"1000px"}} >
                    ETH wallet address  : {user?.wallet?.address}
                  </h3>
                  {/* <h3>@pokergirl2022</h3> */}
                </div>
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      className={style.avtImg}
                      alt="Remy Sharp"
                      src={user?.user?.avatar}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>

            <Grid
            item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: "10rem",
              }}
              className={style.flexBasisMob}
            >
              <div className={style.socials}>
                {user?.user?.telegram && (
                  <div className={viewMode?style.social:style.socialLight}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://t.me/${user?.user?.telegram}`}
                    >
                        <TelegramIcon sx={{color:viewMode?"black":"white"}}/>
                    </a>
                  </div>
                )}
                {user?.user?.discord && (
                  <div
                    style={{ backgroundColor: "#32E4BF" }}
                    className={viewMode?style.social:style.socialLight}
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://discord.com/${user?.user?.discord}`}
                    >
                      <img src="/assets/images/discord2.png" />
                    </a>
                  </div>
                )}

                {user?.user?.twitter && (
                  <div  className={viewMode?style.social:style.socialLight}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://twitter.com/${user?.user?.twitter}`}
                    >
                      <TwitterIcon sx={{color:viewMode?"black":"white"}}/>
                    </a>
                  </div>
                )}

                {user?.user?.instagram && (
                  <div className={viewMode?style.social:style.socialLight}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://instagram.com/${user?.user?.instagram}`}
                    >
                     <InstagramIcon sx={{color:viewMode?"black":"white"}}/>
                    </a>
                  </div>
                )}
                {user?.user?.instagram && (
                  <div className={viewMode?style.social:style.socialLight}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${user?.user?.personalWeb}`}
                    >
                      <LanguageIcon sx={{color:viewMode?"black":"white"}}/>
                    </a>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
          <p  style={{color:viewMode?"white":"black"}} className={style.profText}>
            {user?.user?.des || <span>you have no description</span>}
          </p>
          <div className={style.editProBtnMobile}>
          <Link href="./settings">
            <a style={{ marginLeft: "3rem" }}>
              <DownloadPlayButton
                title=" Edit Profile"
                color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                icon={faEdit}
                fSize="18px"
              />
            </a>
          </Link>
          </div>
     

          <h3 className={style.profHead}>My Wallet</h3>
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv}>
                <img src="/assets/images/eth-diamond-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>ETH</p>
                  <h2>{user?.transactions?.ethBalance}</h2>
                  <p
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    199.86 USD
                  </p>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Deposit
                  </button>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </Grid>
            {/* chips */}
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv4}>
                <img src="/assets/images/vp-icon-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>GOLD</p>
                  <h2>{user?.transactions?.goldBalance}</h2>
                  <p
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    199.86 USD
                  </p>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Deposit
                  </button>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </Grid>

            {/* end chips */}
            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv3}>
                <img src="/assets/images/vp-icon-black 1.png" />
                <div className={style.promoheadDivimg}>
                  <p>VPP</p>
                  <h2>{user?.transactions?.vppBalance}</h2>
                  <p
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    199.86 USD
                  </p>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Deposit
                  </button>
                  <button
                    style={{ visibility: "hidden" }}
                    className={style.promoBtn}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className={style.promoheadDiv2}>
                <img src="/assets/images/poker-chip-1 1.png" />
                <div
                  style={{ paddingBottom: "59px" }}
                  className={style.promoheadDivimg}
                >
                  <p>CHIPS</p>
                  <h2>{user?.transactions?.chipsBalance}</h2>
                  <p
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    199.86 USD
                  </p>
                  {/* <button className={style.promoBtn}>Deposit</button>
                  <button className={style.promoBtn}>Withdraw</button> */}
                </div>
              </div>
            </Grid>
          </Grid>
          {/* <Grid sx={{marginTop:"2rem"}} container>
            <Grid xs={3}>
              <div className={style.myStatsDiv}>
                <h3>195</h3>
                <p>Games Played</p>
              </div>
            </Grid>
            <Grid xs={3}>
              <div className={style.myStatsDiv}>
                <h3>195</h3>
                <p>Games Played</p>
              </div>
            </Grid>
            <Grid xs={3}>
              <div className={style.myStatsDiv}>
                <h3>195</h3>
                <p>Games Played</p>
              </div>
            </Grid>
            <Grid xs={3}>
              <div className={style.myStatsDiv}>
                <h3>195</h3>
                <p>Games Played</p>
              </div>
            </Grid>
          </Grid> */}
          {/* <DownloadPlayButton
          style={{marginTop:"3rem"}}
            title=" eye View More"
            color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
            icon={faEye}
          /> */}
          <Grid sx={{ marginTop: "7rem" }} container>
            <Grid xs={12}>
              <div className={style.The_GlobalDiv}>
                <div
                  style={{
                    marginLeft: "-31rem",
                    marginTop: "2rem",
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
                    size="30%"
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
      </div>
      <Footer viewMode={viewMode} />
    </>
  );
};

export default Finance;
