import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./dynamicPage4.module.css";
import { Button, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeContext } from "../../contexts/theme-context";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/counterSlice";
import PromotionDialog from "../../components/promotionDialog";

const StaticGettingStarted = () => {
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState();
  const [active, setActive] = useState();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const [item, setItem] = useState(false);

  setTimeout(() => {
    setItem(true);
  }, 5000);

  const dispatch = useDispatch();
  // FOR LIGHT THEME
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //

  return (
    <>
      <Head>
        <title>Promotion</title>
      </Head>
      <div className={viewMode ? style.promo : style.promoLight}>
        <Navbar />
        <Container>
          <div className={style.promoHead}>
            <h2 style={{ color: viewMode ? "white" : "black" }}>Promotions</h2>
            <Grid
              container
              spacing={3}
              sx={{
                justifyContent: "center",
                paddingLeft: "15rem",
                paddingRight: "15rem",
              }}
              className={style.mobHidden}
            >
              <Grid item xs={12} sm={6} md={4}>
                <div
                  onClick={() => {
                    setAll(true);
                    setActive(false);
                    setCompleted(false);
                  }}
                  className={all ? style.promoSwitchActive : style.promoSwitch}
                >
                  <Button>All</Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div
                  onClick={() => {
                    setActive(true);
                    setAll(false);
                    setCompleted(false);
                  }}
                  className={
                    active ? style.promoSwitchActive : style.promoSwitch
                  }
                >
                  <Button>Active</Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div
                  onClick={() => {
                    setCompleted(true);
                    setActive(false);
                    setAll(false);
                  }}
                  className={
                    completed ? style.promoSwitchActive : style.promoSwitch
                  }
                >
                  <Button>Completed</Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={style.promoBody}>
            <Grid container spacing={3} sx={{}}>
              {all && (
                <>
                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className={style.promoBodyCard}
                      onClick={() => {
                        setOpen1(true);
                      }}
                    >
                      {/* <img src="/assets/images/normal2.png" /> */}

                      <Image
                        src="/assets/images/normal2.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open1} setOpen1={setOpen1} img="/assets/images/normal2.png"/>

                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard}  onClick={() => {
                        setOpen2(true);
                      }}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open2} setOpen1={setOpen2} img="/assets/images/normal3.png"/>
  



                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen3(true);
                      }}>
                      {/* <img src="/assets/images/normal5.png" /> */}
                      <Image
                        src="/assets/images/normal5.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open3} setOpen1={setOpen3} img="/assets/images/normal5.png"/>


                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen4(true);
                      }}>
                      {/* <img src="/assets/images/normal1.png" /> */}
                      <Image
                        src="/assets/images/normal1.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open4} setOpen1={setOpen4} img="/assets/images/normal1.png"/>


                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen5(true);
                      }}>
                      {/* <img src="/assets/images/normal4.png" /> */}
                      <Image
                        src="/assets/images/normal4.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open5} setOpen1={setOpen5} img="/assets/images/normal4.png"/>


                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen6(true);
                      }}>
                      {/* <img src="/assets/images/normal6.png" /> */}
                      <Image
                        src="/assets/images/normal6.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open6} setOpen1={setOpen6} img="/assets/images/normal6.png"/>

                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen7(true);
                      }}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open7} setOpen1={setOpen7} img="/assets/images/normal3.png"/>

                </>
              )}

              {active && (
                <>
                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen1(true);
                      }}>
                      {/* <img src="/assets/images/normal2.png" /> */}
                      <Image
                        src="/assets/images/normal2.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open1} setOpen1={setOpen1} img="/assets/images/normal2.png"/>

                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen3(true);
                      }}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open3} setOpen1={setOpen3} img="/assets/images/normal3.png"/>

                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen2(true);
                      }}>
                      {/* <img src="/assets/images/normal5.png" /> */}
                      <Image
                        src="/assets/images/normal5.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open2} setOpen1={setOpen2} img="/assets/images/normal5.png"/>
                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen4(true);
                      }}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open4} setOpen1={setOpen4} img="/assets/images/normal3.png"/>
                </>
              )}

              {completed && (
                <>
                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen5(true);
                      }}>
                      {/* <img src="/assets/images/normal4.png" /> */}
                      <Image
                        src="/assets/images/normal4.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open5} setOpen1={setOpen5} img="/assets/images/normal4.png"/>

                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen6(true);
                      }}>
                      {/* <img src="/assets/images/normal6.png" /> */}
                      <Image
                        src="/assets/images/normal6.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open6} setOpen1={setOpen6} img="/assets/images/normal6.png"/>
                  <Grid
                    item
                    md={3}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.promoBodyCard} onClick={() => {
                        setOpen7(true);
                      }}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
                  <PromotionDialog open1={open7} setOpen1={setOpen7} img="/assets/images/normal3.png"/>
                </>
              )}

              {/* active */}

              {/* end active */}

              {/* active */}

              {/* active */}
            </Grid>
          </div>
        </Container>
      </div>
      <Footer viewMode={viewMode} />
    </>
  );
};

export default StaticGettingStarted;
