import React from 'react'

const PlayNow = () => {
  return (
    <div>
        <h1>Dashboard</h1>
          <div className={style.headerTable}>
            <div className={style.headerTableRow}>
              <div className={style.headerTableCell}>
                <h3>Welcome to the</h3>
                <h2>Global home of web3 Poker</h2>
              </div>
              <img src="/assets/images/Untitled-1.png" />
              {/* <div className={style.headerTableCell2}>
                <DownloadPlayButton
                  title="Play Now"
                  icon={faPlay}
                  color="linear-gradient(91.6deg, #32E4BF 0%, #21A1DE 81.22%)"
                />
              </div> */}
            </div>
          </div>
    </div>
  )
}

export default PlayNow