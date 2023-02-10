import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./dynamicPage2.module.css";
import { Button, Divider, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {
  tableCellClasses,
  TableHeadClasses,
} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeContext } from "../../contexts/theme-context";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/counterSlice";
import Head from "next/head";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: "#32E4BF",
}));

function createData(name, fat, carbs, protein, util) {
  return { name, fat, carbs, protein, util };
}

const rows = [
  createData(
    "Bankroll chips",
    "Bankroll chips are the limited amount of free-to-play chips players receive when they register an account on Virtue. These chips are used to compete in Weekly Challenges to earn $GOLD. Bankroll chips are only used internally within the Virtue application: they can neither be deposited nor withdrawn.",
    "No Value",
    "500 Chips On Sign Up 100 Chips on Play of 10 Tournaments Weekely 1000 Chips on VPP Stake",
    "Compete in Weekly Challenges to Earn $GOLD"
  ),
  createData(
    "VPP Token",
    "The $VPP token can be staked by players to receive bonus chips or staked to become a Justice and earn ETH and $GOLD staking reward fees",
    "Coinmarketcap",
    "MEXC Uniswap PancakeSwap",
    "Player Staking for Bonus Chips.Justice Stake for $GOLD and ETH Rewards.Governance (coming soon)"
  ),

  createData(
    "$GOLD Token",
    "The $GOLD token is Virtue's loyalty token that can be earned through P2E challenges and gameplay on ETH tables.",
    "The $GOLD token is Virtue's loyalty token that can be earned through P2E challenges and gameplay on ETH tables.",
    "Daily JackpotWeekly Challenge in P2E GamesEarned through play on ETH table games",
    "Earned through gameplay, used to purchase NFT avatars, access to special promotions on $GOLD table games"
  ),

  createData(
    "ETH",
    "Ether or ETH is the core token that powers the Ethereum blockchain network. ETH is used to pay for gas which are the transactions costs for using the Ethereum network. These fees are paid to miners",
    "coin",
    "Available on all major exchanges across the globe. The world’s second largest cryptocurrency by market capitalization",
    "Pay Gas on the Ethereum Network"
  ),
  createData(
    "NFT Avatars",
    "Virtue is conducting a Genesis Mint of NFT avatars that will enhance the $GOLD earnings for owners across both play-to-earn and real-money gaming and will be used as an access key to Virtue's Metaverse poker game.",
    "Genesis Mint of Virtue NFT will cost 150 $GOLD per avatar. Our upcoming Genesis Mint of NFT avatars will be 500 units of hand-designed unique art characters among five rarities that will change the utility players receive from their NFT.",
    "All players can get early access to Genesis Mint of Virtue NFT through whitelisting.  All players can purchase an NFT avatar using their $GOLD tokens To get a whitelist spot, go to the Cashier in the Virtue App. The whitelist will be closed on June 30.",
    "Increase $GOLD earnings through gameplay (gives one-time 2,000 Chips bonus once whitelisted/purchased. VIP access to a private Discord and exclusive access to special events (coming soon). As an access key to metaverse poker (coming soon)."
  ),
];

