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
import { Grid } from "@mui/material";
const pages = ["Getting Started", "Token Economy", "Promotions", "Latest"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import ToggleBtn from "../../lightTheme/toggle/toggleBtn";

const Navbar = ({ userData, viewMode }) => {
  const fetcher = (url) =>
    axios
      .get("https://vp.megaverse.today/api/v1/user/me", {
        withCredentials: true,
        headers: {
          Authorization: `identifier ${localStorage.getItem("identifier")}`,
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR("/api/data", fetcher, {
    refreshInterval: 15000,
  });
  // console.log(data);
  //end swr

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, loading } = useSelector((state) => state.counter);
  const [userDataa, setUserDataa] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    setUserDataa(userData);
    console.log(user);
  }, []);

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
    document.cookie = `identifier=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    localStorage.removeItem("identifier");
    router.reload();
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: viewMode ? "#20212c" : "#ffffff",
        boxShadow: "none",
        top: "0",
        left: "0",
        justifyContent: "flex-end",
        borderBottom: viewMode ? "1px solid #4A4C66" : "1px solid #E4E4E4",
      }}
      className={style.navbarresp}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Box
            sx={{
              height: "100%",
              flexGrow: 0,
              display: { xs: "flex", md: "flex" },
              width: "80%",
              justifyContent: "flex-end",
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                display: { md: "flex", xs: "none" },
              }}
            >
              <Grid item xs={6} sm={5} md={3} lg={2}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/nav_coin (1).png" alt="eth" />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: viewMode ? "white" : "black",
                    }}
                  >
                    {data?.transactions?.ethBalance} ETH
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/nav_coin (3).png" alt="eth" />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: viewMode ? "white" : "black",
                    }}
                  >
                    {data?.transactions?.vppBalance} VPP
                  </p>
                </div>
              </Grid>
              <Grid item xs={6} sm={5} md={3} lg={2}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/nav_coin (2).png" alt="eth" />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: viewMode ? "white" : "black",
                    }}
                  >
                    {data?.transactions?.chipsBalance} Chips
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/images/nav_coin (4).png" alt="eth" />
                  <p
                    style={{
                      marginLeft: "10px",
                      color: viewMode ? "white" : "black",
                    }}
                  >
                    {data?.transactions?.goldBalance} $GOLD
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>

          <div
            style={{
              width: "1px",
              height: "64px",
              borderLeft: "1px solid #4A4C66",
              marginRight: "2rem",
            }}
            className={style.lineMobile}
          ></div>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <ToggleBtn />
            </div>
            <Link href="/">
              <div className={style.logoMobile}>
                <img src={viewMode ? "/Logo.png" : "/LogoLight.png"} />
              </div>
            </Link>

            <div className={style.nemidonam}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    width: "auto",
                    p: 0,
                  }}
                >
                  <Avatar alt="Remy Sharp" src={user?.user?.avatar} />
                </IconButton>
              </Tooltip>
            </div>

            <Menu
              sx={{ mt: "45px" }}
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
              <MenuItem onClick={logoutHandler}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>

            <div
              style={{
                textAlign: "center",
                marginRight: "20px",
              }}
              className={style.nameHidden}
            >
              <h3 style={{ color: viewMode ? "white" : "black" }}>Welcome</h3>

              <h3
                style={{
                  color: viewMode ? "#1CD6CE" : "#0E72CC",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                {user?.user?.displayName || userData || userDataa}
              </h3>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
