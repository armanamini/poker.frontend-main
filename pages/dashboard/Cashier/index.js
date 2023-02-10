import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardAssets/Navbar";
import style from "../dashboard.module.css";
import styles from "../finance/promotion.module.css";
import { Container, Grid } from "@mui/material";
import DownloadPlayButton from "../../../components/DownloadPlayButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../../../components/DashboardAssets/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/counterSlice";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import SyncIcon from "@mui/icons-material/Sync";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Checkbox from "@mui/material/Checkbox";
import CustomizedTables5 from "../../../components/DashboardAssets/tables/table5";
import axios from "axios";
import FormDialog from "../../../components/popup/Popup";
import { ethers } from "ethers";
import FormDialogWithdraw from "../../../components/popup/PopupWithdraw";
import Head from "next/head";
import { ThemeContext } from "../../../contexts/theme-context";


const Cashier = () => {
  const [balance, setBalance] = useState(true);
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [transactions, setTransactions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  // states for chaging tabs in deposit section
  const [eth, setEth] = useState(true);
  const [vpp, setVpp] = useState(true);
  const [eth2, setEth2] = useState(true);
  const [vpp2, setVpp2] = useState(true);
  const [userToken, setUserToken] = React.useState();
  const [gettransaction,setGetTransactions] = React.useState();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
    axios
      .get("https://vp.megaverse.today/api/v1/user/me", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => {
        setUserToken(res.data);
        console.log(userToken, "Tokens");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    // FOR LIGHT THEME
    const { theme, setTheme } = React.useContext(ThemeContext);
    const [viewMode, setViewMode] = useState(theme);
    useEffect(() => {
      const getLocalTheme = localStorage.getItem("theme");
      setViewMode(getLocalTheme === "dark" ? true : false);
    }, [viewMode, theme]);
  
    //

  const handleDeposit = async () => {
    console.log("amount1", amount, type);
    const addr = "0x1854D416a203379740F67C2b1b4aAE2Ce8Ed29cf"; // receiver addresss goreli
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(amount),
      });
      console.log({ amount, addr });
      console.log("tx", tx);
    } catch (err) {
      alert(err.message);
    }
  };


  const handleWithdraw = () => {
    console.log("amountWithdraw", amount, type);
  };

  useEffect(()=>{
    axios.get("https://vp.megaverse.today/api/v1/user/getTransactions", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        }     
    }).then(res=>{
      setGetTransactions(res)
      console.log(res,"transaction");
    }).catch(err=>{
      console.log(err);
    })

  },[])

  return (
    <>
      <Head>
        <title>Cashier</title>
      </Head>
      <Navbar viewMode={viewMode} />
      <Sidebar viewMode={viewMode}  />
      <div className={viewMode?style.test:style.testLight}>
        <Container>
          <Grid sx={{ paddingTop: "7rem" }} container justifyContent="center">
            <Grid className={style.firstGrid} md={12} lg={3} sm={12} xs={12}>
              <h1 className={viewMode?style.cashierText:style.cashierTextLight}>Cashier</h1>
              <div className={viewMode?style.cashBox:style.cashBoxLight}>
                <div
                  onClick={() => {
                    setDeposit(false);
                    setBalance(true);
                    setWithdraw(false);
                    setTransactions(false);
                  }}
                  className={balance ? `${style.boxItem}` : `${style.boxItem2}`}
                >
                  <p className={style.balncesTextMob}  style={{color:viewMode?"white":"#444444"}}>Balances</p>
                </div>
                <div
                  onClick={() => {
                    setDeposit(true);
                    setBalance(false);
                    setWithdraw(false);
                    setTransactions(false);
                  }}
                  className={deposit ? `${style.boxItem}` : `${style.boxItem2}`}
                >
                  <p  style={{color:viewMode?"white":"#444444"}}>Deposit</p>
                </div>
                <div
                  onClick={() => {
                    setDeposit(false);
                    setBalance(false);
                    setWithdraw(true);
                    setTransactions(false);
                  }}
                  className={
                    withdraw ? `${style.boxItem}` : `${style.boxItem2}`
                  }
                >
                  <p  style={{color:viewMode?"white":"#444444"}}>Withdraw</p>
                </div>
                <div
                  onClick={() => {
                    setDeposit(false);
                    setBalance(false);
                    setWithdraw(false);
                    setTransactions(true);
                  }}
                  className={
                    transactions ? `${style.boxItem}` : `${style.boxItem2}`
                  }
                >
                  <p  style={{color:viewMode?"white":"#444444"}}>Transactions</p>
                </div>
              </div>
            </Grid>

            <Grid md={12} lg={9} sm={12} xs={12} sx={{ padding: {md:"6rem 7rem",xs:"6rem 0"} }}>
              {balance ? (
                // BALANCE UI
                <>
                  <h3 style={{color:viewMode?"#FFFFFF":"#444444"}} className={style.balanceText}>Balances</h3>
                  <div className={style.totalBox}>
                    <p className={style.blcText}>Total ETH</p>
                    <p className={style.blcText2}>
                      {userToken?.transactions?.ethBalance}
                    </p>
                    <p className={style.blcText}>Source of Funds Address</p>
                    <p className={style.blcText3}>
                      {userToken?.wallet?.address || (
                        <span>you did not connect your wallet yet ...</span>
                      )}
                    </p>
                  </div>
                  <h3 style={{color:viewMode?"#FFFFFF":"#444444"}} className={style.avBalanxeText}>Available Balance</h3>

                  <div className={style.cardsFlex}>
                    <div className={style.blcCard}>
                      <img src="/assets/images/eth-diamond-black 1.png" />
                      <div>
                        <p>ETH</p>
                        <p>{userToken?.transactions?.ethBalance}</p>
                        {/* <p>199.86 USD</p> */}
                        <div className="flex">
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("ETH")}
                          >
                            <FormDialog
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleDeposit={handleDeposit}
                            />
                          </div>
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("ETH")}
                          >
                            <FormDialogWithdraw
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleWithdraw={handleWithdraw}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={style.blcCard2}>
                      <img src="/assets/images/vp-icon-black 1.png" />
                      <div>
                        <p>VPP</p>
                        <p>{userToken?.transactions?.vppBalance}</p>
                        {/* <p>20005.37 USD</p> */}
                        <div className="flex">
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("VPP")}
                          >
                            <FormDialog
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleDeposit={handleDeposit}
                            />
                          </div>
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("VPP")}
                          >
                            <FormDialogWithdraw
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleWithdraw={handleWithdraw}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={style.blcCard3}>
                      <img src="/assets/images/vp-icon-black 1.png" />
                      <div>
                        <p>$GOLD</p>
                        <p>{userToken?.transactions?.goldBalance}</p>
                        {/* <p>20005.37 USD</p> */}
                        <p></p>
                        <div className="flex">
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("GOLD")}
                          >
                            <FormDialog
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleDeposit={handleDeposit}
                            />
                          </div>
                          <div
                            style={{ display: "flex" }}
                            onClick={() => setType("GOLD")}
                          >
                            <FormDialogWithdraw
                              amount={amount}
                              setAmount={setAmount}
                              type={type}
                              handleWithdraw={handleWithdraw}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </>
              ) : deposit ? (
                // DEPOSTT UI
                <>
                  <h3 className={viewMode?style.balanceText:style.balanceTextLight}>Deposit</h3>
                  <p  className={viewMode?style.depText:style.depTextLight}>
                    You can deposit any of the below supported tokens. To start,
                    select a token you’d like to deposit from.
                  </p>
                  <p className={style.depDanger}>
                    Important: You CANNOT deposit directly from an exchange
                    (i.e. Bitcoin, Binance)
                  </p>

                  <p className={viewMode?style.chooseDep:style.chooseDepLight}>Choose Deposit Token : </p>
                  <div className={style.chooseFlex}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVpp(true);
                        setEth(true);
                      }}
                      className={
                        eth ? `${style.chooseDep1}` : `${style.chooseDep2}`
                      }
                    >
                      <img src="/images/vpp2.png" />
                      <p>Deposit ETH</p>
                    </div>

                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVpp(false);
                        setEth(false);
                      }}
                      className={
                        vpp ? `${style.chooseDep2}` : `${style.chooseDep1}`
                      }
                    >
                      <img src="/images/vpp.png" />
                      <p>Deposit VPP</p>
                    </div>
                  </div>

                  <div className={viewMode?style.depContentHole:style.depContentHoleLight}>
                    {eth ? (
                      <>
                        <p className={viewMode?style.depContentTitle:style.depContentTitleLight}>
                          How to deposit Ether (ETH)
                        </p>
                        <ul>
                          <li>
                            Please click Copy to copy the Virtue Gaming contract
                            address.
                          </li>
                          <li>
                            {" "}
                            Go to your external Source of Funds. Send the amount
                            you wish to deposit by pasting the Virtue Gaming
                            Contract address in the recipients field of your SOF
                            wallet.
                          </li>
                          <li>
                            {" "}
                            You will be charged a “gas” fee in terms of ETH on
                            your deposit.
                          </li>
                          <li>
                            Check for a recommended gas fee at
                            https://etherscan.io/gastracker.
                          </li>
                          <li>
                            Set a gaslimit over 60000. Raising the gas limit
                            doesn’t increase transaction costs.
                          </li>
                        </ul>
                        <p
                          style={{ marginTop: "20px" }}
                          className={viewMode?style.depContentTitle:style.depContentTitleLight}
                        >
                          Important
                        </p>
                        <p className={viewMode?style.depMsg:style.depMsgLight}>
                          DO NOT SEND ANYTHING OTHER THAN ETH TO THIS ADDRESS.
                          <br /> Anything else you send will be lost.
                        </p>
                        <p
                          style={{ marginTop: "40px" }}
                          className={viewMode?style.depMsg:style.depMsgLight}
                        >
                          {" "}
                          DO NOT SEND ETH FROM AN EXCHANGE ADDRESS. ONLY SEND
                          ETH FROM YOUR SOURCE OF FUNDS ADDRESS THAT IS
                          DISPLAYED BELOW.
                        </p>
                        <p className={viewMode?style.depTextGR:style.depTextGRLight}>
                          Deposit will take up to 5 minutes (15 confirmations
                          blocks).
                        </p>
                        <p
                          style={{ marginTop: "20px" }}
                          className={viewMode?style.depMsg:style.depMsgLight}
                        >
                          For help depositing email{" "}
                          <span style={{ color: viewMode?"#32E4BF":"#0E72CC" }}>
                            support@virtue.poker
                          </span>
                        </p>
                        <p className={viewMode?style.depAddrText:style.depAddrTextLight}>
                          External Source of Funds Address :
                        </p>
                        <div className={style.addrDiv}>
                          <p>0x19c5341c9b2164fa4116cca380b7b428bff4de04</p>

                          <CopyToClipboard
                            text={`0x19c5341c9b2164fa4116cca380b7b428bff4de04`}
                            onCopy={() => {
                              setCopied(true);
                              setTimeout(() => {
                                setCopied(false);
                              }, 2000);
                            }}
                          >
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </CopyToClipboard>
                          {copied && (
                            <span className={style.copiedText}>Copied </span>
                          )}
                        </div>
                        <p className={viewMode?style.depAddrText:style.depAddrTextLight}>
                          Virtue Gaming Contract Address :
                        </p>
                        <div className={style.addrDiv}>
                          <p>0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a</p>
                          <CopyToClipboard
                            text={`0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a`}
                            onCopy={() => {
                              setCopied2(true);
                              setTimeout(() => {
                                setCopied2(false);
                              }, 2000);
                            }}
                          >
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </CopyToClipboard>
                          {copied2 && (
                            <span className={style.copiedText}>Copied </span>
                          )}
                        </div>
                        <div className={style.lastPcontainer}>
                          <p className={viewMode?style.depLastP:style.depLastPLight}>
                            Ether (ETH) Balance in Virtue Gaming : 0.0000 ETH{" "}
                          </p>
                          <SyncIcon
                            sx={{
                              color: viewMode?"#32E4BF":"#0E72CC",
                              marginLeft: "10px",
                              marginTop: "10px",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* vpp content tab */}
                        <p className={viewMode?style.vppTextTitle:style.vppTextTitleLight}>
                          How to deposit Virtue Player Points (VPP)
                        </p>
                        <p className={style.textToolani}>
                          You can not deposit directly from an exchange. Only
                          deposit using an external source of funds address, a
                          cryptocurrency wallet, where you control the private
                          keys (e.g. Metamask, MEW). If you have any questions
                          regarding this process please visit the Virtue Gaming
                          Help Center. If you still have questions please submit
                          an email to support@virtue.poker BEFORE you attempt to
                          deposit.
                        </p>
                        <p
                          style={{ marginTop: "30px" }}
                          className={viewMode?style.vppTextTitle:style.vppTextTitleLight}
                        >
                          Add Vpp token to your Wallet:
                        </p>
                        <p className={viewMode?style.vppGray:style.vppGrayLight}>
                          1.Make sure that your external wallet is pointed to
                          the Ethereum Mainnet.
                        </p>
                        <p
                          style={{ marginTop: "5px" }}
                          className={viewMode?style.vppGray:style.vppGrayLight}
                        >
                          2. Add VPP tokens to your wallet using Add Token and
                          the following parameters for a Custom Token:
                        </p>
                        <ul className={style.vppUl}>
                          <li>
                            Token contract address:
                            0x5eeaa2dcb23056f4e8654a349e57eb
                          </li>
                          <li>Token symbol VPP</li>
                          <li>Decimal places of precision 18</li>
                        </ul>
                        <p
                          style={{ marginTop: "20px" }}
                          className={viewMode?style.vppTextTitle:style.vppTextTitleLight}
                        >
                          To deposit VPPs from your external Source of Funds:
                        </p>
                        <p  className={viewMode?style.vppGray:style.vppGrayLight}>
                          1.Ensure that your external wallet is pointing to the
                          Ethereum Mainnet.
                        </p>
                        <p   className={viewMode?style.vppGray:style.vppGrayLight}>
                          2. If your wallet supports more than one address,
                          select your Source of Funds address.
                        </p>
                        <p   className={viewMode?style.vppGray:style.vppGrayLight}>
                          3. Click the Copy button below to copy the Virtue
                          Gaming Contract Address and paste the address into
                          your external wallet (see your wallet for instructions
                          on sending tokens). Your wallet will also require the
                          number of VPPs to transfer and the appropriate amount
                          of ETH for network ‘gas’ fees.
                        </p>
                        <p   className={viewMode?style.vppGray:style.vppGrayLight}>
                          4. Set a gaslimit over 60000. Raising the gas limit
                          doesn’t increase transaction costs.
                        </p>

                        <p
                          style={{ marginTop: "30px" }}
                          className={viewMode?style.vppTextTitle:style.vppTextTitleLight}
                        >
                          Important
                        </p>
                        <p  className={viewMode?style.vppGray:style.vppGrayLight}>
                          DO NOT USE ANY OTHER EXTERNAL ADDRESS TO SEND VPPs.
                          The Virtue Gaming system identifies you based on your
                          external wallet address. If you use any other address,
                          the VPPs you transfer will not reach your Virtue
                          Gaming account and will most likely be lost.
                        </p>

                        <p
                          style={{ marginTop: "30px" }}
                          className={viewMode?style.vppGray:style.vppGrayLight}
                        >
                          DO NOT SEND ANYTHING OTHER THAN VPPS TO THIS ADDRESS.
                        </p>
                        <p
                          style={{ marginTop: "2px" }}
                          className={viewMode?style.vppGray:style.vppGrayLight}
                        >
                          Anything else you send will be lost.
                        </p>
                        <p className={viewMode?style.depTextGR:style.depTextGRLight}>
                          Deposit will take up to 5 minutes (15 confirmations
                          blocks).
                        </p>
                        <p
                          style={{ marginTop: "20px" }}
                          className={viewMode?style.vppGray:style.vppGrayLight}
                        >
                          {" "}
                          For help depositing email{" "}
                          <span style={{ color: viewMode?"#32E4BF":"#0E72CC" }}>
                            support@virtue.poker
                          </span>{" "}
                        </p>

                        <p  className={viewMode?style.depAddrText:style.depAddrTextLight}>
                          External Source of Funds Address :
                        </p>
                        <div className={style.addrDiv}>
                          <p>0x19c5341c9b2164fa4116cca380b7b428bff4de04</p>
                          <CopyToClipboard
                            text={`0x19c5341c9b2164fa4116cca380b7b428bff4de04`}
                            onCopy={() => {
                              setCopied4(true);
                              setTimeout(() => {
                                setCopied4(false);
                              }, 2000);
                            }}
                          >
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </CopyToClipboard>
                          {copied4 && (
                            <span className={style.copiedText}>Copied </span>
                          )}
                        </div>
                        <p className={viewMode?style.depAddrText:style.depAddrTextLight}>
                          Virtue Gaming Contract Address :
                        </p>
                        <div className={style.addrDiv}>
                          <p>0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a</p>
                          <CopyToClipboard
                            text={`0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a`}
                            onCopy={() => {
                              setCopied3(true);
                              setTimeout(() => {
                                setCopied3(false);
                              }, 2000);
                            }}
                          >
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </CopyToClipboard>
                          {copied3 && (
                            <span className={style.copiedText}>Copied </span>
                          )}
                        </div>

                        <div className={style.lastPcontainer}>
                          <p className={viewMode?style.depLastP:style.depLastPLight}>
                            Virtue Player Point (VPP) Balance in Virtue Gaming :
                            0.0000 VPP
                          </p>
                          <SyncIcon
                            sx={{
                              color: viewMode?"#32E4BF":"#0E72CC",
                              marginLeft: "10px",
                              marginTop: "10px",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : withdraw ? (
                <>
                  {/* WITHDRAW UI HERE */}
                  <h3 className={viewMode?style.balanceText:style.balanceTextLight}>Withdraw</h3>
                  <div className={viewMode?style.withdrawBoxRed:style.withdrawBoxRedLight}>
                    <p className={viewMode?style.TitleRedWithdraw:style.TitleRedWithdrawLight}>
                      ID Verification Required to Withdraw
                    </p>
                    <p className={viewMode?style.withdrawRedText:style.withdrawRedTextLight}>
                      You must complete the ID verification process before
                      making your first withdrawal. You will be taken to an
                      external web page (fractal.id) to complete this process.
                    </p>
                    <div className={style.flexCheck}>
                      <Checkbox
                        sx={{
                          color:viewMode?"white":"black",
                          "&.Mui-checked": {
                            color:viewMode?"white":"black",
                          },
                        }}
                      />
                      <p style={{color:viewMode?"white":"black"}}>
                        I am or I am related to a Politically Exposed Person
                      </p>
                    </div>
                    <button className={viewMode?style.withdrawRedBoxBtn:style.withdrawRedBoxBtnLight}>
                      Start ID Verification
                    </button>
                  </div>

                  <p style={{ marginTop: "40px" }} className={viewMode?style.chooseDep:style.chooseDepLight}>
                    Choose Withdraw Token :{" "}
                  </p>
                  <div className={style.chooseFlex}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVpp2(true);
                        setEth2(true);
                      }}
                      className={
                        eth2 ? `${style.chooseDep1}` : `${style.chooseDep2}`
                      }
                    >
                      <img src="/images/vpp2.png" />
                      <p>Withdraw ETH</p>
                    </div>

                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setVpp2(false);
                        setEth2(false);
                      }}
                      className={
                        vpp2 ?  `${style.chooseDep2}` : `${style.chooseDep1}`
                      }
                    >
                      <img src="/images/vpp.png" />
                      <p>Withdraw VPP</p>
                    </div>
                  </div>
                  <div className={viewMode?style.depContentHole:style.depContentHoleLight}>
                    {eth2 ? (
                      <>
                        {" "}
                        <p className={viewMode?style.whithDrawBoxGrayTitle:style.whithDrawBoxGrayTitleLight}>
                          Withdraw Ether (ETH)
                        </p>
                        <p className={viewMode?style.textWithdarww:style.textWithdarwwLight}>
                          Enter the amount of Ether (ETH) to withdraw. This
                          amount will be sent from your available balance to
                          your source of funds balance in the external wallet
                          which you linked when you registered.
                        </p>
                        <p className={viewMode?style.withdrawLittleText:style.withdrawLittleTextLight}>
                          For help withdrawing email{" "}
                          <span style={{ color: viewMode?"#32E4BF":"#0E72CC" }}>
                            support@virtue.poker
                          </span>
                        </p>
                        <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                          Source of Funds Balance :
                        </p>
                        <div className={style.fundsWithdarwDiv}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>0.0000 ETH</p>
                            <SyncIcon
                              sx={{
                                color: "white",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                          Source of Funds Ethereum Address :
                        </p>
                        <div className={style.addrWithdarwDiv}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a</p>
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className={style.withDrawFlexBoxes}>
                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Available Balance :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Maximum Withdrawal :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Minimum Withdrawal :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className={viewMode?style.WithdrawBalanceTitleGR:style.WithdrawBalanceTitleGRLight}>
                          Withdraw ETH :
                        </p>
                        <div className={style.lastFlexWithdraw}>
                          <div className={viewMode?style.grDviWithdraw:style.grDviWithdrawLight}>
                            <p>0.0000 ETH</p>
                          </div>
                          <button className={style.lastWithdrawBtn}>
                            Withdraw Now
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {" "}
                        <p className={viewMode?style.whithDrawBoxGrayTitle:style.whithDrawBoxGrayTitleLight}>
                          Withdraw Virtue Player Points (VPP)
                        </p>
                        <p className={viewMode?style.textWithdarww:style.textWithdarwwLight}>
                          Enter the amount of Virtue Player Points (VPP) to
                          withdraw. This amount will be sent from your available
                          balance to your source of funds balance in the
                          external wallet which you linked when you registered.
                        </p>
                        <p className={viewMode?style.withdrawLittleText:style.withdrawLittleTextLight}>
                          For help withdrawing email{" "}
                          <span style={{ color: viewMode?"#32E4BF":"#0E72CC" }}>
                            support@virtue.poker
                          </span>
                        </p>
                        <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                          Source of Funds Balance :
                        </p>
                        <div className={style.fundsWithdarwDiv}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>0.0000 ETH</p>
                            <SyncIcon
                              sx={{
                                color: "white",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                        <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                          Source of Funds Ethereum Address :
                        </p>
                        <div className={style.addrWithdarwDiv}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>0x30b84DC1A46C58E0BcfE6AA9f74042dFf159277a</p>
                            <CopyAllIcon
                              sx={{ color: "white", cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className={style.withDrawFlexBoxes}>
                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Available Balance :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Maximum Withdrawal :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className={viewMode?style.WithdrawBalanceTitle:style.WithdrawBalanceTitleLight}>
                              Minimum Withdrawal :
                            </p>
                            <div className={style.fundsWithdarwDiv2}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>0.0000 ETH</p>
                                <SyncIcon
                                  sx={{
                                    color: "white",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className={viewMode?style.WithdrawBalanceTitleGR:style.WithdrawBalanceTitleGRLight}>
                          Withdraw ETH :
                        </p>
                        <div className={style.lastFlexWithdraw}>
                          <div className={viewMode?style.grDviWithdraw:style.grDviWithdrawLight}>
                            <p>0.0000 ETH</p>
                          </div>
                          <button className={style.lastWithdrawBtn}>
                            Withdraw Now
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* TRANSACTIONS UI HERE */}
                  <h3
                    style={{ marginBottom: "30px" }}
                    className={viewMode?style.balanceText:style.balanceTextLight}
                  >
                    Transactions
                  </h3>
                  <CustomizedTables5 viewMode={viewMode} gettransaction={gettransaction}/>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
        <Footer viewMode={viewMode} />
      </div>
    </>
  );
};

export default Cashier;
