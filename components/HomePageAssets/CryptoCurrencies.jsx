import React from "react";
import style from "./HomePageAssets.module.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
const CryptoCurrencies = ({viewMode}) => {
  return (
    <div className={viewMode?style.CryptoCurrencies:style.CryptoCurrenciesLight}>
      <Container>

      <Grid container>
        <Grid item xs={12} sm={12} md={6} >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "4rem",
            }}
            className={style.CryptoCurrencies__left}

          >
            <Grid item xs={12}>
              <div
                className={style.CryptoCurrencies__title}
                style={{
                  display: "flex",
                }}
              >
                <h2 className={style.crpMobText} style={{color:viewMode?"#FFFFFF":"#0E72CC"}}>Crypto Currencies</h2>
              </div>
            </Grid>
            <Grid container 
            >
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow}>
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/2x-chip-eth1.png" alt="arrow" />
                    <h3>ETH</h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow}>
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/2x-chip-eth1(1).png" alt="arrow" />
                    <h3>VPP</h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow}>
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/2x-chip-eth1(2).png" alt="arrow" />
                    <h3>$GOLD</h3>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "4rem",
              paddingRight: "1rem",
            }}
            className={style.CryptoCurrencies__left}
          >
            <Grid item xs={12}>
              <div className={style.CryptoCurrencies__title}>
                <h2 className={style.crpMobText} style={{color:viewMode?"#FFFFFF":"#0E72CC"}}>Backers</h2>
              </div>
            </Grid>
            <Grid container >
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img
                    src="/assets/images/ico-2x-consensys 1.png"
                    alt="arrow"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img src="/assets/images/ico-2x-pantera 1.png" alt="arrow" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img src="/assets/images/ico-2x-dfg 1.png" alt="arrow" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img src="/assets/images/ico-2x-fenbushi 1.png" alt="arrow" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img
                    src="/assets/images/ico-2x-digiral-s 1.png"
                    alt="arrow"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img src="/assets/images/logo-iconium 1.png" alt="arrow" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          sx={{
            paddingRight: "4rem",
            textAlign: "center",
          }}
          className={style.CryptoCurrencies__right}
        >
          <Grid item xs={12}>
            <Grid item xs={12}>
              <div className={style.CryptoCurrencies__title}>
                <h2  className={style.crpMobText} style={{color:viewMode?"#FFFFFF":"#0E72CC"}}>Blockchains</h2>
              </div>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow3}>
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/ethereum1(1).png" alt="arrow" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={style.CryptoCurrencies__arrow3}
                  style={{
                    backgroundColor: "#627EEA",
                  }}
                >
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/ethereum1(2).png" alt="arrow" />
                    <h3
                      style={{
                        color: "#ffff",
                      }}
                    >
                      Binance Smart Chain
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow3}>
                  <div className={style.CryptoCurrencies__arrow__icon}>
                    <img src="/assets/images/ethereum1(3).png" alt="arrow" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{
            paddingLeft: "0.5rem",
          }}>
            <Grid item xs={12}>
              <div className={style.CryptoCurrencies__title}>
                <h2  className={style.crpMobText} style={{color:viewMode?"#FFFFFF":"#0E72CC"}}>Partners</h2>
              </div>
            </Grid>
            <Grid container >
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img src="/assets/images/2x-logo-polygon 1.png" alt="arrow" />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                  <img
                    src="/assets/images/ico-2x-superfarm 1.png"
                    alt="arrow"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                <img
                    src="/assets/images/ico-2x-ethernity 1.png"
                    alt="arrow"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                <img
                    src="/assets/images/png-transparent-poa-network-hd-logo 1.png"
                    alt="arrow"
                    style={
                        {
                         paddingRight: "20%",
                         paddingLeft: "20%",
                        }
                     }
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                <img
                    src="/assets/images/ico-2x-kaleido 1.png"
                    alt="arrow"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={style.CryptoCurrencies__arrow2}>
                <img
                    src="/assets/images/ico-2x-market-across 1.png"
                    alt="arrow"
                    style={
                       {
                        paddingRight: "20%",
                        paddingLeft: "20%",
                       }
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Container>

    </div>
  );
};

export default CryptoCurrencies;
