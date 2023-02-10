import { Container } from "@mui/system";
import React from "react";
import style from "./HomePageAssets.module.css";
import OurMissionCard from "./OurMissionCard";
const OurMission = ({viewMode}) => {
  return (
    <div className={viewMode?style.ourMission:style.ourMissionLight}>
      <Container>

      <div className={style.ourMissionTitle}>
      <h2 className={style.advgTextMob} style={{color:viewMode?"#44444":"#fffff"}}>Playing Virtue Poker Advantages</h2>
      <p style={{color:viewMode?"#BFBBBB":"#444444"}}>
      Our Mission is to offer the most engaging, innovative and secure online 
      </p>
      <p style={{color:viewMode?"#BFBBBB":"#444444"}}>
      gaming experience to all crypto, and poker communities
      </p>
      </div>
      <OurMissionCard viewMode={viewMode} />
      </Container>

    </div>
  );
};

export default OurMission;
