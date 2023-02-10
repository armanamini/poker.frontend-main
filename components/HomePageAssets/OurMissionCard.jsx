import React from "react";
import style from "./HomePageAssets.module.css";
import Grid from "@mui/material/Grid";
import Vector1 from "../../public/assets/svg/Vector1";
import Ellipse4 from "../../public/assets/svg/Ellipse4";
import Vector2 from "../../public/assets/svg/Vector2";
import MaskGroup from "../../public/assets/svg/MaskGroup";
import Vector3 from "../../public/assets/svg/Vector3";
const OurMissionCard = ({ viewMode }) => {
  return (
    <Grid
      container
      sx={{
        padding: "4rem 0",
      }}
      spacing={3}
      className={style.ourMissionCardContainer}
    >
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <div
          className={
            viewMode ? style.ourMissionCard : style.ourMissionCardLight
          }
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden !important",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              height:'120px'
            }}
          >
            <Vector1 />
          </div>
          <div className={style.ourMissionCardHeader}>
            <h2 style={{ color: viewMode ? "#FFFFFF" : "#020202" }}>
              Play & Earn Crypto
            </h2>
            <p>
              Play poker with various cryptocurrencies in a reliable and secure
              ecosystem, earn $GOLD, and cash out crypto immediately.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <div
          className={
            viewMode ? style.ourMissionCard : style.ourMissionCardLight
          }
        >
          <div
            style={{
              position: "relative",
              //   right: "-10%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height:'120px'
            }}
          >
            <p>Q1</p>
            <Ellipse4 />
          </div>
          <div className={style.ourMissionCardHeader}>
            <h2 style={{ color: viewMode ? "#FFFFFF" : "#020202" }}>
            Online Poker for Real Money
            </h2>
            <p>
            You can earn cryptocurrencies that are accessible across multiple popular blockchain networks and trade for fiat money easily.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <div
          className={
            viewMode ? style.ourMissionCard : style.ourMissionCardLight
          }
        >
          <div
            style={{
              position: "relative",
              //   right: "-10%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height:'120px'
            }}
          >
            <p>Q2</p>
            <Vector2 />
          </div>
          <div className={style.ourMissionCardHeader}>
            <h2 style={{ color: viewMode ? "#FFFFFF" : "#020202" }}>
            Play in Metaverse
            </h2>

            <p>
            Metaverse Poker: Play poker in Metaverse and compete against your friends and people from all over the world in a 3-D virtual world in Decentraland
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <div
          className={
            viewMode ? style.ourMissionCard : style.ourMissionCardLight
          }
        >
          <div
            style={{
              position: "relative",
              //   overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height:'120px'
            }}
          >
            <p>Q3/Q4</p>
            <MaskGroup />
          </div>
          <div className={style.ourMissionCardHeader}>
            <h2 style={{ color: viewMode ? "#FFFFFF" : "#020202" }}>
            NFT Avatars
            </h2>
            <p>
            You can mint your own NFT avatar to boost your P2E earnings and enjoy your customized playing experience.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <div
          className={
            viewMode ? style.ourMissionCard : style.ourMissionCardLight
          }
        >
          <div
            style={{
              position: "relative",
              //   overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height:'120px'
            }}
          >
            <p>Q4</p>
            <Vector3 />
          </div>
          <div className={style.ourMissionCardHeader}>
            <h2 style={{ color: viewMode ? "#FFFFFF" : "#020202" }}>
              Private Networks
            </h2>
            <p>
              Become a host, build your own private network, and invite players
              to join your exclusive games.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default OurMissionCard;
