import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import style from "./promotionDialog.module.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const PromotionDialog = ({ open1, setOpen1, img }) => {
  return (
    <div>
      <Dialog open={open1} fullWidth={true} maxWidth="lg">
        <div className={style.a}>
          <div>
            <div
              onClick={() => {
                setOpen1(false);
              }}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
                style={{
                  color: "white",
                  cursor:"pointer"
                }}
                size="2x"
              />
            </div>
            <div className={style.headerContainer}>
              <img src={img} />
              <div
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <h3>First Deposit Bonus </h3>
                <p>70% Claimed</p>
                <span>Period of campaign: 01.01.2019 - 31.12.2019</span>
              </div>
            </div>
          </div>
          <div className={style.headerContainer2}>
            <p>
              A new action has begun, in which you can spin a special wheel of
              luck, which allows you to get free tickets for BLAST games, as
              well as freebets, bonuses without deposits and free participation
              in casino games{" "}
            </p>
            <h4>How to Get</h4>
            <p>Make a deposit with an amounts of not less than $100.</p>
            <h4>Clearing</h4>
            <div style={{
              display:'flex',
              paddingTop:'2rem'
            }} >

              <div >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>                
              </div>

              <div style={{
                paddingLeft:'10rem'
              }}>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h3>Total Reward Amount : </h3>
                  <span>$150</span>
                </div>                
              </div>

            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PromotionDialog;
