import React from "react";
import style from "./HomePageAssets.module.css";
const GrowyourCryptoStackCard = (props) => {
  const { title, description, image, color } = props;
  return (
    <div className={style.container} style={{
      background: `${color}`,
    }}>
      <img  src={image}/>
      <h2>{title}</h2>
      <p>
       {description}
      </p>
    </div>
  );
};

export default GrowyourCryptoStackCard;
