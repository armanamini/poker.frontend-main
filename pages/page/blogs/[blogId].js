import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import style from "./blogDetails.module.css";
import MicIcon from "@mui/icons-material/Mic";
import CustomizedTables5 from "../../../components/DashboardAssets/tables/table6";
import CustomizedTables6 from "../../../components/DashboardAssets/tables/table6";
import { useRouter } from "next/router";
import axios from "axios";
import { ThemeContext } from "../../../contexts/theme-context";
import Head from "next/head";
import Image from "next/image";
import { fetchUsers } from "../../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from '@mui/icons-material/Telegram';
const BlogDetails = () => {
  const [detailDataBlog, setDetailDataBlog] = useState();
  const dispatch = useDispatch();

  const router = useRouter();

  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);

  useEffect(() => {
    axios
      .get(`https://vp.megaverse.today/api/v1/page/blog/${router.query.blogId}`)
      .then((res) => {
        setDetailDataBlog(res?.data?.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);
  console.log(detailDataBlog);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={viewMode ? style.gsContainer : style.gsContainerLight}>
      <Head>
        <title>{detailDataBlog?.title}</title>
      </Head>
      <Navbar />
      <Container>
        <div className={style.gsHead}>
          {/* BLOG TITLE */}
          <h1
            className={viewMode ? style.blogDetTitle : style.blogDetTitleLight}
          >
            {detailDataBlog?.title}
          </h1>
          {/* BLOG ROW INFO */}
          <div className={style.rowDet}>
            <div className={style.blogDetMainBy}>
              <div className={style.left}>
                <div className={style.iconBtn}>
                  <img src="/images/det2.png" />
                </div>
              </div>
              <div className={style.right}>
                <p style={{ color: viewMode ? "#FFFFFF" : "#444444" }}>
                  By Ro Virtue Poker
                </p>
                <p style={{ color: viewMode ? "#32E4BF" : "#0E72CC" }}>
                  {detailDataBlog?.createdAt}
                </p>
              </div>
            </div>
            <div className={style.socialContainer}>
              <div className={style.iconFlexWrappewr}>
                <div
                  className={
                    viewMode ? style.socialItem : style.socialItemLight
                  }
                >
                 <a  rel="noreferrer" target="_blank" href={`https://twitter.com/share?text=${detailDataBlog?.title}&url=https://poker.megaverse.today/page/blogs/${detailDataBlog?.url}`}>
                 <TwitterIcon sx={{ color: viewMode ? "black" : "white" }} />
                 </a>
                </div>
                <div
                  className={
                    viewMode ? style.socialItem : style.socialItemLight
                  }
                >
                  <a    rel="noreferrer"  target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://poker.megaverse.today/page/blogs/${detailDataBlog?.url}`}>
                  <FacebookIcon rel="noreferrer"  sx={{ color: viewMode ? "black" : "white" }} />
                  </a>
                </div>
                <div
                  className={
                    viewMode ? style.socialItem : style.socialItemLight
                  }
                >
                  <a 
                   rel="noreferrer"
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://poker.megaverse.today/page/blogs/${detailDataBlog?.url}`}
                  >
                    <LinkedInIcon
                      sx={{ color: viewMode ? "black" : "white" }}
                    />
                  </a>
                </div>
                <div
                  className={
                    viewMode ? style.socialItem : style.socialItemLight
                  }
                >
                  <a  rel="noreferrer" target="_blank" href={`https://telegram.me/share/url?url=https://poker.megaverse.today/page/blogs/${detailDataBlog?.url}&text=${detailDataBlog?.title}`}>
                  <TelegramIcon sx={{ color: viewMode ? "black" : "white" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* BLOG IMAGE*/}
          <div className={style.blogDetImgContainer}>
            {/* <Image src={detailDataBlog?.photo} width={500} height={700}/> */}
            <img src={detailDataBlog?.photo} />
          </div>
          <article className="prose lg:prose-xl prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
          <div
            className={viewMode ? style.bodyData : style.bodyDataLight}
            dangerouslySetInnerHTML={{
              __html: detailDataBlog?.body,
            }}
            
          ></div>
          </article>
        </div>
      </Container>
      <Footer viewMode={viewMode} />
    </div>
  );
};

export default BlogDetails;
