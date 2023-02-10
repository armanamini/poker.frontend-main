import React from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import style from "../../pages/HomePage/HomePage.module.css";
import GroweyourCryptoStackCard from "./GrowyourCryptoStackCard";
import DownloadPlayButton from "../DownloadPlayButton";
import { Container } from "@mui/system";
const GrowyourCryptoStack = ({ viewMode }) => {
  return (
    <div
      className={
        viewMode ? style.growyourCryptoStack : style.growyourCryptoStackLight
      }
    >
      <Container>
        <div className={style.bodyH2}>
          <h2 className={style.mainTodayTextMob} style={{ color: viewMode ? "#FFFFFF" : "#0E72CC" }}>
            Play virtue poker for free,<br/> and start earning crypto today!
          </h2>
          {/* <h2  style={{color:viewMode?"#FFFFFF":"#0E72CC"}}></h2> */}
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              color: viewMode ? "#BFBBBB" : "#444444",
              marginTop: "5px",
            }}
          >
            All players can get started for free to start building their crypto
            stack
          </p>
        </div>
        <Grid
          container
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
          className={style.growyourCryptoStackGrid}
        >
          <Grid item xs={12} sm={12} md={6}>
            <div className={style.mtMob}>
              <GroweyourCryptoStackCard
                title="Download and Register"
                description="Download our software and create an account by following the
        instructions."
                image="assets/images/2022-08-01_1029441.png"
                color="linear-gradient(126.77deg, #32e4bf 0.57%, #00d1ff 99.42%)"
              />

              <GroweyourCryptoStackCard
                title="Earn $GOLD"
                description="Compete to earn $GOLD in weekly challenges in our free-to-play chips tables. Players can also earn $GOLD through their play on ETH tables."
                image="assets/images/2022-08-01_1029442.png"
                color="linear-gradient(126.77deg, #32e4bf 0.57%, #00d1ff 99.42%)"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                marginTop: "15rem",
              }}
            >
              <GroweyourCryptoStackCard
                title="Get a Free Bankroll"
                description="All new players who sign-up will receive a free 500 chip bankroll to get started."
                image="assets/images/2022-08-01_1029443.png"
                color="linear-gradient(126.77deg, #F93BFD 0.57%, #FCB97F 99.42%)"
              />

              <GroweyourCryptoStackCard
                title="Play $GOLD Games or Redeem Cash"
                description="Players can play in $GOLD table games or redeem their $GOLD tokens for USDT at the end of the promotion."
                image="assets/images/2022-08-01_1029444.png"
                color="linear-gradient(126.77deg, #F93BFD 0.57%, #FCB97F 99.42%)"
              />
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "-5rem",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5rem",
          }}
          className={style.btnbtn}
        >
          <div
            style={{
              marginRight: "0.5rem",
            }}
          >
            <DownloadPlayButton
              title="Play for FREE!"
              icon={faPlay}
              color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
            />
          </div>
          <div
            style={{
              marginLeft: "0.5rem",
            }}
            className={style.mlMob}
          >
            <DownloadPlayButton
              title="Learn More"
              icon={faFileAlt}
              color="linear-gradient(91.6deg, #f93bfd 0%, #fcb97f 99.75%)"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GrowyourCryptoStack;
