import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "../dashboard.module.css";
import { Grid } from "@mui/material";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../../../components/DashboardAssets/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import Head from "next/head";
import { ThemeContext } from "../../../contexts/theme-context";
import { Container } from "@mui/system";

const Nfts = () => {

  const dispatch = useDispatch();
   React.useEffect(() => {
      dispatch(fetchUsers());
  }, []);

   // FOR LIGHT THEME
   const { theme, setTheme } = React.useContext(ThemeContext);
   const [viewMode, setViewMode] = useState(theme);
   React.useEffect(() => {
     const getLocalTheme = localStorage.getItem("theme");
     setViewMode(getLocalTheme === "dark" ? true : false);
   }, [viewMode, theme]);

  return (
    <>
     <Head>
        <title>Nfts</title>
      </Head>
      <div className={viewMode?style.Nfts:style.NftsLight}>
   <Container>


      <Navbar viewMode={viewMode}/>
      <Sidebar viewMode={viewMode}/>
      <div className={style.NftsGrids}>
        <div className={viewMode?style.NftsHeader:style.NftsHeaderLight}>
          <div className={viewMode?style.NftsHeaderh2:style.NftsHeaderh2Light}>
            <img src="/assets/images/53489342(1).png" />
            <h2 >NFT Executive Summary</h2>
          </div>
          <p>
            This document is intended to define the scope of work with regards
            to Virtue’s NFT gamification. Virtue Poker will need assistance in
            the design, strategy, development, implementation and execution of
            several NFT “drops” over the ensuing months.
          </p>
        </div>
        <div className={viewMode?style.NftsBody:style.NftsBodylight}>
          <h3>Types of NFTs on Virtue</h3>
          <Grid
            container
            spacing={1}
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={4} sx={{
                cursor:"pointer",
                marginBottom:'2rem'
              }}>
              <Link href="/dashboard/Nfts/NftAvatars" >
                <img src="/assets/images/a052f9a1bbcc931a425a4db88d06d7e072d5b582 2.png" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                cursor:"pointer",
                marginBottom:'2rem'

              }}>
                <Link href="/dashboard/Nfts/NftUpgrade" >
              <img src="/assets/images/nft-drop 2.png" />
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} sx={{
                cursor:"pointer"
              }}>
                 <Link href="/dashboard/Nfts/NftCard" >

              <img src="/assets/images/nft-card 2.png" />
                 </Link>
            </Grid>
          </Grid>
        </div>
        <div className={viewMode?style.Nftfooter:style.NftfooterLight}>
          <h3>Goal</h3>
          <p>
            Design and implement three different classes of NFT avatars
            including all relevant assets and sales flows to add unique
            NFT-based gamification around Virtue planned re-launch in the fall
            2022.
          </p>
          <DownloadPlayButton
            title="Play Now"
            icon={faPlay}
            color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
          />
        </div>
      </div>
      </Container>
      <Footer viewMode={viewMode}/>
    </div>
    </>
    
  );
};

export default Nfts;
