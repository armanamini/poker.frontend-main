import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "../dashboard.module.css";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../../../components/DashboardAssets/Footer";
import CustomizedTables from "../../../components/DashboardAssets/tables/table";
import CustomizedTables2 from "../../../components/DashboardAssets/tables/table2";
import CustomizedTables3 from "../../../components/DashboardAssets/tables/table3";
import CustomizedTables4 from "../../../components/DashboardAssets/tables/table4";
import { ThemeContext } from "../../../contexts/theme-context";


export const H3 = (props) => {
  const {viewMode} = props
  return (
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
      {props.children}
    </h3>
  );
};

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
            <h2>NFT Cards (“Lootbox Mini-Game”- November 2022 est.)</h2>
          </div>
          <H3 viewMode={viewMode}>Overview</H3>
          <p>
            Virtue will (in partnership) with KeithCity will produce an NFT card
            mini-game.
          </p>
          <br />
          <p>
            The mini-game is a side-game of Virtue - that is open to both Virtue
            players and non-Virtue players.
          </p>
          <H3 viewMode={viewMode}>Card Rarity</H3>
          <p>
            The basic game mechanic is as follows: Virtue Poker will produce
            20,000 NFT cards based on a 52-card deck (with some special
            additions). The rareness of traits will be resemble something like
            the following:
          </p>
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <CustomizedTables />
            <span
              style={{
                color: "#32E4BF",
              }}
            >
              **NOTE: Exact rarity figures, and game design and still be worked
              on
            </span>
            <p>
              Players will receive “mystery” or “loot” boxes that include one
              NFT card. That in its initial state is unopened.
            </p>
          </div>
          <H3 viewMode={viewMode}>Classes of Loot Boxes</H3>
          <div>
            <p>There will be (3) classes of lootboxes:</p>
            <p style={{ margin: 0 }}>1. Chest</p>
            <p style={{ margin: 0 }}>2. Vault</p>
            <p style={{ margin: 0 }}>3. Doamond Case</p>
          </div>
          <H3 viewMode={viewMode}>Loot Box Categories and Classes</H3>
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <CustomizedTables2 />
          </div>
          <p>
            Unlike the two previous classes of NFTs, NFT cards can be either
            earned as a prize on the Virtue app or can be purchased directly
            from Virtue on an ongoing basis.
          </p>
          <p>
            When a player receives a loot box - they player must sign a
            transaction to “reveal” whats inside.
          </p>
          <H3 viewMode={viewMode}>Bonus Game</H3>
          <p>
            Players will then work to assemble poker hands - whereby they can
            play their NFT cards to earn real cash prizes (USDT). A card can
            only be played once, and when a card is played is “gone” or burned
            forever.
          </p>
          <H3 viewMode={viewMode}>NFT Card Game Bonuses</H3>
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <CustomizedTables3 />
            <span
              style={{
                color: "#32E4BF",
              }}
            >
              *NOTE: The mechanics are still being finalized.
            </span>
          </div>
          <H3 viewMode={viewMode}>Player Perks</H3>
          <p>
            In addition to receiving the card, and being able to play the
            mini-game, card owners who are players will also receive a bonus in
            terms of chips, and tournament tickets. The relationship between an
            NFT card and their corresponding chips/tickets bonus is static. The
            bonus is only received once, by the original owner
            (earner/purchaser) of the NFT.
          </p>
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <CustomizedTables4 />
            <span
              style={{
                color: "#32E4BF",
              }}
            >
              *NOTE: This is just a strawman example chips/tickets bonus
              automation is out of scope and exact numbers will be finalized.
            </span>
          </div>
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
            A single NFT card on its own only provides bonuses in terms of chips
            and tickets. A single NFT card has no cash value.
          </p>
          <br />
          <p>
            However, as players collect more cards they can “play” hands of 5
            NFT cards (and burn those cards) they will receive USDT prizes
          </p>
          <h3>Requirements</h3>
          <p>1. Design assets for 20000 NFTs Cards</p>
          <p>2. Design for the sales landing page</p>
          <span
            style={{
              marginLeft: "2.5rem",
            }}
          >
            Landing page:
          </span>
          <span>What they are</span>
          <span>What players get</span>
          <span>How to Use </span>
          <span>Purchase flow </span>
          <span style={{
              marginLeft: "8rem",
            }}>FIAT / ETH / USDT / USDC </span>
          <span>CTA: Purchase</span>
          <span>Email communication - when a player whitelists</span>

          <p>3. Design for the “gameplay” landing page</p>
          <span>Display of unopened cards </span>
          <span>Display of opened cards </span>
          <span>Display of played hands </span>
          <p>4. Prize Rewards </p>
          <span>When a player “plays a hand” they should automatically receive</span>
          <p>5. NFT contract development</p>
          <span>ERC 1155 </span>
          <span>Audit and testing </span>
          <span>Implementation </span>
          <span>Design of “burning” </span>
          <p>6. Implementation of all of the above</p>

        </div>
      </div>
      <Footer viewMode={viewMode}/>
    </div>
  );
};

export default NftAvatars;
