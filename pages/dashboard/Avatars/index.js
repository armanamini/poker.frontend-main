import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Footer from "../../../components/DashboardAssets/Footer";
import Navbar from "../../../components/DashboardAssets/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import style from "../dashboard.module.css";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import axios from "axios";
import { Opacity } from "@mui/icons-material";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import Head from "next/head";
import { ThemeContext } from "../../../contexts/theme-context";

const Avatars = () => {
  const router = useRouter();
  const { user, loading } = useSelector((state) => state.counter);
  const image = ["/assets/images/selectimag (1).png"];
  const [active, setActive] = useState(true);
  const [urlss, setUrlss] = useState([]);
  const [ImageSrc, setImageSrc] = useState(user?.user?.avatar);
  const [imageName, setImageName] = useState();

      // FOR LIGHT THEME
      const { theme, setTheme } = React.useContext(ThemeContext);
      const [viewMode, setViewMode] = useState(theme);
      useEffect(() => {
        const getLocalTheme = localStorage.getItem("theme");
        setViewMode(getLocalTheme === "dark" ? true : false);
      }, [viewMode, theme]);
    
      //

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    axios
      .get("https://vp.megaverse.today/api/v1/avatar/getAvatars", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then(async (res) => {
        console.log(res);
        //  const urls = await Promise.all([res.data.images.map((u)=>u.url)].flat())
        //  const names = await Promise.all([res.data.images.map((u)=>u.name)].flat());
        setUrlss(res.data.images);
        console.log(urlss);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendImageHandler = () => {
    axios
      .put(
        "https://vp.megaverse.today/api/v1/avatar/default",
        { imageName },
        {
          withCredentials: true,
          headers: {
            Authorization: `identifier ${localStorage.getItem("identifier")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        dispatch(fetchUsers());
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <>
    <Head>
        <title>Avatars</title>
      </Head>
      <Navbar viewMode={viewMode} />
      <Sidebar viewMode={viewMode} />
      <div className={viewMode?style.avatars:style.avatarsLight}>
        <Grid
          container
          className={style.SelectedImageGrid}
          spacing={0}
         
        
         
        >
          
          <Grid item md={4} sm={12} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}>
               
        
            <div className={style.SelectedImage}>
              <img
                src={ImageSrc || user?.user?.avatar||"/images/def.png"}
                style={{
                  borderRadius: "10px",
                  width:ImageSrc || user?.user?.avatar ? "200px":"80px",
                  
                }}
                alt={imageName}
              />
            </div>
          </Grid>
          <Grid item md={8} sm={12}>
            <div className={viewMode?style.avatarsTab:style.avatarsTabLight}>
              <h2
                onClick={() => {
                  setActive(true);
                }}
                
                style={{
                  color: active  ? `white` : "#AAAAAA",
               
                }}
              >
                Virtue Avatars
              </h2>
              <h2
                onClick={() => {
                  setActive(false);
                }}
                style={{
                  color: active ? `#AAAAAA` : "white",
                  
                }}
              >
                Virtue NFTs
              </h2>
            </div>

            {active ? (
              <Grid container  spacing={0} className={viewMode?style.ImageContainer:style.ImageContainerLight}>
                {urlss.map((img, index) => {
                  return (
                    <Grid
                      key={index}
                      item
                      lg={3}
                      md={4}
                      xs={6}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        marginTop: "0",
                        padding: "10px 0",
                      }}
                      onClick={(e) => {
                        setImageSrc(img.url);
                        setImageName(img.name);
                      }}
                    >
                      <img
                        src={img.url}
                        style={{
                          borderRadius: "10px",
                          width:"80%",
                        
                          border: !img.url.indexOf(ImageSrc)
                            ? "4px solid #32E4BF"
                            : null,
                          boxShadow: !img.url.indexOf(ImageSrc)
                            ? "0px 0px 25px rgba(50, 228, 191, 0.8)"
                            : null,
                          scale: !img.url.indexOf(ImageSrc) ? "1.1" : null,
                        }}
                      />
                    </Grid>
                  );
                })}
                <div
                  style={{
                    margin: "2.1rem 0",                  
                  }}
                  className={style.DownloadPlayButtonContainer}
                  onClick={sendImageHandler}
                >
                  <DownloadPlayButton
                    title="Update Now"
                   fSize="20px"
                    size="100%"
                    icon={faPlay}
                    color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                  />
                </div>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </div>

      <Footer viewMode={viewMode}  />
    </>
  );
};

export default Avatars;
