import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/DashboardAssets/Navbar";
import style from "./dashboard.module.css";
import { useRouter } from "next/router";
import DownloadPlayButton from "../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import table from "../../public/assets/images/Untitled-1.png";
import Image from "next/image";
import Footer from "../../components/DashboardAssets/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/counterSlice";
import axios from "axios";
import Loader from "../../components/Loader";
import Head from "next/head";
import { ThemeContext } from "../../contexts/theme-context";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.counter);
  const [play, setPlay] = useState(false);
  const [playIframe, setPlayIframe] = useState();
  const [loadingg, setLoadingg] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("identifier");
    if (token) {
      dispatch(fetchUsers());
    }
  }, []);

  // FOR LIGHT THEME
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);

  //

  console.log(user);
  const handleLoadIframe = (bol) => {
    setPlay(true);
    axios
      .get("https://vp.megaverse.today/api/v1/bet/play", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPlayIframe(res?.data?.data);
        setLoadingg(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Play Now</title>
      </Head>
      <div>
        {/* {!play ? /> : null} */}
        <Navbar viewMode={viewMode} userData={user?.user?.displayName} />
        <Sidebar
          viewMode={viewMode}
          isIframe={play}
          checkIframe={handleLoadIframe}
        />
        <div className={viewMode ? style.container : style.containerLight}>
          <div className={style.header}>
            <div className={style.headerTable}>
              <div className={style.headerTableRow}>
                <div className={style.headerTableCell}>
                  {!play && (
                    <>
                      <h3 style={{ color: viewMode ? "white" : "black" }}>
                        Welcome to the
                      </h3>
                      <h2 style={{ color: viewMode ? "#32E4BF" : "#0E72CC" }}>
                        Global home of web3 Poker
                      </h2>
                    </>
                  )}
                </div>
                <div
                  style={{
                    position: "relative",
                    marginTop: play ? "0" : "130px",
                    overflow: "hidden",
                  }}
                >
                  {play ? (
                    <div className={style.sdas}>
                      {loadingg ? (
                        <Loader />
                      ) : (
                        <iframe
                          width="100%"
                          height="100%"
                          src={playIframe}
                          title="play Poker"
                        ></iframe>
                      )}
                    </div>
                  ) : (
                    <Image
                      src={table}
                      layout="intrinsic"
                      width={978}
                      height={642}
                    />
                  )}
                </div>

                {!play && (
                  <div
                    className={style.headerTableCell2}
                    onClick={() => {
                      setPlay(true);
                      axios
                        .get("https://vp.megaverse.today/api/v1/bet/play", {
                          withCredentials: true,
                          headers: {
                            Authorization: `identifier ${localStorage.getItem(
                              "identifier"
                            )}`,
                          },
                        })
                        .then((res) => {
                          console.log(res.data.data);
                          setPlayIframe(res?.data?.data);
                          setLoadingg(false);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    <div className={style.milad}>
                      <DownloadPlayButton
                        title="Play Now"
                        size="140%"
                        icon={faPlay}
                        color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {!play ? <Footer viewMode={viewMode} /> : null}
      </div>
    </>
  );
};

export default Dashboard;