const overViewTabData = [
  {
    assetData: "Bankroll chips",
    definitionData:
      "Bankroll chips are the limited amount of free-to-play chips players receive when they register an account on Virtue. These chips are used to compete in Weekly Challenges to earn $GOLD. Bankroll chips are only used internally within the Virtue application: they can neither be deposited nor withdrawn.",
    priceData: "Coinmarketcap",
    howToGetData: {
      first: "MEXC",
      seconde: "Uniswap ",
      third: "PancakeSwap",
    },
    utilityData:
      "Player Staking for Bonus Chips. Justice Stake for $GOLD and ETH Rewards. Governance (coming soon)",
  },


  {
    assetData: "VPP Token",
    definitionData:
      "The $VPP token can be staked by players to receive bonus chips or staked to become a Justice and earn ETH and $GOLD staking reward fees",
    priceData: "Coinmarketcap",
    howToGetData: {
      first: "MEXC",
      seconde: "Uniswap ",
      third: "PancakeSwap",
    },
    utilityData:
      "Player Staking for Bonus Chips.Justice Stake for $GOLD and ETH Rewards.Governance (coming soon)",
  },

  {
    assetData: "$GOLD Token",
    definitionData:
      "The $GOLD token is Virtue's loyalty token that can be earned through P2E challenges and gameplay on ETH tables.",
    priceData: "$1 USDT",
    howToGetData: {
      first: "Daily Jackpot",
      seconde: "Weekly Challenge in P2E Games ",
      third: "Earned through play on ETH table games",
    },
    utilityData:
      "Player Staking for Bonus Chips. Justice Stake for $GOLD and ETH Rewards. Governance (coming soon)",
  },


  {
    assetData: "ETH",
    definitionData:
      "Ether or ETH is the core token that powers the Ethereum blockchain network. ETH is used to pay for gas which are the transactions costs for using the Ethereum network. These fees are paid to miners",
    priceData: "Coinmarketcap",
    howToGetData: {
      first: "Available on all major exchanges across the globe. The world’s second largest cryptocurrency by market capitalization",
      seconde: " ",
      third: "",
    },
    utilityData:
      "Pay Gas on the Ethereum Network",
  },


  {
    assetData: "NFT Avatars",
    definitionData:
      "Virtue is conducting a Genesis Mint of NFT avatars that will enhance the $GOLD earnings for owners across both play-to-earn and real-money gaming and will be used as an access key to Virtue's Metaverse poker game.",
    priceData: "Genesis Mint of Virtue NFT will cost 150 $GOLD per avatar Our upcoming Genesis Mint of NFT avatars will be 500 units of hand-designed unique art characters among five rarities that will change the utility players receive from their NFT.",
    howToGetData: {
      first: "All players can get early access to Genesis Mint of Virtue NFT through whitelisting.",
      seconde: " All players can purchase an NFT avatar using their $GOLD tokens. ",
      third: "To get a whitelist spot, go to the Cashier in the Virtue App.",
    },
    utilityData:
    "Increase $GOLD earnings through gameplay (gives one-time 2,000 Chips bonus once whitelisted/purchased VIP access to a private Discord and exclusive access to special events (coming soon).   As an access key to metaverse poker (coming soon)."
    
 
      
  },
];

