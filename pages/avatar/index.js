import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Grid, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Head from "next/head";

const images = ["/images/def.png"];

const Avatar = () => {
  const router = useRouter();
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [imageName, setImageName] = useState("");
  const [showAvatar, setShowAvatar] = useState(true);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [urlss, setUrlss] = useState([]);
  const [sea, setSea] = useState("");

  // opensea
  const axios = require("axios").default;
  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/95473236267726319126343672672408964692376171503354818642352373423605947564033/?include_orders=false",
    headers: { Accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      setSea(response.data.image_url);
    })
    .catch(function (error) {
      console.error(error);
    });
  //end opensea

  // GET AVATRAS FROM API
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
        setUrlss(res.data.images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // SEND IMAGES TO SERVER
  const imageHandler = () => {
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
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div className="sign-up-form-container">
      <Head>
        <title>Avatar</title>
        <meta name="description" content="Signup vpPoker"></meta>
      </Head>
      <CloseIcon
        onClick={() => {
          window.location.href = "/dashboard";
        }}
        className="vrify-cancel-icon"
        sx={{ color: "white" }}
      />
      <KeyboardArrowLeftIcon
        className="vrify-back-icon"
        sx={{ color: "white" }}
      />
      <Container>
        <Grid container spacing={2}>
          <Grid className="grid-col-avatar" item lg={3} md={3} sm={12} xs={12}>
            <p className="avatar-heading">Select your avatar</p>
            <div className="avt-big-img-container">
              <img src={selectedImg} alt={imageName} className="avt-big-img" />
            </div>
          </Grid>
          <Grid
            className="grid-col-2-avatar"
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
          >
            <div className="nft-avt-flex">
              <p
                onClick={() => {
                  setShowAvatar(true);
                  setActive(true);
                  setActive2(false);
                }}
                className={`avt-text ${active ? "active-tab-nft" : ""}`}
              >
                Virtue Avatars
              </p>
              <p
                onClick={() => {
                  setShowAvatar(false);
                  setActive2(true);
                  setActive(false);
                }}
                className={`vrt-text ${active2 ? "active-tab-nft" : ""}`}
              >
                Virtue NFTs
              </p>
            </div>
            <div className="avatars-imgs-container">
              {showAvatar ? (
                // show avatars
                <Grid
                  container
                  justifyContent="center"
                  spacing={2}
                  rowSpacing={2}
                >
                  {urlss?.map((img, index) => {
                    return (
                      <Grid key={index} item lg={3}>
                        <div className="avt-item-img-container">
                          <img
                            style={{
                              border:
                                selectedImg === img.url
                                  ? "3px solid #0066FF"
                                  : "",
                              borderRadius:
                                selectedImg === img.url ? "20px" : "",
                              scale: selectedImg === img.url ? "1.2" : "",
                            }}
                            onClick={() => {
                              setSelectedImg(img.url);
                              setImageName(img.name);
                            }}
                            src={img.url}
                            alt={img.name}
                          />
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                // show nfts
                <Grid container spacing={2} rowSpacing={2}>
                  <Grid item lg={3}>
                    <div className="avt-item-img-container">
                      <img src={sea} />
                    </div>
                  </Grid>
                </Grid>
              )}
            </div>
            <div className="btns-avtar">
              <button onClick={imageHandler} className="slt-avt-btn">
                Select
              </button>
              <button
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
                className="doThisLaterAvt"
              >
                Do This Later
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>


  );
};

export default Avatar;
