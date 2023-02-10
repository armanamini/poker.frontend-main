import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "../dashboard.module.css";
import { Grid } from "@mui/material";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../../../components/DashboardAssets/Footer";
import { ThemeContext } from "../../../contexts/theme-context";
import { Container } from "@mui/system";



const NftAvatars = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = React.useState(theme);
  React.useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);
  return (
    <>
         <Navbar viewMode={viewMode}/>
      <Sidebar viewMode={viewMode}/>
    <div className={viewMode?style.Nfts:style.NftsLight}>
 
      <Container>

      <div className={style.NftsGrids}>
        <div className={viewMode?style.NftsHeader:style.NftsHeaderLight}>
          <div className={viewMode?style.NftsHeaderh2:style.NftsHeaderh2Light}>
            <img src="/assets/images/21 6.png" />
            <h2>NFT Avatars (October 2022 est.)</h2>
          </div>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "30px",
              color: viewMode?"#FFFFFF":'#000000',
              marginTop:"1rem",
            }}
          >
            Overview
          </h3>
          <p>
            Virtue (in partnership with KeithCity) has produced 5500 NFT
            Avatars. Each individual NFT is unique, with various traits and
            rarities. These NFTs will be sold publicly to all interested
            participants.
          </p>
        </div>
        <div className={viewMode?style.NftsBody2:style.NftsBody2Light}>
          <h3>Process</h3>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>Sales Structure:</h2>
            <p>
              {" "}
              Virtue Poker will sell these avatars via a one-off “drop” in the
              fall of 2022.
            </p>
          </div>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>Price:</h2>
            <p>
              {" "}
              Virtue Poker will create a fixed price for NFT Avatars. The price
              has not yet been determined.{" "}
            </p>
          </div>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>Forms of Payment Accepted:</h2>
            <p> ETH/USDT/USDC and FIAT gateway </p>
          </div>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>Date :</h2>
            <p>TBD</p>
          </div>
          <p>
            1. Virtue will publicly market the NFT avatars via broad reaching
            marketing campaigns
          </p>
          <p>
            2. Virtue will then create a landing page for interested
            participants to whitelist
          </p>
          <span>
            Required information to whitelist: Ethereum address, email address
          </span>
          <span>Optional information to whitelist: VP display name</span>
          <p>
            3. Virtue will have an open whitelist registration period with a cap
            of 30,000
          </p>
          <p>
            4. If Virtue receives 5000 whitelist registration slots, the
            whitelist slots will be randomly selected
          </p>
          <span>An alternative is we could run a multi-table tournament….</span>
          <p>5. “Winners” then will have then purchase their NFTs</p>
          <span>
            Question is if we want to determine a “cap” per wallet address{" "}
          </span>
          <p>6. The NFTs will be delivered to the purchasers</p>
          <p>7. Users will then “reveal” their NFTs the next day(?)</p>
          <p>
            8. Purchasers can then use them on the Virtue app (out of scope)
          </p>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>Blockchain to be Used:</h2>
            <p>Ethereum (optimized for gas etc)</p>
          </div>
          <h3>Utility</h3>
          <p>
            NFT avatars are NFTs that are purchased by players and then added to
            a player account. The avatar will then become the player’s avatar in
            the lobby and on the table - and players will receive a bonus and
            perks. Players receive bonus chips, tournament tickets, access to
            VIP events, and private discord access when they add their NFT
            avatar. Players will need to hold the NFT avatar in their Source of
            Funds ethereum wallet for their Virtue account. They then will need
            to select their NFT Avatar and “lock” it (remove the ability to
            transfer ownership) to gain their benefits.{" "}
          </p>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>How they are earned/purchased :</h2>
            <p>
              They are purchased either directly through a sales portal on
              Virtue’s website or via a secondary marketplace such as OpenSea
            </p>
          </div>
          <div className={viewMode?style.paraContainer:style.paraContainerLight}>
            <h2>What Communication do they receive :</h2>
            <p>
              When a player purchases an NFT directly from Virtue - they will
              receive an email confirmation of their purchase. When a player
              goes to add an NFT avatar to their account profile - they will
              receive an email and a pop-up confirming their NFT has been added
              and what bonus(es) they received.
            </p>
          </div>
          <h3>Requirements</h3>
          <p>1. Design assets for 5500 NFTs (done)</p>
          <p>2. Design for the landing page</p>
          <span
            style={{
              marginLeft: "2.5rem",
            }}
          >
            Landing page:
          </span>
          <span>What they are</span>
          <span>What players get</span>
          <span>Table of traits and rarity</span>
          <span>How to Use</span>
          <span>Information on sale</span>
          <span>CTA: Whitelist</span>
          <span>Email communication - when a player whitelists</span>
          <span
            style={{
              marginLeft: "2.5rem",
            }}
          >
            Lottery Selection
          </span>
          <span>Randomly select users who win </span>
          <span>Email communication - a player wins/loses</span>
          <span
            style={{
              marginLeft: "2.5rem",
            }}
          >
            “Mint” - Purchase flow{" "}
          </span>
          <span>FIAT / ETH / USDT / USDC</span>
          <span>“Reveal” process</span>
          <p>3. NFT contract development</p>
          <span>ERC 1155 </span>
          <span>Audit and testing</span>
          <span>Implementation</span>
          <span>Traits etc </span>
          <p>4. Implementation of all of the above</p>
        </div>
        <div className={style.Nftfooter}>
          <DownloadPlayButton
            title="Play Poker Now"
            icon={faPlay}
            color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
          />
        </div>
      </div>
      </Container>

    </div>
      <Footer viewMode={viewMode}/>
    </>

  );
};

export default NftAvatars;
