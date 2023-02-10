import React from 'react'
import style from "./HomePageAssets.module.css"
import Grid from "@mui/material/Grid";
import { Container } from '@mui/system';
const WhyPlayatVirtuePoker = ({viewMode}) => {
  return (
    <div className={viewMode?style.whyPlayatVirtuePoker:style.whyPlayatVirtuePokerLight}>
        <Container>
        <div className={style.whyPlayatVirtuePokerTitle}>
        <h2 className={style.whyPlayMob} style={{color:viewMode?"#FFFFFF":"#0E72CC"}}>Why Play at Virtue Poker?</h2>
        </div>
        <Grid container spacing={3} sx={{
            padding: "5rem",
        }}
        className={style.whyPlayatVirtuePokerContainer}
        >
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4.png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Play Against Players Globally</h2>
                <p>Virtue Poker players can compete against players from all over the world, including our play-to-earn only players.</p>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4(1).png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Players are always in Control of Their Funds</h2>
                <p>Using a combination of Ethereum based smart contracts and a Virtue Poker deployed sidechain, players are always in control of their funds.</p>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4(2).png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Game Integrity via P2P Shuffling</h2>
                <p>The worlds first and only GLI certified peer-to-peer shuffling protocol which includes all players seated at a table in the shuffling process. Only the players themselves can see their private cards.</p>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4(4).png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Multi-Chain Compatible</h2>
                <p>Virtue Poker is currently operating on Ethereum but will be launching across Binance Smart Chain and Polygon in the near future.</p>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4(5).png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Licensed</h2>
                <p>Virtue Poker is the first and only licensed blockchain-based poker platform by Malta Gaming Authority.</p>
            </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <div className={style.whyPlayatVirtuePokerCard}>
            <div className={style.whyPlayatVirtuePokerCardImage}>
                <img src="/assets/images/Group4(6).png" alt=""/>
            </div>
            <div className={style.whyPlayatVirtuePokerCardTitle}>
                <h2>Exclusive Professional Partnerships</h2>
                <p>Virtue Poker Team Pros includes 3 of the top all-time live-earning Pros: Phil Ivey, Dan Colman, and Brian Rast.</p>
            </div>
        </div>
        </Grid> 
        </Grid>
        </Container>
    </div>
  )
}

export default WhyPlayatVirtuePoker