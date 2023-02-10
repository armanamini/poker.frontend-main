import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./dynamicPage.module.css";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { ThemeContext } from "../../contexts/theme-context";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/counterSlice";
import { useWindowScroll } from 'react-use';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const StaticGettingStarted = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.counter);
   // FOR LIGHT THEME
   const { theme, setTheme } = React.useContext(ThemeContext);
   const [viewMode,setViewMode] = useState(theme)
  useEffect(()=>{
   const getLocalTheme = localStorage.getItem("theme");
   setViewMode(getLocalTheme === "dark" ?true:false)
 
 
  },[viewMode,theme])
  
   //
   useEffect(()=>{
dispatch(fetchUsers())
   },[])


  //  scroll sticky
  const { y: pageYOffset}=useWindowScroll();
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
      if(pageYOffset > 300){
        setSticky(true)

      }else{
        setSticky(false)

      }

  },[pageYOffset])

  // Config for scroll on a related section
  //1:
  const sectionOne = useRef(null);
  const goToSectionOne = () =>
    window.scrollTo({ top: sectionOne.current.offsetTop -100
      , behavior: "smooth" });

  //2:
  const sectionTwo = useRef(null);
  const goToSectionTwo = () =>
    window.scrollTo({ top: sectionTwo.current.offsetTop-100
      , 
      behavior: "smooth" });

  //3:
  const sectionThree = useRef(null);
  const goToSectionThree = () =>
    window.scrollTo({
      top: sectionThree.current.offsetTop -100,
      behavior: "smooth",
    });

  const sectionFour = useRef(null);
  const goToSectionFour = () =>
    window.scrollTo({ top: sectionFour.current.offsetTop -100, behavior: "smooth" });

  // deposit:
  //1:
  const sectionOneDep = useRef(null);
  const goToSectionOneDep = () =>
    window.scrollTo({
      top: sectionOneDep.current.offsetTop -100,
      behavior: "smooth",
    });
  //2:

  const sectionTwoDep = useRef(null);
  const goToSectionTwoDep = () =>
    window.scrollTo({
      top: sectionTwoDep.current.offsetTop -100,
      behavior: "smooth",
    });

  //3:
  const sectionThreeDep = useRef(null);
  const goToSectionThreeDep = () =>
    window.scrollTo({
      top: sectionThreeDep.current.offsetTop -100,
      behavior: "smooth",
    });
  //4:
  const sectionFourDep = useRef(null);
  const goToSectionFourDep = () =>
    window.scrollTo({
      top: sectionFourDep.current.offsetTop -100,
      behavior: "smooth",
    });

  //withdraw:
  //1:
  const sectionOneWith = useRef(null);
  const goToSectionOneWith = () =>
    window.scrollTo({
      top: sectionOneWith.current.offsetTop-100,
      behavior: "smooth",
    });

    //2 :
    const sectionTwoWith = useRef(null);
    const goToSectionTwoWith = () =>
      window.scrollTo({
        top: sectionTwoWith.current.offsetTop-100,
        behavior: "smooth",
      });

  //End configurayion for scroll

  const [createAccount, setCreateAccount] = useState(true);
  const [withdraw, setWithdraw] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const fields = [
    "3.1. Enter your password",
    "3.2. Enter Personal Information",
    "3.3. Enter Display Name",
    "3.4. Verify your account",
    "3.5. Initial Setup Done",
    "3.6. Connect Wallet",
    "3.7. Add Wallet Address",
    "3.8. Create Wallet",
    "3.9. Secure Wallet",
  ];

  return (
    <div className={viewMode ? style.gsContainer: style.gsContainerLight}>
      <Head>
        <title>Getting Started</title>
      </Head>
        <Navbar />
      <Container>
        <div className={viewMode ? style.gsHead : style.gsHeadLight}>
          <h1>Getting Started</h1>
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{
                padding:{md:"0 5px",xs:"0"}
              }}
            >
              <Grid item xs={4} sm={4} md={4}>
                <div
                  className={
                    createAccount ? style.gsHeadBtnActive : style.gsHeadBtn
                  }
                  onClick={() => {
                    setCreateAccount(true);
                    setDeposit(false);
                    setWithdraw(false);
                  }}
                 
                >
                  <Button>Create Account</Button>
                </div>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <div
                  className={deposit ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setDeposit(true);
                    setCreateAccount(false);
                    setWithdraw(false);
                  }}
                >
                  <Button>Deposit</Button>
                </div>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <div
                  className={withdraw ? style.gsHeadBtnActive : style.gsHeadBtn}
                  onClick={() => {
                    setWithdraw(true);
                    setDeposit(false);
                    setCreateAccount(false);
                  }}
                  
                >
                  <Button>Withdraw</Button>
                </div>
              </Grid>
            </Grid>

            {createAccount && (
              <>
                <Grid
                  sx={{
                    color: "white",   
                             
                  }}
                  md={3}
                  lg={3}
                  sm={12}
                  xs={12}
                >
                  <div style={{
                     position:sticky?"sticky":"relative",
                     top:sticky?"100px":null,
                  
                     marginLeft:'5rem'

                  }} className={viewMode ? style.cashBox : style.cashBoxLight}>
                    <div className={style.boxItem2}>
                      <p onClick={goToSectionOne}>1. Download the App</p>
                    </div>
                    <div className={style.boxItem2}>
                      <p onClick={goToSectionTwo}>2. Click on Sign Up</p>
                    </div>
                    <div className={style.boxItem2}>
                      <p onClick={goToSectionThree}>3. Create Your Account</p>
                    </div>
                    {fields.map((n, i) => {
                      return (
                        <div className={`${style.boxItem3}`} key={n}>
                          <p>{n}</p>
                        </div>
                      );
                    })}

                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionFour}>4. Registration Complete</p>
                    </div>
                  </div>
                </Grid>
                
                <Grid md={9} lg={9} sm={12} xs={12}>
                  <div className={viewMode?style.gsDataContainer:style.gsDataContainerLight}>
                    <div className={viewMode?style.gsData:style.gsDataLight}>
                      <h2>Create Account </h2>
                      <p ref={sectionOne}>
                        1. Download and Install our Game Application
                      </p>
                     
                      <button className={style.mobileBtn}>Play Now</button>
                     
                    </div>
                    <div className={style.gsData}>
                      <p ref={sectionTwo}>
                        2. Launch Installed Game Application and Click Sign Up
                      </p>
                      {/* <img src="/assets/images/1-login 1.png" /> */}
                      <Image src="/assets/images/1-login 1.png" width={600} height={500}/>
                    </div>
                    <div className={style.gsData}>
                      <p ref={sectionThree}>
                        3. Create your account entering your email address
                      </p>
                      {/* <img src="/assets/images/1-login 2.png" /> */}
                      <Image src="/assets/images/1-login 2.png" width={600} height={500}/>

                      <p>
                        3.1. Create & Confirm your password. You can also use
                        referral code if you have any.
                      </p>
                      {/* <img src="/assets/images/1-login 3.png" /> */}
                      <Image src="/assets/images/1-login 3.png" width={600} height={500}/>

                      <p>3.2. Enter Your Personal Information</p>
                      {/* <img src="/assets/images/1-login 4.png" /> */}
                      <Image src="/assets/images/1-login 4.png" width={600} height={500}/>

                      <p>3.3. Enter Your Display Name</p>
                      {/* <img src="/assets/images/1-login 5.png" /> */}
                      <Image src="/assets/images/1-login 5.png" width={600} height={500}/>

                      <p>
                        3.4. Verify your account enterning verification code
                        received via email
                      </p>
                      {/* <img src="/assets/images/1-login 6.png" /> */}
                      <Image src="/assets/images/1-login 6.png" width={600} height={500}/>

                      <p>
                        3.5. Your Initial Sign Up Completed, Click OK to procced
                        further steps.
                      </p>
                      {/* <img src="/assets/images/1-login 7.png" /> */}
                      <Image src="/assets/images/1-login 7.png" width={600} height={500}/>

                      <p>
                        3.6. Connect to your wallet by clicking “I already have
                        a wallet”
                      </p>
                      {/* <img src="/assets/images/1-login 8.png" /> */}
                      <Image src="/assets/images/1-login 8.png" width={600} height={500}/>

                      <p>
                        3.7. Paste your Ethereum address if you already have a
                        wallet and Click Next
                      </p>
                      {/* <img src="/assets/images/1-login 9.png" /> */}
                      <Image src="/assets/images/1-login 9.png" width={600} height={500}/>

                      <p>
                        3.8. click on “No, let’s Create One” from step 3.6. If
                        you don’t have any wallet
                      </p>
                      {/* <img src="/assets/images/1-login 10.png" /> */}
                      <Image src="/assets/images/1-login 10.png" width={600} height={500}/>

                      <p>3.9. Secure your wallet with any mentioned options</p>
                      {/* <img src="/assets/images/1-login 11.png" /> */}
                      <Image src="/assets/images/1-login 11.png" width={600} height={500}/>

                      <p ref={sectionFour}>
                        4. Your registration is complete now, make sure to
                        back-up your recovery phrase
                      </p>
                      {/* <img src="/assets/images/1-login 12.png" /> */}
                      <Image src="/assets/images/1-login 12.png" width={600} height={500}/>

                    </div>
                  </div>
                </Grid>
              </>
            )}

            {deposit && (
              <>
                <Grid
                  sx={{
                    color: "white",
                  }}
                  md={3}
                  lg={3}
                  sm={12}
                  xs={12}
                >
                  <div style={{
                     position:sticky?"sticky":"relative",
                     top:sticky?"150px":null,
                     marginLeft:'5rem'

                  }} className={viewMode ? style.cashBox : style.cashBoxLight}>
                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionOneDep}>1. Click on the Cashier</p>
                    </div>
                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionTwoDep}>2. Click on Deposit</p>
                    </div>
                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionThreeDep}>
                        3. Get Our Contract Address
                      </p>
                    </div>

                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionFourDep}>4. Refresh The Balance</p>
                    </div>
                  </div>
                </Grid>
                <Grid md={9} lg={9} sm={12} xs={12}>
                  <div className={viewMode?style.gsDataContainer:style.gsDataContainerLight}>
                    <div className={viewMode?style.gsData:style.gsDataLight}>
                      <h2>Deposit</h2>
                      <p ref={sectionOneDep} >
                        1. Click on Cashier Button on the Top Right Corner of
                        Game Application
                      </p>
                    </div>
                    <div className={style.gsData}>
                      {/* <img src="/assets/images/click-cashier 1.png" /> */}
                      <Image src="/assets/images/click-cashier 1.png" width={600} height={500}/>

                    </div>
                    <div className={style.gsData}>
                      <p ref={sectionTwoDep}>
                        2. Click on Deposit ETH or Deposit VPP Button From left
                        side of the opened screen
                      </p>
                      {/* <img src="/assets/images/click-deposit 1.png" /> */}
                      <Image src="/assets/images/click-deposit 1.png" width={600} height={500}/>

                      <p ref={sectionThreeDep}>
                        3. Click the Copy button to copy the Virtue Poker
                        contract address
                      </p>
                      {/* <img src="/assets/images/click-deposit 2.png" /> */}
                      <Image src="/assets/images/click-deposit 2.png" width={600} height={500}/>

                      <p ref={sectionFourDep}>
                        4. Click the Refresh button to view your new balance
                        Note that the transaction will take a few minutes to
                        complete
                      </p>
                      {/* <img src="/assets/images/refresh-balance 1.png" /> */}
                      <Image src="/assets/images/refresh-balance 1.png" width={600} height={500}/>

                    </div>
                  </div>
                </Grid>
              </>
            )}

            {withdraw && (
              <>
                <Grid
                  sx={{
                    color: "white",
                  }}
                  md={3}
                  lg={3}
                  sm={12}
                  xs={12}
                >
                  <div style={{
                     position:sticky?"sticky":"relative",
                     top:sticky?"150px":null,
                     marginLeft:'5rem'

                  }} className={viewMode ? style.cashBox : style.cashBoxLight}>
                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionOneWith}>1. Click on the Cashier</p>
                    </div>
                    <div className={`${style.boxItem2}`}>
                      <p onClick={goToSectionTwoWith}>2. Click on Withdraw</p>
                    </div>
                  </div>
                </Grid>

                <Grid md={9} lg={9} sm={12} xs={12}>
                  <div className={viewMode?style.gsDataContainer:style.gsDataContainerLight}>
                    <div className={viewMode?style.gsData:style.gsDataLight}>
                      <h2>Withdraw</h2>
                      <p ref={sectionOneWith}>1. Click on Cashier Button</p>
                      <span>
                        Withdrawing funds from your account is quite easy, once
                        youve passed KYC (Know Your Customer). All players are
                        required to pass our KYC process prior to withdrawing
                        any funds from your player account. This feature is a
                        security measure to help keep our site safe for all
                        players and is a requirement of the MGA.
                      </span>

                      <span>
                        If you havent begun the KYC process to date, simply
                        click on the cashier button, then the withdraw tab and
                        click Start ID verification
                      </span>
                      <h5>
                        Note: Politically Exposed Person means one who has been
                        entrusted with a prominent public function. A PEP
                        generally presents a higher risk for potential
                        involvement in bribery and corruption by virtue of their
                        position and the influence that they may hold.
                        Politically Exposed Persons are not permitted to play on
                        Virtue Poker. Please ONLY click the checkmark if you
                        fall into this category of person.
                      </h5>
                    </div>
                    <div className={style.gsData}>
                      {/* <img src="/assets/images/withdrawal1 1.png" /> */}
                      <Image src="/assets/images/withdrawal1 1.png" width={600} height={500}/>

                    </div>
                    <div className={style.gsData}>
                      <p ref={sectionTwoWith}>2. Click on Withdraw</p>
                      <span>
                        Once youve passed KYC you will be permitted to withdraw
                        funds from your account. Simply click the Withdraw tab,
                        enter the amount you wish to withdraw, then click the
                        Withdraw ETH button.
                      </span>
                      {/* <img src="/assets/images/withdrawal2 1.png" /> */}
                      <Image src="/assets/images/withdrawal2 1.png" width={600} height={500}/>

                      <span>
                        Once youve passed KYC you will be permitted to withdraw
                        funds from your account. Simply click the Withdraw tab,
                        enter the amount you wish to withdraw, then click the
                        Withdraw ETH button.
                      </span>
                    </div>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </div>
      </Container>
      <ScrollToTop/>
      <Footer viewMode={viewMode} />
    </div>
  );
};

export default StaticGettingStarted;
