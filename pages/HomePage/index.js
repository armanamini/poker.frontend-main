import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import style from "./HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import DownloadPlayButton from "../../components/DownloadPlayButton";
import EveryonePlaysTogether from "../../components/HomePageAssets/EveryonePlaysTogether";
import GrowyourCryptoStack from "../../components/HomePageAssets/GrowyourCryptoStack.";
import OurMission from "../../components/HomePageAssets/OurMission";
import WhyPlayatVirtuePoker from "../../components/HomePageAssets/WhyPlayatVirtuePoker";
import CryptoCurrencies from "../../components/HomePageAssets/CryptoCurrencies";
import Press from "../../components/HomePageAssets/Press";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/counterSlice";
import { Container } from "@mui/system";
import { ThemeContext } from "../../contexts/theme-context";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import Image from "next/image";




const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.counter);

    // for loading
    const [loadingg, setLoadingg] = useState(false);
    React.useEffect(() => {
      setTimeout(() => setLoadingg(true), 1000);
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
     <div style={{opacity:loadingg?"1":"0"}} > <Navbar/></div>
      <div className={viewMode ? style.header  : style.headerLight}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "8rem",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: "center",
                  marginTop:"5rem"
                }}
              >
                <div className={style.headerTitle}>
                  <span
                    style={{
                      color: viewMode ? "black" : "white",
                      backgroundColor: viewMode ? "#32E4BF" : "#0E72CC",
                    }}
                  >
                    Play
                  </span>
                  <span style={{ color: viewMode ? "white" : "black" }}>
                    {" "}
                    Poker with Crypto in
                  </span>
                  <span style={{ color: viewMode ? "#32E4BF" : "#0E72CC" }}>
                    Metaverse!
                  </span>
                </div>

                <div className={style.headerH2Title}>
                  <h2 style={{ color: viewMode ? "white" : "#161616" }}>
                  The Global home of play to earn metaverse poker.
                  </h2>
                  <p style={{ color: viewMode ? "#BFBBBB" : "#444444" }}>
                  Playing poker online is fun, but playing it with your friends in the 
                  </p>
                  <p style={{ color: viewMode ? "#BFBBBB" : "#444444" }}>
                  metaverse is more enjoyable!
                  </p>
                  <Link href="/dashboard">
                    <a>
                      <DownloadPlayButton
                        title="Play Now"
                        icon={faPlay}
                        color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                        
                      />
                    </a>
                  </Link>
                  <p
                    style={{
                      color: viewMode ? "#BFBBBB" : "#444444",
                 
                    }}
                    className={style.playNowChips}
                  >
                    Play now, and well give you 600 FREE chips to start earning crypto!
                  </p>
                </div>
              </Grid>
            </Grid>
            
            <Grid item xs={12}>
              <div className={style.imageContainer}>
                {/* <figure className={style.headerImage}></figure> */}
                {/* <img className={style.pokerrrTable} src="/assets/images/pokerTable.png"/> */}
                <Image src="/assets/images/pokerTable.png" width={1090} height={760}/>

              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ScrollToTop/>

      <EveryonePlaysTogether viewMode={viewMode} />
      <GrowyourCryptoStack viewMode={viewMode} />
      <OurMission viewMode={viewMode} />
      <WhyPlayatVirtuePoker viewMode={viewMode} />
      <CryptoCurrencies viewMode={viewMode} />
      <Press viewMode={viewMode} />
      <Footer viewMode={viewMode} />
    </>
  );
};

export default HomePage;
