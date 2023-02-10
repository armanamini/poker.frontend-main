import React from "react";
import styles from "./Sidebar.module.css";
import Play from "../../public/assets/svg/Play.jsx";
import Nft from "../../public/assets/svg/Nft.jsx";
import Promote from "../../public/assets/svg/Promote.jsx";
import Finance from "../../public/assets/svg/Finance.jsx";
import Logo from "../../public/assets/svg/logo.jsx";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Setting from "../../public/assets/svg/Setting";
import { Avatar, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const page = [
  {
    key: "NFTs",
    value: "/dashboard/Nfts",
  },
  {
    key: "Promotions",
    value: "/dashboard/promotion",
  },
  {
    key: "Settings",
    value: "/dashboard/settings",
  },
];

const Sidebar = ({ isIframe, checkIframe, viewMode }) => {
  const [menuDrawer, setMenuDrawer] = useState(false);
  const router = useRouter();
  const [collectionToggle, setCollectionToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const { user, loading } = useSelector((state) => state.counter);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setCollectionToggle(false);
      } else if (window.innerWidth >= 500) {
        setCollectionToggle(true);
      }
    });
    if (window.innerWidth <= 500) {
      setCollectionToggle(false);
    } else if (window.innerWidth >= 500) {
      setCollectionToggle(true);
    }
  }, []);

  return (
    <>
      {collectionToggle ? (
        <nav className={viewMode ? styles.sidebar : styles.sidebarLight}>
          <ul className={styles.sidebarUl}>
            <li className={styles.sidebarLi}>
              <Link href="/">
                <div className={styles.sidebarLink}>
                  <div className={styles.item_img}>
                    <Logo />
                  </div>
                </div>
              </Link>
            </li>
            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                {!isIframe ? (
                  <Link className={styles.sidebarLink} href="/dashboard">
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        <Play />
                      </div>
                      <h5>Play Now</h5>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={styles.sidebarLink}
                    onClick={() => {
                      checkIframe(true);
                    }}
                  >
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        <Play />
                      </div>
                      <h5>Play Now</h5>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/Cashier"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link className={styles.sidebarLink} href="/dashboard/Cashier">
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <img src="/images/cashier.svg" />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Cashier
                    </h5>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/Nfts"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link className={styles.sidebarLink} href="/dashboard/Nfts">
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <Nft />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      NFTs
                    </h5>
                  </div>
                </Link>
              </div>
            </li>
            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/Avatars"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link className={styles.sidebarLink} href="/dashboard/Avatars">
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "34px",
                          height: "34px",
                        }}
                        src="/assets/images/Avatar.png"
                        alt="Promote"
                      />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Avatars
                    </h5>
                  </div>
                </Link>
              </div>
            </li>

            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/promotion"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link
                  className={styles.sidebarLink}
                  href="/dashboard/promotion"
                >
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <Promote />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Promotions
                    </h5>
                  </div>
                </Link>
              </div>
            </li>

            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/finance"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link href="/dashboard/finance">
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <Finance />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Finance
                    </h5>
                  </div>
                </Link>
              </div>
            </li>

            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/settings"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link href="/dashboard/settings" prefetch={false}>
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <Setting />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Settings
                    </h5>
                  </div>
                </Link>
              </div>
            </li>

            <li className={styles.sidebarLi}>
              <div
                className={
                  router.pathname === "/dashboard/profile"
                    ? `${styles.isActive}`
                    : `${styles.isHover}`
                }
              >
                <Link href="/dashboard/profile" prefetch={false}>
                  <div className={styles.sidebarLink}>
                    <div className={styles.item_img}>
                      <Avatar
                        sx={{
                          width: "40px",
                          height: "40px",
                        }}
                        alt="Remy Sharp"
                        src={user?.user?.avatar}
                      />
                    </div>
                    <h5 style={{ color: viewMode ? "white" : "black" }}>
                      Profile
                    </h5>
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              <li className={styles.sidebarLi}>
                <div>
                  <Link
                    className={styles.sidebarLink}
                    href="/dashboard/Cashier"
                  >
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/dashboard/Cashier" && (
                          <div
                            style={{
                              width: "40px",
                              height: "3px",
                              borderRadius: "5px",
                              backgroundColor: "#32E4BF",
                              position: "absolute",
                              top: "-7px",
                            }}
                          ></div>
                        )}
                        <img
                          style={{
                            width: "30px",
                            height: "30px",
                            marginBottom: "-7px",
                          }}
                          src="/images/cashierr.svg"
                        />
                      </div>
                      <h5>Cashier</h5>
                    </div>
                  </Link>
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div>
                  <Link
                    className={styles.sidebarLink}
                    href="/dashboard/Avatars"
                  >
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/dashboard/Avatars" && (
                          <div
                            style={{
                              width: "40px",
                              height: "3px",
                              borderRadius: "5px",
                              backgroundColor: "#32E4BF",
                              position: "absolute",
                              top: "-7px",
                            }}
                          ></div>
                        )}
                        <img
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            marginBottom: "-7px",
                          }}
                          src="/images/avtt.svg"
                        />
                      </div>
                      <h5>Avatar</h5>
                    </div>
                  </Link>
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div
                  style={{
                    borderRadius: "50%",
                    background:
                      "linear-gradient(91.6deg, #32e4bf 0%, #21a1de 81.22%)",
                    boxShadow: "0px 5px 20px rgb(0 0 0 / 30%)",
                    transition: "0.2s",
                    width: "55px",
                    height: "55px",
                  }}
                >
                  {!isIframe ? (
                    <Link className={styles.sidebarLink} href="/dashboard">
                      <div
                        className={styles.sidebarLink}
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        <div className={styles.item_img}>
                          <FontAwesomeIcon icon={faPlay} size="2x" />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={styles.sidebarLink}
                      onClick={() => {
                        checkIframe(true);
                      }}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <div className={styles.item_img}>
                        <FontAwesomeIcon icon={faPlay} size="2x" />
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div>
                  <Link href="/dashboard/finance">
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/dashboard/finance" && (
                          <div
                            style={{
                              width: "40px",
                              height: "3px",
                              borderRadius: "5px",
                              backgroundColor: "#32E4BF",
                              position: "absolute",
                              top: "-7px",
                            }}
                          ></div>
                        )}
                        <img
                          style={{
                            marginBottom: "-7px",
                            width: "30px",
                            height: "30px",
                          }}
                          src="/images/fi.svg"
                        />
                      </div>
                      <h5>Finance</h5>
                    </div>
                  </Link>
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div>
                  <a
                    onClick={() => {
                      setMenuDrawer(!menuDrawer);
                    }}
                  >
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        <img
                          style={{
                            width: "30px",
                            height: "30px",
                            marginBottom: "-7px",
                          }}
                          src="/assets/svg/bars.svg"
                          alt="Promote"
                        />
                      </div>
                      <h5>Menu</h5>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          {menuDrawer && (
            <motion.div
              initial={{ scale: 1, x: -100 }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              className={styles.menuDrawer}
            >
              {page.map((page) => (
                <Link key={page.key} href={`/${page.value}`}>
                  <div className={styles.menuItem}>{page.key}</div>
                </Link>
              ))}
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
