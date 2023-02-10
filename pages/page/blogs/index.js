import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import style from "../dynamicPage3.module.css";
import { Button, Divider, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import LatestCard from "../../../components/latestCard/latestCard";
import { ThemeContext } from "../../../contexts/theme-context";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { fetchUsers } from "../../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";


const Latest = () => {
  const [blogsData, setBlogsData] = useState();
  const dispatch = useDispatch();

  // FOR LIGHT THEME
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);
  //

  useEffect(() => {
    axios
      .get("https://vp.megaverse.today/api/v1/page/blogs")
      .then((res) => {
        setBlogsData(res?.data?.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(blogsData && blogsData[0]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Navbar />
      <div className={viewMode ? style.gsContainer : style.gsContainerLight}>
        <Container>
          <div className={style.gsHead}>
            <h1
              style={{ marginTop: "3rem" }}
              className={viewMode ? style.latestTitle : style.latestTitleLight}
            >
              Latest Blogs
            </h1>

            <div
              className={
                viewMode ? style.latestMainBox : style.latestMainBoxLight
              }
            >
              <div className={style.BoxLeft}>
                <img src={blogsData && blogsData[0]?.photo} />
              </div>
              <div className={style.BoxRight}>
                <div>
                  <p
                    className={
                      viewMode
                        ? style.BoxRightTextTiTLE
                        : style.BoxRightTextTiTLELight
                    }
                  >
                    {blogsData && blogsData[0]?.title}
                  </p>
                  <p
                    className={
                      viewMode
                        ? style.boxRightGRspan
                        : style.boxRightGRspanLight
                    }
                  >
                    {blogsData && blogsData[0]?.createdAt}
                  </p>

                  <p
                    className={
                      viewMode ? style.boxRightP : style.boxRightPLight
                    }
                  >
                    {blogsData && blogsData[0]?.description}
                  </p>
                  <Link href={`/page/blogs/${blogsData && blogsData[0]?.url}`}>
                    <button className={style.LatestBoxBtn}>Read More</button>
                  </Link>
                </div>
              </div>
            </div>

            <Grid
              container
              justifyContent="center"
              spacing={2}
              mt={6}
              pb={6}
              rowSpacing={5}
            >
              {blogsData?.map((blog) => {
                return (
                  <Grid key={blog.url} item lg={4}>
                    <LatestCard blog={blog} viewMode={viewMode} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
      <Footer viewMode={viewMode} />
    </>
  );
};

export default Latest;
