import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import "regenerator-runtime/runtime";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '../contexts/theme-context';
import Navbar from "../components/Navbar/Navbar";
config.autoAddCss = false; /* eslint-disable import/first */

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
  walletconnect: {},
  coinbase: {},
  fortmatic: {},
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");


 useEffect(()=>{
  if(localStorage.getItem("theme") === "dark"){
    setTheme("light")

  } 
 },[])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <Provider store={store}>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
      </ThirdwebWeb3Provider>
    </Provider>
  </ThemeContext.Provider>
  );
}

export default MyApp;
