import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import style from "../pages/HomePage/HomePage.module.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const DownloadPlayButton = (props) => {
  const { title, color, icon, size,type,fSize } = props;
  return (
    <button
      type={type ? type : null}
      style={{
        width: size || "210px",
        height: "55px",
        marginTop: "1rem",
        background: `${color}`,
        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: fSize || "19px",
        lineHeight: "25px",
        textAlign: "center",
        color: "#ffffff",
        padding: "0 0.7rem",
        
      }}
      className={style.DownlaodBtn}
    >
      
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      <span style={{ marginLeft: "5px" }}>{title}</span>
    </button>
  );
};

export default DownloadPlayButton;