const StaticGettingStarted = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  const [createAccount, setCreateAccount] = useState(true);
  const [withdraw, setWithdraw] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [gold, setGold] = useState(false);
  const [avatar, setAvatars] = useState(false);
  const [vpp, setVpp] = useState(false);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // background: 'linear-gradient(90.32deg, #32E4BF 0.04%, #21A1DE 100%)',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    borderBottom: "0",
    color: viewMode ? "white" : "black",
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    background: viewMode ? "#45465B" : "#E1E1E1",
    borderRadius: "0px 0px 10px 10px",
  }));

  // FOR LIGHT THEME

  // FOR LIGHT THEME

  return (
    <div className={viewMode ? style.gsContainer : style.gsContainerLight}>
      <Head>
        <title>Token Economy</title>
      </Head>
      <Navbar />
      <Container>
        <div className={style.gsHead}>
          <h1 style={{ color: viewMode ? "white" : "black" }}>Token Economy</h1>
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={4} sm={6} md={2}>
                <div
                  className={
                    createAccount ? style.gsHeadBtnActive : style.gsHeadBtn
                  }
                  onClick={() => {
                    setCreateAccount(true);
                    setDeposit(false);
                    setWithdraw(false);
                    setVpp(false);
                    setAvatars(false);
                    setWithdraw(false);
                    setDeposit(false);
                    setGold(false);
                  }}
                >
                  <Button>Overview</Button>
                </div>
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <div
                  className={deposit ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setDeposit(true);
                    setCreateAccount(false);
                    setWithdraw(false);
                    setVpp(false);
                    setAvatars(false);
                    setWithdraw(false);
                    setGold(false);
                    setCreateAccount(false);
                  }}
                >
                  <Button>VPP Token</Button>
                </div>
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <div
                  className={gold ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setGold(true);
                    setVpp(false);
                    setAvatars(false);
                    setWithdraw(false);
                    setDeposit(false);
                    setCreateAccount(false);
                  }}
                >
                  <Button>$GOLD Token</Button>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <div
                  className={avatar ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setAvatars(true);
                    setGold(false);
                    setVpp(false);
                    setWithdraw(false);
                    setDeposit(false);
                    setCreateAccount(false);
                  }}
                >
                  <Button>NFT Avatars</Button>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <div
                  className={vpp ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setVpp(true);
                    setGold(false);
                    setAvatars(false);

                    setWithdraw(false);
                    setDeposit(false);
                    setCreateAccount(false);
                  }}
                >
                  <Button>VPP Staking</Button>
                </div>
              </Grid>
            </Grid>

            {createAccount && (
              <>
                <TableContainer
                  sx={{
                    width: "80%",
                    borderRadius: "10px",
                    marginTop: "5rem",
                    marginBottom: "2rem",
                  }}
                  className={style.tableMobile}
                  component={Paper}
                >
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <StyledTableHead>
                      <TableRow>
                        <StyledTableCell align="center">Assets</StyledTableCell>
                        <StyledTableCell align="center">
                          Definition
                        </StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">
                          How to Get
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Utility
                        </StyledTableCell>
                      </TableRow>
                    </StyledTableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell
                            component="th"
                            align="center"
                            scope="row"
                          >
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.fat}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.carbs}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.protein}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.util}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                {/* overview tab in mobile size */}
                <p className={viewMode?style.ovrTabText:style.ovrTabTextLight}>
                  VIRTUE uses several tokens accoss both real-money and
                  play-to-earn games.
                </p>

                {overViewTabData.map((boxData) => {
                  return (
                    <div key={boxData.assetData} className={viewMode?style.ovrTab:style.ovrTabLight}>
                      <p>Assets</p>
                      <p>{boxData.assetData}</p>
                      <p>Definition</p>

                      <p>{boxData.definitionData}</p>
                      <p>Price</p>
                      <p>{boxData.priceData}</p>

                      <p>How to Get</p>

                      <ul>
                        <li>{boxData?.howToGetData?.first}</li>
                        <li>{boxData?.howToGetData?.seconde}</li>
                        <li>{boxData?.howToGetData?.third}</li>
                      </ul>
                      <p>Utility</p>
                      <p>
                       {boxData.utilityData}
                      </p>
                    </div>
                  );
                })}
              </>
            )}

            {deposit && (
              <>
                <Grid container>
                  <Grid
                    container
                    sx={{
                      margin: "2rem 0",
                    }}
                  >
                    <Grid item xs={12} md={4}>
                      <div className={style.cards}>
                        <h3>12K</h3>
                        <p>VPP Holders (Ethereum)</p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <div className={style.cards}>
                        <h3>5900</h3>
                        <p>VPP Holders (BSC)</p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <div className={style.cards}>
                        <h3>100M+</h3>
                        <p>Volume Traded</p>
                      </div>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                        color: "white",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{ color: viewMode ? "white" : "black" }}
                      >
                        <h2>The VPP token can be used: </h2>
                        <p>
                          1. Staked by Players (Real-Money Only) : Earn bonus
                          chips each week to boost $GOLD earnings.
                        </p>
                        <p>
                          2. Staked to become a Justice : Justices are
                          non-playing peers who are assigned to tables but don’t
                          receive cards and ensure the security of the table
                          games. Justices in return receive $GOLD and $ETH
                          rewards based on the volume of play on the platform
                        </p>
                        <p>
                          3. Liquidity Provider : Purchasers of VPP can become a
                          Liquidity Provider on either PancakeSwap or Uniswap.
                        </p>
                        <h2>How to Buy </h2>
                        <p>
                          You can currently purchase Virtue Player Points from
                          the following markets :{" "}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                      }}
                    >
                      <Grid item xs={4} md={2}>
                        <div className={style.tradeplat}>
                          <img src="/assets/images/800px-Uniswap_Logo_and_Wordmark 1.png" />
                        </div>
                      </Grid>
                      <Grid item xs={4} md={2}>
                        <div className={style.tradeplat}>
                          <img src="/assets/images/PANCAKE-SWAP-02 1.png" />
                        </div>
                      </Grid>
                      <Grid item xs={4} md={2}>
                        <div className={style.tradeplat}>
                          <img src="/assets/images/Group.png" />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container className={style.Tokennomycontainer}>
                      <Grid item xs={12} sm={2} md={2}>
                        <div className={style.Tokennomy1}>
                          <h3>Tokenomics</h3>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={2} md={2}>
                        <div className={style.Tokennomy2}>
                          <h3>Earn Bonus Chips</h3>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={2} md={2}>
                        <div className={style.Tokennomy3}>
                          <h3>Become a Justice</h3>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={2} md={2}>
                        <div className={style.Tokennomy4}>
                          <h3>Become a Liquidity Povider</h3>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}

            {gold && (
              <>
                <Grid container>
                  <Grid
                    container
                    sx={{
                      margin: "2rem 0",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                        color: "white",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        style={{ color: viewMode ? "white" : "black" }}
                      >
                        <p>
                          The $GOLD token can be thought of as a rewards/loyalty
                          program, where 1 $GOLD is equal to $1 USDT
                        </p>
                        <p>
                          Players will be able to earn $GOLD by competing in a
                          free-to-play Weekly Leaderboard Challenge or by
                          grinding on our ETH tables. Players accrue $GOLD that
                          they can either use to play in $GOLD table games or
                          redeem for cash.
                        </p>
                        <p>
                          We are happy to announce that ALL PLAYERS are eligible
                          to compete in our new version of our P2E game to earn
                          $GOLD.
                        </p>
                        <p>The $GOLD token will be rolled out in 2 phases:</p>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                      }}
                    >
                      <Grid item xs={12} md={6}>
                        <div className={style.tradeplat2}>
                          <div className={style.tradeplat3}>
                            <img src="/assets/images/Vector 1.png" />
                            <h3>Phase 1</h3>
                          </div>
                          <div className={style.tradeplat4}>
                            <p>
                              Initially the $GOLD token will exist only within
                              the Virtue platform and will be redeemable
                              directly in the client prior to the end of the
                              promotion. However - all players will be able to
                              choose to either redeem part or all of their $GOLD
                              or use it to play $GOLD table games.
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div className={style.tradeplat2}>
                          <div className={style.tradeplat3}>
                            <img src="/assets/images/Vector 1.png" />
                            <h3>Phase 2</h3>
                          </div>
                          <div className={style.tradeplat4}>
                            <p>
                              The $GOLD tokens on the application will be
                              swapped for an ERC-20 token and Virtue will be
                              creating liquidity pools for $GOLD on Polygon’s
                              QuickSwap exchange so players can exchange for low
                              fees.
                            </p>
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid container className={style.Tokennomycontainer2}>
                      <Grid item xs={12}>
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Redeem :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          Players who earn $GOLD will be able to redeem their
                          $GOLD directly in the application to receive $USDT{" "}
                        </p>{" "}
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Play :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          In addition Virtue will be deploying $GOLD table games
                          that players can use their $GOLD tokens to compete for
                          additional special prizes.{" "}
                        </p>
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Purchase Virtue Poker’s Genesis NFT Avatars :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          Virtue will be announcing shortly our genesis mint of
                          NFT avatars that players will be able to purchase
                          using $GOLD to enhance their P2E earning potential.
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}

            {avatar && (
              <>
                <Grid container>
                  <Grid
                    container
                    sx={{
                      margin: "2rem 0",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                        color: "white",
                      }}
                    >
                      <Grid item xs={12}>
                        <p
                          className={style.pMobile}
                          style={{ color: viewMode ? "white" : "black" }}
                        >
                          Virtue is conducting a Genesis Mint of NFT avatars
                          that can be used in the following ways:
                        </p>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      sx={{
                        paddingTop: "2rem",
                        marginTop: "5rem",
                      }}
                    >
                      <Grid item xs={12} md={3}>
                        <div className={style.tradeplat5}>
                          <div className={style.tradeplat6}>
                            <img src="/assets/images/Ellipse 4.png" />
                          </div>
                          <div className={style.tradeplatP}>
                            <h3>Chip Bonus</h3>
                            <p>
                              Players who whitelist/purchase our NFT avatars
                              will receive a one-time Chips bonus (2,000) per
                              avatar. Chips bonus will help them better compete
                              in our Weekly Challenges.
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div className={style.tradeplat5}>
                          <div className={style.tradeplat6}>
                            <img src="/assets/images/discord 1.png" />
                          </div>
                          <div className={style.tradeplatP}>
                            <h3>Discord NFT Group</h3>
                            <p>
                              Players who whitelist/purchase our NFT avatars
                              will get access to private Discord with other NFT
                              owners. Owners of rare Virtue NFTs will get access
                              to an exclusive Discord group with Phil Ivey and
                              other brand ambassadors.
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div className={style.tradeplat5}>
                          <div className={style.tradeplat6}>
                            <img src="/assets/images/gold.png" />
                          </div>
                          <div className={style.tradeplatP}>
                            <h3>$GOLD Earnings</h3>
                            <p>
                              Players with active NFT avatars will earn a
                              multiplier on their weekly earnings based on their
                              finish on the leaderboard (coming later this
                              year).
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <div className={style.tradeplat5}>
                          <div className={style.tradeplat6}>
                            <img src="/assets/images/meta.png" />
                          </div>
                          <div className={style.tradeplatP}>
                            <h3>Metaverse Poker</h3>
                            <p>
                              NFT avatars will be portable across Virtue
                              real-money and play-to-earn games into our
                              Metaverse poker game (coming later this year).
                            </p>
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid container className={style.Tokennomycontainer2}>
                      <Grid item xs={12}>
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Cost :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          Genesis Mint of Virtue NFT will cost 150 $GOLD per
                          avatar. Our upcoming Genesis Mint of NFT avatars will
                          be 500 units of hand-designed unique art characters
                          among five rarities that will change the utility
                          players receive from their NFT.
                        </p>
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Whitelisting :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          In addition Virtue will be deploying $GOLD table games
                          that players can use their $GOLD tokens to compete for
                          additional special prizes.
                        </p>
                        <h3 style={{ color: viewMode ? "white" : "black" }}>
                          Purchase Virtue Poker’s Genesis NFT Avatars :
                        </h3>
                        <p style={{ color: viewMode ? "white" : "black" }}>
                          Whitelisting will be open from June 3rd until sold
                          out. Players who want to get Virtue NFT need to go to
                          the Cashier and redeem $GOLD for an NFT avatar.
                          Players will receive a confirmation email once added
                          to the whitelist. Players will receive a one-time
                          Chips bonus (2,000) credited to their account.
                        </p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Accordion
                        expanded={expanded === "panel0"}
                        onChange={handleChange("panel0")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            How do I reserve an NFT avatar?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Log-in to the Virtue application Go to the
                            Promotions Navigate to the $GOLD redemption page
                            Click “redeem for NFT” That’s it! Players will
                            receive an email confirming they’ve successfully
                            reserved their NFT avatar. Players will be able to
                            redeem their $GOLD for an NFT starting on June 3rd,
                            2022 - and NFT redemption will be open until the 500
                            genesis NFTs are sold out.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            Can I purchase multiple NFT avatars?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            I don’t have 150 $GOLD, can I still buy an NFT
                            avatar?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            When will I receive my NFT avatar(s)?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            How will I claim my NFT?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            Will I receive my chips bonus prior to claiming my
                            NFT avatar?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={expanded === "panel6"}
                        onChange={handleChange("panel6")}
                        sx={{
                          background: viewMode ? "#2A2B38" : "#E1E1E1",
                          color: viewMode ? "#ffff" : "#00000",
                          width: "100%",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "80%", flexShrink: 0 }}>
                            After I receive it, how can I use the NFT avatar in
                            the Virtue application?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam
                            mattis feugiat. Aliquam eget maximus est, id
                            dignissim quam.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}

            {vpp && (
              <>
                <Grid container>
                  <Grid container>
                    <Grid item xs={12} className={style.vppheader}>
                      <h3 style={{ color: viewMode ? "white" : "black" }}>
                        Virtue Player Points (VPP) is the utility token that
                        powers the Virtue ecosystem.
                      </h3>
                      <h2
                        className={style.councilMobile}
                        style={{ color: viewMode ? "white" : "black" }}
                      >
                        The Virtue Council
                      </h2>
                      <p style={{ color: viewMode ? "white" : "black" }}>
                        VPP holders who stake and lock their VPP tokens will
                        gain membership to the Virtue Council which provides
                        governance decisions* on updates to the Virtue ecosystem
                        (excluding legal and regulatory affairs) and in return
                        receive staking rewards and bonus chips for our
                        play-to-earn game. Only Council members who have staked
                        200,000 VPP or greater can submit governance proposals,
                        while anyone who submits any amount of VPP to the
                        staking pool will receive voting power proportional to
                        their stake. Participants in the Justice Staking Pool
                        will also receive 10% of the ETH fees generated on
                        Virtue during their respective staking period.
                      </p>
                      <span style={{ color: viewMode ? "#32e4bf" : "#0E72CC" }}>
                        *Note: Virtue will soon incorporate Snapshot
                        (decentralized voting tool) into our staking pool to
                        power our governance function.
                      </span>
                      <h3
                        className={style.councilMobile}
                        style={{ color: viewMode ? "white" : "black" }}
                      >
                        Play-to-Earn Chips Bonus
                      </h3>
                      <p style={{ color: viewMode ? "white" : "black" }}>
                        All Virtue Council members (stakers) will receive a 1000
                        chips* bonus for participating in our governance
                        program. These chips can be used to compete in our daily
                        and weekly play-to-earn competitions.
                      </p>
                      <span style={{ color: viewMode ? "#32e4bf" : "#0E72CC" }}>
                        *Note: In order to receive the 1000 chips bonus, an
                        individual must submit their VPP stake from the same
                        wallet as their source of funds for their Virtue
                        Account. Chips bonuses will be credited within 72 hours
                        after the close of the pools.
                      </span>
                      <h3
                        className={style.councilMobile}
                        style={{ color: viewMode ? "white" : "black" }}
                      >
                        Open Staking Pools
                      </h3>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        padding: { lg: "1rem 5rem", xs: "0" },
                      }}
                    >
                      <Grid item xs={12} md={4}>
                        <div className={style.player}>
                          <div className={style.playerTitle}>
                            <h2>Player 1 (ETH)</h2>
                            <span id={style.border}></span>
                          </div>
                          <div className={style.player2}>
                            <div className={style.player3}>
                              <p>Time Period</p>
                              <span>90 Days</span>
                            </div>
                            <div className={style.player3}>
                              <p>Min Stake</p>
                              <span>5,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Max Stake</p>
                              <span>50,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Pool Size</p>
                              <span>2,000,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>APR</p>
                              <span>25%</span>
                            </div>
                            <div className={style.player3}>
                              <p>ETH Rewards</p>
                              <span>0</span>
                            </div>
                            <div className={style.player3}>
                              <p>Governance</p>
                              <span>Proportional Voting</span>
                            </div>
                            <div className={style.player3}>
                              <p>Chip Bonus </p>
                              <span>1000</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Open</p>
                              <span>June 6th</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Close</p>
                              <span>June 20th</span>
                            </div>
                          </div>
                          <div className={style.playerButton}>
                            <h3>Stack</h3>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className={style.player}>
                          <div className={style.playerTitle}>
                            <h2>Player 1 (BSC)</h2>
                            <span id={style.border}></span>
                          </div>
                          <div className={style.player2}>
                            <div className={style.player3}>
                              <p>Time Period</p>
                              <span>90 Days</span>
                            </div>
                            <div className={style.player3}>
                              <p>Min Stake</p>
                              <span>5,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Max Stake</p>
                              <span>50,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Pool Size</p>
                              <span>2,000,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>APR</p>
                              <span>25%</span>
                            </div>
                            <div className={style.player3}>
                              <p>ETH Rewards</p>
                              <span>0</span>
                            </div>
                            <div className={style.player3}>
                              <p>Governance</p>
                              <span>Proportional Voting</span>
                            </div>
                            <div className={style.player3}>
                              <p>Chip Bonus </p>
                              <span>1000</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Open</p>
                              <span>June 6th</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Close</p>
                              <span>June 20th</span>
                            </div>
                          </div>
                          <div className={style.playerButton}>
                            <h3>Stack</h3>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <div className={style.player}>
                          <div className={style.playerTitle}>
                            <h2>Player 1 (ETH)</h2>
                            <span id={style.border}></span>
                          </div>
                          <div className={style.player2}>
                            <div className={style.player3}>
                              <p>Time Period</p>
                              <span>180 Days</span>
                            </div>
                            <div className={style.player3}>
                              <p>Min Stake</p>
                              <span>200,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Max Stake</p>
                              <span>3,000,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>Pool Size</p>
                              <span>15,000,000 VPP</span>
                            </div>
                            <div className={style.player3}>
                              <p>APR</p>
                              <span>50%</span>
                            </div>
                            <div className={style.player3}>
                              <p>ETH Rewards</p>
                              <span>0</span>
                            </div>
                            <div className={style.player3}>
                              <p>Governance</p>
                              <span>Proportional Voting</span>
                            </div>
                            <div className={style.player3}>
                              <p>Chip Bonus </p>
                              <span>1000</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Open</p>
                              <span>June 6th</span>
                            </div>
                            <div className={style.player3}>
                              <p>Registration Close</p>
                              <span>June 20th</span>
                            </div>
                          </div>
                          <div className={style.playerButton}>
                            <h3>Stack</h3>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </div>
      </Container>

      <Footer viewMode={viewMode} />
    </div>
  );
};

export default StaticGettingStarted;
