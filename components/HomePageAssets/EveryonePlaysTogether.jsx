import React from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import style from "../../pages/HomePage/HomePage.module.css";
import DownloadPlayButton from "../DownloadPlayButton";
import { Container } from "@mui/system";

const EveryonePlaysTogether = ({viewMode}) => {
  return (
    <div className={viewMode?style.body:style.bodyLight}>
      <Container>
        <div className={style.bodyH2}>
          <h2 className={style.eranTextMobile} style={{color:viewMode?"white":"#0E72CC",marginBottom:"-5rem"}}>Play and Earn Real Money</h2>
      
        </div>
        <Grid
          container
          spacing={2}
          style={{
            paddingLeft: "4rem",
            paddingRight: "4rem",
          }}
          className={style.eptcontainer}
        >
          <Grid item xs={12} sx={{marginBottom:"-5rem"}}>
            <div className={viewMode?style.bodyCard:style.bodyCardLight}>
              <div className={style.bodyCardHeader}>
                <Grid
                  item
                  xs={10}
                  sm={6}
                  sx={{
                    position: "relative",
                  }}
                >
                  <div className={style.bodyCardHeaderImage}>
                    <img src="assets/images/cardImage.png" alt="poker" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <div className={style.bodyCardAvatar}>
                    <img style={{marginTop:"20px"}} src="assets/images/NFT-Untitled-2.png" alt="poker" />
                    <div className={style.bodyCardAvatarTitle}>
                      <h3 className={style.playFiatMobile} style={{color:viewMode?"#ffffff":"#444444",marginBottom:"20px"}}>Play Fiat</h3>
                      <button style={{padding:"10px 20px"}}>Available to All Players</button>
                    </div>
                  </div>
                  <div className={style.bodyCardAvatarTitleParagraph}>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>Free to Play</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>check Receive 500 FREE Chips upon sign-up</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                          marginBottom:"25px"
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>
                        check Play to earn more $GOLD tokens by competing in
                        weekly challenges.
                      </p>
                    </div>
                  </div>
                  <div style={{marginTop:"-13px"}} className={style.DownloadPlayButton}>
                    <a>
                      <DownloadPlayButton
                        title="play Now "
                        icon={faPlay}
                        color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                      />
                    </a>
                  </div>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{
            paddingLeft: "4rem",
            paddingRight: "4rem",
            paddingBottom: "10rem",
            paddingTop:'10rem'
          }}
          className={style.eptcontainer}
        >
          <Grid item xs={12}>
            <div className={viewMode?style.bodyCard:style.bodyCardLight}>
              <div
                className={`${style.bodyCardHeader} ${style.bodyCardHeader2}`}
              >
                <Grid item xs={12} md={12} lg={6} >
                  <div
                    className={`${style.bodyCardAvatar} ${style.bodyCardAvatar2}`}
                    style={{
                      paddingLeft: "2rem",
                    }}
                  >
                    <img style={{marginTop:"20px"}} src="assets/images/NFT-Untitled-1.png" alt="poker" />
                    <div className={style.bodyCardAvatarTitle}>
                      <h3 className={style.playFiatMobile} style={{color:viewMode?"#ffffff":"#444444",marginBottom:"20px"}}>Play Crypto</h3>
                      <button
                        style={{
                          padding: "0 1rem",
                        }}
                      >
                        Available in Licensed Markets
                      </button>
                    </div>
                  </div>
                  <div
                    className={style.bodyCardAvatarTitleParagraph}
                    style={{
                      paddingLeft: "2rem",
                    }}
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>Receive our $GOLD token deposit bonus</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>Compete in ETH table games to earn more $GOLD</p>
                    </div>
                    <div style={{marginTop:"-5px"}}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#32E4BF",
                          marginRight: "0.5em",
                        }}
                      />
                      <p style={{color:viewMode?"#D7D7D7":"#444444"}}>Deposit and withdraw using ETH</p>
                    </div>
                  </div>
                  <div
                    className={style.DownloadPlayButton}
                    style={{
                      paddingLeft: "2rem",
                    }}
                  >
                    <a>
                      <DownloadPlayButton
                        title="Play Now"
                        icon={faPlay}
                        color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={10}
                  sm={6}
                  sx={{
                    position: "relative",
                  }}
                >
                  <div
                    className={`${style.bodyCardHeaderImage} ${style.bodyCardHeaderImage2}`}
                  >
                    <img src="assets/images/cardImage2.png" alt="poker" />
                  </div>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EveryonePlaysTogether;