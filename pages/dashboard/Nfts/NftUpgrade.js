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


const NftAvatars = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = React.useState(theme);
  React.useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);
  return (
    <div className={viewMode?style.Nfts:style.NftsLight}>
      <Navbar viewMode={viewMode}/>
      <Sidebar viewMode={viewMode}/>
      <div className={style.NftsGrids}>
        <div className={viewMode?style.NftsHeader:style.NftsHeaderLight}>
          <div className={viewMode?style.NftsHeaderh2:style.NftsHeaderh2Light}>
            <img src="/assets/images/nft-drop 3.png" />
            <h2>NFT Upgrades (November 2022 est.)</h2>
          </div>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "30px",
              color: viewMode?"#FFFFFF":'#000000',
              marginTop: "1rem",
            }}
          >
            Overview
          </h3>
          <p>
            Virtue will (in partnership) with KeithCity will produce NFT
            upgrades. Each class of NFT upgrades will be sold in a limited style
            “drop” where players can whitelist, mint, and receive NFT upgrades
            that enhance their gameplay on Virtue. *NOTE: Upgrades are currently
            being defined by the Virtue team
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
          NFT upgrades are a separate NFT asset that players can purchase/use on the Virtue platform. NFT upgrades can: provide a chip boost, tournament tickets, a loot box, or unlock a feature (private tournaments) NFT upgrades can be purchased directly from Virtue, purchased from a secondary marketplace. Upgrades *may* be able to be earned as a prize on the app (TBD)
          </p>
          <p>
          Similar to NFT Avatars, players will need to hold the NFT Upgrade in their Source of Funds ethereum wallet for their Virtue account. They then will need to select their NFT Upgrade and “lock” it (remove the ability to transfer ownership) to gain their benefits.
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
      <Footer viewMode={viewMode}/>
    </div>
  );
};

export default NftAvatars;
