import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../HomePageeComponnets/Navbar/Navbar";
import style from "./HomePage.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../contexts/theme-context";

const HomePagee = () => {
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
      <Navbar />
      <div className={style.header}>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "10rem",
              }}
            >
              <h1 className={style.heaingHomePagee}>
                <span style={{ color: "#32E4BF" }}>Play</span> Poker with Crypto
                in{" "}
                <span style={{ color: "#32E4BF", fontSize: "60px" }}>
                  Metaverse
                </span>
              </h1>
              <p className={style.textHomePagee}>
                The Global home of play to earn metaverse poker.
              </p>
            </Grid>
            <Grid item xs={12}>
              <div className={style.imageContainer}>
                <img src="/assets/images/pokerTable.png" />
              </div>
              <Button
                className={style.playNowBtn}
                startIcon={
                  <PlayArrowIcon
                    sx={{
                      fontSize: "35px !important",
                      marginRight: "-10px !important",
                    }}
                  />
                }
              >
                Play Now
              </Button>
              <p className={style.text2HomePagee}>
                Play now, and well give you 600 FREE chips to start earning
                crypto!
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* section 2 */}

      <div className={style.section2Body}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <h3 className={style.playAndEarnText}>
                Play and Earn Real Money
              </h3>
            </Grid>
            <Grid item xs={6}>
              <div className={style.playEarnDiv}>
                <p className={style.playFiatText}>Play Fiat</p>
                <p className={style.av}>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#FFFFFF",
                      opacity: "0.7",
                    }}
                  >
                    Available to
                  </span>{" "}
                  All Players
                </p>
                <ul className={style.ul}>
                  <li>Free to Play </li>
                  <li>Receive 500 FREE Chips upon sign-up </li>
                  <li>
                    Play to earn more $GOLD tokens by competing in weekly
                    challenges.{" "}
                  </li>
                </ul>
                <Button
                  className={style.playNowBtnEarn}
                  startIcon={
                    <PlayArrowIcon
                      sx={{
                        fontSize: "35px !important",
                        marginRight: "-10px !important",
                      }}
                    />
                  }
                >
                  Play Now
                </Button>
                <div className={style.earnImgContainer}>
                  <img src="/assets/images/eran1.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={style.playEarnDiv} style={{ marginLeft: "6rem" }}>
                <p className={style.playFiatText}>Play Crypto</p>
                <p style={{ color: "#31DFC2" }} className={style.av}>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#FFFFFF",
                      opacity: "0.7",
                    }}
                  >
                    Available in{" "}
                  </span>{" "}
                  Liscenced Markets
                </p>
                <ul className={style.ul}>
                  <li>Receive our $GOLD token deposit</li>
                  <li>Compete in ETH table games to earn more $GOLD. </li>
                  <li>Deposit and withdraw using ETH.</li>
                </ul>
                <Button
                  className={style.playNowBtnEarn}
                  startIcon={
                    <PlayArrowIcon
                      sx={{
                        fontSize: "35px !important",
                        marginRight: "-10px !important",
                      }}
                    />
                  }
                >
                  Play Now
                </Button>
                <div className={style.earnImgContainer}>
                  <img src="/assets/images/eran2.png" />
                </div>
              </div>
            </Grid>
          </Grid>

          <h3 className={style.freeTitle}>
            Play virtue poker for free, and start earning crypto today!
          </h3>
          <p className={style.freeText}>
            All players can start playing virtue poker for free to start
            building their crypto stack.
          </p>

          <div className={style.slideDiv}>
            <div style={{ display: "flex" }}>
              <div className={style.sliderImgContainer}>
                <img src="/assets/images/sliderimg.png" />
              </div>
              <div className={style.sliderContent}>
                <div className={style.typo}>
                  <p className={style.sliderTitle}>Register and Play Now!</p>
                  <p className={style.sliderText}>
                    Create an account and start earning real money right now!
                  </p>
                </div>

                <div className={style.btnContianer}>
                  <button className={style.freePlayBTN}>Play For Free</button>
                  <button className={style.freePlayBTN2}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* section 3 */}
      <div className={style.section3Body}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <h3 className={style.advTitle}>
                Playing Virtue Poker Advantages
              </h3>
              <p className={style.advText}>
                Our Mission is to offer the most engaging, innovative and secure
                online gaming experience to all
                <br /> crypto, and poker communities
              </p>
            </Grid>
            <Grid item xs={4}>
              <div className={style.CardSlide}>
                <img src="/assets/images/coin.png" />
                <p>Play & Earn Crypto</p>
                <p>
                  Play poker with various cryptocurrencies in a reliable and
                  secure ecosystem, earn $GOLD, and cash out crypto immediately.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.CardSlide}>
                <img
                  className={style.moneyImg}
                  src="/assets/images/money.png"
                />
                <p>Online Poker for real money</p>
                <p style={{ marginTop: "25px" }}>
                  Play poker with various cryptocurrencies in a reliable and
                  secure ecosystem, earn $GOLD, and cash out crypto immediately.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.CardSlide}>
                <img className={style.vrImg} src="/assets/images/vr.png" />
                <p>Play & Earn Crypto</p>
                <p>
                  Play poker with various cryptocurrencies in a reliable and
                  secure ecosystem, earn $GOLD, and cash out crypto immediately.
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs={12}>
              <h3 className={style.whyTitle}>Why play at Virtue Poker</h3>
            </Grid>
            <Grid item xs={4} >
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p>Play Against Players Globally</p>
                <p>
                  Virtue Poker players can compete against players from all over
                  the world, including our play-to-earn only players.
                </p>
              </div>
            </Grid>
            <Grid item xs={4} >
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p>Players are always in Control of Their Funds</p>
                <p>
                Using a combination of Ethereum based smart contracts and a Virtue Poker deployed sidechain, players are always in control of their funds.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p>Game Integrity via P2P Shuffling</p>
                <p style={{fontSize:"17px",marginTop:"10px"}}>
                The worlds first and only GLI certified peer-to-peer shuffling protocol which includes all players seated at a table in the shuffling process. Only the players themselves can see their private cards.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p>Multi-Chain Compatible</p>
                <p>
                  Virtue Poker players can compete against players from all over
                  the world, including our play-to-earn only players.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p>Licensed</p>
                <p>
                Virtue Poker is the first and only licensed blockchain-based poker platform by Malta Gaming Authority.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={style.whyCard}>
                <img src="/assets/images/why1.png" />
                <p style={{fontSize:"21px",marginTop:"-3px"}}>Exclusive Professional Partnerships</p>
                <p>
                Virtue Poker Team Pros includes 3 of the top all-time live-earning Pros: Phil Ivey, Dan Colman, and Brian Rast.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* section 4 */}
      <div className={style.section4Body}>
        <Container>
            <Grid container spacing={12}>
                <Grid item xs={6} >
                    <p className={style.cpText}>Crypto Currencies</p>
                    <div className={style.cpBox}>
                        <div>
                            <img src="/assets/images/eath.png"/>
                            <p>ETH</p>
                        </div>
                        <div>
                            <img src="/assets/images/vpp.png"/>
                            <p>VPP</p>
                        </div>
                        <div className={style.lastDiv}>
                            <span className={style.sson}>Coming soon</span>
                            <img src="/assets/images/goldd.png"/>
                            <p>$GOLD</p>
                        </div>

                    </div>

                </Grid>
                <Grid item xs={6}>
                    <p className={style.cpText}>Block Chains</p>
                    <div className={style.cpBox}>
                        <div>
                            <img src="/assets/images/ethereum 1.png"/>
                            
                        </div>
                        <div>
                        <span className={style.sson}>Coming soon</span>
                            <img src="/assets/images/no.png"/>
                            <span className={style.binance}>Binance Smart<br/> Chain</span>
                            
                        </div>
                        <div className={style.lastDiv}>
                            <span className={style.sson}>Coming soon</span>
                            <img style={{marginTop:"20px"}} src="/assets/images/yes.png"/>
                          
                        </div>

                    </div>

                </Grid>

            </Grid>

            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <p className={style.bachersText}>Backers</p>
                    <div style={{marginLeft:"-8rem"}}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                          
                        </Grid>
                    </div>
                    <div style={{marginLeft:"-8rem"}}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                            <Grid item xs={4}>
                                <div className={style.boxBackers}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                          
                        </Grid>
                    </div>


                </Grid>
                <Grid item xs={6}>
                    <p className={style.bachersText}>Partners</p>
                    <div style={{marginLeft:"-2rem"}}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                          
                        </Grid>
                    </div>
                    <div style={{marginLeft:"-2rem"}}>
                        <Grid container spacing={10}>
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                            <Grid item xs={4}>
                                <div className={style.boxBackers2}>
                                    <img src="/assets/images/bc1.png"/>
                                </div>
                            </Grid>
                          
                          
                        </Grid>
                    </div>


                </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <p className={style.pressTitle}>Press</p>
              </Grid>
              <Grid mt={0.5}  container spacing={12}>
                <Grid item xs={3}>
                  <div className={style.pressBox}>
                    <img src="/assets/images/press1.png"/>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={style.pressBox}>
                    <img src="/assets/images/press2.png"/>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={style.pressBox}>
                    <img src="/assets/images/press3.png"/>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={style.pressBox}>
                    <img src="/assets/images/press4.png"/>
                  </div>
                </Grid>

              </Grid>

              <Grid item xs={12}>
                <p className={style.signUpTiTLE}>Sign Up to our Newsletter to Receive Updates</p>
              </Grid>
              <Grid container spacing={12} mt={1} mb={7}>
                <Grid item xs={5}>
                  <input placeholder="Email Address " className={style.homePageInput}/>
                </Grid>
                <Grid item xs={4}>
                  <select placeholder="Country of citizenship " className={style.select}>
                    <option>Country of citizenship </option>
                    <option>iran</option>
                    <option>iran</option>
                  </select>
                </Grid>
                <Grid item xs={3}>
                  <button className={style.submitHome}>Submit</button>
                </Grid>
              </Grid>
            </Grid>

        </Container>
            <Footer viewMode={viewMode}/>

      </div>
    </>
  );
};

export default HomePagee;
