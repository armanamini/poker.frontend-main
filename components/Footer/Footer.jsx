import React from "react";
import style from "./Footer.module.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
const Footer = ({viewMode}) => {
  return (
    <footer className={viewMode?style.footer:style.footerLight}>
      <Container>
      <Grid
        container
    
        sx={{
          padding: "2rem ",
        }}
        className={style.footerContainer}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} >
            <ul className={viewMode?style.footerUl:style.footerUlLight}>
              <li>How to Play</li>
              <li>Who We Are</li>
              <li>Token Economy</li>
              <li>White Paper</li>
              <li>Latest</li>
              <li>Leaderboard Results</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <ul className={viewMode?style.footerUl:style.footerUlLight}>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>TResponsible Gaming</li>
              <li>Support</li>
              <li>Promotions</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={style.footerSocial}>
              <div className={style.footerSocialItem}>
                <img
                  src="/assets/images/mga-logo-8f27ad31a2bd3ff6185467ab68ee2205 1.png"
                  alt=""
                />
                <img
                  src="/assets/images/360_F_430543234_lHOesNmHAzJIrT6pNwt5rMRY2fXLcTPD 1.png"
                  alt=""
                />
                <img src="/assets/images/ecogra-adr 1.png" alt="" />
              </div>
              <div className={viewMode?style.footerSocialItemText:style.footerSocialItemTextLight}>
                <ul style={{marginTop:"30px",marginBottom:"20px"}}>
                  <li>Virtue Gaming Operations Limited.</li>
                  <li>Company registration number is C 89251.</li>
                  <li>License Number MGA/B2C/696/2019</li>
                  <li>
                    Level G, Quantum House, 75. Abate Rigord Street. Ta’ Xbiex
                    XBX 1120, Malta.
                  </li>
                </ul>
              </div>
              <div className={style.footerSocialItemIcon}>
                <a>
                  <img src="/assets/images/paper-planebl.svg" />
                </a>
                <a>
                  <img src="/assets/images/discord.svg" />
                </a>
                <a>
                  <img src="/assets/images/twitterbl.svg" />
                </a>
                <a>
                  <img src="/assets/images/instagrambl.svg" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
<div className={style.lineBreak}></div>
        <Grid item xs={12}>
          <div className={viewMode?style.footerText:style.footerTextLight}>
            <p>
              Online gaming is regulated in Malta by the Malta Gaming Authority.
            </p>
            <p>
              Virtue Gaming Operations Limited currently offers Sit and Go and
              Cash Game formats of NL Holde`&#39`m, PL Omaha, and NL Short Deck
              variants.
            </p>
            <p>
              <a style={{color:"#32E4BF"}} href="">Warning: Gambling can become an addiction.</a>
            </p>
            <p>Underage Gambling is prohibited.</p>
            <p>Powered by <span style={{color:"#32E4BF"}}>Autoaid</span></p>
          </div>
        </Grid>
      </Grid>
      </Container>

    </footer>
  );
};

export default Footer;
