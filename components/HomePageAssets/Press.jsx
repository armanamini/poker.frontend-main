import React from "react";
import style from "./HomePageAssets.module.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
const Press = ({viewMode}) => {
  return (
    <div className={viewMode? style.Press : style.PressLight}>
      <Container>
      <Grid container spacing={0}>
        <div className={style.PressTitle}>
          <h2 className={style.pressTextMob} style={{color:viewMode?"#ffffff":"#0E72CC"}}>Press</h2>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <div className={style.PressItem}>
              <img src="/assets/images/press1.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className={style.PressItem}>
              <img src="/assets/images/press2.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className={style.PressItem}>
              <img src="/assets/images/press3.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className={style.PressItem}>
              <img src="/assets/images/press3.png" alt="" />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={style.NewsLetter}>
            <div className={style.NewsLetterTitle}>
              <h2>Sign Up to our Newsletter to Receive Updates</h2>
            </div>
            <div className={style.NewsLetterForm}>
              <form>
              <input style={{padding:"20px"}} type="text" placeholder="Enter your email" />
              <select>
                <option value="">Country of citizenship</option>
                <option value="">India</option>
                <option value="">USA</option>
                <option value="">UK</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            </div>
          </div>
        </Grid>
      </Grid>
      </Container>

    </div>
  );
};

export default Press;
