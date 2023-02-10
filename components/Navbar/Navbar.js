import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import style from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import ToggleBtn from "../../lightTheme/toggle/toggleBtn";
import { ThemeContext } from "../../contexts/theme-context";
import { useWindowScroll } from "react-use";
import Image from "next/image";
import styles from "../Sidebar/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const page = [
  {
    key: "Getting Started",
    value: "static-gettingStarted",
  },
  {
    key: "Token Economy",
    value: "static-tokenEconomy",
  },
  {
    key: "Promotions",
    value: "static-promotion",
  },
  {
    key: "Latest",
    value: "blogs",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, loading } = useSelector((state) => state.counter);
  const [isLogin, setIsLogin] = React.useState(false);
  const [userName, setUserName] = useState("");
  const [collectionToggle, setCollectionToggle] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);
  // for responsive
  React.useEffect(() => {
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

  // for loading
  const [loadingg, setLoadingg] = useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoadingg(true), 700);
  }, []);

  // FOR LIGHT THEME
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [viewMode, setViewMode] = useState(theme);
  React.useEffect(() => {
    const getLocalTheme = localStorage.getItem("theme");
    setViewMode(getLocalTheme === "dark" ? true : false);
  }, [viewMode, theme]);

  //
  console.log(user);

  React.useEffect(() => {
    // const token = localStorage.getItem("identifier")
    const token = document.cookie.includes("identifier");
    if (token) {
      setIsLogin(true);
      setUserName(user?.user?.displayName);
    } else {
      setIsLogin(false);
    }
  }, []);

  //  scroll sticky
  const { y: pageYOffset } = useWindowScroll();
  const [stickyColor, setStickyColor] = useState(false);
  React.useEffect(() => {
    if (pageYOffset > 50) {
      setStickyColor(true);
    } else {
      setStickyColor(false);
    }
  }, [pageYOffset]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    const token = document.cookie;
    const verify = document.cookie;
    document.cookie = `identifier=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `verify=${verify}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    localStorage.removeItem("identifier");
    router.reload();
  };

  return (
    <>
        {collectionToggle ? (
        <AppBar
          className={style.appbar}
          sx={{
            backgroundColor: stickyColor
              ? "rgba( 34, 0, 66, 0.3 )"
              : "transparent",
            boxShadow: "none",
            // top: "18px",
            paddingTop: "15px",
            zIndex: "99",
            paddingBottom: "15px",

            boxShadow: stickyColor && " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: stickyColor ? "blur( 15px )" : "blur( 7px )",
            borderRadius: stickyColor && "5px",
            // border: stickyColor && " 1px solid rgba( 255, 255, 255, 0.18 )"
          }}
        >
          <Container>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                className={style.Logo}
              >
                <Link href="/">
                  <img
                    src={viewMode ? "/Logo.png" : "/LogoLight.png"}
                    alt="logo"
                  />
                </Link>
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", sm: "flex", md: "none" },
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    color: viewMode ? "white" : "black",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <ToggleBtn />
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  {page.map((page) => (
                    <Link key={page.key} href={`/page/${page.value}`}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography
                          sx={{
                            color: "#404040 !important",
                          }}
                          textAlign="center"
                        >
                          {page.key}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  {!isLogin ? (
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        width: "90%",
                        margin: "0 auto",
                        color: "white",
                        display: "block",
                        textTransform: "capitalize",
                        background:
                          "linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%) !important",
                      }}
                    >
                      <Link href="/signup">Signup/Login</Link>
                    </Button>
                  ) : null}
                </Menu>
              </Box>

              {/* menu */}
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                
                  justifyContent: "flex-end",
                }}
              >
                {page.map((page) => (
                  <Link key={page.key} href={`/page/${page.value}`}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        mr: 2,
                        color: "white",
                        display: "block",
                        textTransform: "capitalize",
                        fontWeight: "500",
                        transition: "0.3s",
                        color: viewMode
                          ? "#FFFFFF !important"
                          : "#404040 !important",
                        "&:hover": {
                          backgroundColor: "#eeeeee31",

                          transform: "scale(1.1)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      {page.key}
                    </Button>
                  </Link>
                ))}

                {!isLogin ? (
                  <>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        textTransform: "capitalize",
                        transition: "0.4s !important",
                        background:
                          "linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%) !important",
                        "&:hover": {
                          transform: "scale(1.1) !important",
                          boxShadow: "3px 3px 5px black !important",
                        },
                      }}
                    >
                      <Link href="/signup">Signup/Login</Link>
                    </Button>
                    <ToggleBtn />
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.nameContainer}>
                      <h2
                        style={{
                          color: viewMode ? "white" : "black",
                        }}
                      >
                        Welcome{" "}
                        <span className={style.name}>
                          {userName || user?.user?.displayName}
                        </span>
                      </h2>
                    </div>

                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, mt: "0", marginLeft: "1rem" }}
                    >
                      <Avatar alt="Remy Sharp">
                        <img
                          src={
                            user?.user?.avatar
                              ? user?.user?.avatar
                              : "/images/default.png"
                          }
                          width={50}
                          height={50}
                        />
                      </Avatar>
                    </IconButton>

                    <ToggleBtn />
                    <Menu
                      sx={{ mt: "60px", zIndex: "999999999999999999999" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <Link href="/dashboard">
                        <MenuItem>
                          <Typography textAlign="center">Dashboard</Typography>
                        </MenuItem>
                      </Link>

                      <MenuItem onClick={logoutHandler}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
 
      ) : (
        <>
          <AppBar
            className={style.appbar}
            sx={{
              backgroundColor: stickyColor
                ? "rgba( 34, 0, 66, 0.3 )"
                : "transparent",

              // top: "18px",
              paddingTop: "15px",
              zIndex: "99",
              paddingBottom: "15px",
              // boxShadow:stickyColor&& " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: stickyColor ? "blur( 15px )" : "blur( 7px )",
              borderRadius: stickyColor && "5px",
            }}
          >
            <Container>
              <Toolbar
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    display: { xs: "flex", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  className={style.Logo}
                >
                  <Link href="/">
                    <img
                      src={viewMode ? "/Logo.png" : "/LogoLight.png"}
                      alt="logo"
                    />
                  </Link>
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", sm: "flex", md: "none" },
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{
                      color: viewMode ? "white" : "black",
                    }}
                  >
                    {/* <MenuIcon /> */}
                  </IconButton>
                  <ToggleBtn />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {/* mobile navbar */}
          <nav className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              <li className={styles.sidebarLi}>
                <div>
                  <Link className={styles.sidebarLink} href="/">
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/" ? (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/home (1) - green.svg"
                          />
                        ) : (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/home.svg"
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div>
                  <Link
                    className={styles.sidebarLink}
                    href="/page/static-promotion"
                  >
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/page/static-promotion" ? (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/home (2) - green.svg"
                          />
                        ) : (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/bullhorn.svg"
                          />
                        )}
                      </div>
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
                </div>
              </li>

              <li className={styles.sidebarLi}>
                <div>
                  <Link href="/dashboard/profile">
                    <div className={styles.sidebarLink}>
                      <div className={styles.item_img}>
                        {router.pathname === "/dashboard/profile" ? (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/home (3) - green.svg"
                          />
                        ) : (
                          <img
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                            src="/assets/svg/user-alt.svg"
                          />
                        )}
                      </div>
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
                          }}
                          src="/assets/svg/bars.svg"
                          alt="Promote"
                        />
                      </div>
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
              className={style.menuDrawer}
            >
              {page.map((page) => (
                <Link key={page.key} href={`/page/${page.value}`}>
                  <div className={style.menuItem}>{page.key}</div>
                </Link>
              ))}
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
