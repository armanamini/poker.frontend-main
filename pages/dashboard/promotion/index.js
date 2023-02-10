import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "./promotion.module.css";
import { Button, Container, Grid } from "@mui/material";
import Footer from "../../../components/DashboardAssets/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import Head from "next/head";
import Image from "next/image";
import { ThemeContext } from "../../../contexts/theme-context";

const Promotion = () => {
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState();
  const [active, setActive] = useState();

  const dispatch = useDispatch();

  const [item, setItem] = useState(false);

  setTimeout(() => {
    setItem(true);
  }, 5000);
  React.useEffect(() => {
    dispatch(fetchUsers());
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
      <Head>
        <title>Promotion</title>
      </Head>

      <Sidebar viewMode={viewMode} />
      <div className={viewMode ? style.promo : style.promoLight}>
        <Navbar viewMode={viewMode} />
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
              className={style.hiddenMob}
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
              {/* <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={style.promoBodyCard}></div>
            </Grid> */}
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal2.png" /> */}

                      <Image
                        src="/assets/images/normal2.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal5.png" /> */}
                      <Image
                        src="/assets/images/normal5.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal1.png" /> */}
                      <Image
                        src="/assets/images/normal1.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal4.png" /> */}
                      <Image
                        src="/assets/images/normal4.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal6.png" /> */}
                      <Image
                        src="/assets/images/normal6.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal2.png" /> */}
                      <Image
                        src="/assets/images/normal2.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal5.png" /> */}
                      <Image
                        src="/assets/images/normal5.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal4.png" /> */}
                      <Image
                        src="/assets/images/normal4.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>

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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal6.png" /> */}
                      <Image
                        src="/assets/images/normal6.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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
                    <div className={style.promoBodyCard}>
                      {/* <img src="/assets/images/normal3.png" /> */}
                      <Image
                        src="/assets/images/normal3.png"
                        width={500}
                        height={700}
                      />
                    </div>
                  </Grid>
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

export default Promotion;
